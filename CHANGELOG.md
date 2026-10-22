# Changelog

All notable changes to SuttaPath. Versions are content versions as well as
code versions: the app ships its editorial layer and its build together.

Format: **New** (reader-visible features), **Content** (sessions, scenarios,
glossary), **Fixed**, **Build** (pipeline and validation).

---

## [2.0] — 2026-10-22 — Level 2, complete

### New
- **Track B** completed: MN 39, AN 4.41, DN 15, MN 118 (complete) — six
  whole texts in the track with MN 10 and SN 12.23.
- **Track C — Doctrine in Depth**: SN 22.59, SN 35.28, SN 12.2, AN 5.28,
  kamma/rebirth/no-self (AN 3.65 + MN 22), and the Buddha's awakening
  (MN 36).
- **Track D — Comparative and Critical Reading**: MN 10 vs DN 22, SN 12.2 vs
  DN 15, translation as evidence, Pali tools I–II, commentary vs sutta.
- **Capstone** on AN 8.30: read an unseen sutta, write a cited 400-word note,
  then open a model note.
- **Compare view** for the two comparative sessions.
- **Section builders**: whole texts can be defined by section-start segments
  or by the text's own numbered headings; coverage is still enforced.

### Content
- 25 advanced sessions (24 + capstone), 11 whole texts.
- Pali sessions are method-only — dictionary/concordance use and term
  clusters — with no unreviewed parsing claims.
- Safety/map notes on C5 and the capstone (attainments are described, not
  prescribed).

### Build
- Canon snapshot 42 suttas; 200 citations.
- `audit.js` counts Level 2 sessions, whole texts, and sections.
- Service worker `suttapath-v9`; version `2.0.0`.

---

## [1.4] — 2026-10-22 — Level 2, shipped

### New
- **Level 2 reader** (`#/adv`): its own progress, contents navigation, section
  notes, and a long-read surface with no paraphrase between the reader and
  the text.
- **Track A — How the Canon Is Built** (6 sessions): the four collections,
  formula/repetition/the ellipsis, three reading protocols, the verse books,
  Vinaya orientation, Abhidhamma and commentary orientation.
- **Whole texts**: MN 10 (Satipaṭṭhāna, 3,143 words) and SN 12.23 (Vital
  Conditions, 694 words), read in full, in sections.
- Level 2 card on the home page; start button on the Level 2 plan.

### Content
- Whole-text sessions omit only the source's own section headings (declared,
  with a reason); every other non-empty segment is rendered.
- MN 10 carries a safety note about the charnel-ground contemplations.

### Fixed
- Home session rows and the continue card no longer inherit the browser's
  link underline (pre-existing; affected Level 1 too).

### Build
- New invariant: a whole-text session must cover every non-empty segment of
  its sutta, or declare the omission. Build fails otherwise.
- Canon snapshot 35 suttas; 200 citations. Service worker `suttapath-v8`.

---

## [1.3] — 2026-10-22 — The advanced plan

### New
- **Level 2 page** (`#/level2`): the advanced tier as a published plan —
  four tracks × six sessions, the shift from excerpts to whole texts,
  comparative reading, Pali tools, the unseen-sutta capstone, effort, and the
  pilot gate.
- Level 2 design document linked from the page and published at
  `docs/ADVANCED_TRACK.md` (rendered on GitHub).
- `content/level2.js` (editorial source) with build validation: four tracks,
  six sessions each, codes, goals, capstone, effort.

### Note
- Plan only. No Level 2 sessions are shipped, and the page states that.

### Build
- Service worker cache `suttapath-v7`; version `1.3.0`.

---

## [1.2] — 2026-10-22 — The study plan

### New
- **Study plan page** (`#/plan`): weekly rhythm, pacing (2/week ≈ 18 weeks,
  3/week ≈ 12, 1/week ≈ 9 months), what to cut when behind, what "done"
  means, and a learning goal per track.
- **Track goals** — six statements of what a reader can do at the end of each
  track; rendered in the plan and validated by the build.

### Content
- **3.2 now teaches the north direction** (DN 31 friends: giving, kindly
  words, care, equality, honest speech; and the five duties returned). The
  passage was used by three lab scenarios but had been omitted from the
  session.
- **6.3** gains the missing MN 21:20.2 line, so its anchor quotes the full
  instruction.

### Fixed
- Lab scenarios now link **every** session that teaches the anchor passage,
  not only the declared primary session.
- Four scenarios (s4, s13, s16, s17) cited passages no session contained;
  fixed by teaching them, not by weakening the check.
- Scenario 14 anchor moved to 5.5.

### Build
- New invariant: a scenario's anchor segment must be taught by a session,
  and the declared anchor session must teach at least one segment of its own
  passage. Build fails otherwise.
- `audit.js` reports plan pacing, anchor provenance, and missing track goals.
- 200 citations verified against 33 suttas. Service worker cache
  `suttapath-v6`.

---

## [1.1] — 2026-10-22 — Understanding pass

### New
- Three structural diagrams in the Understand panel:
  - **4.4** — where the second arrow comes from (contact → first arrow →
    second arrow → added suffering).
  - **5.3** — dependent origination in four movements (past causes, present
    result, present causes, future result).
  - **5.5** — the eight factors grouped as the three trainings (wisdom,
    ethics, concentration).
- Five retrieval prompts per session (180 total), rendered under
  *Check yourself* with answers behind a reveal. Never scored, never stored.
- In-app release notes at `#/changelog`; this file.
- Print: collapsed passages open automatically via `beforeprint`; marked
  phrases print as underlines rather than a pink background.

### Content
- 180 retrieval items in `content/retrieval.js` (editorial layer, keyed by
  session; validated 5 per session).
- Diagrams in `content/visuals.js` (three sessions; validated shape).

### Fixed
- Long Pāli titles no longer wrap the mobile top bar or the session meta line
  onto unintended lines; the session head now wraps by item, and the Pāli
  name truncates rather than breaking the layout.
- Glossary `related` links are now a build invariant.

### Build
- `build.js` requires `retrieval.js`, `visuals.js`, and `changelog.js`;
  validates item counts, question/answer presence, diagram shape, and
  changelog structure.
- `audit.js` checks retrieval completeness and the three required diagrams.
- Service worker cache `suttapath-v5`.

---

## [1.0] — 2026-10-22 — The complete path

### Content
- **Track 5, The Deep End** (6 sessions): SN 22.59 not-self, SN 35.28 Fire
  Sermon, SN 12.2 dependent origination, Ud 8.3 the unborn, SN 45.8 the
  eightfold path analysed, MN 72 the undeclared questions.
- **Track 6, Living With Others** (6 sessions): MN 58 speech, SN 45.2 good
  friendship, MN 21 the saw, SN 3.8 self and other, AN 5.57 five
  recollections, DN 16 the last words (bookend to 1.1).
- **Checkpoint 3** after Track 6.
- **Integrity Lab** complete at 24 scenarios (speech, relationships, habit
  added).
- **Glossary** 76 → 120 terms.
- Safety notes on 4.6 and 6.5.

### New
- Print stylesheet: Read, Understand, and Live print in sequence with section
  labels.
- Instructor guides for scenarios 15–24.

### Fixed
- 11 inference notes over the 80-word budget trimmed.
- 3.4 paraphrase rewritten for reading grade.
- A session title below the validation floor renamed (*The Saw* → *The Saw
  Simile*).
- `gatha` glossary link pointed at a non-existent term; fixed, and the class
  of error is now caught by the build.

### Build
- `build.js` validates glossary `related` links.
- `audit.js` added: translation range, paraphrase ratio, reading grade,
  context/inference/practice budgets, term counts, scenario spread,
  duplicate questions, glossary orphans.
- `docs/REVIEW.md` records the review pass, accepted deviations, and the
  outside gates still outstanding.
- 198 citations verified against 33 suttas.

---

## [0.3] — 2026-10-22 — The Mind

### Content
- **Track 4** (6 sessions): MN 19 two kinds of thought, MN 20 five ways to
  put a thought down, MN 61 the mirror, SN 36.6 two arrows, AN 6.55 the lute
  string, MN 118 breathing (short, with safety note).
- **Checkpoint 2** after Track 4.
- Scenarios 13–14 (a loan to a friend; a job you would hate).
- Glossary 71 → 76 terms.

### New
- Safety callout component (`safety` field; first used by 4.6).

### Build
- Canon snapshot extended to 23 suttas; verse quirk in `snp2.4` resolved by
  stripping excerpt quotation marks.
- 140 citations verified.

---

## [0.2] — 2026-10-22 — The reading path

### Content
- **Tracks 1–3** (18 sessions), checkpoint 1, 12 integrity scenarios,
  71-term glossary.

### New
- Three-mode reader (Read / Understand / Live), Integrity Lab, glossary with
  diacritic-aware search, canon orientation page, about page, reading
  settings, installable PWA with offline cache.

### Build
- Canon ingest from SuttaCentral (Sujato, CC0) into a pinned, segment-addressed
  snapshot.
- `build.js` resolves every editorial UID against the snapshot; the build
  fails on unknown segments, non-contiguous ranges, missing `mark` strings,
  and missing glossary terms.
- `docs/citations.csv` citation report; `docs/TRANSLATION_COVERAGE.md`.

---

## [0.1] — 2026-10-22 — Prototype

- Three sample sessions to test the three-mode reader and the visual system.
- Deployed to GitHub Pages as `b08a911`.

---

## Known gaps (not yet a release)

- Outside review: a Buddhist-studies sign-off on 5.1–5.6 and a clinical read
  of 4.6/6.5 are still outstanding; see `docs/REVIEW.md`.
- No real-reader pilot data (completion rates, cold-read comprehension).
- Session-level instructor guides (the 24 scenario guides exist; the plan
  asks for 36 session guides).
- Audio narration and per-session audio QA.
