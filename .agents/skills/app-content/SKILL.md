---
name: app-content
description: Use for any content work in this app - researching, writing, extending, correcting or reviewing its competencies, chapters, pages, rounds, questions, exercises, figures, terms or sources. This app's own content decisions; they take precedence over the generic lernapps content skills. Load it before you change any content.
---

# Content guide of this app

Explainer „Leben in der digitalen Welt: Fälle und Urteile“ (lernapps/apps#505, Epic Informatik #509), Strang
`informatik/gesellschaft`, Format 2, Sprachen `[de, en]`. Welle 1 ist Kapitel `ich` (Klasse 5-6). Kapitel 2 und 3
(7-8) und Kapitel 4 (9-10) kommen später als Inkremente.

## Curriculum

- Lernlandkarte Informatik: https://lernapps.net/apps/map/informatik.json, Strang `gesellschaft`. Sie gibt die
  Reihenfolge vor.
- GI-Bildungsstandards Informatik Sek I (2025), doi:10.18420/rec2025_052, Abschnitt 5.5 „Informatik, Mensch und
  Gesellschaft“ (S. 20): IMG-1 und IMG-3 für 5-6; IMG-7 (Lizenzmodelle, Rechte der Urheber) erst für 7-10.
  Prozessbereich „Begründen und Bewerten“ (S. 11 f.): BB-2 Argumente auswählen, BB-3 prüfen, strukturieren und
  gewichten, BB-6 bewerten. Die Karte setzt `urheberrecht` auf 5-6; die App folgt der Karte.

## Competencies

Kapitel `ich` „Ich in der digitalen Welt“ (5-6), in dieser Reihenfolge:

1. `ich/das-brauchst-du`: Sammel-Wiederholung,
   `recap: [informatik/informatiksysteme-im-alltag, informatik/ki-im-alltag, informatik/maschinelles-lernen]`.
   Selbstcheck mit den drei „Ich kann …“-Sätzen, Bild `wiederholung.svg` (Jona, Smartphone, Trainingsbeutel),
   Merksatz. Übung: `nur-katzen`.
2. `ich/wem-gehoert-das-bild` (`urheberrecht`): Werk, Urheberin, Urheberrecht (Glossar: Werk, Urheberin oder
   Urheber, Urheberrecht). Übungen: `wem-gehoert-das-foto`, `wer-ist-urheber` (matching), `was-ist-ein-werk`
   (multiple-choice), `wie-viele-entscheidet-mia` (number), `ben-kopiert`.
3. `ich/bild-fuers-plakat` (`urheberrecht`, Musterseite): Erlaubnis, freie Lizenz, Quellenangabe, in der Klasse und
   im Internet; führt die Urteilsskala ein. Übungen: `welches-foto-nicht`, `was-du-tun-musst` (matching),
   `quellenangabe`, `wo-darf-foto-1-hin` (multiple-choice), `quelle-reicht-nicht` (true-false), `UrteilAufgabe`
   Fall 1 (`erlaubt: [1, 2]`).
   „Ich kann erklären, was das Urheberrecht schützt, und fremde Texte, Bilder und Musik nur mit Erlaubnis und
   Quellenangabe verwenden.“
4. `ich/berufsbesuch` (`informatik-in-alltag-und-beruf`): „Ich kann an Beispielen beschreiben, wie
   Informatiksysteme mein Leben und die Arbeitswelt verändern.“ Drei Gäste, Tabelle früher/heute, vier Arten der
   Veränderung. Übungen: `wo-bei-kaya`, `was-sich-veraendert` (matching), `bestellung-per-app` (ordering),
   `nur-informatiker` (true-false), `UrteilAufgabe` Fall 2 Bäckerei-App (`erlaubt: [1, 2, 3, 4]`; nur 5 passt nicht, weil Herr Lange ausgeschlossen wird).
5. `ich/ki-hausaufgaben` (`ki-chancen-und-risiken`): „Ich kann an Beispielen Chancen und Risiken künstlicher
   Intelligenz für mich und die Gesellschaft beschreiben.“ Tabelle Chancen/Risiken, Kasten „Zwei Fragen vor jeder
   Nutzung“. Übungen: `was-lernt-jona`, `was-jona-tun-soll` (matching), `ki-immer-richtig` (true-false),
   `UrteilAufgabe` Fall 3a (ganzen Text abgeben, `erlaubt: [1, 2]`) und Fall 3b (erklären lassen und prüfen,
   `erlaubt: [3, 4, 5]`). Abschnitt `rueckblick`: Tabelle der Fälle 1, 2, 3a, 3b mit dem, was am meisten wiegt (ohne Stufen, sonst verrät sie die Lösung vor „Prüfen“). Das Kapitel endet ohne Verweis auf ein noch nicht gebautes Kapitel.

Geplant, nicht gebaut: Kapitel 2 „Meine Daten gehören mir“ (7-8: personenbezogene-daten, eigene-daten-schuetzen,
datenschutz-und-datensicherheit, recht-am-eigenen-bild), Kapitel 3 „Kommunizieren und urteilen im Netz“ (7-8:
digitale-kommunikation, gefahren-im-netz, informationen-bewerten, umweltbilanz-digitaler-geraete), Kapitel 4
„Recht, Lizenzen und große Datenmengen“ (9-10: datenschutzrecht, daten-in-datenbanken, big-data, lizenzmodelle).

## Content structure

- Jedes Kapitel beginnt mit einem Fall und endet mit einem eigenen Urteil auf der Urteilsskala.
- Abschnitts-ids auf allen Seiten gleich:
  - `einstieg`: Szene der 6b und eine leichte erste Frage.
  - `idee`: die Erklärung, mit Tabelle und `definition`.
  - `urteil`: nur wo die Urteilsskala eingeführt oder im Rückblick gezeigt wird.
  - `uebung`: mindestens 4 Übungen vom Erkennen zum Anwenden, am Ende die `UrteilAufgabe`.
  - `rueckblick`: nur auf der letzten Seite des Kapitels.
- Die Titel sagen, was der Abschnitt tut. Jede Seite sagt am Anfang, was die Kinder danach können, und nennt die
  Seite davor. Am Ende kündigt sie die nächste an.
- Nach jeder `UrteilAufgabe` steht: „Erklär dein Urteil jemandem neben dir.“ (en: „Explain your judgement to someone
  next to you.“)
- Länge: höchstens 350 Wörter zum Lesen und höchstens 4 Textblöcke in Folge.
- Geschichte: die Klasse 6b mit drei Fällen.
  - Jona (11): kurze rotblonde Haare #c8642a, Haut #f3d2b3, grüner Kapuzenpulli #2e8b57.
  - Selin (11): lange dunkelbraune Haare mit Pferdeschwanz #3b2314, Haut #d9a27a, orange Jacke #e07b24.
  - Mia (11): schwarze Locken #222, runde Brille, Haut #8d5a3b, lila Jacke #7b4fb8.
  - Weitere Kinder der 6b: Tom, Ben, Ali, Lea. Klassenlehrerin Frau Berg. Parallelklasse 6c.  - Der Begriff „Fall“ wird auf `wem-gehoert-das-bild` eingeführt, dort auch Tom, Lea, Ben und Ali (alle 6b).
  - Fall 1 (Seiten 2 und 3): Selin sucht ein Foto für das Plakat „Klassenfahrt zum Seeberg“; Mia malt einen Zug.
    Die drei Fotos (alle Namen erfunden): 1 „Seeberg im Sommer“, © Lena Vogt, alle Rechte vorbehalten;
    2 „Steg am See“, Karim Haddad, CC BY 4.0; 3 „Seeufer am Morgen“, Pia Brandt, CC0.
  - Fall 2 (Seite 4): Frau Berg lädt drei erfundene Gäste ein: Herr Kaya (Bäcker, Kasse, Bestell-App), Frau
    Schulte (Landwirtin, Melkroboter), Frau Nguyen (Informatikerin, programmiert die Bestell-App). Herr Lange (78)
    hat kein Smartphone.
  - Fall 3 (Seite 5): Jona soll einen Text über Igel im Winter schreiben und nutzt eine Chat-KI.
  - Pronomen: Für Jona, Ali und andere Kinder ohne festgelegtes Pronomen steht der Name, nicht „er“ oder „sie“.

## Terminology

- Deutsch in einfacher Sprache mit „du“, kurze Sätze. Englisch in Plain English mit „you“.
- Recht, so für Kinder gesagt:
  - „Die Urheberin entscheidet, was mit ihrem Werk passieren darf.“
  - Quellenangabe ist eine Regel der App, nicht als gesetzliche Pflicht genannt (§ 63 ungeprüft): „Gib immer die Quelle an, so weiß jeder, von wem das Bild ist.“
  - „In der Klasse und zum Zeigen in deiner Schule“ (en „in class, and to show at your school“) darfst du für den Unterricht ein fremdes Bild nutzen
    (§ 60a Abs. 1 Nr. 1 und 3, Abs. 2 UrhG: Abbildungen ganz). Nicht „im Unterricht“ allein.
  - „Im Internet, auch auf der Schulhomepage“ brauchst du eine Erlaubnis oder eine freie Lizenz.
  - Unsicher: „Frag deine Lehrerin oder deinen Lehrer.“ Keine Rechtsberatung.
- Quellenangabe: vier Teile, immer in dieser Reihenfolge: Titel, Urheber, Quelle, Lizenz (en: title, creator,
  source, licence) – nach der TASL-Empfehlung von Creative Commons.
- Glossar (`definition`): freie Lizenz, Quellenangabe (`bild-fuers-plakat`); Werk, Urheberin, Urheberrecht
  (`wem-gehoert-das-bild`).
- Produktnamen nur als Gattung: Chat-KI, Bildersuche, Bestell-App. Keine Marken.
- KI wie in #493: „findet Muster in Beispieldaten“, im Gegensatz zu „von einem Menschen programmiert“.
  Trainingsbeutel, Merksatz „Was in den Beutel kommt, bestimmt, was herauskommt.“ (en „What goes into the bag
  decides what comes out.“)
- Urteilsskala, fünf Stufen, Wörter immer gleich: 1 geht nicht, 2 eher nicht, 3 kommt darauf an, 4 eher okay,
  5 ist okay (en: not okay, mostly not, it depends, mostly okay, okay). Einordnung eines Grunds: zählt dafür,
  zählt dagegen, zählt nicht (en: counts for, counts against, does not count).

## Exercise patterns

- **Zuordnen** (`matching`): Hinweis unter dem Bild → was du tun musst (`was-du-tun-musst`); später Gast →
  Veränderung, Beispiel → Chance oder Risiko. Ein Distraktor ist die Fehlvorstellung („nichts, weil es im Internet
  steht“).
- **Erklären** (`single-choice`): plausible falsche Optionen, jede `info` sagt, warum sie nicht passt
  (`quellenangabe`).
- **Erkennen** (`multiple-choice`): mehrere richtige Orte oder Beispiele, falsche mit Grund (`wo-darf-foto-1-hin`).
- **Urteilen** (`true-false`): eine Fehlvorstellung als Satz, der Grund in `explanation`, mit `hint` (`cc0-name`).
- **Urteil** (Komponente `UrteilAufgabe`, Logik `src/components/UrteilAufgabe.ts`):
  - Props: `fall`, `stufen` (5 Wörter), `gruende` (je `text`, `zaehlt`: `dafuer`/`dagegen`/`nicht`, `warum`),
    `erlaubt` (vertretbare Stufen), Texte `gruendeTitel`, `skalaTitel`, `dafuer`, `dagegen`, `nicht`,
    `positionFalsch` (mit `{stufe}` und `{wort}`), `fehltGrund`, `fehltStufe`.
  - Richtig: jeder Grund wie `zaehlt` eingeordnet und die Stufe in `erlaubt`. Rückmeldung: jeder falsch
    eingeordnete Grund mit seinem `warum`; danach eine Stufe außerhalb mit `positionFalsch`.  - `erlaubt`: wo das Recht oder die Ehrlichkeit entscheidet (Fall 1, Fall 3a: fremden Text als eigenen
    abgeben), nur [1, 2]; wo mehrere Urteile vertretbar sind, mindestens drei Stufen
    (Orchestrator). Jeder Fall hat mindestens einen Grund, der nicht zählt.
  - Der Seed mischt nur die Reihenfolge der Gründe; Seed 1 ist die Reihenfolge der Seite.
  - `examples`: mindestens zwei akzeptierte (zwei erlaubte Stufen) und zwei abgelehnte.
  - Was sie nicht prüft: eigene Gründe der Kinder. Dafür der Satz „Erklär dein Urteil jemandem neben dir.“

## Figures

- Eigene SVGs ohne Text im Bild, © 2026 Oliver Jägle (Rechteinhaber, Nachtrag 3), CC-BY-4.0, `source: { de: eigene Zeichnung, en: own drawing }`; im Dateikopf steht der Rechteinhaber. Marker und Namen
  setzt die Seite (`labelled-figure`). Die Bildunterschrift nennt Kinder von links nach rechts.
- Die Kinder sind die defs `#jona`, `#selin`, `#mia` aus `lernapps/informatik-computer`, Branch `work`,
  `src/images/klasse-6b.svg`, kopiert mit Herkunft im Dateikopf. Aussehen nicht ändern.
- Der Trainingsbeutel ist `<g id="trainingsbeutel">` aus `lernapps/informatik-ki`, `src/images/beutel-szene.svg`:
  Stoffbeutel Petrol #3a8fa3, Kordel #1f5e6b, gelber Pfoten-Aufnäher #f4c542, zwei Tierkarten.
- `src/images/plakat-szene.svg`: Selin mit Tablet (Seefoto) links, Plakat mit leerem Rahmen und Mias Zug in der
  Mitte, Mia rechts (Seiten 2 und 3).
- `src/images/wiederholung.svg`: Jona mit Smartphone, Trainingsbeutel (Wiederholung).
- `src/images/berufsbesuch.svg`: Herr Kaya mit Kasse und Brot, Frau Schulte mit Melkroboter und Milchkanne, Frau
  Nguyen mit Laptop; gleicher Stil wie die Kinder.
- `src/images/hausaufgaben.svg`: Jona am Schreibtisch, Tablet mit zwei Sprechblasen ohne Text, Buch mit Igel.
- **Urteilsskala** (`Urteilsskala.vue` Anzeige, `UrteilAufgabe.vue` Übung, gemeinsames Aussehen in
  `Urteilsskala.ts`): fünf Stufen als Leiste, Farben 1 #b5473a, 2 #bf7537, 3 #a67c2a, 4 #7c9052, 5 #2e7d6b (jede
  ≥ 3:1 auf Weiß und auf #1a1a1a, getestet). Jede Stufe hat einen Kreis mit Zahl auf `--page-surface` und das Wort
  darunter auf dem Seitenhintergrund, nie Text auf Farbe. Ein Urteil ist durch Rahmen und Zeiger markiert, nicht
  durch Farbe allein. Die Anzeige kann den Fall, einen Zeiger und die Gründe dafür und dagegen zeigen.
- **Datenspur** (ab Kapitel 2, Skizze `.vibe/sketches/datenspur.svg`): eine Figur und Fußabdrücke mit je einer
  Angabe; Farbe und Form je Art (Steckbrief, Posten, Spielen); neue Angaben gestrichelt; Zählung „bekannt: n
  Angaben“. Wird eine Komponente `Datenspur` mit Texten als Props und einer Liste für `nojs`.

## Sources

- Gesetz über Urheberrecht und verwandte Schutzrechte (UrhG), https://www.gesetze-im-internet.de/urhg/, gelesen
  2026-11-26: § 2 (geschützte Werke), § 15 (Verwertungsrechte), § 53 (Privatkopie), § 60a (Unterricht und Lehre).
  Nicht gelesen (Server 503): §§ 51, 63, 64, 72 und die Zeile „Stand“; die Seiten nennen die Paragrafen nicht, bis
  sie geprüft sind.
- Creative Commons, gelesen 2026-11-26: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/deed.de), CC0
  (https://creativecommons.org/publicdomain/zero/1.0/deed.de), die sechs Lizenzen
  (https://creativecommons.org/share-your-work/cclicenses/), Empfehlung TASL
  (https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution).
- KI-Fakten aus `lernapps/informatik-ki` (#493), Branch `work`.
- klicksafe, gelesen 2026-11-26: „Wie verlässlich ist ChatGPT?“ (Antworten nicht per se fehlerfrei, kaum von
  menschlichen zu unterscheiden) und „Risiken durch KI-Systeme“ (so gut wie die Trainingsdaten). „Nichts
  Persönliches eintippen“ ist eine Regel der App, ohne Quelle. Die Chancen (erklärt Wörter, stellt Übungsfragen,
  übersetzt) sind allgemeines Wissen, ohne eigene Quelle.
- landwirtschaft.de (BZL), „Wie werden Milchkühe gehalten?“, gelesen 2026-11-26: Melkroboter melken
  vollautomatisch. Mehr (Kühe gehen selbst hin, Daten je Kuh) ist nicht belegt und steht nicht auf der Seite.

## Adding a chapter or round

1. Die Bausteine auf der Karte lesen (`requires`). Was von außerhalb nötig ist, kommt auf eine Sammel-Wiederholung
   `<kapitel>/das-brauchst-du` am Kapitelanfang.
2. Den Ordner `src/<kapitel>/` mit `chapter.yaml` anlegen und das Kapitel in `chapters` von `src/app.yaml`
   eintragen.
3. Jede Seite bekommt `competencies: [<id>]`, die Abschnitte oben und Texte als Map `{ de, en }`.
4. Der Fall des Kapitels endet mit einer `UrteilAufgabe` (Props wie oben). Kapitel 2 führt die Datenspur ein.
5. 1 bis 3 ihrer Übungen in `selfAssessment` aufnehmen, wie Skill `lernapps-explainer-self-assessment` sagt. Kapitel `ich`: je Seite zwei (keine Wiederholung, keine UrteilAufgabe, weil ihr Fall auf der Seite steht).
6. `npx vp check --fix`, `npx --no -- lernapps check`, dann committen.

## Rules learned from mistakes

- Text mit „: “, „?“ oder einem Komma in einer Flow-Map (`{ de: …, en: … }`) immer in Anführungszeichen (sechsmal
  brach der Build daran).
- Die Rückmeldung (`warum`) einer UrteilAufgabe nennt nie die Einordnung („spricht dafür“), sondern stellt eine
  Frage, die zum Grund führt (Prüfung als Lernende).
- Ein Begriff steht nie in einer Tabelle oder Übung, bevor ihn die Seite erklärt (Lizenz, ©, 4.0).
- Eine Aussage über Technik im Beruf nur, wenn eine Quelle sie belegt (Melkroboter).
- Geschmack („schön“, „cool“, „mag die Farbe nicht“) zählt nie; ein Wunsch der Beteiligten („Die Klasse wünscht
  sich …“) zählt dafür, wiegt aber wenig. Beispiel und Aufgaben müssen das gleich behandeln (Fachprüfung).
- Nicht „für alles brauchst du Erlaubnis“ schreiben: Die Ausnahme für den Unterricht (§ 60a) gilt auch für Seite 2.
- Ein Foto ist „geschützt“; nicht jedes Foto ist ein Werk im Sinn von § 2 (einfache Lichtbilder: § 72, ungeprüft).
