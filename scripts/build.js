/* SuttaPath — build.
 *
 * Resolves editorial UIDs against the pinned canon snapshot, validates every
 * citation, and emits assets/data/content.js for the app.
 *
 * The build FAILS on a broken citation. That is the point.
 *
 * Usage: node scripts/build.js [--check]
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const CANON = path.join(ROOT, "content", "canon");
const OUT = path.join(ROOT, "assets", "data", "content.js");
const REPORT = path.join(ROOT, "docs", "citations.csv");

const sessionsSrc = require(path.join(ROOT, "content", "sessions.js"));
const appendix = require(path.join(ROOT, "content", "appendix.js"));
const retrieval = require(path.join(ROOT, "content", "retrieval.js"));
const visuals = require(path.join(ROOT, "content", "visuals.js"));
const changelog = require(path.join(ROOT, "content", "changelog.js"));

const errors = [];
const warnings = [];
const fail = (m) => errors.push(m);

/* ---------- load canon ---------- */
const canon = new Map();
for (const file of fs.readdirSync(CANON)) {
  if (!file.endsWith(".json") || file === "manifest.json") continue;
  const rec = JSON.parse(fs.readFileSync(path.join(CANON, file), "utf8"));
  canon.set(rec.uid, rec);
}

const index = new Map();
const uidSutta = new Map();
for (const rec of canon.values()) {
  const map = new Map();
  rec.segments.forEach((s, i) => {
    map.set(s.uid, i);
    uidSutta.set(s.uid, rec.uid);
  });
  index.set(rec.uid, map);
}
const emptyUid = new Set();
for (const rec of canon.values()) {
  for (const s of rec.segments) if (!s.text) emptyUid.add(s.uid);
}

function suttaOf(uid) {
  return uidSutta.get(uid) || uid.replace(/:[^:]+$/, "");
}

function resolve(uids, { verse = false } = {}) {
  const out = [];
  for (const uid of uids) {
    const sutta = suttaOf(uid);
    const rec = canon.get(sutta);
    if (!rec) {
      fail(`citation: unknown sutta "${sutta}" in ${uid}`);
      continue;
    }
    const seg = rec.segments.find((s) => s.uid === uid);
    if (!seg) {
      fail(`citation: unknown segment "${uid}"`);
      continue;
    }
    if (!seg.text) continue;
    out.push(seg.text);
  }
  let text = out.join(verse ? "\n" : " ");
  text = text.replace(/\s+([,.;:!?])/g, "$1");
  text = verse ? text.replace(/[ \t]*\n[ \t]*/g, "\n") : text.replace(/\s+/g, " ");
  text = text.trim();
  text = text.replace(/^["“]/, "").replace(/["”]$/, "");
  return text;
}

function checkContiguous(uids, label) {
  const bySutta = {};
  for (const uid of uids) (bySutta[suttaOf(uid)] = bySutta[suttaOf(uid)] || []).push(uid);
  for (const [sutta, list] of Object.entries(bySutta)) {
    const map = index.get(sutta);
    const idx = list.map((u) => map.get(u)).sort((a, b) => a - b);
    for (let i = 1; i < idx.length; i++) {
      for (let k = idx[i - 1] + 1; k < idx[i]; k++) {
        const gapUid = canon.get(sutta).segments[k].uid;
        if (!emptyUid.has(gapUid)) {
          fail(`${label}: non-contiguous range, skipped "${gapUid}" between "${list[i - 1]}" and "${list[i]}"`);
        }
      }
    }
  }
}

/* ---------- sessions ---------- */
const ids = new Set();
const terms = appendix.glossary;

for (const [key, t] of Object.entries(terms)) {
  if (!t.pali || !t.literal || !t.here) fail(`glossary "${key}": needs pali, literal, and here`);
  for (const r of t.related || []) {
    if (!terms[r]) fail(`glossary "${key}": related term "${r}" not in glossary`);
  }
}
const seenUidPerSession = new Map();

for (const s of sessionsSrc.sessions) {
  const where = `session ${s.id}`;

  if (ids.has(s.id)) fail(`${where}: duplicate id`);
  ids.add(s.id);
  if (s.id !== `${s.track}.${s.order}`) fail(`${where}: id does not match track.order`);
  if (!sessionsSrc.tracks.some((t) => t.id === s.track)) fail(`${where}: unknown track ${s.track}`);
  if (!sessionsSrc.tracks.find((t) => t.id === s.track).goal) fail(`track ${s.track}: no goal`);

  if (!s.ref || !String(s.ref).trim()) fail(`${where}: missing "ref"`);
  for (const field of ["title", "hook", "oneIdea", "context", "reflection", "practice"]) {
    if (!s[field] || String(s[field]).trim().length < 8) fail(`${where}: missing or short "${field}"`);
  }
  const minBlocks = s.short ? 2 : 3;
  if (!s.blocks || s.blocks.length < minBlocks) fail(`${where}: needs at least ${minBlocks} text blocks`);

  const ctxWords = (s.context || "").split(/\s+/).length;
  if (ctxWords < 40 || ctxWords > 150) warnings.push(`${where}: context is ${ctxWords} words (target 60-120)`);
  if ((s.practice || "").split(/\s+/).length > 45) warnings.push(`${where}: practice over 45 words`);
  if ((s.oneIdea || "").split(/\s+/).length > 24) warnings.push(`${where}: oneIdea over 24 words`);

  for (const t of s.terms || []) if (!terms[t]) fail(`${where}: term "${t}" not in glossary`);

  const items = retrieval[s.id] || [];
  if (items.length !== 5) fail(`${where}: needs 5 retrieval items (has ${items.length})`);
  items.forEach((it, i) => {
    if (!it.q || String(it.q).trim().length < 10) fail(`${where}: retrieval ${i + 1} has no question`);
    if (!it.a || String(it.a).trim().length < 3) fail(`${where}: retrieval ${i + 1} has no answer`);
  });
  s.retrieval = items;

  if (visuals[s.id]) {
    const d = visuals[s.id];
    if (!["flow", "groups"].includes(d.type)) fail(`${where}: diagram type must be flow or groups`);
    if (!d.title) fail(`${where}: diagram needs a title`);
    if (d.type === "flow" && !(d.steps || []).every((x) => x.label)) fail(`${where}: flow diagram step missing a label`);
    if (d.type === "groups" && !(d.groups || []).every((g) => g.name && (g.factors || []).length)) fail(`${where}: group diagram needs a name and factors`);
    s.diagram = d;
  }
  const seen = new Set();
  s.blocks.forEach((b, i) => {
    const label = `${where} block ${i + 1}`;
    if (!b.uids || !b.uids.length) return fail(`${label}: no uids`);
    if (!b.para) fail(`${label}: no paraphrase`);
    for (const uid of b.uids) {
      if (!canon.has(suttaOf(uid))) fail(`${label}: unknown sutta for ${uid}`);
      if (seen.has(uid)) fail(`${label}: duplicate uid ${uid}`);
      seen.add(uid);
    }
    checkContiguous(b.uids, label);
    b.text = resolve(b.uids, { verse: b.verse });
    if (b.mark && !b.text.includes(b.mark)) fail(`${label}: mark "${b.mark}" not present in resolved text`);
    if (b.para && b.para.split(/\s+/).length > 40) warnings.push(`${label}: paraphrase over 40 words`);
  });
  seenUidPerSession.set(s.id, seen);
}

/* checkpoint ids are separate */
for (const c of sessionsSrc.checkpoints || []) {
  if (ids.has(c.id)) fail(`checkpoint ${c.id}: duplicate id`);
  ids.add(c.id);
  for (const p of c.passages || []) {
    p.text = resolve(p.uids, { verse: p.verse });
    checkContiguous(p.uids, `checkpoint ${c.id}`);
  }
  if (!c.question) fail(`checkpoint ${c.id}: no question`);
}

/* ---------- scenarios ---------- */
for (const sc of appendix.scenarios) {
  if (!sc.prompt || sc.prompt.split(/\s+/).length < 40) fail(`scenario ${sc.id}: prompt too short`);
  if (!sc.leavesOpen || sc.leavesOpen.length < 30) fail(`scenario ${sc.id}: leavesOpen too short`);
  if (!sc.seminar || sc.seminar.length < 3) fail(`scenario ${sc.id}: needs 3 seminar questions`);
  const a = sc.anchor || {};
  if (!ids.has(a.session)) fail(`scenario ${sc.id}: anchor session "${a.session}" not found`);
  if (!a.uids || !a.uids.length) fail(`scenario ${sc.id}: no anchor uids`);
  else checkContiguous(a.uids, `scenario ${sc.id}`);
  a.text = resolve(a.uids || []);

  const sources = [];
  for (const [sid, seen] of seenUidPerSession) {
    if (a.uids.some((u) => seen.has(u))) sources.push(sid);
  }
  for (const uid of a.uids) {
    if (!sources.length || ![...seenUidPerSession.values()].some((set) => set.has(uid)))
      fail(`scenario ${sc.id}: anchor segment "${uid}" is not taught by any session`);
  }
  if (!sources.includes(a.session))
    fail(`scenario ${sc.id}: anchor session ${a.session} does not cite its own passage (sources: ${sources.join(", ") || "none"})`);
  a.sources = sources;
}

/* ---------- changelog ---------- */
if (!changelog || !Array.isArray(changelog.releases) || !changelog.releases.length) {
  fail("changelog: no releases");
} else {
  changelog.releases.forEach((r, i) => {
    if (!r.version) fail(`changelog release ${i + 1}: no version`);
    if (!r.name) fail(`changelog ${r.version}: no name`);
    if (!r.summary) fail(`changelog ${r.version}: no summary`);
    if (!Array.isArray(r.groups) || !r.groups.length) fail(`changelog ${r.version}: no groups`);
    (r.groups || []).forEach((g) => {
      if (!g.label || !(g.items || []).length) fail(`changelog ${r.version}: group needs a label and items`);
    });
  });
}

/* ---------- emit ---------- */
if (errors.length) {
  console.error(`\nBUILD FAILED — ${errors.length} error(s):\n`);
  for (const e of errors) console.error("  ✗ " + e);
  if (warnings.length) {
    console.error(`\n${warnings.length} warning(s):`);
    for (const w of warnings) console.error("  · " + w);
  }
  process.exit(1);
}

if (process.argv.includes("--check")) {
  console.log(`OK — ${sessionsSrc.sessions.length} sessions, ${(sessionsSrc.checkpoints || []).length} checkpoint(s), ${appendix.scenarios.length} scenarios, ${Object.keys(terms).length} terms.`);
  if (warnings.length) warnings.forEach((w) => console.log("  · " + w));
  process.exit(0);
}

const payload = {
  meta: sessionsSrc.meta,
  tracks: sessionsSrc.tracks,
  sessions: sessionsSrc.sessions,
  checkpoints: sessionsSrc.checkpoints || [],
  scenarios: appendix.scenarios,
  glossary: terms,
  changelog,
  builtAt: new Date().toISOString(),
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, "/* GENERATED by scripts/build.js — do not edit. */\nwindow.SP_DATA = " + JSON.stringify(payload, null, 2) + ";\n", "utf8");

/* citation report */
fs.mkdirSync(path.dirname(REPORT), { recursive: true });
const rows = [["unit", "block", "sutta", "segment_uids", "segments", "status"]];
for (const s of sessionsSrc.sessions) {
  s.blocks.forEach((b, i) => {
    const suttas = [...new Set(b.uids.map(suttaOf))];
    rows.push([s.id, i + 1, suttas.join(";"), b.uids.join(";"), b.uids.length, "verified"]);
  });
}
for (const c of sessionsSrc.checkpoints || []) {
  c.passages.forEach((p, i) => {
    rows.push([c.id, `p${i + 1}`, [...new Set(p.uids.map(suttaOf))].join(";"), p.uids.join(";"), p.uids.length, "verified"]);
  });
}
for (const sc of appendix.scenarios) {
  rows.push([sc.id, "anchor", [...new Set(sc.anchor.uids.map(suttaOf))].join(";"), sc.anchor.uids.join(";"), sc.anchor.uids.length, "verified"]);
}
const csv = rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
fs.writeFileSync(REPORT, csv + "\n", "utf8");

console.log(`Built ${OUT}`);
console.log(`  ${payload.sessions.length} sessions · ${payload.checkpoints.length} checkpoint · ${payload.scenarios.length} scenarios · ${Object.keys(payload.glossary).length} terms`);
console.log(`  ${rows.length - 1} citations verified against ${canon.size} suttas`);
console.log(`  ${Object.keys(retrieval).length} retrieval sets · ${Object.keys(visuals).length} diagrams`);
if (warnings.length) {
  console.log(`  ${warnings.length} warning(s):`);
  warnings.forEach((w) => console.log("    · " + w));
}
