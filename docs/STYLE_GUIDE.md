# SuttaPath Style Guide

Editorial standards for everything in `content/sessions.js` and `content/appendix.js`.
The build (`node scripts/build.js --check`) enforces the measurable rules; this
document explains the ones it cannot measure.

---

## The layer rule (the most important rule)

Every sentence in the app belongs to exactly one of three layers, and the
reader must be able to tell which layer they are in at a glance.

| Layer | Source | How it appears | May not do |
|---|---|---|---|
| **Translation** | Bhikkhu Sujato, CC0, verbatim from the pinned snapshot | Serif, in the `Read` panel and the passage blocks | Be edited, "improved", reshuffled, or paraphrased. Ever. |
| **Paraphrase / context** | SuttaPath editors | `.seg__para` and the `Context` note — plain, quieter typography | Contain a doctrinal claim the passage itself does not support. |
| **Inference** | SuttaPath editors | Always under the label `Our reading, not the text` | Present itself as what the sutta "says". |

If you cannot decide whether a sentence is paraphrase or inference, it is an
inference. Label it.

## Voice

- Plain, direct, adult. Write like a good lecturer, not a wellness brand.
- Short declarative sentences for doctrine. One idea per block.
- Second person is allowed for directions ("Read the last line again") and the
  `Live` panel. It is not allowed for doctrine ("The Buddha wants you to…").
- No mystique. Never write "the ancient wisdom of", "hidden meaning", or
  "transformative". The app's whole premise is that the texts are not hiding.
- No moralising "should". The texts issue their own counsel; ours explains.
- No promises of benefit. "The sutta ranks blamelessness above wealth" is fine.
  "Practise this and you will become calm" is not.
- Claim discipline: prefer reporting what the text does ("the verses rank X
  above Y") over reporting what Buddhism thinks ("Buddhism holds that…").

## Mechanics

- Pali terms: diacritics everywhere except literal segment refs (those are
  ASCII, e.g. `snp2.4`). First use in a session must be one of that session's
  `terms` so a glossary card exists.
- Use the glossary's `literal` field, not a dictionary translation of your own.
  If the glossary and the session disagree, fix the glossary.
- Verses are marked `"verse": true`; never fake verse with manual newlines.
- `mark` must be a substring of the resolved translation text — the build
  fails otherwise, by design.
- Numbers: keep the text's own ("four noble truths"); spell out under ten in
  our prose.
- Dates and "2,300 years": the canon's dating is approximate; hedge once and
  never hedge twice.

## Field budgets (build-enforced)

| Field | Limit | Why |
|---|---|---|
| `hook` | ~1 sentence, italic, no doctrine | it is a doorway, not a lesson |
| `context` | 60–120 words | history, speaker, audience, occasion |
| `oneIdea` | ≤ 24 words, epoch falsifiable | if it needs "and", it is two ideas |
| `para` (per block) | ≤ 40 words | it translates, it does not lecture |
| `inference` | 40–80 words | name the move, credit the reading |
| `reflection` | exactly one question | no compound questions |
| `practice` | ≤ 45 words | must fit in a week without explaining calories |

## Scenario (`appendix`) rules

- The scenario is a **crushing** situation: real constraints load the choice
  in one direction, the passage loads it in another. If smart readers agree
  within two minutes, rewrite it.
- `anchor` quotes stay under 60 words; the link to the anchor session is
  always rendered (never "see session 2.5").
- `leavesOpen` names what the canon does **not** settle. Never sneak an
  answer in through the back of this field.
- `counter` positions must both be defensible by an honest scholar. A straw
  man in `counter[1]` ruins the exercise.

## Attribution

Every view that shows canon text carries the source line: `Bhikkhu Sujato,
CC0 · SuttaCentral · {ref}`. Scenario pages: `Passage: Bhikkhu Sujato, CC0.
Scenario and notes: SuttaPath.` Never strip these. The licence text is linked
from `About` — do not remove that either; it is a condition of the CC0 grant.
