# SuttaPath — Product & Technical Design
**Version 1.0 · Design document, pre-build**

---

## 1. Thesis

The Pali Canon is roughly eleven times the length of the Bible, written in a dead language, organised for monastic recitation, and wrapped in a commentarial tradition that assumes you already know what a *jhāna* is. Every "learn Buddhism" app responds by summarising it. Summaries are where the tradition goes to die — you end up with a wellness product that quotes the Dhammapada out of context.

This app does the opposite. It assumes the primary text is the point, and that the barrier is not difficulty but **sequencing and scaffolding**. A motivated adult can read a sutta. They cannot guess which of 17,000 suttas to read first.

So: a guided path of 36 sessions through a curated slice of the canon, where every text is presented three ways (read it, understand it, live it), backed by a full canon reader that stays out of the way until the learner wants it.

**One sentence:** *SuttaPath teaches an English-speaking adult to read early Buddhist texts for themselves, and to use them as a working reference for how to live with integrity.*

---

## 2. Users

Two primary personas with the same need and different containers.

### 2.1 The lifelong learner — "Maya, 44"
Reads on her phone on a commute. Curious about Buddhism, has bounced off Wikipedia and a few YouTube dharma talks. Wants something that respects her intelligence and doesn't ask her to join anything. 8–15 minute sessions, two or three times a week, unevenly. Will abandon the app permanently if the first screen is a wall of Pali.

**Needs:** a next step that is always obvious, no prerequisite knowledge, permission to go slowly, and something to *do* with what she read.

### 2.2 The university student — "Dan, 20"
Taking an ethics, philosophy, or religious-studies unit, or simply wants a framework sturdier than "just be a good person." Skeptical of moralising. Will notice immediately if the app flatters him or pretends a 2,300-year-old monastic canon settles a modern campus dilemma.

**Needs:** primary sources with citations, honest treatment of where the canon is silent or contested, scenarios he can argue with, and something he can hand in or discuss in a seminar.

### 2.3 The instructor — "Dr. Okafor"
Teaches 30–120 students. Will not adopt a second LMS. Wants to assign three sessions before Thursday, get a discussion guide, and see who engaged — without surveilling anyone's private reflection.

### 2.4 Shared need (the reason one content model works)

| Need | Lifelong learner | University student | Same solution |
|---|---|---|---|
| Primary text | Wants authenticity | Needs citable sources | Canon-layer text, never paraphrased in place |
| Comprehension help | Can't parse Pali idiom | Must analyse it | Toggleable paraphrase + glossary |
| Application | "What do I do Monday?" | "Argue this position" | Live mode: practice + scenario |
| Honesty | Doesn't want to be preached at | Must see the seams | "What the text says / leaves open / you decide" |
| Progress | Quiet, real | Proof of engagement | Path record, exportable, not gamified |

**Design guardrail:** the instructor surface is *thin*. Cohort codes, assignment of existing path units, auto-generated discussion guides, and an engagement summary. No gradebook, no quiz authoring, no LMS features. If an instructor needs a gradebook, they already have one — we export CSV.

---

## 3. What this is not

- Not a meditation app. No timers, no guided sessions, no attainment tracking.
- Not a quiz game. Retrieval practice exists to aid memory, not to score people.
- Not a daily-quote widget. Every text has a home in a sequence.
- Not sectarian. The Pali Canon is the Theravāda canon and the earliest complete Buddhist scriptural collection. We say so on the front page.
- Not a substitute for a teacher or a community. We link out to both.
- Not a paid gateway to the Dhamma. See §12.

---

## 4. Principles

1. **The text is the teacher.** Editorial voice is a handrail, not a lecture. Never replace a passage with a summary where the passage is readable.
2. **Sequence beats search.** A beginner's real problem is "what next," not "find." Search exists, but it is not the front door.
3. **One idea per session.** If a session needs two ideas, it is two sessions.
4. **Reveal, don't dump.** Pali off by default. Paraphrase off by default. Depth is opt-in at every level.
5. **Moral seriousness without moralising.** Show the reasoning; let the reader conclude. State tensions openly.
6. **Quiet progress.** No coins, badges, leaderboards, or loss-framed streaks. Completion and memory are the reward.
7. **Offline is the default.** A commuter on a train with no signal is the baseline case, not an edge case.
8. **Nothing about the learner leaves the device without an explicit act.** Journals are private by default and shareable only by choice, per entry.
9. **Attribution is not negotiable.** Translator, licence, and source link on every passage.
10. **Build-time truth.** If a citation, cross-reference, or glossary link is broken, the build fails. Content rot is a bug.

---

## 5. The product spine: three modes

Every session contains one primary text, presented as segments. The learner switches modes; the text does not move.

```
┌─────────────────────────────────────────────┐
│  READ        UNDERSTAND        LIVE         │
├─────────────────────────────────────────────┤
│  "Mendicants, there are these two kinds     │
│   of thought: wholesome and unwholesome."   │
│                                             │
│   [ tap any word → gloss ]                  │
│   [ 🔊 read aloud ]   [ Aa ]  [ ☾ ]         │
└─────────────────────────────────────────────┘
```

### READ
- Translation only, chunked into 3–6 line segments (SuttaCentral segment IDs preserved).
- Tap a Pali term → gloss card: literal meaning, why it matters here, related terms.
- Read-aloud at build-generated audio, with optional word-level highlight.
- Controls: text size, line height, font (including a dyslexia-friendly option), light/dark/sepia.

### UNDERSTAND
- A plain-English paraphrase per segment, written by us, shown side-by-side or beneath. Never in place of the translation.
- "What's happening here" — 60–120 words on the rhetorical move: who is being addressed, what the simile is doing, what a modern reader will trip over.
- A structural diagram for list-heavy suttas (the canon loves lists; beginners drown in them). Collapsible.
- Key terms for the session surface as a small deck at the end.

### LIVE
- One reflection prompt, answerable in one sentence.
- One micro-practice for the week, concrete and small ("notice one moment this week when you spoke about someone who wasn't there").
- Where relevant, an integrity-lab scenario (see §8).
- Optional journal entry, private, with tags. Exportable as Markdown.

**Mode state persists per session**, so a returning learner resumes exactly where they were.

---

## 6. Information architecture

```
Home
├── Continue ..................... one card, the next session
├── Path ......................... six tracks, 36 sessions, visible map
├── Practice ..................... this week's micro-practice + journal
├── Library ...................... search + browse the canon (secondary)
└── You .......................... progress record, settings, export, about
```

**Home** is a single decision: continue, or see the path. No feed, no recommendations, no "trending suttas."

**Path** is a map, not a checklist. Tracks unlock in order by default; the learner can open any track from settings ("I already know the basics"). Within a track, sessions are sequential.

**Library** is deliberately below the fold. It opens with a plain-language orientation: what the Tipiṭaka is, its three baskets, the five nikāyas, how big it is, why translations differ. Search is static (Pagefind) and works offline. Results show collection, sutta title, and a one-line description — not a wall of Pali titles.

**You** holds the path record: sessions completed, dates, scenario responses, journal count, and vocabulary retention. Export as Markdown + JSON. Delete everything, locally, in one tap.

---

## 7. Progression model

Three concentric progress signals, in order of importance:

1. **Sessions completed** — the only headline number.
2. **Vocabulary retained** — FSRS-scheduled review of ~40 core Pali terms, capped at 3 minutes per day, presented as "terms you've met," never as a test.
3. **Practice logged** — the learner marks a micro-practice as done, skipped, or "partly." Skipping is not penalised and is not hidden from the record; honesty is the point.

No XP. No levels. A session that is re-read counts again — rereading is the traditional method.

**Path structure:** 6 tracks × 6 sessions = 36. At two sessions a week that is roughly four months. Track 1 (orientation) can be taken in one sitting.

**Checkpoints:** after tracks 2, 4, and 6, a "looking back" session (no new text) that revisits three earlier passages cold and asks what changed in the reading. This is the retrieval-practice spine applied to the whole path, and it is what makes the app a course rather than a playlist.

---

## 8. The integrity lab

The feature that makes this fit for universities without turning it into an ethics textbook.

**Format.** A short, concrete situation in second person, drawn from campus and early-career life. Then three panels:

| Panel | Content |
|---|---|
| **What the text says** | Two or three cited passages, quoted, with the inference made explicit and labelled as an inference. |
| **What the text leaves open** | The honest gap: what the canon does not address, where it assumes a monastic or Iron-Age-Indian context, where Theravāda commentators disagree. |
| **What you decide** | Free-text response, private. Optional: compare with how other readers responded (aggregate only, after you answer). |

**Design rules**
- No "correct answer" reveal. Ever. The moment we show a right answer, we are a compliance module.
- Every scenario must have a genuine tension. If the canon plainly settles it, it is a teaching example, not a scenario.
- Never weaponise a precept. Frame precepts as *trainings undertaken*, not commandments imposed.
- Explicit note on the canon's context: householder ethics in the canon is addressed to a very different economy. Say it once, in the orientation, and again wherever it bites.

**Coverage.** 24 scenarios across four domains: *Academic & professional integrity* (9), *Money and livelihood* (5), *Speech and relationship* (6), *Self-discipline and attention* (4). Full list in `CURRICULUM.md` §9.

**University mode.** An instructor creates a cohort code. Students join with the code. The instructor can:
- Assign specific sessions or scenarios with a due date.
- Get an auto-generated discussion guide per session (the passage, the tension, four seminar questions, two counter-positions).
- See an engagement summary: who opened what, how long, scenario response *length* and timestamp — never content.
- Export a CSV for their own gradebook.

Students control journal and scenario visibility per entry: `private` (default) · `shared with cohort` · `shared with instructor`. Nothing is shared by default, and the UI must make that visible, not buried.

---

## 9. Content pipeline

```
SuttaCentral bilara-data (pinned commit, vendored)
        │
        ▼  scripts/ingest
content/canon/<sutta>.json          ← immutable, CC0, segment-level
        │
        ▼  editorial authoring (MDX + YAML)
content/editorial/units/<unit>.mdx  ← ours, versioned separately
        │
        ▼  scripts/build-content
content/generated/path.json + search index + audio manifests
        │
        ▼  next build (static export)
```

**The rule:** the canon layer is never hand-edited and never paraphrased in place. Editorial material lives in its own files and references canon by segment UID. This means:
- A translation can be swapped wholesale without touching the curriculum.
- A second language (Indonesian is the obvious first candidate) is a new editorial layer over the same canon layer.
- Attribution and licence metadata travel with the data, not with a rendered page.

**Audio.** Pre-generated at build time with Piper (open-source TTS), per segment, Opus + MP3. Labelled "synthetic narration" in the player. Optional: real chanting where a licensed recording exists. Synthetic chant is a real ethical question in this tradition — do not present it as chanting; present it as narration.

**Search.** Pagefind index generated at build; fully client-side, offline-capable.

**Legal.** Base: SuttaCentral / Bhikkhu Sujato and Bhikkhu Brahmali, CC0. If we later add Thanissaro Bhikkhu or Bhikkhu Bodhi, that is a per-text permission and a per-text licence field — never a scrape. See `CONTENT_SCHEMA.md` §3.3 and §9.

---

## 10. Technical architecture

**Stack**
- Next.js (App Router) + React + TypeScript, `output: 'export'` — a static site.
- Tailwind for styling; no component library that fights the typography.
- Content: MDX + YAML, compiled at build.
- Storage: IndexedDB via Dexie. Local-first.
- SRS: `ts-fsrs`.
- Search: Pagefind.
- PWA: service worker with cache-first for content and a versioned content hash; installable; offline banner only when actually offline.
- Analytics: self-hosted, cookieless (Umami or Plausible). No third-party scripts, no ad tech.

**Why static + local-first**
- Cost: hosting is a bucket.
- Privacy: there is no server to breach, and no learner database to lose.
- Offline: the primary use case (commute, retreat, poor signal) works by construction.
- Licensing: no runtime fetch of third-party text, so no runtime licence exposure.
- Longevity: a static bundle still works if the project is abandoned, which matters for a text meant to last.

**Sync (post-v1).** Optional account, optional sync. Server stores ciphertext or, more simply, an opaque JSON blob per user. No reading of journal content. Sync is a paid/institutional feature, not a gate on the path.

**Performance budgets**
- First load ≤ 150 KB JS gzipped on a session page.
- Content chunks per session ≤ 80 KB.
- Interaction to next paint ≤ 200 ms on a mid-range Android.
- Fully usable with JavaScript disabled? No — but the canon text of any session is emitted as static HTML so it is crawlable, printable, and archivable.

**Non-goals for v1:** accounts, cloud sync, native apps, social features, teacher-authored content, audio recording, video.

---

## 11. Data model

Conceptual; see `CONTENT_SCHEMA.md` for exact formats.

```ts
// Canon layer (immutable, from SuttaCentral)
CanonText {
  uid: string            // e.g. "mn19"
  suttaId: string        // "mn19"
  collection: "dn"|"mn"|"sn"|"an"|"kn"|"vin"|"abhidhamma"
  titlePali: string
  titleEn: string
  translator: string
  license: "CC0-1.0" | string
  sourceUrl: string
  segments: Array<{ uid: string; pali?: string; en: string }>
}

// Editorial layer (ours)
Unit {
  id: string
  trackId: string
  order: number
  canonRef: string              // CanonText.uid
  segmentRange: [string, string]
  title: string                 // our plain-English title
  hook: string                  // 1 sentence, the reason to care
  oneIdea: string               // 1 sentence, the session's single point
  context: string               // "what's happening here", 60–120 words
  paraphrases: Array<{ segmentUid: string; text: string }>
  terms: string[]               // Term.id
  reflection: string
  practice: { text: string; week: number }
  scenarioId?: string
  estimatedMinutes: number
}

Track { id, order, title, subtitle, audienceTags: ("learner"|"student")[], sessions: Unit[] }

Term {
  id: string; pali: string; ipa: string
  literal: string; here: string; related: string[]
  firstSeenUnit: string
}

Scenario {
  id: string; domain: string; prompt: string
  textSays: Array<{ quote: string; canonRef: string; segmentUid: string; inference: string }>
  leavesOpen: string
  seminarQuestions: string[]
  counterPositions: [string, string]
}

// Local state (IndexedDB)
Progress      { unitId, status: "opened"|"read"|"reflected"|"practised", openedAt, completedAt, secondsSpent, mode }
ReviewItem    { key, kind: "term"|"segment", fsrs: FsrsCard }
JournalEntry  { id, unitId?, createdAt, body, tags, visibility }
ScenarioReply { id, scenarioId, createdAt, body, visibility }
CohortMember  { cohortCode, role, joinedAt }   // written only on explicit join
```

**ID rule:** every editorial object references canon by *segment UID*, never by character offset or page number. Anything else rots.

---

## 12. Business model and values

The Dhamma is not a product to be metered. That is both an ethical position and, given the audience, a practical one — this community notices.

- **Free forever:** the entire guided path, the library, the glossary, offline use, export. No content gate.
- **Paid:** instructor/institutional licences (cohort tools, discussion guides, CSV export, LMS export), and optional sync across devices.
- **Donation-supported:** an optional, quiet contribution link in the footer. No nag screens.
- **No:** ads, tracking-based anything, data sale, sponsored suttas, "premium insights."

Sustainability target: institutional licences cover hosting and one maintainer. If they do not, cut scope, not access.

---

## 13. Accessibility

Non-negotiable, and genuinely relevant here — the audience includes older learners and people reading long text on small screens.

- WCAG 2.2 AA minimum, tested with NVDA and VoiceOver.
- Text controls: size (up to 200%), line height, measure (45–75 chars), font choice including Atkinson Hyperlegible.
- True dark mode, plus sepia; respect `prefers-color-scheme` and `prefers-reduced-motion`.
- Full keyboard operation; visible focus; no focus traps in the mode switch.
- Pali diacritics announced correctly by screen readers; optional phonetic respelling toggle (e.g. *satipaṭṭhāna* → "sa-tee-PUT-tah-na").
- Audio narration doubles as an accessibility feature, not a garnish.
- No colour-only meaning anywhere in the path map.

---

## 14. Metrics

Measure learning, not engagement. If time-in-app rises while completion falls, something is wrong.

**Primary**
- Session completion rate (opened → read → reflected), target ≥ 60%.
- Week-4 retention of learners who completed track 1, target ≥ 35%.
- Path completion (36 sessions), target ≥ 8% of starters.
- Vocabulary recall at 7 days, target ≥ 70%.

**Secondary**
- Mode engagement: % of sessions where UNDERSTAND or LIVE is opened (target ≥ 50% each). A learner who only reads is not using the product.
- Scenario response rate and median length (a proxy for genuine engagement; do not optimise for length).
- Instructor cohort re-use across terms.

**Explicitly not measured:** daily active users, session frequency, time per session beyond a sanity cap.

---

## 15. Risks

| Risk | Severity | Mitigation |
|---|---|---|
| **Citation drift.** Pali canon references in this doc are from memory and at least one may be wrong. | High | Build-time validation against a pinned SuttaCentral snapshot; every `canonRef` must resolve or the build fails. Do the citation pass before writing editorial copy. |
| **Sectarian misreading.** Presenting the Pali Canon as "Buddhism" rather than "the Theravāda/early-Buddhist canon." | High | State it on the front page and in orientation session 0.1. Link to Mahāyāna and Vajrayāna resources from the library page. |
| **Paraphrase becoming the product.** Learners read our plain English, skip the translation, and never meet the text. | High | Paraphrase is off by default and visually subordinate. Never inline-substitute. Checkpoint sessions force re-reading the original cold. |
| **Moralising drift.** The integrity lab slides into "here is the right answer." | High | No answer reveals, structurally. Every scenario must document its tension in the CMS or it fails validation. |
| **Dual audience dilutes both.** Instructor features bloat the learner app. | Medium | The thin-surface guardrail (§2.4). Instructor features are read/assign/export only. Any feature that adds a learner-visible screen must justify itself to the learner. |
| **Scope creep to full canon browser.** The library is the fun part to build and the least important. | Medium | Library ships minimal: search, collection browse, orientation page. Curriculum first. |
| **Meditation safety.** Breath practice can surface difficult material, especially for people with trauma histories. | Medium | Grounding note on the first practice session; no intensive-practice framing; link to support. Sessions 3.x stay at everyday-attention level. |
| **Translation licensing.** | Medium | CC0 only in v1. Any addition is a per-text permission with recorded evidence in the repo. |
| **Abandonment.** A static bundle is archivable, but the project still needs a steward. | Medium | Content in plain files, CC0 or CC-BY editorial layer if possible, documented build. |

---

## 16. Roadmap

### v0.1 — Vertical slice (2–3 weeks)
- Content pipeline: ingest 6 suttas from SuttaCentral at a pinned commit.
- One fully written track (T1, 6 sessions) end to end.
- READ and UNDERSTAND modes; no LIVE.
- Local progress in IndexedDB. No PWA, no search, no audio.
- **Gate:** hand it to five real beginners. Do they reach session 6?

### v0.2 — The path (3–4 weeks)
- All 36 sessions drafted; Tracks 1–3 at full editorial quality.
- LIVE mode, journal, micro-practice.
- Offline PWA, Pagefind search, text controls, dark mode.
- **Gate:** completion rate ≥ 50% on track 1 with 20 users.

### v0.3 — Integrity lab (2–3 weeks)
- 24 scenarios, seminar questions, counter-positions.
- Journal visibility controls.
- **Gate:** two instructors run it with a real class and ask to use it again.

### v1.0 — Dual audience
- Cohort codes, assignment, engagement summary, CSV export.
- Discussion guide generator.
- Audio narration for Tracks 1–3.
- Full accessibility audit.

### Post-1.0
Sync · second language (Indonesian) · Vinaya & Abhidhamma orientation track · print/PDF path · community-contributed scenarios under review · audio from real reciters.

---

## 17. Open questions

1. **Editorial licence.** Should our paraphrase and curriculum be CC BY-SA so others can fork it? I'd say yes for the curriculum, and keep the app code MIT. Decide before inviting contributors.
2. **Track 1 length.** Orientation as six short sessions, or compress to three? Leaning: six, because the reading skills in 1.2–1.5 carry the whole path.
3. **Sutta selection gate.** Do we require each selected sutta to be complete, or is excerpting acceptable? Leaning: complete in the canon layer, with the session text being a contiguous range — never a spliced highlight reel.
4. **Instructor verification.** Anyone with a cohort code can see aggregate engagement. Do we need any verification at all, or is the low sensitivity of aggregates sufficient? Leaning: none, but make the aggregate genuinely non-sensitive.
5. **Audio ethics.** Synthetic narration of scripture is contentious. Ship it labelled, or ship silent? Leaning: labelled narration, off by default.
6. **Name.** SuttaPath is fine. *Anupubba* is better and less Googleable. Test with the five-person cohort.
