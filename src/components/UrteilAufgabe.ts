// The logic of UrteilAufgabe.vue: a judgement on the judgement scale (Urteilsskala). A case is given with reasons.
// The learner sorts every reason (it counts for, it counts against, it does not count) and picks a step of the scale,
// 1 "geht nicht" to 5 "ist okay". A judgement is not right or wrong by its step alone: the check tests that every
// reason is sorted as the app says, and that the step is one of the steps the reasons allow (`erlaubt`, set per case;
// where the law decides, only 1 or 2). Pure functions, which the build tests over fixed seeds (the exercise contract).
// The seed only shuffles the order of the reasons.

/** How a reason counts: for the action, against it, or not at all. */
export type Einordnung = "dafuer" | "dagegen" | "nicht";

export const EINORDNUNGEN: readonly Einordnung[] = ["dafuer", "dagegen", "nicht"];

/** The number of steps of the scale. */
export const STUFEN = 5;

/** A reason of the case: its text, how it counts, and why (said after "Prüfen" when it is sorted wrong). */
export interface Grund {
  text: string;
  zaehlt: Einordnung;
  warum: string;
}

/** The props the logic needs; all texts are the app's, by language. */
export interface Props {
  /** The case to judge. */
  fall: string;
  /** The words of the five steps, from 1 to 5. */
  stufen: string[];
  /** The reasons of the case. */
  gruende: Grund[];
  /** The steps the reasons allow, from 1 to 5. */
  erlaubt: number[];
  /** The message when the step is not allowed, with {stufe} (number) and {wort} (its word). */
  positionFalsch: string;
  /** The message when a reason is not sorted yet, and when no step is chosen. */
  fehltGrund: string;
  fehltStufe: string;
  /** The names of the three ways a reason counts, for the tutor's texts. */
  dafuer: string;
  dagegen: string;
  nicht: string;
}

/** The reasons in the order shown, and the allowed steps, so that check needs no props. */
export interface Task {
  gruende: Grund[];
  erlaubt: number[];
}

/** The step chosen (0 while none) and how each reason of the task is sorted, in the order shown ("" while not). */
export interface Answer {
  stufe: number;
  einordnung: string[];
}

/** A small deterministic random generator (mulberry32). */
function zufall(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A text in the quotation marks of the language. */
export function zitat(text: string, lang?: string): string {
  return lang === "en" ? `“${text}”` : `„${text}“`;
}

/** Fills {name} placeholders. */
export function fuelle(text: string, werte: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (ganz, name: string) => (name in werte ? String(werte[name]) : ganz));
}

/** The task of `seed`: the reasons shuffled; seed 1 keeps the order of the page. */
export function generate(seed: number, props: Props): Task {
  const gruende = [...props.gruende];
  if (seed !== 1) {
    const next = zufall(seed);
    for (let i = gruende.length - 1; i > 0; i--) {
      const j = Math.floor(next() * (i + 1));
      [gruende[i], gruende[j]] = [gruende[j] as Grund, gruende[i] as Grund];
    }
  }
  return { gruende, erlaubt: [...props.erlaubt].sort((a, b) => a - b) };
}

/** Whether every reason is sorted as it counts. */
const gruendeRichtig = (task: Task, answer: Answer) =>
  answer.einordnung.length === task.gruende.length && task.gruende.every((g, i) => answer.einordnung[i] === g.zaehlt);

/** Whether the step is one the reasons allow. */
const stufeRichtig = (task: Task, answer: Answer) => task.erlaubt.includes(answer.stufe);

/** Right when every reason is sorted as it counts and the step is one the reasons allow. */
export function check(task: Task, answer: Answer): boolean {
  return gruendeRichtig(task, answer) && stufeRichtig(task, answer);
}

/** A right answer: every reason as it counts, and the middle of the allowed steps. */
export function solution(task: Task): Answer {
  const stufe = task.erlaubt[Math.floor((task.erlaubt.length - 1) / 2)] ?? 1;
  return { stufe, einordnung: task.gruende.map((g) => g.zaehlt) };
}

/** The first step the reasons do not allow, or undefined when they allow all. */
const falscheStufe = (task: Task) => [5, 1, 4, 2, 3].find((s) => !task.erlaubt.includes(s));

/** A wrong answer: a step the reasons do not allow, or else a reason that does not count taken as one for. */
export function wrong(task: Task): Answer {
  const s = falscheStufe(task);
  if (s !== undefined) return { ...solution(task), stufe: s };
  return { ...solution(task), einordnung: task.gruende.map((g) => (g.zaehlt === "nicht" ? "dafuer" : "nicht")) };
}

/** The answers of the typical mistakes of about.mistakes, in order. */
export function mistakes(task: Task, _props?: Props): (Answer | undefined)[] {
  const richtig = solution(task);
  const nichtZaehlt = task.gruende.findIndex((g) => g.zaehlt === "nicht");
  const ersterMistake =
    nichtZaehlt < 0
      ? undefined
      : { ...richtig, einordnung: richtig.einordnung.map((e, i) => (i === nichtZaehlt ? "dafuer" : e)) };
  const zaehlt = task.gruende.findIndex((g) => g.zaehlt !== "nicht");
  const zweiterMistake =
    zaehlt < 0 ? undefined : { ...richtig, einordnung: richtig.einordnung.map((e, i) => (i === zaehlt ? "nicht" : e)) };
  const s = falscheStufe(task);
  return [ersterMistake, zweiterMistake, s === undefined ? undefined : { ...richtig, stufe: s }];
}

/**
 * The app's message for a wrong judgement: a reason not sorted yet, a missing step, then every reason sorted wrong
 * with why it counts the way it does, then a step the reasons do not allow.
 */
export function reason(task: Task, answer: Answer, props: Props, lang?: string): string | undefined {
  if (task.gruende.some((_, i) => !EINORDNUNGEN.includes(answer.einordnung[i] as Einordnung))) return props.fehltGrund;
  if (answer.stufe < 1 || answer.stufe > STUFEN) return props.fehltStufe;
  const meldungen = task.gruende
    .filter((g, i) => answer.einordnung[i] !== g.zaehlt)
    .map((g) => `${zitat(g.text, lang)}: ${g.warum}`);
  if (meldungen.length === 0 && !stufeRichtig(task, answer))
    meldungen.push(fuelle(props.positionFalsch, { stufe: answer.stufe, wort: props.stufen[answer.stufe - 1] ?? "" }));
  return meldungen.length === 0 ? undefined : meldungen.join(" ");
}

const name = (props: Props, e: string) =>
  e === "dafuer" ? props.dafuer : e === "dagegen" ? props.dagegen : e === "nicht" ? props.nicht : "–";

const stufenText = (props: Props, stufen: number[]) =>
  stufen.map((s) => `${s} (${props.stufen[s - 1] ?? ""})`).join(", ");

/** The case and its reasons as text. */
const gruendeText = (task: Task, lang?: string) =>
  task.gruende.map((g, i) => `${i + 1}. ${zitat(g.text, lang)}`).join(" ");

/** The task as a learner sees it, and a right judgement. */
export function describe(task: Task, props: Props, lang: string): { task: string; solution: string } {
  const einordnung = task.gruende.map((g, i) => `${i + 1}. ${name(props, g.zaehlt)}`).join(", ");
  const solution =
    lang === "en"
      ? `The reasons: ${einordnung}. Steps that fit these reasons: ${stufenText(props, task.erlaubt)}.`
      : `Die Gründe: ${einordnung}. Stufen, die zu diesen Gründen passen: ${stufenText(props, task.erlaubt)}.`;
  return { task: template(props, lang).replace("{gruende}", gruendeText(task, lang)), solution };
}

/** The task once, with {gruende} for the reasons in the order shown. */
export function template(props: Props, lang: string): string {
  const skala = props.stufen.map((w, i) => `${i + 1} ${w}`).join(", ");
  return lang === "en"
    ? `${props.fall} Sort each reason (${props.dafuer}, ${props.dagegen}, ${props.nicht}) and choose a step of the scale (${skala}). Reasons: {gruende}`
    : `${props.fall} Ordne jeden Grund ein (${props.dafuer}, ${props.dagegen}, ${props.nicht}) und wähle eine Stufe der Skala (${skala}). Gründe: {gruende}`;
}

/** What sets a task: the reasons in the order shown. */
export function params(task: Task, _props: Props, lang: string): Record<string, string> {
  return { gruende: gruendeText(task, lang) };
}

/** An answer as text: the step and how each reason is sorted. */
export function show(answer: Answer, _task?: Task, props?: Props, lang?: string): string {
  const e = answer.einordnung.map((x, i) => `${i + 1} ${props ? name(props, x) : x}`).join(", ");
  return (lang === "en" ? `step ${answer.stufe}; ` : `Stufe ${answer.stufe}; `) + e;
}

/** What the exercise is, for a tutor. */
export const about = {
  task: {
    de: "Ein Fall aus der digitalen Welt mit mehreren Gründen ist gegeben. Das Kind ordnet jeden Grund ein: „zählt dafür“, „zählt dagegen“ oder „zählt nicht“. Dann wählt es eine Stufe der Urteilsskala von 1 (geht nicht) bis 5 (ist okay) und drückt „Prüfen“.",
    en: "A case from the digital world with several reasons is given. The child sorts each reason: “counts for”, “counts against” or “does not count”. Then they choose a step of the judgement scale from 1 (not okay) to 5 (okay) and press “Check”.",
  },
  answer: {
    de: "Je Grund eine Einordnung und eine Stufe der Skala. Mehrere Stufen können richtig sein.",
    en: "One choice per reason and one step of the scale. Several steps can be right.",
  },
  correct: {
    de: "Richtig, wenn jeder Grund so eingeordnet ist, wie er zählt, und die Stufe zu den Gründen passt. Wo das Recht den Fall entscheidet, passen nur wenige Stufen.",
    en: "Right if every reason is sorted the way it counts and the step fits the reasons. Where the law decides the case, only a few steps fit.",
  },
  mistakes: [
    {
      de: "Ein Grund, der nicht zählt (etwa „Das machen alle“), wird als Grund dafür genommen.",
      en: "A reason that does not count (such as “everyone does it”) is taken as a reason for.",
    },
    {
      de: "Ein Grund, der zählt, wird als „zählt nicht“ eingeordnet.",
      en: "A reason that counts is sorted as “does not count”.",
    },
    {
      de: "Die Stufe passt nicht zu den Gründen.",
      en: "The step does not fit the reasons.",
    },
  ],
};
