<script setup lang="ts">
// The exercise "judge a case" (UrteilAufgabe.ts): the case, each reason with three choices (counts for, counts
// against, does not count), and the judgement scale with five steps to choose from. It emits the answer on every
// change; the explainer draws "Prüfen", checks and gives the feedback. Before "Prüfen" it shows nothing of how a
// reason counts or which steps fit.
import { computed, ref, watch } from "vue";
import { EINORDNUNGEN, type Einordnung, generate } from "./UrteilAufgabe.ts";
import { stufenListe } from "./Urteilsskala.ts";

const props = defineProps<{
  /** The case to judge. */
  fall: string;
  /** The words of the five steps, from 1 to 5. */
  stufen: string[];
  /** The reasons of the case: text, how it counts, why. */
  gruende: { text: string; zaehlt: "dafuer" | "dagegen" | "nicht"; warum: string }[];
  /** The steps the reasons allow. */
  erlaubt: number[];
  /** The headings above the reasons and above the scale. */
  gruendeTitel: string;
  skalaTitel: string;
  /** The names of the three choices of a reason. */
  dafuer: string;
  dagegen: string;
  nicht: string;
  /** The messages of UrteilAufgabe.ts, for "Prüfen". */
  positionFalsch: string;
  fehltGrund: string;
  fehltStufe: string;
  /** The task number, which the explainer gives. */
  seed: number;
  /** Whether the explainer checked the answer given now. */
  checked?: boolean;
}>();
const emit = defineEmits<{ answer: [{ stufe: number; einordnung: string[] } | undefined] }>();

const aufgabe = computed(() => generate(props.seed, props));
const liste = computed(() => stufenListe(props.stufen));
const einordnung = ref<string[]>([]);
const stufe = ref(0);

// a new task number gives new reasons in a new order: start afresh
watch(
  () => props.seed,
  () => {
    einordnung.value = [];
    stufe.value = 0;
  },
);

const wahlName = (e: Einordnung) => (e === "dafuer" ? props.dafuer : e === "dagegen" ? props.dagegen : props.nicht);

function senden(): void {
  const leer = stufe.value === 0 && einordnung.value.every((e) => !e);
  emit(
    "answer",
    leer ? undefined : { stufe: stufe.value, einordnung: aufgabe.value.gruende.map((_, i) => einordnung.value[i] ?? "") },
  );
}

function ordne(i: number, e: Einordnung): void {
  const neu = [...einordnung.value];
  neu[i] = e;
  einordnung.value = neu;
  senden();
}

function waehle(s: number): void {
  stufe.value = s;
  senden();
}

const gruppe = computed(() => `urteil-${props.seed}-${props.gruende.length}`);
</script>

<template>
  <div class="urteil-aufgabe" :class="{ 'urteil-checked': checked }">
    <p class="urteil-fall">{{ fall }}</p>
    <p class="urteil-titel">{{ gruendeTitel }}</p>
    <ol class="urteil-gruende">
      <li v-for="(g, i) in aufgabe.gruende" :key="g.text">
        <fieldset>
          <legend>„{{ g.text }}“</legend>
          <span class="urteil-wahl">
            <label v-for="e in EINORDNUNGEN" :key="e" :class="['urteil-knopf', `urteil-${e}`]">
              <input
                type="radio"
                :name="`${gruppe}-g${i}`"
                :value="e"
                :checked="einordnung[i] === e"
                @change="ordne(i, e)"
              />
              {{ wahlName(e) }}
            </label>
          </span>
        </fieldset>
      </li>
    </ol>
    <fieldset class="urteil-skala">
      <legend class="urteil-titel">{{ skalaTitel }}</legend>
      <span class="urteil-stufen">
        <label v-for="s in liste" :key="s.nummer" :style="{ '--stufe': s.farbe }">
          <input
            type="radio"
            :name="`${gruppe}-stufe`"
            :value="s.nummer"
            :checked="stufe === s.nummer"
            @change="waehle(s.nummer)"
          />
          <span class="urteil-nummer">{{ s.nummer }}</span>
          <span class="urteil-wort">{{ s.wort }}</span>
        </label>
      </span>
    </fieldset>
  </div>
</template>

<style scoped>
.urteil-fall,
.urteil-titel {
  font-weight: bold;
}

.urteil-gruende {
  display: grid;
  gap: 0.5rem;
  padding: 0;
  list-style: none;
}

fieldset {
  margin: 0;
  padding: 0.5rem 0.75rem 0.75rem;
  border: 2px solid var(--page-border);
  border-radius: 0.5rem;
}

legend {
  padding: 0 0.25rem;
}

.urteil-wahl {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* a choice: the whole label is the target, at least 44 px high; the chosen one is marked by its frame and the dot */
.urteil-knopf {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  min-height: 44px;
  padding: 0 0.75rem;
  border: 2px solid var(--page-border);
  border-radius: 0.5rem;
  background: var(--page-surface);
  color: var(--page-text);
  cursor: pointer;
}

.urteil-knopf:has(input:checked) {
  border: 3px solid var(--page-accent);
  font-weight: bold;
}

.urteil-knopf:focus-within,
.urteil-stufen label:focus-within {
  outline: 3px solid var(--page-accent);
  outline-offset: 2px;
}

.urteil-skala {
  margin-top: 0.75rem;
}

.urteil-stufen {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.urteil-stufen label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  min-height: 44px;
  padding-top: 0.25rem;
  background: linear-gradient(var(--stufe), var(--stufe)) center 1.5rem / 100% 0.6rem no-repeat;
  text-align: center;
  cursor: pointer;
}

/* the radio stays in the label for keyboard and screen reader; the number is what learners see */
.urteil-stufen input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
}

.urteil-nummer {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 4px solid var(--stufe);
  border-radius: 50%;
  background: var(--page-surface);
  color: var(--page-text);
  font-weight: bold;
}

.urteil-stufen label:has(input:checked) .urteil-nummer {
  outline: 3px solid var(--page-text);
  outline-offset: 2px;
}

.urteil-stufen label:has(input:checked) .urteil-wort {
  font-weight: bold;
  text-decoration: underline;
}

.urteil-wort {
  font-size: 0.85rem;
  line-height: 1.2;
  color: var(--page-text);
  hyphens: auto;
}
</style>
