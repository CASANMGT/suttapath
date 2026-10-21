# SuttaPath — Content Schema & Build Contract
**The handoff document. Read before writing code or editorial copy.**

---

## 1. The one architectural rule

There are two layers, and they never mix.

```
CANON LAYER        immutable · CC0 · from SuttaCentral · segment-addressed · never edited
EDITORIAL LAYER    ours · versioned separately · references canon by segment UID · never inlines canon text
```

Everything else follows from this:

- A translation can be replaced wholesale without touching the curriculum.
- A second language is a new editorial layer over the same canon layer.
- Attribution travels with the data, not with a rendered page.
- A mangled citation is a build failure, not a support ticket.

**Forbidden, always:** copying canon text into editorial files, referencing canon by character offset, page number, or "paragraph 3," hand-editing a file under `content/canon/`.

---

## 2. Repository layout

```
/
├── content/
│   ├── canon/                        # generated — do not edit (gitignored except a lockfile)
│   │   ├── dn/dn16.json
│   │   ├── mn/mn19.json
│   │   └── ...
│   ├── source.lock.json              # pinned SuttaCentral commit + per-file hashes
│   ├── editorial/
│   │   ├── tracks/01-how-to-read.yaml
│   │   ├── units/1.1.mdx  …  6.6.mdx
│   │   ├── scenarios/01-group-project.mdx … 24.mdx
│   │   ├── glossary/terms.yaml
│   │   └── orientation.mdx            # the "what is the Pali Canon" page
│   └── generated/                     # build output — never committed
│       ├── path.json
│       ├── search/                    # Pagefind index
│       └── audio/                     # segment-keyed narration manifests
├── scripts/
│   ├── ingest.ts                      # SuttaCentral → content/canon
│   ├── validate.ts                    # the build gate (§5)
│   ├── build-content.ts               # editorial → path.json
│   └── narrate.ts                     # Piper → audio manifests
├── src/
│   ├── app/                           # Next.js App Router, static export
│   ├── components/reader/             # ReadMode, UnderstandMode, LiveMode
│   ├── db/                            # Dexie schema, migrations
│   └── lib/srs.ts                     # ts-fsrs wrapper
└── docs/                              # this folder's contents
```

---

## 3. Canon layer

### 3.1 Ingest source

SuttaCentral `bilara-data`, pinned to a commit recorded in `content/source.lock.json`.

- Root Pali: `root/pli/ms/sutta/<coll>/<id>_root-pli-ms.json`
- Translation: `translation/en/sujato/sutta/<coll>/<id>_translation-en-sujato.json`
- Title metadata: the corresponding `_meta.json` and `super_meta` entries.

Segment keys look like `mn19:1.1`. Preserve them exactly — they are the only stable addresses in the system.

### 3.2 Target format

```json
{
  "uid": "mn19",
  "suttaId": "mn19",
  "collection": "mn",
  "titlePali": "Dvedhāvitakkasutta",
  "titleEn": "Two Kinds of Thought",
  "translator": "Bhikkhu Sujato",
  "translatorUid": "sujato",
  "license": "CC0-1.0",
  "sourceUrl": "https://suttacentral.net/mn19",
  "sourceCommit": "a1b2c3d",
  "ingestedAt": "2026-01-01T00:00:00Z",
  "segments": [
    { "uid": "mn19:0.1", "pali": "…", "en": "So I have heard." },
    { "uid": "mn19:0.2", "pali": "…", "en": "At one time the Buddha was staying…" }
  ]
}
```

Rules:
- `segments` order is source order. Never reorder, never split, never merge.
- Empty or whitespace-only translations are dropped, not filled.
- Segment UIDs are the only legal cross-reference key.

### 3.3 Licence allowlist

| Translator | Licence | Status |
|---|---|---|
| Bhikkhu Sujato (suttas) | CC0-1.0 | **Allowed — the default** |
| Bhikkhu Brahmali (Vinaya) | CC0-1.0 | Allowed |
| Thanissaro Bhikkhu | ©, free distribution | Requires written permission per text; record it in `content/licences/THANISSARO.md` |
| Bhikkhu Bodhi | ©, all rights reserved | Requires licence; per-text only |
| 84000 / others | varies | Per-text review |

`validate.ts` fails if `license` is not in the allowlist, or if the licence is not `CC0-1.0` and no permission record exists.

---

## 4. Editorial layer

### 4.1 Unit frontmatter (`content/editorial/units/3.1.mdx`)

```yaml
---
id: "3.1"
trackId: "3"
order: 1
canonRef: "dn31"
segmentRange: ["dn31:1.1", "dn31:1.9"]
title: "The Six Ways to Lose What You Have"
hook: "Most damage isn't villainy. It's drift."
oneIdea: "The canon names six ordinary ways a life quietly comes apart."
context: |
  60–120 words on the rhetorical move: who is speaking, to whom,
  what the list is doing, what a modern reader will trip over.
estimatedMinutes: 12
terms: ["apayamukha", "sila"]
practice:
  text: "Notice which of the six you're closest to this week. No action required."
  week: 1
scenarioId: "05-exam"
paraphrases:
  - segmentUid: "dn31:1.2"
    text: "There are four kinds of harmful behaviour…"
---

<Callout kind="context">…</Callout>

[inference:] The list is ordered from most visible to least visible, which
suggests the text is interested in self-diagnosis rather than public scandal.
```

### 4.2 The `[inference:]` marker — hard requirement

Any editorial sentence that draws a conclusion from the text must be prefixed `[inference:]`. The renderer styles it distinctly. `validate.ts` fails if the marker appears in a unit that cites no segments.

This exists because the fastest way to destroy a study app's credibility is to let commentary look like translation.

### 4.3 Scenario frontmatter

```yaml
---
id: "05-exam"
domain: "academic"          # academic | money | speech | discipline
prompt: |
  ~250 words. Second person. Concrete. No moral framing in the setup.
textSays:
  - quote: "…"
    canonRef: "mn61"
    segmentUid: "mn61:2.3"
    inference: "The check is applied before the act, not after."
leavesOpen: |
  The canon assumes a monastic teacher-student relationship and says
  nothing about institutional grading. It does not address …
seminarQuestions:
  - "Is the mirror check a consequentialist test or a virtue test? Defend one."
  - "If the harm is undetectable, does MN 61 still apply? Why?"
counterPositions:
  - "Rule-first: the institution's rule is the relevant standard, and the canon is silent."
  - "Character-first: the act is wrong because of what it makes of you, not what it costs."
---

Body: the situation. Then a short note on why it is genuinely hard.
```

`leavesOpen` is required and must be non-empty. A scenario without a documented gap fails the build. This is what prevents the integrity lab from becoming a compliance module.

### 4.4 Glossary (`content/editorial/glossary/terms.yaml`)

```yaml
- id: appamada
  pali: "appamāda"
  ipa: "/əpːəˈmɑːdə/"
  respelling: "up-pa-MAH-da"
  literal: "non-negligence, diligence"
  here: "The one quality the Buddha praised above all others."
  related: ["sati", "sila"]
  firstSeenUnit: "2.4"
```

### 4.5 Track (`content/editorial/tracks/03-ethical-life.yaml`)

```yaml
id: "3"
order: 3
title: "The Ethical Life"
subtitle: "Relationships, not rules"
audienceTags: ["learner", "student"]
units: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6"]
unlock: "sequential"      # sequential | open
checkpointAfter: false
```

---

## 5. Validation — the build gate

`scripts/validate.ts` runs in CI and in `prebuild`. **Any failure blocks the deploy.** No warnings-only mode.

| # | Rule | Failure message |
|---|---|---|
| 1 | Every `canonRef` resolves to a file in `content/canon/` | `unresolved canonRef "mn99" in units/4.1.mdx` |
| 2 | Every `segmentUid` exists inside its `canonRef` | `segmentUid "mn19:9.9" not found in mn19` |
| 3 | `segmentRange[0]` precedes `segmentRange[1]` in source order | `invalid range in units/3.1.mdx` |
| 4 | Every entry in `terms[]` exists in `glossary/terms.yaml` | `unknown term "apamada"` (note the typo) |
| 5 | `scenarioId`, if present, resolves and has ≥1 `textSays` entry | `scenario "05-exam" has no textSays` |
| 6 | Every `textSays[].segmentUid` exists | `scenario "12-gift" cites missing segment` |
| 7 | `leavesOpen` is present and ≥ 40 characters | `scenario "07-resume" documents no gap` |
| 8 | Every `[inference:]` block appears in a unit with ≥1 citation | `unattributed inference in units/5.4.mdx` |
| 9 | `order` values within a track are unique and contiguous | `track 4: duplicate order 3` |
| 10 | Required frontmatter fields all present | `units/6.2.mdx missing "practice"` |
| 11 | `license` in allowlist; non-CC0 requires a permission record | `mn10 license "©" has no permission file` |
| 12 | `firstSeenUnit` exists and is not later than any unit using the term | `term "nibbana" first seen at 5.4 but used at 2.6` |
| 13 | Lengths: `oneIdea` ≤ 25 words, `hook` ≤ 20, `practice.text` ≤ 40, `context` 60–120 | `units/2.5.mdx: context 143 words` |
| 14 | No editorial file contains a run of ≥ 12 words identical to a canon segment | `units/5.1.mdx: canon text copied into editorial layer` |
| 15 | Every unit's `canonRef` file exists in `source.lock.json` with a matching hash | `dn31: hash mismatch — re-run ingest` |

Rule 14 is mechanical plagiarism protection for ourselves. Rule 15 catches a silent SuttaCentral upstream change.

---

## 6. Rendering contracts

| Element | Requirement |
|---|---|
| Every canon passage | Translator name, licence, and a link to the SuttaCentral source, in a caption or on tap. Non-negotiable. |
| Paraphrase | Visually subordinate (smaller, secondary colour, indented). Off by default. Labelled "our paraphrase." |
| `[inference:]` | Distinct style; never looks like a quotation. A legend explains it once per session. |
| Pali terms | First occurrence per session gets a dotted underline and a tap target. Subsequent occurrences plain. |
| Segment UIDs | Exposed in the DOM as `data-segment` for citation tooling and for the university "copy citation" feature. |
| Audio | Labelled "synthetic narration." Never called chanting. |
| `/licences` page | Full attribution table: text, translator, licence, source URL, modifications. Reachable from the footer of every page. |

---

## 7. Internationalisation

The canon layer is already language-neutral in structure; only the `pali` and `en` fields hold text. To add a language:

1. Add a new canon target: `content/canon/<lang>/…` from the corresponding bilara translation (or a licensed one).
2. Add `content/editorial/<lang>/…` — the whole editorial layer is per-language, because paraphrase and scenario copy cannot be machine-translated without becoming a different product.
3. UI strings via a standard JSON catalogue.

Indonesian is the obvious first candidate: large Buddhist population, strong local interest, and existing SuttaCentral translations to build on. Do not machine-translate the Dhamma; that is precisely the failure mode this app exists to avoid.

---

## 8. Definition of done for the content build

A session is shippable when all of these are true:

- [ ] Source sutta verified on SuttaCentral; `canonRef` and `segmentRange` correct.
- [ ] Contiguous range, no splice.
- [ ] `oneIdea` fits in one sentence, ≤ 25 words.
- [ ] Understand panel written at grade 9–10, with the structural diagram if the text is list-heavy.
- [ ] At least one `[inference:]` marker if any interpretive claim is made.
- [ ] Practice is concrete, small, and possible this week.
- [ ] Terms added to glossary with `firstSeenUnit` set correctly.
- [ ] Scenario linked, with a documented `leavesOpen`.
- [ ] `validate.ts` passes.
- [ ] Read cold by someone outside the project, who can state the one idea back.

---

## 9. Editorial licence — recommendation

- **Code:** MIT.
- **Canon:** unchanged, whatever SuttaCentral's licence is (CC0 for Sujato).
- **Editorial layer (paraphrase, curriculum, scenarios, glossary):** CC BY-SA 4.0.

Rationale: the curriculum is the contribution. If the project is abandoned, a fork should be able to carry it. The cost is that a commercial competitor can reuse it — but the Dhamma was never a moat, and §12 of the PRD already says the path is free.
