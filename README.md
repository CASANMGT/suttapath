# SuttaPath

A study app for the Theravāda Pali Canon, for English-speaking adults with no background in Buddhism.

**Live demo: https://casanmgt.github.io/suttapath/**

This repository is a working design prototype. Three sessions are complete enough to test the core idea: a three-mode reader that takes a beginner from "what is a sutta?" to "what do I do with this on Monday?"

---

## The problem

The Pali Canon is roughly eleven times the length of the Bible, written in a dead language, organised for monastic recitation. Every "learn Buddhism" app responds by summarising it, and the summaries are where the tradition goes to die.

The barrier is not difficulty. It is sequencing. A motivated adult can read a sutta; they cannot guess which of ~17,000 to read first.

## The product

A guided path of **36 sessions across 6 tracks**, not a library. Each session is one text, one idea, one practice, and eight to fifteen minutes.

Every passage has three modes, and the text never moves between them:

| Mode | What it does |
|---|---|
| **Read** | The translation alone. Nothing added. |
| **Understand** | A plain reading beneath each passage, the context a 2,300-year-old conversation needs, and a glossary that does not assume you know Pali. |
| **Live** | One question, one practice for the week, one private place to write. |

The path: *How to Read This → What the Teaching Claims → The Ethical Life → The Mind → The Deep End → Living With Others*. It opens on how to read a sutta and closes on the Buddha's last words, deliberately bookending the same text.

## What is in this prototype

- `index.html` — app shell, hash router
- `assets/app.css` — the reading surface
- `assets/app.js` — routing, three-mode reader, glossary popovers, local persistence
- `assets/sessions.js` — the three sample sessions
- `manifest.webmanifest` + `sw.js` — installable, offline-first
- `docs/` — the full design: `PRD.md`, `CURRICULUM.md`, `CONTENT_SCHEMA.md`

## Run it locally

```bash
node server.js
# http://localhost:4173
```

Or just open `index.html`. Everything works from the filesystem except the service worker, which needs `http://localhost` or HTTPS.

## Honest caveats

**The translations here are not authoritative.** They are a working rendering written for this prototype. The production app ingests CC0 SuttaCentral text (Bhikkhu Sujato / Bhikkhu Brahmali) at segment level and never edits it. Any sentence that draws a conclusion from the text is marked as an inference and rendered differently from quotation.

**The Pali Canon is the Theravāda canon.** It is the earliest complete Buddhist scriptural collection, not "Buddhism." The app says so on the front page.

**Nothing leaves the device.** No account, no server, no analytics. Progress and journal entries live in `localStorage`.

## Status

Prototype. Next: a citation pass against a pinned SuttaCentral snapshot, then the remaining 33 sessions.
