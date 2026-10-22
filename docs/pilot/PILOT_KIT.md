# Reader Pilot Kit

**Generic packet for running the two gates in `CONTENT_PLAN.md` and
`ADVANCED_TRACK.md`.** No readers are recruited here; this is the protocol.

---

## 1. What the pilot is for

Two separate questions, run in sequence:

**Gate 1 — Level 1.** Does a complete beginner finish a track and want the
next session? The plan's threshold: **10 starters, 6 finishers**, and no one
describes the app as “a Buddhism app” rather than a reading course.

**Gate 2 — Level 2.** Can a Level 1 graduate read a 3,000-word sutta unaided?
The threshold: **10 graduates, 6 can state MN 10's structure** without the
map.

Do not run Gate 2 with people who have not done Level 1. It tests the wrong
thing.

## 2. Design

- **10 readers per gate.** Remote, own devices, no account.
- **Level 1: 3 weeks.** Two sessions per week, as the app recommends.
- **Level 2: 2 weeks.** One whole text per sitting, plus the capstone.
- **No analytics.** The app has none. All data is self-reported and
  collected by the facilitator.
- **Compensation:** if any, flat, not performance-linked.

### Eligibility

Level 1: adult, English-comfortable, no prior Buddhist study, able to commit
2 × 20 minutes a week for three weeks.

Level 2: has finished all 36 Level 1 sessions, or can pass the entry check
(read MN 63 and state its claim, its refusal, and where its argument turns).

### Exclusion

- Anyone in acute crisis, acute grief, or seeking treatment. This is a
  reading study, not a clinical intervention. Say so in recruitment.
- Anyone who has written or taught on the Pali Canon professionally.
- People who cannot give informed consent.

## 3. Consent and data

Read this aloud or send it; keep a copy:

> This is a study of a reading app, not therapy. You will read short texts
> and may write private notes. The app stores everything in your browser and
> sends nothing. I will ask you for feedback by message and in a short call.
> I will keep your answers under a code (P1, P2…), not your name, and I will
> not quote anything you write in the app. You can stop at any time and ask
> me to delete your feedback.

Collect: code, dates, completion, times, answers. Do not collect: names in
the dataset, health information, app notes, or screenshots of journals.

## 4. Protocol

### Level 1 (three weeks)

| When | What | Record |
|---|---|---|
| Day 0 | 20-min onboarding call: what the app is, how modes work, how to stop | consent, code |
| Days 1–3 | Sessions 1.1 and 1.2, then a 5-min check-in | time, one-idea answer |
| Days 4–7 | 1.3 and 1.4 | time, confusion notes |
| Week 2 | 1.5 and 1.6, then a 10-min call | one-idea answers, “what would you do?” |
| Week 3 | Finish the track; exit interview | completion, exit answers |

Ask after **1.1, 1.3, 1.6** (and optionally 2.2): “In one sentence, what was
the session's idea?” Score 0–2 with the rubric below. Do not prompt with the
app's wording.

### Level 2 (two weeks)

| When | What | Record |
|---|---|---|
| Day 0 | Entry check: read MN 63 unaided, three questions | pass/fail |
| Days 1–3 | MN 10 whole, without the section notes first | time, structure answer |
| Days 4–7 | SN 12.23 and one Track A session | time, one-idea |
| Week 2 | One Track C session and the capstone | capstone note, exit call |

For the MN 10 structure question, ask: “What are the four parts of the
practice, and what does the text repeat after each one?” Score 0–2.

## 5. Scoring rubrics

**One idea (0–2).** 0 = cannot state it or states the opposite; 1 = partial
or vague; 2 = accurate in their own words, without jargon.

**Structure (0–2).** 0 = no structure; 1 = names some parts; 2 = four parts
plus the refrain's function.

**Transfer (0–2).** 0 = nothing they would do differently; 1 = a generic
intention; 2 = a specific, plausible change.

**Framing (exit).** Ask: “What is this app?” Code as *reading course*,
*Buddhism app*, *meditation app*, *other*. The plan's target is that nobody
says the second.

## 6. Exit interview (15 minutes)

1. What is this app, in your words?
2. Which session stayed with you, and why?
3. Where did you get stuck — text, term, or interface?
4. Did you ever skip the Understand tab? Why?
5. Did you do any of the weekly practices? Which, and what happened?
6. Did you use Check yourself? Did it help or feel like a test?
7. Did you open the Integrity Lab? What did you make of it?
8. Did you ever feel talked down to, or preached at?
9. Was any session too long? Which?
10. Would you start the next track tomorrow? If not, what would make you?
11. (Level 2 only) Could you read a new sutta on your own now? What would you
    need?
12. Anything you expected the app to do that it does not?

## 7. Decision rules

**Gate 1 passes if:** ≥6/10 finish Track 1; ≥7/10 score 2 on at least two of
the three one-idea checks; ≤2/10 call it a Buddhism app; no reader reports
being misled about what the app is.

**Gate 2 passes if:** ≥6/10 state MN 10's four parts and the refrain; ≥6/10
finish the whole text in one or two sittings; ≤3/10 say the text was
unreadable without the notes.

**If Gate 1 fails on comprehension:** the problem is the session format or
the vocabulary, not the canon. Revise the reference session (1.2) and the
first three sessions before writing anything else.

**If Gate 1 fails on completion but comprehension is fine:** the problem is
pacing or interface. Shorten sessions, move practices, or split the week.

**If Gate 2 fails:** do not write Track C/D content. Cut MN 10 to a guided
read or make Level 2 a reading list with a protocol, as the plan says.

## 8. Tracker

Use `pilot_tracker.csv` (same folder). One row per reader per checkpoint.
Codes only. Keep the file offline.

Columns are defined in the CSV header. Suggested analysis: completion rate,
median time, mean one-idea score, framing code counts, and a list of every
distinct confusion (verbatim, anonymised).

## 9. Report template

```
Pilot: Level 1 / Level 2
Dates:
Readers: n started / n finished
Completion: x/n
Median session time:
One-idea scores: distribution
Structure scores (L2):
Framing codes: reading course x, Buddhism app y, other z
Top three confusions (verbatim):
What changed as a result:
Gate: PASS / FAIL
Next action:
```

## 10. What this cannot tell you

- Whether the doctrine is correct (scholar review).
- Whether the content is safe for vulnerable readers (clinical review).
- Whether the app works for a university class (instructor pilot; the plan
  asks two instructors at two institutions to re-book).
- Whether anyone would pay for it.

Keep those questions separate. Mixing them is how a reading test becomes a
product trial and answers neither.
