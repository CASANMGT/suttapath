# SuttaPath

A study app for the Theravāda Pali Canon, for English-speaking adults with no background in Buddhism.

**Live: https://casanmgt.github.io/suttapath/**

This repository holds the complete v1.0 app (content Phases 0–4, plus the internal review pass): thirty-six written sessions across six tracks, three checkpoints, twenty-four integrity-lab scenarios, and a 120-term glossary, all wired to a pinned, citation-verified snapshot of Bhikkhu Sujato's CC0 translation.

---

## The problem

The Pali Canon is roughly eleven times the length of the Bible, written in a dead language, organised for monastic recitation. Every "learn Buddhism" app responds by summarising it, and the summaries are where the tradition goes to die.

The barrier is not difficulty. It is sequencing. A motivated adult can read a sutta; they cannot guess which of ~17,000 to read first.

## The product

A guided path of **36 sessions across 6 tracks**, not a library. Each session is one text, one idea, one practice, and eight to fifteen minutes.

Every passage has three modes, and the text never moves between them:

| Mode | What it does |
|---|---|
| **Read** | The translation alone. Nothing added. |
| **Understand** | A plain reading beneath each passage, the context a 2,300-year-old conversation needs, and a glossary that does not assume you know Pali. |
| **Live** | One question, one practice for the week, one private place to write. |

The path: *How to Read This → What the Teaching Claims → The Ethical Life → The Mind → The Deep End → Living With Others*. It opens on how to read a sutta and closes on the Buddha's last words, deliberately bookending the same text.

The **Integrity Lab** applies the same passages to twelve deliberately hard scenarios — academic, work, career, money — each anchored to a session, each ending with journaling rather than correct answers, plus seminar notes with two defensible counter-positions for instructors.

## What is built

- **Track 1 — How to Read This** (6 sessions): what a sutta is, how to test one, why translation is interpretation.
- **Track 2 — What the Teaching Claims** (6 sessions + checkpoint cp1): intention, diligence, the four truths — each as a claim, not a comfort.
- **Track 3 — The Ethical Life** (6 sessions): the Sigālovāda, the Maṅgala list, household economics, five ruled-out trades, and how to actually judge a person.
- **Track 4 — The Mind** (6 sessions + checkpoint cp2): sorting thoughts, five ways to drop a stuck thought, the mirror check, the two arrows, the lute string, and a plain breathing exercise with an explicit safety note.
- **Track 5 — The Deep End** (6 sessions): not-self, the fire sermon, dependent origination, the unborn, the eightfold path analysed, and the questions the canon refuses.
- **Track 6 — Living With Others** (6 sessions + checkpoint cp3): the speech test, good friendship, the saw simile, self and other, the five recollections, and the last words of the Buddha — closing on the sutta that opened the path.
- **Integrity Lab**: 24 scenarios anchored to session passages (academic, work, career, money, speech, relationships, habit), each with instructor seminar notes and two defensible counter-positions.
- **Glossary**: 120 terms with literal sense, usage sense, and confusions.
- **Print stylesheet**: the full path survives as paper (Read, Understand, and Live panels print in sequence).

## Architecture

Two layers, never mixed:

- **Canon layer** (`content/canon/*.json`): segment-addressed Sujato CC0 text, pinned by snapshot, byte-identical on every rebuild.
- **Editorial layer** (`content/sessions.js`, `content/appendix.js`): sessions, scenarios, glossary — UIDs only, zero canon text inline.

`scripts/build.js` resolves every editorial UID against the snapshot and **fails the build on a broken citation** — unknown segment, non-contiguous range, missing `mark` string, missing glossary term, unresolved glossary link. `docs/citations.csv` records all 198 citation rows for audit. `scripts/audit.js` re-checks the editorial budgets (context, inference, paraphrase, reading grade, scenario spread). The app (`assets/data/content.js`) is a build artifact; you do not edit it by hand.

## Repository

```
index.html                  app shell, hash router
assets/app.js | app.css | v02.css   router, reader, lab, glossary, styles
assets/data/content.js      GENERATED build artifact (window.SP_DATA)
content/sessions.js         editorial source: 36 sessions + cp1–cp3
content/appendix.js         editorial source: 24 scenarios + 120 glossary terms
content/canon/*.json        pinned Sujato CC0 snapshot (33 suttas)
scripts/fetch-canon.js      refresh the snapshot from SuttaCentral
scripts/build.js            resolver + validator + emitter (fails on bad citation)
scripts/audit.js            editorial budget, coverage, and hygiene report
scripts/dump.js             segment inspector for choosing ranges
docs/STYLE_GUIDE.md         editorial voice, layer rules, field budgets
docs/TRANSLATION_COVERAGE.md  what is cited, segment-level, with totals
docs/REVIEW.md              the v1.0 review pass: gates, fixes, accepted deviations
docs/guides.md              instructor guides for the 24 lab scenarios
docs/citations.csv          per-citation audit report (generated)
docs/PRD.md · CURRICULUM.md · CONTENT_SCHEMA.md · CONTENT_PLAN.md   the full design
manifest.webmanifest · sw.js  installable, offline-first PWA
```

## Run it locally

```bash
node scripts/build.js --check   # verify citations
node scripts/audit.js           # editorial budget + coverage report
node server.js                  # http://localhost:4173
```

Everything works from the filesystem except the service worker, which needs `http://localhost` or HTTPS.

## Honest caveats

**Translation is Bhikkhu Sujato's, CC0, verbatim.** Paraphrases and inferences are SuttaPath's, and inferences are always labelled `Our reading, not the text`. No canon sentence is edited. Attribution lines appear wherever canon text is shown.

**The Pali Canon is the Theravāda canon.** It is the earliest complete Buddhist scriptural collection, not "Buddhism." The app says so on the front page.

**Content-complete is not scholar-certified.** The v1.0 review pass was internal and mechanical — see `docs/REVIEW.md` for what it did, what it accepted, and what still needs an outside Buddhist-studies reader and a clinical safety reader.

**Nothing leaves the device.** No account, no server, no analytics. Progress and journal entries live in `localStorage`.

## Status

- [x] Phase 0 — canon ingest + citation pipeline (build fails on broken citation)
- [x] Phase 1 — Track 1 (6 sessions)
- [x] Phase 2 — Tracks 2–3 (12 sessions), checkpoint 1, Integrity Lab, glossary
- [x] Phase 3 — Track 4 (6 sessions, cp2) and Track 5 (6 sessions), scenarios 13–20, glossary 100→120
- [x] Phase 4 — Track 6, checkpoint 3, scenarios 21–24, 120-term glossary, print stylesheet, instructor guides
- [x] Phase 5 (internal review) — build invariants extended (`related` links), 12 content fixes, `docs/REVIEW.md`
- [ ] Outside gates — Buddhist-studies sign-off on 5.1–5.6; clinical read of 4.6/6.5; real-reader pilot; diagrams for 5.3 and 5.5
