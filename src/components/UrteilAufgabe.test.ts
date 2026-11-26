import { expect, test } from "vite-plus/test";
import { check, describe, generate, type Grund, mistakes, reason, solution, wrong } from "./UrteilAufgabe.ts";

const gruende: Grund[] = [
  { text: "Die Fotografin hat es nicht erlaubt.", zaehlt: "dagegen", warum: "Ohne Erlaubnis nicht ins Netz." },
  { text: "Mit Foto ist das Plakat schöner.", zaehlt: "dafuer", warum: "Das ist ein Wunsch, er zählt dafür." },
  { text: "Das machen doch alle.", zaehlt: "nicht", warum: "Was viele tun, ist nicht erlaubt." },
];
const props = {
  fall: "Selin stellt das Plakat ins Internet.",
  stufen: ["geht nicht", "eher nicht", "kommt darauf an", "eher okay", "ist okay"],
  gruende,
  erlaubt: [2, 1],
  positionFalsch: "Stufe {stufe} ({wort}) passt nicht zu den Gründen.",
  fehltGrund: "Ordne erst jeden Grund ein.",
  fehltStufe: "Wähle eine Stufe.",
  dafuer: "zählt dafür",
  dagegen: "zählt dagegen",
  nicht: "zählt nicht",
};

test("seed 1 keeps the order of the page, other seeds shuffle the same reasons", () => {
  expect(generate(1, props).gruende).toEqual(gruende);
  expect(generate(1, props).erlaubt).toEqual([1, 2]);
  for (let seed = 2; seed <= 50; seed++) {
    const t = generate(seed, props);
    expect([...t.gruende].sort((a, b) => a.text.localeCompare(b.text))).toEqual(
      [...gruende].sort((a, b) => a.text.localeCompare(b.text)),
    );
    expect(generate(seed, props)).toEqual(t);
  }
});

test("every allowed step is right, not only the solution's", () => {
  const t = generate(1, props);
  const einordnung = ["dagegen", "dafuer", "nicht"];
  expect(check(t, { stufe: 1, einordnung })).toBe(true);
  expect(check(t, { stufe: 2, einordnung })).toBe(true);
  expect(check(t, { stufe: 3, einordnung })).toBe(false);
  expect(check(t, solution(t))).toBe(true);
});

test("solution passes, wrong and each mistake fail, for 50 seeds", () => {
  for (let seed = 1; seed <= 50; seed++) {
    const t = generate(seed, props);
    expect(check(t, solution(t))).toBe(true);
    expect(check(t, wrong(t))).toBe(false);
    for (const m of mistakes(t)) if (m) expect(check(t, m)).toBe(false);
  }
});

test("a case where every step fits: wrong turns a reason around", () => {
  const t = generate(1, { ...props, erlaubt: [1, 2, 3, 4, 5] });
  expect(check(t, wrong(t))).toBe(false);
  expect(mistakes(t)[2]).toBeUndefined();
});

test("reason names each reason sorted wrong with its why, never only 'wrong'", () => {
  const t = generate(1, props);
  expect(reason(t, { stufe: 1, einordnung: ["dagegen", "dafuer", "dafuer"] }, props)).toBe(
    "„Das machen doch alle.“: Was viele tun, ist nicht erlaubt.",
  );
  expect(reason(t, { stufe: 1, einordnung: ["dagegen", "dafuer", "dafuer"] }, props, "en")).toBe(
    "“Das machen doch alle.”: Was viele tun, ist nicht erlaubt.",
  );
  expect(reason(t, { stufe: 1, einordnung: ["dafuer", "dafuer", "dafuer"] }, props)).toContain("Erlaubnis");
  expect(reason(t, { stufe: 5, einordnung: ["dagegen", "dafuer", "nicht"] }, props)).toBe(
    "Stufe 5 (ist okay) passt nicht zu den Gründen.",
  );
  expect(reason(t, { stufe: 1, einordnung: ["dagegen", "", "nicht"] }, props)).toBe("Ordne erst jeden Grund ein.");
  expect(reason(t, { stufe: 0, einordnung: ["dagegen", "dafuer", "nicht"] }, props)).toBe("Wähle eine Stufe.");
  expect(reason(t, solution(t), props)).toBeUndefined();
});

test("describe states the case and every reason, and a right judgement", () => {
  const d = describe(generate(1, props), props, "de");
  expect(d.task).toContain("Selin stellt das Plakat ins Internet.");
  expect(d.task).toContain("„Das machen doch alle.“");
  expect(d.solution).toContain("1 (geht nicht), 2 (eher nicht)");
  expect(describe(generate(1, props), props, "en").solution).toContain("Steps that fit");
});
