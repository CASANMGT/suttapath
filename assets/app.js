/* SuttaPath — prototype app
   No framework, no build step. Static shell + hash router.
   Motion: custom ease-out curves, transform/opacity only, keyboard actions instant. */

(function () {
  "use strict";

  var DATA = window.SUTTAPATH;
  var root = document.documentElement;
  var main = document.getElementById("main");
  var topbar = document.getElementById("topbar");
  var dockSlot = document.getElementById("dockSlot");
  var popRoot = document.getElementById("popover-root");
  var scrollLine = document.getElementById("scrollLine");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------------- storage ---------------- */

  var store = {
    get: function (k, d) {
      try {
        var v = localStorage.getItem("sp." + k);
        return v === null ? d : JSON.parse(v);
      } catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem("sp." + k, JSON.stringify(v)); } catch (e) {}
    },
    del: function (k) {
      try { localStorage.removeItem("sp." + k); } catch (e) {}
    }
  };

  var state = {
    route: parseHash(),
    theme: store.get("theme", "auto"),
    scale: store.get("scale", 1),
    hasDock: false,
    instantModes: false
  };

  function parseHash() {
    var h = location.hash.replace(/^#\/?/, "");
    if (!h) return { name: "home" };
    var parts = h.split("/");
    if (parts[0] === "s" && parts[1]) return { name: "session", id: parts[1] };
    if (parts[0] === "about") return { name: "about" };
    return { name: "home" };
  }

  function sessionById(id) {
    for (var i = 0; i < DATA.sessions.length; i++) {
      if (DATA.sessions[i].id === id) return DATA.sessions[i];
    }
    return null;
  }

  function completedIds() { return store.get("done", []); }
  function isDone(id) { return completedIds().indexOf(id) !== -1; }
  function markDone(id) {
    var list = completedIds();
    if (list.indexOf(id) === -1) list.push(id);
    store.set("done", list);
  }

  function nextSession() {
    var done = completedIds();
    for (var i = 0; i < DATA.sessions.length; i++) {
      if (done.indexOf(DATA.sessions[i].id) === -1) return DATA.sessions[i];
    }
    return DATA.sessions[0];
  }

  /* ---------------- theme ---------------- */

  function applyTheme() {
    var t = state.theme;
    if (t === "auto") {
      t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    root.dataset.theme = t;
    var meta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (meta) meta.setAttribute("content", t === "dark" ? "#12110e" : "#f4f1e8");
  }

  function applyScale() {
    root.style.setProperty("--read-scale", String(state.scale));
  }

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    if (state.theme === "auto") applyTheme();
  });

  applyTheme();
  applyScale();

  /* ---------------- helpers ---------------- */

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function icon(name) {
    var p = {
      back: '<path d="M15 18l-6-6 6-6"/>',
      next: '<path d="M9 18l6-6-6-6"/>',
      arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
      settings: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2.2"/><circle cx="8" cy="17" r="2.2"/>',
      check: '<path d="M20 6L9 17l-5-5"/>',
      close: '<path d="M18 6L6 18M6 6l12 12"/>'
    };
    return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (p[name] || "") + "</svg>";
  }

  /* ---------------- view: topbar ---------------- */

  function renderTopbar(session) {
    if (!session) {
      topbar.innerHTML =
        '<span class="topbar__ref">SuttaPath</span>' +
        '<span class="topbar__spacer"></span>' +
        '<button class="icon-btn" data-act="settings" aria-label="Reading settings"><span class="aa" aria-hidden="true">Aa</span></button>';
      return;
    }
    topbar.innerHTML =
      '<button class="icon-btn" data-act="home" aria-label="Back to contents">' + icon("back") + "</button>" +
      '<span class="topbar__ref">' + esc(session.ref) + "</span>" +
      '<span class="topbar__title">' + esc(session.title) + "</span>" +
      '<button class="icon-btn" data-act="settings" aria-label="Reading settings"><span class="aa" aria-hidden="true">Aa</span></button>';
  }

  /* ---------------- view: home ---------------- */

  function renderHome() {
    var next = nextSession();
    var pct = Math.round((completedIds().length / DATA.sessions.length) * 100);

    var rows = DATA.sessions.map(function (s, i) {
      return (
        '<button class="session-row" data-go="' + s.id + '" style="--i:' + i + '">' +
          '<span class="session-row__num">' + (i + 1).toString().padStart(2, "0") + "</span>" +
          "<span>" +
            '<span class="session-row__title">' + esc(s.title) + "</span>" +
            '<span class="session-row__sub">' + esc(s.ref) + " · Track " + esc(s.track) + " · " + s.minutes + " min</span>" +
          "</span>" +
          '<span class="session-row__arrow">' + icon("arrow") + "</span>" +
        "</button>"
      );
    }).join("");

    return (
      '<div class="home"><div class="wrap">' +
        '<div class="masthead">' +
          '<div class="eyebrow">SuttaPath · three sample sessions</div>' +
          '<h1 class="display">Read it <em>yourself</em>.</h1>' +
          '<p class="dek">The Pali Canon is roughly eleven times the Bible. Nobody starts at the beginning. ' +
          "These are three sessions from a 36-session path for adults who would rather read the source than read about it.</p>" +
        "</div>" +

        '<button class="continue" data-go="' + next.id + '">' +
          '<span class="continue__top">' +
            '<span class="continue__label">' + (completedIds().length ? "Continue" : "Start here") + "</span>" +
            '<span class="continue__meta">' + esc(next.ref) + " · " + next.minutes + " min</span>" +
          "</span>" +
          '<span class="continue__title">' + esc(next.title) + "</span>" +
          '<span class="continue__hook">' + esc(next.hook) + "</span>" +
          (pct > 0
            ? '<span class="continue__bar" aria-hidden="true"><i style="width:' + pct + '%"></i></span>'
            : "") +
        "</button>" +

        '<div class="list-head"><h2>The samples</h2><span>' + completedIds().length + " / " + DATA.sessions.length + " read</span></div>" +
        rows +

        '<div class="home-foot">' +
          "<span>Sample translation, not the final text.</span>" +
          '<button class="linkish" data-act="about">About this prototype</button>' +
        "</div>" +
      "</div></div>"
    );
  }

  /* ---------------- view: about ---------------- */

  function renderAbout() {
    return (
      '<div class="about"><div class="wrap"><div class="prose">' +
        "<h1>About this prototype</h1>" +
        "<p>This is a design prototype for SuttaPath, a study app for the Theravāda Pali Canon, " +
        "aimed at English-speaking adults with no background in Buddhism.</p>" +

        "<h2>What is real here</h2>" +
        "<p>The structure, the reading interface, the pacing, the offline behaviour, and the editorial stance. " +
        "Three sessions are complete enough to test whether the three-mode reader — Read, Understand, Live — " +
        "actually helps someone finish a sutta and know what to do with it.</p>" +

        "<h2>What is not real here</h2>" +
        "<p>The translations are a working rendering written for this prototype. They are not the " +
        "SuttaCentral / Bhikkhu Sujato translation, and they are not authoritative. The production app " +
        "ingests CC0 SuttaCentral text at segment level and never edits it. Any sentence in this prototype " +
        "that draws a conclusion from the text is marked as an inference, and rendered differently from " +
        "quotation on purpose.</p>" +

        "<h2>Three modes</h2>" +
        "<ul>" +
        "<li><b>Read</b> — the text alone. Nothing added.</li>" +
        "<li><b>Understand</b> — the text, with a plain reading beneath each passage, and the context that a " +
        "2,300-year-old conversation needs.</li>" +
        "<li><b>Live</b> — one question, one practice, one place to write. Private, local, exportable.</li>" +
        "</ul>" +

        "<h2>Editorial rules this prototype follows</h2>" +
        "<p>No paraphrase replaces the source. No correct answers are revealed. Every session states where " +
        "the canon is silent. Nothing leaves the device: there is no account, no server, no analytics.</p>" +

        '<p class="small">SuttaPath is a working title. The full path is six tracks and 36 sessions. ' +
        "Sources for the production build: SuttaCentral bilara-data, CC0.</p>" +

        '<p style="margin-top:28px"><button class="btn btn--ghost" data-act="home">Back to the contents</button></p>' +
      "</div></div></div>"
    );
  }

  /* ---------------- view: session ---------------- */

  function termLink(termId, label) {
    return '<button class="term" data-term="' + esc(termId) + '" type="button" ' +
      'aria-label="' + esc(label) + ' — what does this mean?">' + esc(label) + "</button>";
  }

  function applyMarks(text, marks) {
    var out = esc(text);
    (marks || []).forEach(function (m) {
      var needle = esc(m.quote);
      var idx = out.indexOf(needle);
      if (idx === -1) return;
      out = out.slice(0, idx) +
        '<button class="term" type="button" data-term="' + esc(m.term) + '" ' +
        'aria-label="' + esc(m.quote) + ' — what does this mean?">' + needle + "</button>" +
        out.slice(idx + needle.length);
    });
    return out;
  }

  function renderRead(s) {
    var segs = s.segments.map(function (seg, i) {
      return (
        '<div class="seg">' +
          '<span class="seg__num" aria-hidden="true">' + esc(seg.uid.split(":")[1] || (i + 1)) + "</span>" +
          '<p class="seg__text">' + applyMarks(seg.en, seg.marks) + "</p>" +
        "</div>"
      );
    }).join("");

    return (
      '<section class="panel" data-panel="read" role="tabpanel" aria-label="Read">' +
        '<div class="reader">' + segs + "</div>" +
        '<p class="finish-note" style="margin-top:38px">' +
          "Working translation · prototype. Replace with ingested CC0 text before release." +
        "</p>" +
      "</section>"
    );
  }

  function renderUnderstand(s) {
    var segs = s.segments.map(function (seg) {
      return (
        '<div class="seg">' +
          '<p class="seg__text" style="font-size:16.5px;color:var(--ink-2)">' + applyMarks(seg.en, seg.marks) + "</p>" +
          '<p class="seg__para">' + esc(seg.para) + "</p>" +
        "</div>"
      );
    }).join("");

    var recip = "";
    if (s.directions) {
      recip =
        '<h2 class="section-label">Duties run both ways</h2>' +
        '<div class="recip">' +
          s.directions.map(function (d, i) {
            return '<button class="recip__row" data-goto-seg="' + (i + 4) + '">' +
              '<span class="recip__dir">' + esc(d.dir) + "</span>" +
              '<span class="recip__who">' + esc(d.who) + "</span>" +
              '<span class="recip__ex">' + esc(d.ex[0]) + "<b>\u2194</b>" + esc(d.ex[1]) + "</span>" +
            "</button>";
          }).join("") +
        "</div>" +
        '<p class="finish-note" style="margin-top:12px">The sutta keeps the ritual and changes the referent. ' +
        "Tap a row to find it in the passage.</p>";
    }

    var terms = s.terms.map(function (id) {
      var t = DATA.terms[id];
      if (!t) return "";
      return '<button class="term-card" data-term="' + id + '">' +
        '<span class="term-card__pali">' + esc(t.pali) + "</span>" +
        '<span class="term-card__gloss">' + esc(t.literal) + "</span></button>";
    }).join("");

    return (
      '<section class="panel" data-panel="understand" role="tabpanel" aria-label="Understand" hidden>' +
        '<div class="note"><span class="note__label">What is happening here</span>' + esc(s.context) + "</div>" +
        (s.inferenceNote
          ? '<div class="note note--inference"><span class="note__label">Our reading — not the text</span>' +
            esc(s.inferenceNote) + "</div>"
          : "") +
        recip +
        '<h2 class="section-label">Passage by passage</h2>' +
        segs +
        '<h2 class="section-label">Words worth keeping</h2>' +
        '<div class="term-list">' + terms + "</div>" +
      "</section>"
    );
  }

  function renderLive(s) {
    var journal = store.get("journal." + s.id, "");
    var done = isDone(s.id);
    return (
      '<section class="panel" data-panel="live" role="tabpanel" aria-label="Live" hidden>' +
        '<div class="live-block">' +
          '<h3>One question</h3>' +
          '<p class="live-q">' + esc(s.reflection) + "</p>" +
          '<label for="journal" class="field-label">Your answer, if you want to give one</label>' +
          '<textarea id="journal" class="journal" placeholder="Private. Saved on this device only." spellcheck="true">' + esc(journal) + "</textarea>" +
          '<span class="save-state" id="saveState">Saved</span>' +
        "</div>" +

        '<div class="live-block">' +
          '<h3>One practice</h3>' +
          '<div class="practice"><span class="practice__meta">This week</span>' + esc(s.practice) + "</div>" +
        "</div>" +

        (done
          ? '<div class="completion">' + icon("check") +
            "<span><b>Session complete.</b> Nothing was scored, and nothing was sent anywhere. " +
            "The next one is waiting when you want it.</span></div>"
          : '<div class="finish-row">' +
            '<button class="btn" data-act="finish" data-id="' + s.id + '">Finish session</button>' +
            '<span class="finish-note">No score. No streak. No notification.</span>' +
            "</div>") +

        '<p class="finish-note" style="margin-top:34px">' +
          "If this practice destabilises you, stop. Breath and body practices are not suitable for everyone." +
        "</p>" +
      "</section>"
    );
  }

  function renderSession(s) {
    var mode = store.get("mode." + s.id, "read");
    var idx = DATA.sessions.indexOf(s);
    var prev = idx > 0 ? DATA.sessions[idx - 1] : null;
    var nxt = idx < DATA.sessions.length - 1 ? DATA.sessions[idx + 1] : null;

    var body =
      '<article class="session"><div class="wrap wrap--wide">' +
        '<header class="session-head">' +
          '<div class="session-head__ref"><b>' + esc(s.ref) + "</b><i></i><span>Session " + esc(s.id) + "</span>" +
          "<i></i><span>" + s.minutes + " min</span></div>" +
          '<h1 class="session-title">' + esc(s.title) + "</h1>" +
          '<p class="session-hook">' + esc(s.hook) + "</p>" +
          '<div class="one-idea"><span class="one-idea__label">One idea</span><p>' + esc(s.oneIdea) + "</p></div>" +
        "</header>" +
        '<div id="modeAnim">' +
          renderRead(s) + renderUnderstand(s) + renderLive(s) +
        "</div>" +

        '<nav class="session-nav" style="display:flex;justify-content:space-between;gap:12px;margin-top:44px;padding-top:22px;border-top:1px solid var(--line)">' +
          (prev ? '<button class="btn btn--ghost" data-go="' + prev.id + '">← ' + esc(prev.title) + "</button>" : "<span></span>") +
          (nxt ? '<button class="btn btn--ghost" data-go="' + nxt.id + '">' + esc(nxt.title) + " →</button>" : "<span></span>") +
        "</nav>" +
      "</div></article>";

    return { body: body, mode: mode };
  }

  function renderDock(s, mode) {
    var modes = ["read", "understand", "live"];
    var labels = { read: "Read", understand: "Understand", live: "Live" };
    var i = Math.max(0, modes.indexOf(mode));
    var sampleIndex = DATA.sessions.indexOf(s) + 1;

    return (
      '<nav class="dock" aria-label="Session modes"' + (state.hasDock ? ' style="animation:none;opacity:1;transform:none"' : "") + ">" +
        '<div class="modes" role="tablist" aria-label="Reading mode" style="--i:' + i + '">' +
          '<span class="modes__pill" aria-hidden="true"></span>' +
          modes.map(function (m) {
            return '<button class="mode-btn" role="tab" data-mode="' + m + '" ' +
              'aria-selected="' + (m === mode) + '">' + labels[m] + "</button>";
          }).join("") +
        "</div>" +
        '<span class="dock__divider" aria-hidden="true"></span>' +
        '<span class="dock__count">' + sampleIndex + " / " + DATA.sessions.length + "</span>" +
      "</nav>"
    );
  }

  /* ---------------- render ---------------- */

  function render() {
    var r = state.route;
    var session = r.name === "session" ? sessionById(r.id) : null;

    if (r.name === "session" && !session) {
      location.replace("#/");
      return;
    }

    var prevHasDock = state.hasDock;
    var html;
    var mode = "read";

    if (session) {
      renderTopbar(session);
      var out = renderSession(session);
      html = out.body;
      mode = out.mode;
    } else if (r.name === "about") {
      renderTopbar(null);
      html = renderAbout();
    } else {
      renderTopbar(null);
      html = renderHome();
    }

    main.innerHTML = html;
    document.title = session ? session.title + " · SuttaPath" : "SuttaPath — read the Pali Canon yourself";

    if (session) {
      dockSlot.innerHTML = renderDock(session, mode);
      state.hasDock = true;
      setMode(mode, true);
      bindSession(session);
    } else {
      dockSlot.innerHTML = "";
      state.hasDock = false;
    }

    updateScrollLine();
    topbar.classList.toggle("is-scrolled", window.scrollY > 6);
  }

  /* ---------------- mode switching ---------------- */

  function setMode(mode, instant) {
    var modesEl = document.querySelector(".modes");
    var pill = document.querySelector(".modes__pill");
    var panels = document.querySelectorAll("[data-panel]");
    var tabs = document.querySelectorAll(".mode-btn");
    var order = ["read", "understand", "live"];
    var i = order.indexOf(mode);
    if (i < 0) i = 0;

    if (pill) {
      if (instant || reduceMotion.matches) {
        pill.style.transition = "none";
        requestAnimationFrame(function () { pill.style.transition = ""; });
      }
      modesEl.style.setProperty("--i", i);
    }

    panels.forEach(function (p) {
      var on = p.dataset.panel === mode;
      if (on === !p.hidden) return;
      p.hidden = !on;
      if (on && !instant && !reduceMotion.matches) {
        p.animate(
          [
            { opacity: 0, transform: "translateY(4px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          { duration: 190, easing: "cubic-bezier(0.23, 1, 0.32, 1)" }
        );
      }
    });

    tabs.forEach(function (t) {
      t.setAttribute("aria-selected", String(t.dataset.mode === mode));
      t.tabIndex = t.dataset.mode === mode ? 0 : -1;
    });

    if (state.route.name === "session" && state.route.id) {
      store.set("mode." + state.route.id, mode);
    }
    state.mode = mode;
  }

  /* ---------------- session bindings ---------------- */

  var saveTimer = null;

  function bindSession(s) {
    var journal = document.getElementById("journal");
    var saveState = document.getElementById("saveState");

    if (journal) {
      journal.addEventListener("input", function () {
        clearTimeout(saveTimer);
        saveTimer = setTimeout(function () {
          store.set("journal." + s.id, journal.value);
          if (saveState) {
            saveState.classList.add("is-on");
            clearTimeout(saveState._t);
            saveState._t = setTimeout(function () {
              saveState.classList.remove("is-on");
            }, 1400);
          }
        }, 500);
      });
    }
  }

  /* ---------------- global bindings ---------------- */

  function topbarClick(e) {
    var btn = e.target.closest("[data-act]");
    if (!btn) return;
    var act = btn.dataset.act;
    if (act === "home") go("/");
    if (act === "settings") openSettings();
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-go]");
    if (el) { go("/s/" + el.dataset.go); return; }

    var act = e.target.closest("[data-act]");
    if (act) {
      var a = act.dataset.act;
      if (a === "about") { go("/about"); return; }
      if (a === "finish") {
        markDone(act.dataset.id);
        render();
        var panel = document.querySelector('[data-panel="live"]');
        if (panel) panel.scrollIntoView({ block: "start", behavior: reduceMotion.matches ? "auto" : "smooth" });
        return;
      }
      if (a === "home") { go("/"); return; }
      if (a === "close-sheet") { closeSheet(); return; }
    }

    var gs = e.target.closest("[data-goto-seg]");
    if (gs) {
      var pos = parseInt(gs.dataset.gotoSeg, 10);
      var panels = document.querySelectorAll('[data-panel="understand"] .seg');
      var target = panels[pos - 1];
      if (target) {
        target.scrollIntoView({ block: "center", behavior: reduceMotion.matches ? "auto" : "smooth" });
        target.animate(
          [{ background: "var(--accent-soft)" }, { background: "transparent" }],
          { duration: 1200, easing: "ease-out" }
        );
      }
      return;
    }

    var modeBtn = e.target.closest("[data-mode]");
    if (modeBtn) { setMode(modeBtn.dataset.mode, state.instantModes); return; }

    var termEl = e.target.closest("[data-term]");
    if (termEl) { openTerm(termEl); return; }
  });

  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea") return;

    if (state.route.name === "session") {
      if (e.key === "1") { state.instantModes = true; setMode("read", true); state.instantModes = false; }
      if (e.key === "2") { state.instantModes = true; setMode("understand", true); state.instantModes = false; }
      if (e.key === "3") { state.instantModes = true; setMode("live", true); state.instantModes = false; }
    }
    if (e.key === "Escape") closeSheet();
  });

  window.addEventListener("popstate", function () {
    state.route = parseHash();
    render();
    window.scrollTo(0, 0);
  });

  function go(path) {
    var run = function () {
      history.pushState({}, "", "#" + path);
      state.route = parseHash();
      render();
      window.scrollTo(0, 0);
    };
    if (document.startViewTransition && !reduceMotion.matches) {
      document.startViewTransition(run);
    } else {
      run();
    }
  }

  /* ---------------- scroll ---------------- */

  function updateScrollLine() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? window.scrollY / h : 0;
    scrollLine.style.transform = "scaleX(" + Math.min(1, Math.max(0, p)) + ")";
    scrollLine.style.opacity = state.route.name === "session" ? "0.8" : "0";
  }

  var rafPending = false;
  window.addEventListener("scroll", function () {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(function () {
      updateScrollLine();
      topbar.classList.toggle("is-scrolled", window.scrollY > 6);
      var pop = document.querySelector(".term-pop");
      if (pop && pop.matches(":popover-open")) pop.hidePopover();
      rafPending = false;
    });
  }, { passive: true });

  window.addEventListener("resize", function () {
    var pop = document.querySelector(".term-pop");
    if (pop && pop.matches(":popover-open")) pop.hidePopover();
  });

  /* ---------------- term popover ---------------- */

  function ensurePop() {
    var pop = document.querySelector(".term-pop");
    if (pop) return pop;
    pop = document.createElement("div");
    pop.className = "term-pop";
    pop.setAttribute("popover", "auto");
    popRoot.appendChild(pop);
    return pop;
  }

  function openTerm(el) {
    var id = el.dataset.term;
    var t = DATA.terms[id];
    if (!t) return;

    var pop = ensurePop();
    pop.innerHTML =
      '<p class="term-pop__pali">' + esc(t.pali) + "</p>" +
      '<p class="term-pop__say">' + esc(t.ipa) + " · " + esc(t.respelling) + "</p>" +
      '<p class="term-pop__lit"><b>Literally</b> — ' + esc(t.literal) + "</p>" +
      '<p class="term-pop__here">' + esc(t.here) + "</p>" +
      (t.related && t.related.length
        ? '<p class="term-pop__rel">see also ' + t.related.map(esc).join(" · ") + "</p>"
        : "");

    if (pop.matches(":popover-open")) pop.hidePopover();
    pop.showPopover();

    pop.style.left = "0px";
    pop.style.top = "0px";

    var r = el.getBoundingClientRect();
    var pr = pop.getBoundingClientRect();
    var left = r.left + r.width / 2 - pr.width / 2;
    left = Math.max(12, Math.min(left, window.innerWidth - pr.width - 12));

    var above = false;
    var top = r.bottom + 10;
    if (top + pr.height > window.innerHeight - 12) {
      top = r.top - pr.height - 10;
      above = true;
    }
    top = Math.max(12, top);

    pop.style.left = left + "px";
    pop.style.top = top + "px";

    var originX = ((r.left + r.width / 2 - left) / pr.width) * 100;
    pop.style.setProperty("--origin", originX + "% " + (above ? "100%" : "0%"));
  }

  /* ---------------- settings sheet ---------------- */

  function openSettings() {
    closeSheet();
    var themes = [
      ["auto", "Auto"],
      ["light", "Light"],
      ["sepia", "Sepia"],
      ["dark", "Dark"]
    ];
    var scales = [
      [0.92, "A−"],
      [1, "A"],
      [1.12, "A+"]
    ];

    var el = document.createElement("div");
    el.className = "sheet";
    el.id = "sheet";
    el.innerHTML =
      '<div class="sheet__panel" role="dialog" aria-modal="true" aria-label="Reading settings">' +
        '<h2 class="sheet__title">Reading</h2>' +
        '<div class="setting"><span class="setting__label">Theme</span>' +
          '<div class="seg-ctl">' + themes.map(function (t) {
            return '<button data-theme-set="' + t[0] + '" aria-pressed="' + (state.theme === t[0]) + '">' + t[1] + "</button>";
          }).join("") + "</div>" +
        "</div>" +
        '<div class="setting"><span class="setting__label">Text size</span>' +
          '<div class="seg-ctl">' + scales.map(function (s) {
            return '<button data-scale-set="' + s[0] + '" aria-pressed="' + (state.scale === s[0]) + '">' + s[1] + "</button>";
          }).join("") + "</div>" +
        "</div>" +
        '<div class="setting"><span class="setting__label">Progress</span>' +
          '<button class="linkish" data-act="reset">Clear this device</button>' +
        "</div>" +
        '<div class="setting" style="border-bottom:0;padding-bottom:4px">' +
          '<span class="finish-note">Stored locally. Nothing is uploaded.</span>' +
          '<button class="btn btn--ghost" style="min-height:38px;padding:0 14px" data-act="close-sheet">Done</button>' +
        "</div>" +
      "</div>";

    document.body.appendChild(el);
    el.addEventListener("click", function (e) {
      if (e.target === el) { closeSheet(); return; }
      var th = e.target.closest("[data-theme-set]");
      if (th) {
        state.theme = th.dataset.themeSet;
        store.set("theme", state.theme);
        applyTheme();
        el.querySelectorAll("[data-theme-set]").forEach(function (b) {
          b.setAttribute("aria-pressed", String(b.dataset.themeSet === state.theme));
        });
        return;
      }
      var sc = e.target.closest("[data-scale-set]");
      if (sc) {
        state.scale = parseFloat(sc.dataset.scaleSet);
        store.set("scale", state.scale);
        applyScale();
        el.querySelectorAll("[data-scale-set]").forEach(function (b) {
          b.setAttribute("aria-pressed", String(parseFloat(b.dataset.scaleSet) === state.scale));
        });
        return;
      }
      var rs = e.target.closest('[data-act="reset"]');
      if (rs) {
        ["done", "theme", "scale"].forEach(store.del);
        DATA.sessions.forEach(function (s) {
          store.del("journal." + s.id);
          store.del("mode." + s.id);
        });
        closeSheet();
        render();
      }
    });

    var first = el.querySelector("button");
    if (first) first.focus({ preventScroll: true });
  }

  function closeSheet() {
    var el = document.getElementById("sheet");
    if (el) el.remove();
  }

  /* ---------------- boot ---------------- */

  topbar.addEventListener("click", topbarClick);
  render();

  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }
})();
