<script setup lang="ts">
// The judgement scale (Urteilsskala) as a figure: five steps with number and word, optionally a pointer on one step
// (a judgement made) and the reasons for and against in two columns. Every text comes as a prop. UrteilAufgabe.vue
// draws the same scale to choose on.
import { computed } from "vue";
import { stufenListe } from "./Urteilsskala.ts";

const props = defineProps<{
  /** The words of the five steps, from 1 to 5. */
  stufen: string[];
  /** A short name of the scale, read by a screen reader. */
  name: string;
  /** The step the pointer marks, 1 to 5; none without it. */
  zeiger?: number;
  /** The word above the pointer. */
  zeigerText?: string;
  /** The case judged, above the scale. */
  fall?: string;
  /** The reasons for and against, with their headings. */
  dafuerTitel?: string;
  dafuer?: string[];
  dagegenTitel?: string;
  dagegen?: string[];
}>();

const liste = computed(() => stufenListe(props.stufen));
</script>

<template>
  <figure class="urteilsskala">
    <p v-if="fall" class="urteilsskala-fall">{{ fall }}</p>
    <ol class="urteilsskala-stufen" :aria-label="name">
      <li
        v-for="s in liste"
        :key="s.nummer"
        :class="{ 'urteilsskala-gewaehlt': zeiger === s.nummer }"
        :style="{ '--stufe': s.farbe }"
      >
        <span v-if="zeiger === s.nummer" class="urteilsskala-zeiger">▼ {{ zeigerText }}</span>
        <span class="urteilsskala-nummer">{{ s.nummer }}</span>
        <span class="urteilsskala-wort">{{ s.wort }}</span>
      </li>
    </ol>
    <div v-if="dafuer?.length || dagegen?.length" class="urteilsskala-gruende">
      <div v-if="dafuer?.length">
        <p class="urteilsskala-titel">{{ dafuerTitel }}</p>
        <ul>
          <li v-for="g in dafuer" :key="g">{{ g }}</li>
        </ul>
      </div>
      <div v-if="dagegen?.length">
        <p class="urteilsskala-titel">{{ dagegenTitel }}</p>
        <ul>
          <li v-for="g in dagegen" :key="g">{{ g }}</li>
        </ul>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.urteilsskala {
  margin: 1rem 0;
}

.urteilsskala-fall,
.urteilsskala-titel {
  font-weight: bold;
}

/* the bar: one coloured strip per step, the number on the page's surface, the word below on the page background */
.urteilsskala-stufen {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  padding: 0;
  margin: 0;
  list-style: none;
}

.urteilsskala-stufen li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding-top: 1.75rem;
  position: relative;
  background: linear-gradient(var(--stufe), var(--stufe)) center 2.9rem / 100% 0.6rem no-repeat;
  text-align: center;
}

.urteilsskala-nummer {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 4px solid var(--stufe);
  border-radius: 50%;
  background: var(--page-surface);
  color: var(--page-text);
  font-weight: bold;
  position: relative;
}

.urteilsskala-wort {
  font-size: 0.85rem;
  line-height: 1.2;
  color: var(--page-text);
  hyphens: auto;
}

/* a judgement made: a pointer above and a thicker ring, not colour alone */
.urteilsskala-gewaehlt .urteilsskala-nummer {
  outline: 3px solid var(--page-text);
  outline-offset: 2px;
}

.urteilsskala-zeiger {
  position: absolute;
  top: 0;
  font-size: 0.8rem;
  font-weight: bold;
  white-space: nowrap;
}

.urteilsskala-gruende {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 2rem;
  margin-top: 0.75rem;
}

.urteilsskala-gruende > div {
  flex: 1 1 14rem;
}
</style>
