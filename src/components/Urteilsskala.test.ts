import { expect, test } from "vite-plus/test";
import { FARBEN, farbe, kontrast, stufenListe } from "./Urteilsskala.ts";

// The step colours are graphics beside number and word (WCAG 1.4.11): at least 3:1 against a light page
// and a dark page; the words never stand on them.
test("each step colour has 3:1 against a white and a dark page", () => {
  for (const f of FARBEN) {
    expect(kontrast(f, "#ffffff")).toBeGreaterThanOrEqual(3);
    expect(kontrast(f, "#1a1a1a")).toBeGreaterThanOrEqual(3);
  }
});

test("steps 1 to 5 with number, word and colour, the colour clamped", () => {
  const l = stufenListe(["a", "b", "c", "d", "e"]);
  expect(l.map((s) => s.nummer)).toEqual([1, 2, 3, 4, 5]);
  expect(l[0]?.farbe).toBe("#b5473a");
  expect(l[4]?.farbe).toBe("#2e7d6b");
  expect(farbe(0)).toBe(FARBEN[0]);
  expect(farbe(9)).toBe(FARBEN[4]);
});
