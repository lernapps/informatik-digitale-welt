// The look of the judgement scale (Urteilsskala), shared by Urteilsskala.vue (display) and UrteilAufgabe.vue
// (exercise), so that it looks the same in every chapter: five steps from brick red #b5473a over ochre #a67c2a to blue-green #2e7d6b, each
// with its number and its word. The colour is a second mark only; number and word carry the meaning. The words stand
// beside the bar on the page background, never on a colour.

/** The colours of the bar, from step 1 to step 5. */
export const FARBEN = ["#b5473a", "#bf7537", "#a67c2a", "#7c9052", "#2e7d6b"] as const;

/** The colour of a step from 1 to 5. */
export function farbe(stufe: number): string {
  return FARBEN[Math.min(Math.max(Math.round(stufe), 1), FARBEN.length) - 1] as string;
}

/** The relative luminance of a colour #rrggbb (WCAG 2.1). */
export function luminanz(hex: string): number {
  const kanal = (i: number) => {
    const c = parseInt(hex.slice(1 + 2 * i, 3 + 2 * i), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * kanal(0) + 0.7152 * kanal(1) + 0.0722 * kanal(2);
}

/** The contrast ratio of two colours #rrggbb (WCAG 2.1). */
export function kontrast(a: string, b: string): number {
  const [hell, dunkel] = [luminanz(a), luminanz(b)].sort((x, y) => y - x) as [number, number];
  return (hell + 0.05) / (dunkel + 0.05);
}

/** The steps 1 to n with their words, for the list a screen reader and the page without JavaScript read. */
export function stufenListe(stufen: readonly string[]): { nummer: number; wort: string; farbe: string }[] {
  return stufen.map((wort, i) => ({ nummer: i + 1, wort, farbe: farbe(i + 1) }));
}
