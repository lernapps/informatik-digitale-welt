---
# Read by the hooks, the review, the evals. Schema: @lernapps/tooling/guidance/plan-front-matter.v1.schema.json
# Written by `lernapps plan` and the hooks. Never change a key or a value by hand.
# Archetype, null until chosen in Explore. Allowed values: explainer, interactive, quiz.
archetype: explainer
# Current phase. Allowed values: explore, plan, code, commit.
phase: code
# prePushFailures: failed pre-push runs, written by the hook.
prePushFailures: 1
# failedChecks: failed rules and runs, written by lernapps check and the hooks.
failedChecks: { checks-pass: 3, plan-file: 2 }
---

# Plan: Leben in der digitalen Welt: Fälle und Urteile, first version

<!--
For you, the assistant. The process is in AGENTS.md; this plan holds the method.
- `npx --no -- lernapps plan next` prints the task to do now, `plan done` ticks it and prints the next one.
- You write only below Goal, Key decisions, Notes, Answers, Entry draft, Content method and Retrospective, in the
  creator's language. Delete the comment of a section once the section is filled.
- Work on the branch `work`, locally: push nothing before Commit.
-->

*Started 2026-11-26. Explore, Plan, Code, Commit.*

## Goal

Lernende beurteilen Fälle aus der digitalen Welt (Urheberrecht, Informatik im Beruf, KI) und entscheiden begründet,
wie sie handeln. Welle 1: Kapitel 1 „Ich in der digitalen Welt“ (Klasse 5-6), Auftrag lernapps/apps#505, Epic #509.

## Key decisions

- Archetyp explainer: Seiten erklären am Fall, dann üben und urteilen.
- Urteilsskala als Komponente (Anzeige + Übung): Position und Gründe zusammen prüfen, kein Block kann das.
- Kein `open-task`, kein `scope` (Orchestrator: Tutor in 5-6 oft nicht da, Epic einheitlich).
- Urheberrecht auf zwei Seiten (Orchestrator: ja).
- maschinelles-lernen in der Sammel-Wiederholung (Orchestrator: ja).
- Kein `scope`: keine `open-task`, und die App folgt keinem Material des Erstellers.
- Ocker der Skala #a67c2a statt #c9a23a: Kontrast 3:1 (WCAG 1.4.11).

## Notes

- Strang `informatik/gesellschaft` (Karte https://lernapps.net/apps/map/informatik.json, explainerFocus `strand`).
- Kapitel 1 (5-6): `urheberrecht` (Schritt 1, requires –), `informatik-in-alltag-und-beruf` (Schritt 2, requires
  `informatiksysteme-im-alltag`), `ki-chancen-und-risiken` (Schritt 2, requires `ki-im-alltag`).
- Sammel-Wiederholung am Anfang: `informatik/informatiksysteme-im-alltag` (#490), `informatik/ki-im-alltag` (#493),
  dazu kompakt `informatik/maschinelles-lernen` (#493, Trainingsbeutel) für die Risiken. (guess: maschinelles-lernen
  ist nicht in `requires`, wird aber für „Fehler durch Daten“ gebraucht.)
- Kapitel 2-4 später: Urteilsskala und Datenspur so planen, dass sie tragen.
- GI-Bildungsstandards Sek I 2025: IMG-1, IMG-3 (5-6); IMG-7 (Lizenzen, Urheber) erst 7-10; BB-2, BB-3, BB-6
  (Begründen und Bewerten). Die Karte setzt Urheberrecht auf 5-6.
- Recht (Stand: UrhG in der Fassung, gelesen 2026-11-26 auf gesetze-im-internet.de): § 2 (Werke), § 15
  (Verwertungsrechte), § 53 (Privatkopie), § 60a (Unterricht: 15 %, Abbildungen ganz, auch Präsentation an der
  Schule). Creative Commons: BY 4.0 deed, TASL-Empfehlung, CC0, sechs Lizenzen (creativecommons.org, gelesen).
- Ungeprüft (Server 503): §§ 51, 63, 64, 72 UrhG, „Zuletzt geändert“; klicksafe-Seite (URL 404).
- Je Baustein, wie die Kinder hinkommen, und welche Fehlvorstellung die Rückmeldung fängt:
  - urheberrecht: Sie sehen Selins Foto-Fall, ordnen Werke und Lizenzen zu und urteilen. Fehlvorstellung: „Was im
    Netz steht, darf jeder nehmen“; „mit Quellenangabe ist alles erlaubt“.
  - informatik-in-alltag-und-beruf: Sie vergleichen Arbeit früher und heute bei drei Gästen. Fehlvorstellung:
    „Computer nehmen nur Arbeit weg“ oder „nur Informatiker arbeiten mit Computern“.
  - ki-chancen-und-risiken: Sie wägen Jonas Chat-KI-Fall ab. Fehlvorstellung: „Was die KI sagt, stimmt immer“;
    „KI ist immer verboten“.
- Umfang: in Kapitel 1 (5-6) mit 4 Seiten und Wiederholung; nicht drin: Datenschutz, Recht am eigenen Bild, Lizenzmodelle
  im Vergleich (spätere Kapitel), Technik der KI (#493). Sprachen de und en.
- Prüfung der ganzen App als Lernende und Fachprüfung (2026-11-26), behoben:
  - Geschmack zählt nie, ein Wunsch der Klasse zählt dafür (Beispiel der Skala und Fall 1 waren widersprüchlich).
  - Seite 2 nennt die Ausnahme für den Unterricht; die Zahl-Aufgabe fragt „verkaufen“ statt „im Flur zeigen“.
  - Melken: früher selbst mit der Melkmaschine, heute Melkroboter (nur das ist belegt); Tabelle zweispaltig für 360 px.
  - Rückblick ohne Stufen (verriet die Lösung), mit 3a und 3b; kein Verweis auf ein ungebautes Kapitel.
  - „Fall“ und Tom, Lea, Ben, Ali auf Seite 2 eingeführt; Übergänge 2→3 und 3→4 passen.
  - CC BY: Lizenz mit Link nennen, auf Papier die Internet-Adresse; Quelle am besten mit Internet-Adresse.
  - Fall 2 jetzt `erlaubt: [1, 2, 3, 4]`; Rückmeldungen als Fragen; KI „erzeugt“ statt „denkt nach“.
  - Englisch: „credit“ statt „source“ für die Quellenangabe; Seeberg erklärt.
  - Offen, an die Vorlage gemeldet: Recap-Links zeigen Kennungen, „Neue Aufgabe“ bei festem Fall, © im Bildbadge.

## Explore

<!--
- Find out what the app teaches, for whom, how much and how it looks. Ask; write no code, run no `create`.
- An answer counts only in the creator's words under "Answers". At most 2 questions per message, one topic each.
-->

### Tasks

- [x] Check the start: the folder `.agents/skills/lernapps-app` exists (else stop and tell the creator that the folder
      was not started with `init`), and `git branch --show-current` prints `work` (else `git switch -c work`).
- [x] (skipped: Orchestrated epic: the orchestrator knows lernapps; told in the epic) Load skill `lernapps-app`. Tell the creator in two sentences what a lernapps app is and where it will live: at
      their own address, free and public, and once listed as a copy on lernapps.net. Say that the technical part
      (GitHub) comes at the end and that you do it.
- [x] Interview: ask the topics "Goal" and "Learners" of "Answers".
- [x] Load skill `lernapps-map-assignment` and read the learning map of the subject as it says. The creator brings
      the content themselves (material, a word list, the pages): note under "Notes" which competencies of the map it
      covers. Else write the skill's assignment, with its story; the creator's yes answers the topics Content and
      Amount. A subject without a map: skip this task and say so.
- [x] Load skill `lernapps-exercise-patterns` and read its reference for the subject. Note under "Notes" how learners
      will practise what the goal names.
- [x] Choose the archetype as skill `lernapps-app` says: read the README of each archetype in question, then tell the
      creator in plain words what the chosen one can and cannot do. Write the archetype and its reason under "Key
      decisions".
- [x] Run `npx --no -- lernapps skills --archetype <name>` with the chosen archetype. It installs the archetype's
      skills and adds the archetype's tasks to this plan.
- [x] Load skill `lernapps-explainer-design`. An explainer has the look of the runtime: write "fixed by the
      archetype" under the topic "Look and feel" of "Answers".
- [x] Interview: ask every other topic of "Answers", in order. Leave out only a topic that an answer of the creator
      already covers, and note which answer. A topic nobody answered is asked once before you write an assumption
      with "(guess)".
- [x] Load skill `lernapps-content-research` and research as it says. Write under "Notes": the strand or subject, the
      competencies by chapter with their ids, the sources you opened.
- [x] Write under "Notes" which competency goes on which page and which pages form a chapter, as "Map the content" of
      skill `lernapps-explainer-design` says. Per page, name the prerequisites the app does not practise.
- [x] Write under "Notes", one line per competency: how learners get there (they derive it, they do not only read it
      off), and which misconception the feedback catches.
- [x] Write under "Notes" the scope: what is in, what is out and why, the data range (for example "all main-group
      elements", never a silent "1–20"), the languages.
- [x] **Checkpoint:** research. Show in plain words: the strand or why none, the competencies by chapter, the didactic
      approach, the scope, every "(guess)", the sources and what is unchecked, the archetype and its reason. Stop and
      wait. Changes: change them, then ask again.
      Creator: Einverstanden, weiter mit dem Plan. maschinelles-lernen in der Sammel-Wiederholung: ja. open-task: nein, nicht in Welle 1. Zwei Seiten Urheberrecht: ja.

### Answers

<!-- The interview: per topic the creator's answer, in their words. Keep the topics. -->

- Goal: (Auftrag #505) „Ich kann Fälle aus der digitalen Welt beurteilen, von Urheberrecht und Datenschutz bis KI und
  Big Data, und begründet entscheiden, wie ich handle.“ Welle 1: Kapitel 1.
- Learners: Informatik, Klasse 5-6; Vorwissen aus #490 (Informatiksysteme) und #493 (KI im Alltag).
- Model and focus: (Auftrag) Bewerten am Fall; Urteilsskala und Datenspur als wiederkehrende Bilder; Klasse 6b.
- Hurdles: (Auftrag) „Was im Netz steht, darf jeder nehmen“; Urteil als richtig/falsch; KI-Hausaufgaben pauschal
  verboten oder pauschal okay.
- Content: Agent aus Primärquellen (UrhG, creativecommons.org), Fakten zu KI aus #493.
- Amount: (Auftrag) Welle 1 nur Kapitel 1 mit 3 Bausteinen; Kapitel 2-4 später.
- Languages: (Nachtrag 1) Deutsch und Englisch.
- Look and feel: fixed by the archetype.
- Terms: (Orchestrator) Urteilsskala, „in der Klasse und zum Zeigen in deiner Schule“, Chat-KI, Bildersuche.
- Finding the app: Urheberrecht Klasse 5, KI Hausaufgaben, Informatik und Beruf, Medienbildung (guess).

## Plan

<!--
- Map the confirmed content onto the archetype. No new content questions: a gap in the content goes back to Explore.
- The creator confirms the plan in one read. After the yes you work on your own.
-->

### Tasks

- [x] Map the content as "Map the content" of skill `lernapps-<archetype>-design` says, and write the result under
      "Content method".
- [x] Choose a pattern per competency as skill `lernapps-exercise-patterns` says, and add it to "Content method".
- [x] Add to "Content method" one line per page, as "Engagement" of skill `lernapps-explainer-design` says: the
      opening task, the change of activity, the reward, the story.
- [x] Add the tasks of Code, each one a piece of work that ends in a commit. First the pattern: one complete page or
      screen, `npx --no -- lernapps plan add --at pattern "<task>"`. Then the others, one call each:
      `npx --no -- lernapps plan add --at pages "<task>"`. Each task says what it builds and what it shows.
- [x] Draw a sketch of each screen, component or interactive exercise: a static SVG or image, or the steps with what
      learners see after each. Keep the files in `.vibe/sketches/`.
- [x] Show the creator, short: goal, competencies by chapter, the Code tasks, the sketches, and the content method in
      plain words (what learners see and do, what the app cannot do). At most 2 questions.
- [x] **Checkpoint:** confirm the plan and the content method. Stop and wait for an explicit yes. Changes: change
      them, then ask again.
      Creator: Ja, so bauen. Die Musterseite bild-fuers-plakat kommt zuerst. § 60a: in der Klasse und zum Zeigen in deiner Schule. Beim Fall Bäckerei mindestens drei vertretbare Positionen.

### Content method

- Kapitel `ich` (5-6), Seiten in dieser Reihenfolge (Skizze `.vibe/sketches/seiten.md`):
  0. `das-brauchst-du`: recap informatiksysteme-im-alltag, ki-im-alltag, maschinelles-lernen; eine Übung.
  1. `wem-gehoert-das-bild` (urheberrecht): Werk, Urheberin, Urheberrecht. Fall 1 Teil 1.
  2. `bild-fuers-plakat` (urheberrecht): Erlaubnis, freie Lizenz, Quellenangabe, in der Klasse und im Internet.
     Die Urteilsskala wird eingeführt, erstes Urteil.
  3. `berufsbesuch` (informatik-in-alltag-und-beruf): Fall 2, Urteil.
  4. `ki-hausaufgaben` (ki-chancen-und-risiken): Fall 3, zwei Urteile, Rückblick über das Kapitel.
- Engagement je Seite:
  - Einstieg: eine Szene der 6b und eine leichte Frage vor der Erklärung.
  - Wechsel: Bild → Frage → kurze Erklärung mit Tabelle → Übungen → Urteil.
  - Belohnung: ein eigenes Urteil auf der Skala. Der Rückblick zeigt alle drei Urteile.
  - Geschichte: die drei Fälle der 6b. Jede Seite kündigt die nächste an.
- Muster:
  - Zuordnen (matching): Werk → Art, Lizenz → was du tun musst, Gast → Veränderung, Beispiel → Chance/Risiko.
  - Erkennen (multiple-choice): eine Fehlvorstellung als Option, mit `info`.
  - Urteilen (true-false): eine Fehlvorstellung als Satz, der Grund steht in `explanation`.
  - Erklären (single-choice): plausible falsche Optionen, je mit Grund.
  - Urteil (Komponente `UrteilAufgabe`): Gründe einordnen und Position wählen.
- Komponenten. Kein Block kann Position und Gründe zusammen prüfen, darum eigene Komponenten:
  - `Urteilsskala` (Anzeige):
    - eine Leiste mit fünf Stufen 1–5, Ziegel #b5473a → Ocker #c9a23a → Blaugrün #2e7d6b, jede Stufe mit Zahl und
      Wort (Props);
    - optional ein Zeiger auf einer Stufe und die Gründe „dafür“ und „dagegen“ in zwei Spalten;
    - `nojs`: die Stufen und Gründe als Liste.
  - `UrteilAufgabe` (Übung), Logik in `Urteil.ts`:
    - Je Grund drei Knöpfe: „zählt dafür“, „zählt dagegen“, „zählt nicht“. Dazu die Position auf der Skala.
    - `check`: Jeder Grund ist richtig eingeordnet, und die Position ist eine der vertretbaren (`erlaubt`, je Fall).
    - `reason`: nennt jeden falsch eingeordneten Grund mit seinem `warum`. Bei einer Position außerhalb sagt sie,
      warum diese nicht zu den Gründen passt.
    - Je Fall ein fester Auftrag. Der Seed mischt nur die Reihenfolge der Gründe.
    - Was sie nicht kann: eigene Gründe der Kinder prüfen. Dafür steht auf der Seite: „Erklär dein Urteil jemandem
      neben dir.“
  - Beide Komponenten tragen Kapitel 2–4 mit anderen Props.
- Datenspur (ab Kapitel 2, nicht in Welle 1): Komponente `Datenspur`, Skizze `.vibe/sketches/datenspur.svg`.
  - Fußabdrücke mit je einer Angabe, Farbe und Form je Art.
  - Neue Angaben gestrichelt, eine Zählung „bekannt: n Angaben“.
- Bilder: eigene SVGs ohne Text, CC-BY-4.0, Kinder aus `klasse-6b.svg` (informatik-computer), Trainingsbeutel aus
  `beutel-szene.svg` (informatik-ki), je mit Herkunft im Dateikopf. Marker und Texte über `labelled-figure`.
  - `plakat-szene.svg` (Seiten 1 und 2)
  - `berufsbesuch.svg`
  - `hausaufgaben.svg`
- Keine Datendatei nötig. Die Gründe stehen als Props im Block.
- Voraussetzungen von außen: nur über die Sammel-Wiederholung. Keine Links nötig.
- Recht: Grundsätze für Kinder, „frag einen Erwachsenen“, Stand der Rechtslage auf Seite 2 und in `sources`.
- Später ein Kapitel anfügen: neuer Ordner, Fall-Szene, UrteilAufgabe mit neuen Gründen, Datenspur ab Kapitel 2.

Code-Aufgaben (mit `lernapps plan add` eingetragen):
- Muster: `ich/bild-fuers-plakat`, komplett mit Urteilsskala, UrteilAufgabe, plakat-szene.svg, de und en.
- danach: `das-brauchst-du`; `wem-gehoert-das-bild`; `berufsbesuch` mit Bild; `ki-hausaufgaben` mit Bild und Rückblick.
<!-- An explainer: per figure, model and component its learning action in two to four sentences
(`explainer-representation-explained`); per page its prerequisites the app does not practise, and which get a recap
page, which a link. -->

## Code

<!--
- Build the app, locally on `work`, on your own. After each task: `plan done`, then one commit with the work and this
  plan. The hooks check each commit; a failing check is fixed from its message, as skill `lernapps-cli` says.
- What you cannot decide: choose, write it under "Key decisions" with "(guess)", go on.
- The creator asks for a change: say your reading in one sentence first, then change every place it holds for
  (`feedback-applied-everywhere`).
-->

### Tasks

- [x] Load skill `lernapps-cli`. Create the app as its section "Create" says:
      `npx --no -- lernapps create --archetype <archetype>`.
- [x] Fill the content guide `.agents/skills/app-content/SKILL.md` from "Notes" and "Content method": every heading,
      no "FILL IN" left. Commit it before any content.
- [x] Load skill `lernapps-<archetype>`.
- [x] Load skill `lernapps-content-questions`. Read whole, with your file tool:
      `.agents/skills/lernapps-explainer/references/blocks.md` and
      `.agents/skills/lernapps-explainer/references/exercises.md`. A foreign language: also
      `references/language-tasks.md` in the same folder. A component in the plan: also `references/components.md`.
- [x] Decide whether the app needs `scope`, as "`scope`" in
      `.agents/skills/lernapps-explainer/references/structure.md` says. Write the choice under "Key decisions".
- [x] Musterseite ich/bild-fuers-plakat bauen (de, en): Szene plakat-szene.svg, Lizenzen und Quellenangabe, Urteilsskala (Anzeige) und UrteilAufgabe mit Logik und Tests, erstes Urteil
<!-- tasks: pattern (1 added): the one page or screen that is the pattern for the others -->
- [x] **Checkpoint:** the pattern page. Load skill `lernapps-learner-check` and do its learner check on the page. Fix
      what it finds. Then show the creator the page and ask whether the others may follow it. Stop and wait. A
      change: change the pattern first.
      Creator: Ja, die anderen Seiten folgen diesem Muster. § 63: Quellenangabe als Regel der App, nicht als gesetzliche Pflicht.
- [x] Seite ich/das-brauchst-du: Sammel-Wiederholung (informatiksysteme-im-alltag, ki-im-alltag, maschinelles-lernen) mit Trainingsbeutel und einer Übung
- [x] Seite ich/wem-gehoert-das-bild: Werk, Urheberin, Urheberrecht mit Plakat-Szene und vier Übungen
- [x] Seite ich/berufsbesuch: drei Gäste (Szene berufsbesuch.svg), Arbeit früher und heute, Urteil Bäckerei-App (mindestens drei vertretbare Stufen)
- [x] Seite ich/ki-hausaufgaben: Chancen und Risiken der Chat-KI (Szene hausaufgaben.svg), zwei Urteile, Rückblick mit den drei Urteilen des Kapitels
<!-- tasks: pages (4 added): the other pages or screens, after the pattern -->
- [x] Update the content guide so that it describes the app as built (`app-content-matches`).
- [ ] Run `npx --no -- lernapps check` until it passes.
- [ ] Look at every screen and state, at 360 px and on a desktop, as "Look at the app" of skill `lernapps-cli` says.
      Compare each with its sketch.
- [ ] Do the whole-app check of skill `lernapps-learner-check`. Fix what it finds and write under "Notes" what you
      fixed.

## Commit

<!--
- Put the app on GitHub, publish it with the creator's yes, then list it. A push to `main` publishes.
- Open the pull requests (to `main`, to the catalog) without asking: they publish nothing.
- The creator asked to stop before publishing (a trial): stop here and say so.
-->

### Tasks

- [ ] Load skill `lernapps-explainer-self-assessment`. Add the self-assessment as it says, or write under "Key
      decisions" why the app has none. Commit.
- [ ] Load skill `lernapps-github`. Set up the repository and Pages as it says. Ask for the repository's name and
      every click only the creator can make, in one message.
- [ ] Push `work`, open the preview pull request and see its checks to green, as skill `lernapps-github` says.
- [ ] **Checkpoint:** publish. Show what the app does and the preview link from the comment "Vorschau der App". Ask
      whether it may go online. Stop and wait for the yes.
- [ ] Load skill `lernapps-commit`. Publish as skill `lernapps-github` says: `work` into `main` as one squash commit,
      the run of `Pages` watched to its end.
- [ ] Open the address the job `deploy` printed and confirm that the app shows. Never use a derived address.
- [ ] Load skill `lernapps-listing`. Write the entry under "Entry draft" as it says, with the creator's answer to
      "Finding the app".
- [ ] Fill the retrospective.
- [ ] Commit this plan on `main` and push it: the listing check and the review read it there.
- [ ] **Checkpoint:** list. Open the listing pull request as skill `lernapps-listing` says, without asking first: the
      pull request is the review. See it to "bestanden", then show the creator the pull request and its result.
- [ ] If the plan changed since its last push, commit it on `main` and push again.

### Entry draft

<!-- YAML valid against the entry schema the listing skill names. Only known values, never invented. -->

```yaml
```

## Retrospective

<!-- At the end of Commit, before the listing pull request. Facts, short, no names. Read by review and evals. -->

### Phases reached

<!-- Last phase completed, checkpoints passed. E.g. "commit; confirmed, published". -->

### Creator turns after the plan

<!-- Number of creator messages after the confirmation, topic of each. Target: at most 3. -->

### Where I had to guess

<!-- Each gap in plan, skills, messages or answers, and your choice. "None" if none. -->
