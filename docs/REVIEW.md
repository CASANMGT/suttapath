# Content Review — v1.0

**Date:** 2026-10 · **Scope:** all 36 sessions, 3 checkpoints, 24 scenarios,
120 glossary terms · **Reviewer:** editorial pass (automated + internal), not
a substitute for the human gates in `CONTENT_PLAN.md`.

## What this pass is

Two kinds of check:

1. **Mechanical gates** — run by `scripts/build.js` and `scripts/audit.js`.
   These are objective and repeatable. A failure stops the build.
2. **Editorial judgement** — reading the built text against
   `docs/STYLE_GUIDE.md`: the layer rule (translation / paraphrase /
   inference), attribution, tone, and the honesty of "what the canon leaves
   open".

It is **not** the Phase 5 sign-off. The plan requires an outside
Buddhist-studies reviewer and a clinical/retreat safety reader. Neither has
been engaged, and no session carries `reviewedBy` yet. Treat v1.0 as
"content-complete, not scholar-certified".

## Mechanical gates (all passing)

```
node scripts/build.js
36 sessions · 3 checkpoints · 24 scenarios · 120 terms
198 citations verified against 33 suttas

node scripts/audit.js --quiet
0 warnings
```

Enforced by the build, per session and per scenario:

- every segment UID exists in the pinned snapshot;
- every cited range is contiguous (no silently skipped segments);
- every `mark` is a literal substring of the resolved translation;
- every glossary term referenced by a session exists;
- every glossary `related` link resolves (new in this pass);
- every scenario anchor points to a real session and a real passage.

The audit adds budget checks: context, inference, practice, paraphrase per
block and per session, translation range, term count per session, duplicate
live questions, and scenario domain spread.

## Findings and fixes

| Finding | Count | Action |
|---|---:|---|
| Inference notes over the 80-word budget | 11 | Trimmed to ≤80 words, meaning preserved |
| Paraphrase reading grade above 12 (3.4) | 1 | Rewrote the friendship block to two shorter sentences |
| Glossary `related` links to missing terms | 1 | `gatha → dhp1-20` replaced; build now guards all links |
| A session title below the 8-character floor ("The Saw") | 1 | Renamed "The Saw Simile" |
| Duplicate live questions across scenarios | 0 | — |
| Scenarios missing a counter-position | 0 | — |

No session was cut. The plan's rule ("a 30-session path that works beats a
36-session path that doesn't") was not needed: every track carries its arc.

## Accepted deviations

These are recorded decisions, not oversights. Each is a place where hitting
the number would have cost quality.

1. **Context notes below the 60-word target (17 sessions, Tracks 1–3).**
   They run 40–58 words. Each names the speaker, the occasion, and the
   rhetorical move; the extra 10–20 words would be scene-painting, which the
   style guide bans. Tracks 4–6 were written to 60–90 words. Revisit only if
   beginner readers report missing orientation.
2. **Short sessions below the 150-word translation range (1.4, 3.5, 4.6,
   6.6).** Dhp 1–2, AN 5.177, and the DN 16 last words are shorter than the
   guidance by nature. Padding with adjacent but irrelevant segments would
   violate the "range contains the teaching, not just the punchline" rule.
3. **69 glossary terms are reference-only** (not attached to any session).
   The glossary is a browsable reference layer, not only a session aid. This
   is by design; the audit reports the count rather than treating it as debt.
4. **Scenario domain spread is uneven** (Work 5, Academic 4, Relationships 4,
   Habit 4, Money 3, Career 2, Speech 2). The curriculum's scenario list was
   written for a university audience, where work and academic cases dominate.
   Adding domains to balance a table would produce weaker scenarios.

## Editorial checks passed

- Every canon excerpt is Sujato's text, unedited apart from excerpt
  punctuation; attribution appears on every view that shows it.
- Every interpretive claim sits under `Our reading, not the text`.
- Safety notes exist where the plan requires them: 4.6 (breath practice) and
  6.5 (five recollections), both with a stop instruction.
- The bookend works: 1.1 and 6.6 are the same sutta, and cp3 uses the last
  words as its final passage.
- Track 5's hard sessions keep the scaffolding the curriculum demanded:
  5.1 states what not-self is *not*; 5.3 and 5.5 rely on structured lists
  rather than diagrams (see open issues); 5.4 refuses to picture nibbāna;
  5.6 is framed as the method, not a dodge.

## Open issues (deliberately unresolved)

1. **Session-level instructor guides** — the 24 scenario guides exist; the
   plan asks for 36 session guides. Not built.
2. **Audio narration** is specified but not implemented; the thin-surface
   rule says no content should be produced for a feature the learner cannot
   see.
3. **No real-reader data.** Completion, cold-read comprehension, and the
   "does anyone finish Track 4" gate are unmeasured.
4. **No scholar sign-off** on 5.1–5.6, and no clinical read of 4.6/6.5.

## v1.1 follow-up (comprehension pass)

Resolved since the review above:

- **Structural diagrams** for 4.4 (two arrows), 5.3 (dependent origination),
  and 5.5 (eightfold path as three trainings) — the plan's Phase 3
  requirement, now data-driven and print-safe.
- **Retrieval items** — 5 per session (180 total) in `content/retrieval.js`,
  validated by the build and audited for completeness.
- Printing now opens collapsed passages and prints marks as underlines.

Still open: the outside gates (3 and 4 above), session guides, and audio.

## Recommendation

Ship v1.0 as **content-complete for readers**; v1.1 adds the comprehension
layer (diagrams and retrieval). Do not represent either as scholar-reviewed.
The next content work, in order: session-level instructor guides, then the
outside reviews that the plan's gates require.
