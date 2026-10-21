/* SuttaPath — app shell, router, reader, lab, glossary. */
(function () {
  "use strict";

  const DATA = window.SP_DATA;
  if (!DATA) {
    document.getElementById("main").innerHTML = "<p style='padding:2rem'>Content failed to load.</p>";
    return;
  }

  const S = DATA.sessions;
  const CP = DATA.checkpoints || [];
  const LAB = DATA.scenarios;
  const G = DATA.glossary;
  const TRACKS = DATA.tracks;
  const PATH = [...S, ...CP].sort((a, b) => a.track - b.track || a.order - b.order);

  /* ---------- store ---------- */

  const KEY = {
    done: "sp.done",
    notes: "sp.notes",
    theme: "sp.theme",
    scale: "sp.scale",
    mode: "sp.mode",
    last: "sp.last",
  };

  function read(k, fallback) {
    try {
      const v = localStorage.getItem(k);
      return v === null ? fallback : JSON.parse(v);
    } catch (_) {
      return fallback;
    }
  }
  function write(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (_) {}
  }

  const state = {
    done: new Set(read(KEY.done, [])),
    notes: read(KEY.notes, {}),
    theme: read(KEY.theme, "auto"),
    scale: read(KEY.scale, 1),
    mode: read(KEY.mode, "read"),
  };

  function setDone(id, on) {
    if (on) state.done.add(id);
    else state.done.delete(id);
    write(KEY.done, [...state.done]);
  }
  function isDone(id) {
    return state.done.has(id);
  }
  function countDone(ids) {
    return ids.filter(isDone).length;
  }

  /* ---------- theme ---------- */

  function applyTheme() {
    const root = document.documentElement;
    if (state.theme === "auto") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", state.theme);
    root.style.setProperty("--read-scale", String(state.scale));
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta && state.theme !== "auto") meta.setAttribute("content", state.theme === "dark" ? "#12110e" : state.theme === "sepia" ? "#efe2c6" : "#f4f1e8");
  }
  applyTheme();

  /* ---------- utils ---------- */

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => [...(root || document).querySelectorAll(sel)];

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function marked(text, mark) {
    if (!mark) return esc(text);
    const i = text.indexOf(mark);
    if (i < 0) return esc(text);
    return esc(text.slice(0, i)) + '<mark class="hl">' + esc(mark) + "</mark>" + esc(text.slice(i + mark.length));
  }

  const ICON = {
    back: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>',
    next: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>',
    check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>',
    lab: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3h6M10 3v5.5L5.2 17A2 2 0 006.9 20h10.2a2 2 0 001.7-3L14 8.5V3"/><path d="M7.5 14h9"/></svg>',
    book: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 22V4.5z"/><path d="M4 17.5A2.5 2.5 0 016.5 15H20"/></svg>',
  };

  function topbar(parts) {
    const bar = $("#topbar");
    bar.innerHTML = parts.join("");
    bar.classList.toggle("is-scrolled", window.scrollY > 4);
  }

  function settingsBtn() {
    return '<button class="icon-btn" data-open-settings aria-label="Reading settings"><span class="aa">Aa</span></button>';
  }

  function pct(a, b) {
    return b ? Math.round((a / b) * 100) : 0;
  }

  function trackSessions(trackId) {
    return S.filter((s) => s.track === trackId).sort((a, b) => a.order - b.order);
  }

  function nextInPath(id) {
    const i = PATH.findIndex((x) => x.id === id);
    return i >= 0 ? PATH[i + 1] : null;
  }

  /* ---------- router ---------- */

  function route() {
    const raw = location.hash.replace(/^#/, "") || "/";
    const parts = raw.split("/").filter(Boolean);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    closePopover();

    if (parts[0] === "s" && parts[1]) return renderSession(parts[1]);
    if (parts[0] === "lab" && parts[1]) return renderLabItem(parts[1]);
    if (parts[0] === "lab") return renderLab();
    if (parts[0] === "glossary") return renderGlossary();
    if (parts[0] === "canon") return renderCanon();
    if (parts[0] === "about") return renderAbout();
    return renderHome();
  }

  /* ---------- home ---------- */

  function renderHome() {
    topbar([
      '<span class="wordmark">SuttaPath</span>',
      '<span class="topbar__spacer"></span>',
      '<a class="icon-btn" href="#/glossary" aria-label="Glossary">' + ICON.book + "</a>",
      settingsBtn(),
    ]);

    const next = PATH.find((x) => !isDone(x.id));
    const done = countDone(PATH.map((x) => x.id));
    const labDone = countDone(LAB.map((x) => x.id));

    const trackHtml = TRACKS.map((t) => {
      const list = trackSessions(t.id);
      if (t.status === "later") {
        return `<section class="later-track">
          <div class="later-track__head"><span class="later-track__num">${t.id}</span><b>${esc(t.title)}</b><span>${esc(t.subtitle)}</span><em>in production</em></div>
        </section>`;
      }
      const cpd = t.id === 2 ? CP[0] : null;
      const rows = list.map((s) => rowHtml(s)).join("");
      const cpRow = cpd ? rowHtml(cpd) : "";
      return `<section class="track" aria-labelledby="track-${t.id}">
        <div class="track__head">
          <span class="track__num">${t.id}</span>
          <h2 id="track-${t.id}">${esc(t.title)}</h2>
          <span class="track__count">${list.length} sessions</span>
          <p>${esc(t.subtitle)}</p>
        </div>
        ${rows}${cpRow}
      </section>`;
    }).join("");

    $("#main").innerHTML = `<div class="home wrap">
      <header class="masthead">
        <div class="eyebrow">Theravāda · Pali Canon</div>
        <h1 class="display">The oldest Buddhist texts,<br><em>one page at a time.</em></h1>
        <p class="dek">A guided path for complete beginners. Eighteen sessions are open: how to read a sutta, what the teaching claims, and what it asks of a life. No Pali required.</p>
        <a class="canon-link" href="#/canon">What is the Pali Canon? <span>→</span></a>
      </header>

      ${next ? `<a class="continue" href="#/s/${next.id}">
        <span class="continue__top">
          <span class="continue__label">${done ? "Continue" : "Start here"}</span>
          <span class="continue__meta">${done} of ${PATH.length}</span>
        </span>
        <span class="continue__title">${esc(next.title)}</span>
        <span class="continue__hook">${esc(next.hook)}</span>
        <span class="continue__bar"><i style="width:${Math.max(pct(done, PATH.length), 2)}%"></i></span>
      </a>` : `<div class="continue continue--done">
        <span class="continue__top"><span class="continue__label">Path complete</span><span class="continue__meta">${done} of ${PATH.length}</span></span>
        <span class="continue__title">All eighteen sessions read.</span>
        <span class="continue__hook">The integrity lab is the place to put them to work.</span>
      </div>`}

      ${trackHtml}

      <div class="home-cards">
        <a class="big-card" href="#/lab">
          <span class="big-card__icon">${ICON.lab}</span>
          <span class="big-card__body">
            <span class="big-card__kicker">Integrity Lab · 12 scenarios</span>
            <b>What would you actually do?</b>
            <span>Real situations, no correct answer, and the passage that makes each one harder.</span>
          </span>
          <span class="big-card__count">${labDone}/12</span>
        </a>
        <a class="big-card" href="#/glossary">
          <span class="big-card__icon">${ICON.book}</span>
          <span class="big-card__body">
            <span class="big-card__kicker">Glossary · ${Object.keys(G).length} terms</span>
            <b>The words, without the mystique.</b>
            <span>Pali terms explained in the sense the sutta is using, not the dictionary's.</span>
          </span>
          <span class="big-card__count">${Object.keys(G).length}</span>
        </a>
      </div>

      <footer class="home-foot">
        <span>Translation: Bhikkhu Sujato, CC0 · SuttaCentral</span>
        <a class="linkish" href="#/about">About</a>
        <a class="linkish" href="#/canon">The canon</a>
        <span>${done}/${PATH.length} sessions · ${labDone}/12 scenarios</span>
      </footer>
    </div>`;
  }

  function rowHtml(s) {
    const done = isDone(s.id);
    const cp = s.type === "checkpoint";
    return `<a class="session-row ${dp(cp)} ${done ? "is-done" : ""}" href="#/${cp ? "s" : "s"}/${s.id}">
      <span class="session-row__num">${cp ? "—" : s.id}</span>
      <span>
        <span class="session-row__title">${esc(s.title)}</span>
        <span class="session-row__sub">${esc(s.ref)} · ${s.minutes} min${done ? " · read" : ""}</span>
      </span>
      <span class="session-row__arrow">${done ? '<span class="done-mark">' + ICON.check + "</span>" : ICON.next}</span>
    </a>`;
  }
  function dp(cp) {
    return cp ? "session-row--checkpoint" : "";
  }

  /* ---------- session ---------- */

  let currentSession = null;

  function renderSession(id) {
    const s = PATH.find((x) => x.id === id);
    if (!s) {
      location.hash = "#/";
      return;
    }
    currentSession = s;
    if (s.type === "checkpoint") return renderCheckpoint(s);

    topbar([
      `<a class="icon-btn" href="#/" aria-label="Back to the path">${ICON.back}</a>`,
      `<span class="topbar__ref">${esc(s.ref)}</span>`,
      `<span class="topbar__title">${esc(s.title)}</span>`,
      settingsBtn(),
    ]);

    const terms = (s.terms || []).map((k) => termCard(k)).join("");
    const parallel = s.parallel ? `<div class="parallel">${s.parallel.map((p) => `<div class="parallel__col"><span class="parallel__label">${esc(p.label)}</span><p>${esc(p.text)}</p></div>`).join("")}</div>` : "";
    const recip = s.directions ? `<div class="recip">${s.directions.map((d) => `<div class="recip__row"><span class="recip__dir">${esc(d.dir)}</span><span class="recip__who">${esc(d.who)}</span><span class="recip__ex"><b>give</b> ${esc(d.serve)}<br><b>receive</b> ${esc(d.receive)}</span></div>`).join("")}</div>` : "";

    $("#main").innerHTML = `<article class="session wrap">
      <header class="session-head">
        <div class="session-head__ref"><b>${esc(s.ref)}</b><i></i>${esc(s.pali)}<i></i>${s.minutes} min</div>
        <h1 class="session-title">${esc(s.title)}</h1>
        <p class="session-hook">${esc(s.hook)}</p>
      </header>

      <section class="panel panel--read" data-panel="read">
        <div class="reader">
          ${s.blocks.map((b, i) => `<div class="seg">
            <span class="seg__num">${String(i + 1).padStart(2, "0")}</span>
            <p class="seg__text${b.verse ? " is-verse" : ""}">${marked(b.text, b.mark)}</p>
            <p class="seg__para">${esc(b.para)}</p>
          </div>`).join("")}
        </div>
        <p class="source-line">Bhikkhu Sujato, CC0 · SuttaCentral · ${esc(s.ref)}</p>
      </section>

      <section class="panel panel--understand" data-panel="understand" hidden>
        <div class="one-idea"><span class="one-idea__label">The one idea</span><p>${esc(s.oneIdea)}</p></div>
        <div class="note"><span class="note__label">Context</span>${esc(s.context)}</div>
        ${s.inference ? `<div class="note note--inference"><span class="note__label">Our reading, not the text</span>${esc(s.inference)}</div>` : ""}
        ${parallel ? `<h2 class="section-label">Two renderings</h2>${parallel}` : ""}
        ${recip ? `<h2 class="section-label">The six directions</h2>${recip}` : ""}
        ${terms ? `<h2 class="section-label">Words in this session</h2><div class="term-list">${terms}</div>` : ""}
        <p class="source-line">Passages from SuttaCentral (CC0). Paraphrase, context and inference are SuttaPath's.</p>
      </section>

      <section class="panel panel--live" data-panel="live" hidden>
        <div class="live-block">
          <h3>For you, not for a grade</h3>
          <p class="live-q">${esc(s.reflection)}</p>
        </div>
        <div class="live-block">
          <div class="practice"><span class="practice__meta">This week</span>${esc(s.practice)}</div>
        </div>
        <div class="live-block">
          <label class="field-label" for="note">Your note · saved on this device</label>
          <textarea class="journal" id="note" data-note="${s.id}" placeholder="One sentence is enough.">${esc(state.notes[s.id] || "")}</textarea>
          <span class="save-state" data-save="${s.id}">Saved</span>
        </div>
        <div class="finish-row">
          <button class="btn" data-finish="${s.id}">${isDone(s.id) ? "Completed" : "Mark session complete"}</button>
          ${nextInPath(s.id) ? `<a class="btn btn--ghost" href="#/s/${nextInPath(s.id).id}">Next <span aria-hidden="true">→</span></a>` : ""}
        </div>
        ${isDone(s.id) ? `<div class="completion">${ICON.check}<span><b>Marked complete.</b> You can reopen it any time.</span></div>` : ""}
      </section>
    </article>`;

    renderDock(s);
    bindSession(s);
    setMode(state.mode, { instant: true });
  }

  function termCard(k) {
    const t = G[k];
    if (!t) return "";
    return `<button class="term-card" data-term="${k}"><span class="term-card__pali">${esc(t.pali)}</span><span class="term-card__gloss">${esc(t.literal)}</span><span class="term-card__hint" aria-hidden="true">i</span></button>`;
  }

  function renderDock(s) {
    const idx = nextInPath(s.id);
    $("#dockSlot").innerHTML = `<div class="dock">
      <div class="modes" role="tablist" aria-label="Reading mode">
        <span class="modes__pill" aria-hidden="true"></span>
        <button class="mode-btn" role="tab" data-mode="read">Read</button>
        <button class="mode-btn" role="tab" data-mode="understand">Understand</button>
        <button class="mode-btn" role="tab" data-mode="live">Live</button>
      </div>
      ${idx ? `<span class="dock__divider"></span><a class="icon-btn" href="#/s/${idx.id}" aria-label="Next: ${esc(idx.title)}">${ICON.next}</a>` : ""}
    </div>`;
  }

  function setMode(mode, opts) {
    const panels = $$(".panel[data-panel]");
    if (!panels.length) return;
    const buttons = $$(".mode-btn");
    const order = ["read", "understand", "live"];
    if (!order.includes(mode)) mode = "read";
    state.mode = mode;
    write(KEY.mode, mode);
    panels.forEach((p) => (p.hidden = p.dataset.panel !== mode));
    buttons.forEach((b) => b.setAttribute("aria-selected", String(b.dataset.mode === mode)));
    const pill = $(".modes__pill");
    if (pill) pill.style.setProperty("--i", order.indexOf(mode));
    if (!opts || !opts.instant) {
      const shown = $(`.panel[data-panel="${mode}"]`);
      if (shown) {
        shown.classList.remove("mode-anim");
        void shown.offsetWidth;
        shown.classList.add("mode-anim");
      }
    }
    $("#dockSlot").style.display = "";
  }

  function bindSession(s) {
    $$(".mode-btn").forEach((b) => b.addEventListener("click", () => setMode(b.dataset.mode)));
    const ta = $("#note");
    if (ta) {
      let t;
      ta.addEventListener("input", () => {
        clearTimeout(t);
        t = setTimeout(() => {
          state.notes[s.id] = ta.value;
          write(KEY.notes, state.notes);
          const sav = $(`[data-save="${s.id}"]`);
          if (sav) {
            sav.classList.add("is-on");
            setTimeout(() => sav.classList.remove("is-on"), 1200);
          }
        }, 450);
      });
    }
    const fin = $(`[data-finish="${s.id}"]`);
    if (fin) {
      fin.addEventListener("click", () => {
        setDone(s.id, true);
        fin.textContent = "Completed";
        if (!$(`.completion`)) {
          const row = $(".finish-row");
          row.insertAdjacentHTML("afterend", `<div class="completion">${ICON.check}<span><b>Marked complete.</b> You can reopen it any time.</span></div>`);
        }
      });
    }
    $$("[data-term]").forEach((b) => b.addEventListener("click", (e) => openTerm(b.dataset.term, b)));
  }

  /* ---------- checkpoint ---------- */

  function renderCheckpoint(c) {
    topbar([
      `<a class="icon-btn" href="#/" aria-label="Back to the path">${ICON.back}</a>`,
      `<span class="topbar__ref">${esc(c.ref)}</span>`,
      `<span class="topbar__title">${esc(c.title)}</span>`,
      settingsBtn(),
    ]);

    $("#main").innerHTML = `<article class="session wrap">
      <header class="session-head">
        <div class="session-head__ref"><b>${esc(c.ref)}</b><i></i>${c.minutes} min</div>
        <h1 class="session-title">${esc(c.title)}</h1>
        <p class="session-hook">${esc(c.hook)}</p>
      </header>
      <p class="cp-intro">${esc(c.intro)}</p>
      <div class="cp-list">
        ${c.passages.map((p, i) => `<div class="cp-item">
          <span class="cp-item__label">${esc(p.label)}</span>
          <p class="cp-item__q">${esc(p.prompt)}</p>
          <details class="reveal"><summary>Show the passage</summary><p class="cp-item__text">${esc(p.text)}</p></details>
        </div>`).join("")}
      </div>
      <div class="live-block" style="margin-top:34px">
        <h3>Now, without scrolling back</h3>
        <p class="live-q">${esc(c.question)}</p>
        <label class="field-label" for="note">Your answer · saved on this device</label>
        <textarea class="journal" id="note" data-note="${c.id}" placeholder="Write it badly. It is not being marked.">${esc(state.notes[c.id] || "")}</textarea>
        <span class="save-state" data-save="${c.id}">Saved</span>
      </div>
      <div class="finish-row">
        <button class="btn" data-finish="${c.id}">${isDone(c.id) ? "Completed" : "Mark checkpoint complete"}</button>
        ${nextInPath(c.id) ? `<a class="btn btn--ghost" href="#/s/${nextInPath(c.id).id}">Start Track 3 <span aria-hidden="true">→</span></a>` : ""}
      </div>
      ${isDone(c.id) ? `<div class="completion">${ICON.check}<span><b>Marked complete.</b></span></div>` : ""}
      <p class="source-line" style="margin-top:30px">${esc(c.reflection)}</p>
    </article>`;

    $("#dockSlot").innerHTML = "";
    bindSession(c);
  }

  /* ---------- lab ---------- */

  function renderLab() {
    const done = countDone(LAB.map((x) => x.id));
    topbar([
      `<a class="icon-btn" href="#/" aria-label="Back to the path">${ICON.back}</a>`,
      `<span class="topbar__ref">Integrity Lab</span>`,
      `<span class="topbar__spacer"></span>`,
      settingsBtn(),
    ]);

    $("#main").innerHTML = `<div class="home wrap">
      <header class="masthead masthead--small">
        <div class="eyebrow">Integrity Lab · ${done}/12 answered</div>
        <h1 class="display display--sm">What would you<br><em>actually do?</em></h1>
        <p class="dek">Twelve situations with no clean answer. Each one is anchored to a passage you have read, and each leaves something the canon does not decide. Write your answer before opening the seminar notes.</p>
      </header>
      <div class="lab-list">
        ${LAB.map((s) => `<a class="lab-row ${isDone(s.id) ? "is-done" : ""}" href="#/lab/${s.id}">
          <span class="lab-row__n">${String(s.n).padStart(2, "0")}</span>
          <span class="lab-row__body">
            <span class="lab-row__domain">${esc(s.domain)}</span>
            <span class="lab-row__title">${esc(s.title)}</span>
          </span>
          <span class="lab-row__state">${isDone(s.id) ? '<span class="done-mark">' + ICON.check + "</span>" : ICON.next}</span>
        </a>`).join("")}
      </div>
      <p class="home-foot">These are not ethics puzzles with a key. They are the kind of decision where the passage helps you see what you are choosing, not which choice is correct.</p>
    </div>`;
    $("#dockSlot").innerHTML = "";
  }

  function renderLabItem(id) {
    const s = LAB.find((x) => x.id === id);
    if (!s) {
      location.hash = "#/lab";
      return;
    }
    const i = LAB.indexOf(s);
    const prev = LAB[i - 1];
    const next = LAB[i + 1];
    const anchorSession = S.find((x) => x.id === s.anchor.session) || CP.find((x) => x.id === s.anchor.session);

    topbar([
      `<a class="icon-btn" href="#/lab" aria-label="Back to the lab">${ICON.back}</a>`,
      `<span class="topbar__ref">${esc(s.domain)}</span>`,
      `<span class="topbar__title">${String(s.n).padStart(2, "0")} · ${esc(s.title)}</span>`,
      settingsBtn(),
    ]);

    $("#main").innerHTML = `<article class="lab-item wrap">
      <header class="lab-head">
        <div class="session-head__ref"><b>Scenario ${String(s.n).padStart(2, "0")}</b><i></i>${esc(s.domain)}</div>
        <h1 class="session-title session-title--sm">${esc(s.title)}</h1>
      </header>
      <p class="scenario-prompt">${esc(s.prompt)}</p>

      <div class="anchor">
        <span class="anchor__label">The passage behind it</span>
        <p class="anchor__text">${esc(s.anchor.text)}</p>
        <a class="anchor__ref" href="#/s/${s.anchor.session}">${esc(anchorSession ? anchorSession.ref : s.anchor.session)} · ${esc(anchorSession ? anchorSession.title : "")} →</a>
        <p class="anchor__inference">${esc(s.anchor.inference)}</p>
      </div>

      <div class="note"><span class="note__label">What the canon leaves open</span>${esc(s.leavesOpen)}</div>

      <div class="live-block">
        <p class="live-q">${esc(s.question)}</p>
        <h3>Your answer</h3>
        <textarea class="journal" id="note" data-note="${s.id}" placeholder="What you would do, and what you would say.">${esc(state.notes[s.id] || "")}</textarea>
        <span class="save-state" data-save="${s.id}">Saved</span>
      </div>

      <div class="finish-row">
        <button class="btn" data-finish="${s.id}">${isDone(s.id) ? "Answered" : "Mark answered"}</button>
      </div>

      <details class="instructor">
        <summary>For instructors · seminar notes</summary>
        <div class="instructor__body">
          <h4>Questions</h4>
          <ol>${s.seminar.map((q) => `<li>${esc(q)}</li>`).join("")}</ol>
          <h4>Two defensible positions</h4>
          ${s.counter.map((c) => `<div class="counter"><b>${esc(c.label)}</b><p>${esc(c.text)}</p></div>`).join("")}
          <p class="small">The point of the exercise is not to converge. If the group agrees in under two minutes, the scenario has failed and the instructor should introduce the counter-position that nobody has taken.</p>
        </div>
      </details>

      <nav class="pager">
        ${prev ? `<a class="btn btn--ghost" href="#/lab/${prev.id}" aria-label="Previous scenario">← Previous</a>` : "<span></span>"}
        ${next ? `<a class="btn btn--ghost" href="#/lab/${next.id}" aria-label="Next scenario">Next →</a>` : "<span></span>"}
      </nav>
      <p class="source-line">Passage: Bhikkhu Sujato, CC0. Scenario and notes: SuttaPath.</p>
    </article>`;

    $("#dockSlot").innerHTML = "";
    bindSession(s);
  }

  /* ---------- glossary ---------- */

  function renderGlossary() {
    topbar([
      `<a class="icon-btn" href="#/" aria-label="Back to the path">${ICON.back}</a>`,
      `<span class="topbar__ref">Glossary</span>`,
      `<span class="topbar__spacer"></span>`,
      settingsBtn(),
    ]);

    const fold = (x) => x.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    const keys = Object.keys(G).sort((a, b) => fold(G[a].pali).localeCompare(fold(G[b].pali)));

    $("#main").innerHTML = `<div class="glossary wrap">
      <header class="masthead masthead--small">
        <div class="eyebrow">${keys.length} terms</div>
        <h1 class="display display--sm">The words,<br><em>without the mystique.</em></h1>
        <p class="dek">Each entry gives the literal sense, the sense the sutta is using, and the terms it is usually confused with.</p>
      </header>
      <label class="search">
        <span class="sr-only">Search the glossary</span>
        <input type="search" id="gsearch" placeholder="Search Pali or English…" autocomplete="off">
      </label>
      <div class="g-list">
        ${keys.map((k) => `<details class="g-item" data-k="${k}" data-search="${esc((G[k].pali + " " + G[k].literal + " " + G[k].here).toLowerCase())}">
          <summary><span class="g-pali">${esc(G[k].pali)}</span><span class="g-lit">${esc(G[k].literal)}</span></summary>
          <div class="g-body">
            <p class="g-say">${esc(G[k].respelling)}</p>
            <p>${esc(G[k].here)}</p>
            ${G[k].related && G[k].related.length ? `<p class="g-rel">See also ${G[k].related.map((r) => `<button class="g-link" data-goto="${r}">${esc(G[r] ? G[r].pali : r)}</button>`).join(", ")}</p>` : ""}
          </div>
        </details>`).join("")}
      </div>
      <p class="empty" id="gempty" hidden>No term matches that.</p>
    </div>`;

    $("#dockSlot").innerHTML = "";
    const input = $("#gsearch");
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      let n = 0;
      $$(".g-item").forEach((el) => {
        const hit = !q || el.dataset.search.includes(q);
        el.hidden = !hit;
        if (hit) n++;
      });
      $("#gempty").hidden = n > 0;
    });
    $$("[data-goto]").forEach((b) =>
      b.addEventListener("click", () => {
        const k = b.dataset.goto;
        const el = $(`[data-k="${k}"]`);
        input.value = "";
        input.dispatchEvent(new Event("input"));
        if (el) {
          el.open = true;
          el.scrollIntoView({ block: "center", behavior: "smooth" });
          el.classList.add("is-flash");
          setTimeout(() => el.classList.remove("is-flash"), 1400);
        }
      })
    );
  }

  /* ---------- canon ---------- */

  function renderCanon() {
    topbar([
      `<a class="icon-btn" href="#/" aria-label="Back to the path">${ICON.back}</a>`,
      `<span class="topbar__ref">Orientation</span>`,
      `<span class="topbar__spacer"></span>`,
      settingsBtn(),
    ]);

    $("#main").innerHTML = `<div class="about wrap prose">
      <h1>What is the Pali Canon?</h1>
      <p class="dek">A library, not a book. Here is what is in it, whose version this is, and what we changed.</p>

      <h2>The three baskets</h2>
      <p>The Pali Canon — the <em>Tipiṭaka</em>, "three baskets" — is the earliest complete collection of Buddhist texts, preserved in Pali and transmitted in the Theravāda tradition of Sri Lanka and Southeast Asia. It is roughly forty times the length of the Bible.</p>
      <ul>
        <li><b>Vinaya Piṭaka</b> — the monastic code and the community's case law.</li>
        <li><b>Sutta Piṭaka</b> — the discourses, arranged in five collections (<em>nikāyas</em>). This is where this path reads.</li>
        <li><b>Abhidhamma Piṭaka</b> — systematic analysis of experience, in a later technical idiom.</li>
      </ul>

      <h2>What this path uses</h2>
      <p>Eighteen sessions from the four main <em>nikāyas</em> and the Sutta Nipāta. We do not pretend this is a survey. It is a sequence chosen so that each session gives you one usable idea and the vocabulary to read the next one. The full curriculum is thirty-six sessions across six tracks; three tracks are open.</p>

      <h2>Whose Buddhism is this?</h2>
      <p>Theravāda. That matters: the canon is shared, but the commentarial tradition, the meditation instructions, and the monastic culture are specific. Where a passage is interpreted differently by other schools, we say so. We do not present a modernist or secular reading as if it were the text.</p>

      <h2>What we changed</h2>
      <p>The translated passages are Bhikkhu Sujato's, released CC0 by SuttaCentral, and are reproduced without alteration apart from punctuation around excerpts. Everything else — the plain-language paraphrase under each passage, the context note, the marked inference, the practice — is ours. Inference is always labelled <em>Our reading, not the text</em>, because the difference between quotation and interpretation is the thing this app is trying to teach.</p>
      <p>Each excerpt is addressed by SuttaCentral segment IDs. The build resolves every citation against a pinned snapshot and fails if a segment does not exist. The citation report is public in the repository.</p>

      <h2>What is deliberately missing</h2>
      <p>Cosmology, the commentarial literature, tantra, and most of the Abhidhamma. The canon itself says why a teaching can be selective: see <a class="linkish" href="#/s/2.2">the handful of leaves</a>. That is not a claim that the rest is unimportant. It is a claim about what this path is for.</p>

      <p class="small">SuttaCentral: suttacentral.net · Translation licence: CC0 · Content licence: CC BY-SA 4.0</p>
    </div>`;
    $("#dockSlot").innerHTML = "";
  }

  /* ---------- about ---------- */

  function renderAbout() {
    topbar([
      `<a class="icon-btn" href="#/" aria-label="Back to the path">${ICON.back}</a>`,
      `<span class="topbar__ref">About</span>`,
      `<span class="topbar__spacer"></span>`,
      settingsBtn(),
    ]);

    const done = countDone(PATH.map((x) => x.id));
    $("#main").innerHTML = `<div class="about wrap prose">
      <h1>SuttaPath</h1>
      <p class="dek">A beginner's path through the Pali Canon. Built as an installable web app; works offline once loaded.</p>

      <h2>What this is</h2>
      <p>Thirty-six sessions in six tracks are planned. Eighteen are written: <em>How to Read This</em>, <em>What the Teaching Claims</em>, and <em>The Ethical Life</em>. Each session has one short passage, a plain paraphrase, a context note, a labelled inference, four terms, a reflection, and a practice that fits in a week.</p>
      <p>The Integrity Lab has twelve scenarios. They are not quizzes. Each is anchored to a passage and each leaves something the canon does not decide.</p>

      <h2>What it is not</h2>
      <p>Not a meditation app. Not a course with a teacher. Not a complete survey of the canon, and not a claim that the Theravāda reading is the only one. The sessions are written for an adult reading alone, in English, with no Pali.</p>

      <h2>Your data</h2>
      <p>Progress and notes are stored in this browser's local storage. Nothing is sent anywhere. Clearing site data deletes them.</p>

      <h2>Status</h2>
      <p>${done} of ${PATH.length} sessions complete · ${countDone(LAB.map((x) => x.id))} of 12 scenarios answered.</p>
      <p class="small">Version ${esc(DATA.meta.version)} · Built ${esc((DATA.builtAt || "").slice(0, 10))} · Translation: ${esc(DATA.meta.translationLabel)}</p>

      <p style="margin-top:26px"><button class="btn btn--ghost" data-reset>Reset local progress</button></p>
    </div>`;
    $("#dockSlot").innerHTML = "";
    const reset = $("[data-reset]");
    if (reset)
      reset.addEventListener("click", () => {
        if (!confirm("Delete your progress and notes on this device?")) return;
        localStorage.removeItem(KEY.done);
        localStorage.removeItem(KEY.notes);
        state.done = new Set();
        state.notes = {};
        renderAbout();
      });
  }

  /* ---------- settings ---------- */

  let sheet = null;

  function openSettings() {
    if (sheet) return;
    sheet = document.createElement("div");
    sheet.className = "sheet";
    sheet.innerHTML = `<div class="sheet__panel" role="dialog" aria-modal="true" aria-labelledby="set-title">
      <h2 class="sheet__title" id="set-title">Reading</h2>
      <div class="setting">
        <span class="setting__label">Theme</span>
        <div class="seg-ctl" data-ctl="theme">
          ${["auto", "light", "sepia", "dark"].map((t) => `<button data-v="${t}" aria-pressed="${state.theme === t}">${t[0].toUpperCase() + t.slice(1)}</button>`).join("")}
        </div>
      </div>
      <div class="setting">
        <span class="setting__label">Text size</span>
        <div class="seg-ctl" data-ctl="scale">
          <button data-v="0.92" aria-pressed="${state.scale === 0.92}">S</button>
          <button data-v="1" aria-pressed="${state.scale === 1}">M</button>
          <button data-v="1.12" aria-pressed="${state.scale === 1.12}">L</button>
        </div>
      </div>
      <div class="setting" style="display:block">
        <p class="small" style="color:var(--ink-3);line-height:1.55;margin:4px 0 0">Passages: Bhikkhu Sujato, CC0, via SuttaCentral. Paraphrase and notes: SuttaPath. Nothing you write leaves this device.</p>
      </div>
      <div class="setting" style="border-bottom:0;justify-content:flex-end">
        <button class="btn btn--ghost" data-close-settings>Done</button>
      </div>
    </div>`;
    document.body.appendChild(sheet);
    $("[data-close-settings]", sheet).focus();
    sheet.addEventListener("click", (e) => {
      if (e.target === sheet) closeSettings();
    });
    $$("[data-ctl]", sheet).forEach((grp) => {
      grp.addEventListener("click", (e) => {
        const b = e.target.closest("button[data-v]");
        if (!b) return;
        const v = b.dataset.v;
        if (grp.dataset.ctl === "theme") state.theme = v;
        else state.scale = parseFloat(v);
        write(grp.dataset.ctl === "theme" ? KEY.theme : KEY.scale, grp.dataset.ctl === "theme" ? state.theme : state.scale);
        $$("button", grp).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        applyTheme();
      });
    });
    document.addEventListener("keydown", escClose);
  }

  function closeSettings() {
    if (!sheet) return;
    sheet.remove();
    sheet = null;
    document.removeEventListener("keydown", escClose);
  }
  function escClose(e) {
    if (e.key === "Escape") closeSettings();
  }

  /* ---------- term popover ---------- */

  let pop = null;

  function openTerm(key, anchor) {
    const t = G[key];
    if (!t) return;
    closePopover();
    pop = document.createElement("div");
    pop.className = "term-pop";
    pop.setAttribute("popover", "manual");
    pop.innerHTML = `<p class="term-pop__pali">${esc(t.pali)}</p>
      <p class="term-pop__say">${esc(t.respelling)} · ${esc(t.literal)}</p>
      <p class="term-pop__here">${esc(t.here)}</p>
      ${t.related && t.related.length ? `<p class="term-pop__rel">See also ${t.related.map((r) => esc(G[r] ? G[r].pali : r)).join(" · ")}</p>` : ""}`;
    document.body.appendChild(pop);
    const r = anchor.getBoundingClientRect();
    const w = Math.min(320, window.innerWidth - 28);
    let left = r.left + r.width / 2 - w / 2;
    left = Math.max(14, Math.min(left, window.innerWidth - w - 14));
    let top = r.bottom + 10;
    pop.style.left = left + "px";
    pop.style.top = top + "px";
    pop.showPopover();
    const h = pop.getBoundingClientRect().height;
    if (top + h > window.innerHeight - 14) {
      top = Math.max(14, r.top - h - 10);
      pop.style.top = top + "px";
    }
    requestAnimationFrame(() => {
      const handler = () => closePopover();
      window.addEventListener("scroll", handler, { passive: true, once: true });
      pop.addEventListener("click", (e) => e.stopPropagation());
    });
  }

  function closePopover() {
    if (pop) {
      try {
        pop.hidePopover();
      } catch (_) {}
      pop.remove();
      pop = null;
    }
  }

  /* ---------- global listeners ---------- */

  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-open-settings]")) {
      e.preventDefault();
      openSettings();
    }
  });

  window.addEventListener("scroll", () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    const line = $("#scrollLine");
    if (line) line.style.transform = `scaleX(${p})`;
    $("#topbar").classList.toggle("is-scrolled", window.scrollY > 4);
  }, { passive: true });

  window.addEventListener("hashchange", route);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopover();
  });

  route();
})();
