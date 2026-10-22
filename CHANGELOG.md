# Changelog

All notable changes to SuttaPath. Versions are content versions as well as
code versions: the app ships its editorial layer and its build together.

Format: **New** (reader-visible features), **Content** (sessions, scenarios,
glossary), **Fixed**, **Build** (pipeline and validation).

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
