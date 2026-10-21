# SuttaPath — Content Production Plan
**Phased build of the 36-session path, the integrity lab, and the supporting apparatus.**

Companion to `CURRICULUM.md` (what the content is) and `CONTENT_SCHEMA.md` (how it is stored). This document is about **sequence, volume, effort, and gates** — what gets written when, and what has to be true before the next phase starts.

---

## 1. The principle

**Do not write 36 sessions before six have been read by strangers.**

The failure mode of a project like this is a beautiful, complete, unusable curriculum: four months of editorial work, then the discovery that session 1.2 assumes a vocabulary the reader doesn't have. Content is the expensive part. Sequence it so each phase buys information for the next.

Three rules:

1. **Vertical before horizontal.** Finish one session completely — translation, paraphrase, context, inference, terms, practice, scenario, QA — before starting the next.
2. **The gate is evidence, not opinion.** Each phase ends with a specific observation about real readers. If the observation fails, the fix belongs in this phase, not the next.
3. **Write for deletion.** A session that doesn't earn its place gets cut. A 30-session path that works beats a 36-session path that doesn't.

---

## 2. Content inventory

What the finished product actually contains. Everything below is a countable deliverable.

| Asset | Count | Unit of work | Notes |
|---|---|---|---|
| Canon texts ingested | ~34 suttas | automated | 7 suttas are used twice (DN 16, DN 31) |
| Sessions | 36 | ~1.5 editor-days | 6 tracks × 6 |
| Segment paraphrases | ~210 | bundled with session | ~6 per session |
| Context notes | 36 | 0.25 day each | 60–120 words |
| Inference notes | ~30 | 0.1 day each | only where interpretation occurs |
| Practices | 36 | 0.1 day each | ≤ 40 words |
| Glossary terms | 40 → 120 | 0.15 day each | v1 ships 40 |
| Integrity scenarios | 24 | 0.5 day each | includes seminar questions |
| Checkpoint sessions | 3 | 1 day each | no new text |
| Retrieval items | ~180 | 0.1 day each | 5 per session, never scored |
| Instructor discussion guides | 36 | 0.25 day each | generated from session + scenario |
| Audio narrations | 36 | automated + 0.2 day QA | synthetic, labelled |
| Orientation page | 1 | 1 day | what the Tipiṭaka is |

**Total editorial effort to v1.0: ~84 editor-days.** At 3 days/week that is roughly seven months for one editor. At full time, four months. This is the honest number, and it is the main argument for phasing.

---

## 3. Phase map

| Phase | Name | Duration | Sessions | Scenarios | Gate |
|---|---|---|---|---|---|
| 0 | Ground truth | 2 weeks | 1 (reference) | 0 | Citations validate; 5 cold readers |
| 1 | Track 1 pilot | 3 weeks | 6 | 3 | 5 beginners finish track 1 |
| 2 | The ethics core | 5 weeks | +12 (18) | 12 | 2 instructors re-book |
| 3 | Mind and deep end | 6 weeks | +12 (30) | 20 | T4 completion ≥ 60%; no adverse events |
| 4 | Completion | 5 weeks | +6 (36) | 24 | 8% finish the path |
| 5 | Scale and sustain | ongoing | — | — | Quarterly revalidation |

Phases 1–4 assume the app shell exists by the end of Phase 1. If engineering and content run in parallel, Phase 0 is the shared dependency and nothing else is.

---

## 4. Phase 0 — Ground truth
**2 weeks · 9 editor-days · 1 reference session**

The phase that prevents the other phases from being wasted. Nothing here is user-facing except one session.

### Deliverables

1. **Citation pass (the critical one).** Every `canonRef` and `segmentRange` in `CURRICULUM.md` verified against a pinned SuttaCentral snapshot. The current list was written from working knowledge and at least one ID will be wrong. Produce a corrected `content/citations.csv` with: unit, sutta ID, collection, translator, segment range, status.
2. **Translation coverage audit.** Confirm which of the 34 texts have a CC0 Sujato translation and which do not. For gaps, decide: substitute a different sutta, or seek per-text permission. Do not design a session around a text you cannot legally ship.
3. **Ingest + validate scripts.** `ingest.ts`, `validate.ts` per `CONTENT_SCHEMA.md` §5. All 15 rules active. The build must fail on a broken citation before any editorial copy is written.
4. **Editorial style guide.** One page: voice, reading level, sentence length limits, how to mark inference, how to state a gap, banned moves ("you should", "the Buddha teaches us", "science now confirms"). Plus a 500-word voice sample.
5. **Glossary v0.** The 40 terms from `CURRICULUM.md` §10 with `firstSeenUnit` assigned.
6. **Reference session 1.2 (The Arrow), produced end to end** — the canonical implementation. Every later session is measured against it.

### Gate

- `validate.ts` passes on the reference session and **fails correctly** on a deliberately broken copy (test the test).
- Five cold readers, no prior Buddhism, read 1.2 unaided. At least four can state the one idea back in their own words. None asks what a sutta is.
- Two of the five can say what they would *do* differently, unprompted.

If this gate fails, the problem is the format, not the content. Fix the format before writing session 2.

---

## 5. Phase 1 — Track 1 pilot
**3 weeks · 12 editor-days · 6 sessions · 3 scenarios**

The whole product in miniature. If Track 1 works, the rest is repetition with harder texts.

### Deliverables

- Sessions 1.1–1.6 complete to the Phase 0 standard.
- The **anatomy of a sutta** explainer, built once and reused in 1.2, then referenced everywhere.
- Three integrity scenarios, chosen to test the format across domains: **#5 The exam you could pass** (academic), **#15 The rumour that's probably true** (speech), **#18 The explanation you owe** (relationship).
- Glossary to 40 terms, all `firstSeenUnit` values valid.
- 30 retrieval items (5 per session).
- The orientation page (what the Tipiṭaka is, whose Buddhism this is, the honesty note).

### Gate

- Ten beginners start Track 1; **six finish it**.
- Completion is not driven by one enthusiastic reader: at least four different people reach 1.6.
- In exit interviews, no one describes the app as "a Buddhism app" — they describe it as a reading course. If they say the former, the framing is wrong.
- The three scenarios produce **disagreement** in at least two of three cases. Agreement means the scenario has an obvious answer and must be rewritten.

### What to cut if late

Retrieval items. They are the least load-bearing asset in Phase 1 and can be generated in Phase 4.

---

## 6. Phase 2 — The ethics core
**5 weeks · 24 editor-days · 12 sessions · 9 scenarios**

Tracks 2 and 3. This is the shippable product for the university audience and the most immediately useful material for the adult learner. If the project has to stop after one phase, stop here — it is a complete, coherent, sellable unit.

### Deliverables

- Sessions 2.1–3.6 (twelve).
- **Nine more scenarios**, completing 12 of 24: academic integrity (1–9), money and livelihood (10–14), and the first speech scenarios.
- Checkpoint 1 (after Track 2).
- Glossary to 70 terms.
- First pass at instructor discussion guides for Tracks 2–3 (12 guides).

### Gate

- Two instructors, two different institutions, run at least three sessions with real classes.
- Both ask to use it again next term. That is the only signal that matters for the institutional model.
- In seminar notes, students cite the **passage**, not the paraphrase. If they cite our summary, the Understand layer is too loud — turn it down.
- Median session time stays within 8–15 minutes. Anything above 18 means the session is over-written.

### Known risk

Track 3 is where the canon's Iron-Age household context collides hardest with modern life (slavery-adjacent employer language, gendered duties, the five trades). Every session in this phase needs its `leavesOpen` written **before** its paraphrase, so the honesty is structural rather than an afterthought.

---

## 7. Phase 3 — Mind and deep end
**6 weeks · 24 editor-days · 12 sessions · 8 scenarios**

Tracks 4 and 5. The hardest editorial work in the project, and the phase most likely to lose readers.

### Deliverables

- Sessions 4.1–5.6 (twelve).
- Scenarios 13–20 (speech and relationship complete, plus discipline).
- Checkpoint 2 (after Track 4).
- Glossary to 100 terms, including the *khandha* / *paṭiccasamuppāda* cluster.
- Structural diagrams for 5.3 (dependent origination) and 5.5 (eightfold path) — these two are not optional; without them the sessions fail.
- **Safety review by an outside reader** with clinical or retreat-teaching experience, covering 4.6 and 6.5.

### Gate

- Track 4 completion ≥ 60% of those who start it. This is the retention cliff; measure it before writing Track 6.
- Zero reports of a practice causing distress. If any appear, 4.6 is rewritten or removed.
- On 5.1 (not-self), a comprehension check: readers can explain what the text is *not* saying. If they conclude "nothing matters," the framing failed.
- A Buddhist-studies reviewer signs off on 5.1–5.6 without requiring changes to the *text* (only to our commentary).

### What to cut if late

Track 5 is the only track that can ship with 4 sessions instead of 6 (drop 5.2 and 5.6) without breaking the arc. Track 4 cannot; it is the track that changes behaviour.

---

## 8. Phase 4 — Completion
**5 weeks · 15 editor-days · 6 sessions · 4 scenarios**

Track 6, the final checkpoint, and the apparatus that makes the path a course.

### Deliverables

- Sessions 6.1–6.6, ending on DN 16 — the bookend to 1.1.
- Scenarios 21–24; the integrity lab reaches 24.
- Checkpoint 3.
- Glossary to 120 terms, deduplicated, with related-term links resolved.
- All 36 instructor discussion guides.
- 180 retrieval items, reviewed as a set for duplication.
- Print stylesheet verified on a real print — the path should survive as paper.

### Gate

- Path completion ≥ 8% of starters. Low by consumer-app standards; high for a 36-session reading course, and the honest benchmark.
- Ten completers can each name a session that changed something. If they name the same one, the path is unbalanced.
- One instructor teaches the full arc as a 12-week unit.

---

## 9. Phase 5 — Scale and sustain
**Ongoing · ~2 days/month**

Content stops being a build and becomes an operation.

| Workstream | Cadence | Why |
|---|---|---|
| **Citation revalidation** | Quarterly | SuttaCentral changes; our hashes catch it, but a human confirms the range still makes sense |
| **Audio narration** | One track per quarter | Piper output, QA'd, labelled synthetic |
| **Second language (Indonesian)** | 6-month project | New editorial layer over the same canon layer; never machine-translated |
| **Vinaya / Abhidhamma orientation** | Optional track 7 | Only if demand is real; it is a different product |
| **Community scenarios** | Rolling | Submitted, reviewed, never published unedited |
| **Content debt sweep** | Quarterly | Dead links, duplicated glossary entries, orphaned terms, stale reading-level scores |

---

## 10. Content operations

### 10.1 Per-session production sequence

Do not reorder. Each step catches errors the previous one cannot.

| Step | Output | Check |
|---|---|---|
| 1. Verify source | Correct sutta ID, segment range, translator, licence | Against pinned snapshot |
| 2. Read cold | Editor reads the full sutta, not the excerpt | Can state its argument |
| 3. Select range | Contiguous segments, no splice | Range contains the teaching, not just the punchline |
| 4. Paraphrase | One plain sentence per segment | Grade 9–10; no Pali; no new claims |
| 5. Context | 60–120 words | Names the interlocutor and the rhetorical move |
| 6. Inference | Marked lines only | Every interpretive claim attributed to us |
| 7. Practice | ≤ 40 words | Possible this week; no attainment claim |
| 8. Terms | 3–5, added to glossary | `firstSeenUnit` correct |
| 9. Scenario link | Where relevant | Domain fits, `leavesOpen` ≥ 40 chars |
| 10. Technical QA | `validate.ts` passes | All 15 rules |
| 11. Cold read | Two readers: one beginner, one literate | Beginner states the idea; literate checks accuracy |
| 12. Sign-off | Changelog entry | Named reviewer |

### 10.2 Review model

Two readers per session, both required, different jobs:

- **The beginner.** No Buddhist background. Can they state the one idea? Do they know what to do on Monday? Their confusion is a bug, not a failure of attention.
- **The literate reader.** Buddhist studies, or long practice. Is the paraphrase faithful? Is the inference labelled? Is the gap real, or a convenient hedge?

Plus one **technical gate** that is not a human: the build.

### 10.3 Volume discipline

Per session, hard limits:

| Element | Limit |
|---|---|
| Translation range | 150–400 words |
| Paraphrase | ≤ 1.3× the translation |
| Context | 60–120 words |
| Inference | 40–80 words |
| Practice | ≤ 40 words |
| Terms | 3–5 |
| Total session | 8–15 minutes at 200 wpm |

If a sutta needs more than 400 words to make its point, the session is the wrong size. Split it (as DN 31 is split across 3.1/3.2) rather than compress it.

### 10.4 Naming and versioning

- Unit IDs are frozen at Phase 1. Renumbering breaks bookmarks and progress.
- Editorial copy is versioned in git with conventional commits: `content(3.2): rewrite leavesOpen for employer duties`.
- Every session carries a `reviewedBy` and `reviewedAt` in frontmatter. Nothing ships without both.

---

## 11. Risks to the content plan

| Risk | Phase it bites | Mitigation |
|---|---|---|
| **Citations are wrong** | 0 | The entire phase exists for this. Budget two weeks and do not compress it. |
| **A chosen sutta has no CC0 translation** | 0 | Coverage audit before any writing; substitute rather than license. |
| **Sessions over-write** | 2–3 | Hard word limits; measure session time in the pilot; cut, don't trim. |
| **The paraphrase becomes the product** | 2 | Readers must cite passages, not summaries. Check the seminar notes. |
| **Scenarios have obvious answers** | 2 | Disagreement is the gate. Rewrite until two readers disagree. |
| **The deep end loses readers** | 3 | Measure T4 completion before writing T6; simplify 5.x before adding 6.x. |
| **Moralising creep** | 3–4 | The banned-moves list in the style guide; `leavesOpen` required by the build. |
| **Single-editor dependency** | 4 | Style guide + reference session + review model exist so a second editor can join at Phase 2. |
| **Scope pressure from the institution** | 4 | The thin-surface rule: no content work is done for a feature the learner cannot see. |

---

## 12. If you only get one phase

Do **Phase 0 + Phase 1**. Six sessions, three scenarios, one working format, ten readers, and a validated pipeline.

That is enough to answer the only question that matters before the other 30 sessions exist: *does a beginner actually finish a sutta in this, and want the next one?*

Everything after that is execution.
