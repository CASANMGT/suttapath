# Verdict Registry

`verdicts.json` in this folder is the single record of external sign-off.
The packets say what to review; this file says what came back.

## Statuses

| Status | Meaning |
|---|---|
| `pending` | Not reviewed, or feedback not yet recorded |
| `pass` | Reviewed; no change required |
| `minor` | Reviewed; small changes made; reviewer does not need to see it again |
| `revise` | Returned for revision; the session is blocked until re-reviewed |

A session counts as **signed** when it is `pass` or `minor`.

## Recording a review

1. Open `verdicts.json`.
2. Set the section's `reviewer`, `date`, `anonymous`, and overall `verdict`
   (the same four statuses).
3. Set each session's status from the reviewer's form.
4. For every `revise`, make the change, then set the session back to
   `pending` and ask for a focused re-review of that session only.
5. Run the check:

```bash
node scripts/review-status.js
```

Add `--require` in a release script: it exits non-zero while anything is
pending or returned, so a build cannot claim “reviewed” prematurely.

## Scope

**Scholar** (18): 5.1–5.6, C1–C6, D1–D6.
**Clinical** (5): 4.6, 6.5, B1, B6, C5.
**Pilot**: Level 1 and Level 2 gate outcomes (`pass` or `fail`), plus the
report path.

The expected IDs are also hard-coded in `scripts/review-status.js`. Adding a
session means updating both that list and this registry; the script will
report an unknown ID if you forget.

## Pilot

Fill `../pilot/pilot_tracker.csv`, then:

```bash
node scripts/pilot-report.js docs/pilot/pilot_tracker.csv \
  --out docs/pilot/PILOT_REPORT.md
```

Read the gate decision at the bottom of the report. Record `pilot.level1` /
`pilot.level2` as `pass` or `fail` in `verdicts.json`, and set `pilot.report`
to the path. A failed gate is a recorded outcome, not a missing one.

## Anonymity

If a reviewer prefers not to be named, set `"anonymous": true` and
`"reviewer": null`. The app may say “reviewed by an external scholar” but
must not name them. Never record credentials, contact details, or health
information in this file.

## What “all clear” means

`review-status.js --require` passes only when:

- all 18 scholar sessions are `pass` or `minor`;
- all 5 clinical sessions are `pass` or `minor`;
- both pilot gates are recorded as `pass` or `fail`;
- the registry has no unknown or invalid entries.

Until then, the app's status text must keep saying it is content-complete,
not certified.
