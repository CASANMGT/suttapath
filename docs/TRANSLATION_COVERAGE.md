# Translation Coverage Report

**Snapshot:** SuttaCentral, Bhikkhu Sujato translation, fetched 2026-10 (CC0).
**Pipeline:** `scripts/fetch-canon.js` → `content/canon/*.json` → `scripts/build.js`.
**Report:** `docs/citations.csv` (row-per-citation, all `verified`).

The curriculum is excerpt-based by design: a 36-session path uses about 6,400
words of translation out of a corpus measured in hundreds of thousands. What
matters is not the percentage of the canon used, but that every excerpt is
pinned to a segment UID and rebuilds verbatim from the snapshot.

## Suttas in the snapshot, and what is cited

| Sutta | Role in the path | Segments (content) | Cited uniquely | Cited words |
|---|---|---:|---:|---:|
| AN 3.65 | 1.6 Kalāmas — testing teachings | 101 | 13 | 259 |
| AN 4.180 | 1.3 Four Great References · cp3 | 92 | 13 | 165 |
| AN 4.192 | 3.6 How to Know a Person | 66 | 8 | 148 |
| AN 4.62 | 2.5 Four Kinds of Happiness · s5, s7, s12, s23 | 32 | 20 | 211 |
| AN 5.177 | 3.5 Five Trades (short session) | 7 | 4 | 32 |
| AN 5.57 | 6.5 Five Things to Remember · s19 | 76 | 11 | 196 |
| AN 6.55 | 4.5 The Lute String · s21 | 87 | 11 | 161 |
| AN 6.63 | 2.3 Intention Is the Act · s3, s9 | 141 | 12 | 105 |
| AN 8.54 | 3.4 Eight Things a Household Needs · s13, s14 | 81 | 21 | 340 |
| Dhp 1–20 | 1.4 & 2.1 Two Translations / The Claim · s15, s24 | 93 | 12 | 60 |
| DN 16 | 1.1 Be Your Own Island · 6.6 last words · cp3 | 1569 | 16 | 231 |
| DN 31 | 3.1 & 3.2 Sigālovāda · cp2 · s13, s16, s23 | 264 | 28 | 530 |
| MN 19 | 4.1 Two Kinds of Thought | 122 | 16 | 212 |
| MN 20 | 4.2 Five Ways to Put a Thought Down · s21 | 69 | 21 | 390 |
| MN 21 | 6.3 The Saw Simile · s17 | 209 | 12 | 141 |
| MN 22 | 1.5 The Raft | 310 | 18 | 244 |
| MN 58 | 6.1 True, Useful, Timely · s15, s17, s18 | 74 | 8 | 172 |
| MN 61 | 4.3 The Mirror · s22 | 91 | 17 | 230 |
| MN 63 | 1.2 The Arrow | 112 | 20 | 264 |
| MN 72 | 5.6 The Questions Left Alone | 87 | 21 | 287 |
| MN 118 | 4.6 Breathing, Plainly (short session) | 145 | 6 | 120 |
| SN 3.8 | 6.4 Everyone Holds Themselves Dear · s18, s20 | 16 | 8 | 62 |
| SN 3.17 | 2.4 One Thing (Diligence) · s22 | 27 | 11 | 93 |
| SN 12.2 | 5.3 The Chain You Can Watch | 78 | 17 | 130 |
| SN 22.59 | 5.1 Nothing You Can Point To · cp3 | 50 | 16 | 182 |
| SN 35.28 | 5.2 Everything Is Burning | 21 | 12 | 213 |
| SN 36.6 | 4.4 Two Arrows · cp2 · s24 | 62 | 20 | 198 |
| SN 45.2 | 6.2 Half Is Not Enough · s16, s20 | 23 | 7 | 112 |
| SN 45.8 | 5.5 Eight Practices · s14 | 43 | 16 | 202 |
| SN 56.11 | 2.6 The First Turning | 58 | 17 | 302 |
| SN 56.31 | 2.2 A Handful of Leaves | 20 | 14 | 186 |
| Snp 2.4 | 3.3 What Counts as a Blessing | 54 | 24 | 104 |
| Ud 8.3 | 5.4 The Unborn | 10 | 3 | 78 |

**Totals:** 33 suttas · 4,290 content-bearing segments · **473 segments cited
uniquely** · **6,360 words** of translation in the table (6,386 in-session
words by the audit), across 198 citation rows.

## Notes

- `dn16` is cited from the final instructions and the last words (1.1, 6.6,
  cp3). Its full 1,569-segment length is why the snapshot is large; trailing
  segments are inert payload for this curriculum.
- Dhp 1–20 is stored as one container (`dhp1-20`); verse refs address segments
  via the alias map in `build.js`.
- Ties between sessions of the same sutta (1.4/2.1, 3.1/3.2) cite **disjoint**
  segment sets — the build validates this per-session.
- Checkpoints re-surface passages already cited by their source sessions; they
  add no new translation to the path.
- Scenarios anchor to segments already used by their anchor session, so a
  scenario's "passage behind it" is always traceable to a full lesson.
- MN 118 is excerpted to the first tetrad only; the full sixteen-step
  instruction is deliberately out of scope, and its safety note is editorial.
- Short sessions (1.4, 3.5, 4.6, 6.6) fall below the 150-word guidance on
  purpose. Each text's point is shorter than the guidance, and padding was
  rejected in the review pass — see `REVIEW.md`.

## Regenerating / extending

```bash
node scripts/fetch-canon.js     # refresh snapshot (fails on network loss)
node scripts/build.js --check   # validate without emitting
node scripts/build.js           # emit assets/data/content.js + citations.csv
node scripts/audit.js           # editorial budget and coverage audit
```

Rules enforced at build time: every segment UID exists · cited ranges are
contiguous (no silently skipped segments) · `mark` strings occur in the
resolved text · glossary terms referenced by sessions exist · glossary
related-term links resolve · scenario anchors point to real sessions. A broken
citation fails the build; the app cannot ship with a citation the snapshot
does not support.

## Licence

Translation © Bhikkhu Sujato, dedicated to the public domain via Creative
Commons CC0. SuttaPath takes no rights over canon text. Attribution lines are
rendered wherever canon text appears.

## Full texts

The app teaches from excerpts; it never replaces the suttas. Every session's
`ref` links to the whole sutta on SuttaCentral (e.g.
`https://suttacentral.net/mn63/en/sujato`) from the `About` page and session
source lines.
