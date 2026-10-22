/* SuttaPath — content audit.
 *
 * Read-only review pass over the BUILD output (assets/data/content.js), where
 * canon text has been resolved. Reports against the editorial budgets in
 * docs/STYLE_GUIDE.md and CONTENT_PLAN.md §10. Does not modify content.
 *
 * Usage: node scripts/audit.js [--quiet] [--json]
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const code = fs.readFileSync(path.join(ROOT, "assets", "data", "content.js"), "utf8");
const sandbox = {};
new Function("window", code)(sandbox);
const DATA = sandbox.SP_DATA;

const words = (s) => String(s || "").trim().split(/\s+/).filter(Boolean).length;
const sentences = (s) => (String(s || "").match(/[.!?]+(\s|$)/g) || []).length || 1;
const syllables = (w) => Math.max(1, (String(w).toLowerCase().match(/[aeiouy]+/g) || []).length);
function fkGrade(text) {
  const w = String(text || "").split(/\s+/).filter(Boolean);
  if (!w.length) return 0;
  const s = sentences(text);
  const sy = w.reduce((n, x) => n + syllables(x), 0);
  return 0.39 * (w.length / s) + 11.8 * (sy / w.length) - 15.59;
}

const report = [];
const add = (level, area, msg) => report.push({ level, area, msg });

const glossary = DATA.glossary;
const usedTerms = new Set();
let totalTrans = 0;
let totalWords = 0;

for (const s of DATA.sessions) {
  const trans = s.blocks.reduce((n, b) => n + words(b.text), 0);
  const para = s.blocks.reduce((n, b) => n + words(b.para), 0);
  const flat = [s.hook, s.oneIdea, s.context, s.inference, ...s.blocks.map((b) => b.para), s.reflection, s.practice].join(" ");
  totalTrans += trans;
  totalWords += trans + words(flat);

  const minWords = s.short ? 20 : 60;
  if (trans < minWords || trans > 400)
    add("warn", s.id, `translation ${trans} words (hard range ${minWords}–400${s.short ? ", short session" : ""})`);
  else if (trans < 150)
    add("info", s.id, `translation ${trans} words (target 150–400; accepted short excerpt)`);
  if (para > trans * 1.3)
    add("warn", s.id, `paraphrase ${para} words vs translation ${trans} (limit 1.3×)`);

  const ctx = words(s.context);
  if (ctx < 40) add("warn", s.id, `context ${ctx} words (hard floor 40)`);
  else if (ctx < 60) add("info", s.id, `context ${ctx} words (target 60–120)`);
  else if (ctx > 120) add("warn", s.id, `context ${ctx} words (target 60–120)`);

  const inf = words(s.inference);
  if (inf && (inf < 40 || inf > 80)) add("warn", s.id, `inference ${inf} words (target 40–80)`);
  if (words(s.practice) > 40) add("warn", s.id, `practice ${words(s.practice)} words (limit 40)`);

  const termCount = (s.terms || []).length;
  if (termCount < 3 || termCount > 5) add("warn", s.id, `${termCount} terms (target 3–5)`);
  for (const t of s.terms || []) usedTerms.add(t);

  s.blocks.forEach((b, i) => {
    if (words(b.para) > 40) add("warn", s.id, `block ${i + 1} paraphrase ${words(b.para)} words (limit 40)`);
  });

  const grade = fkGrade(s.blocks.map((b) => b.para).join(" "));
  if (grade > 12) add("info", s.id, `paraphrase reading grade ${grade.toFixed(1)} (target ≤ 10–12)`);
  if (s.minutes > 15) add("warn", s.id, `${s.minutes} min (limit 15)`);

  const items = s.retrieval || [];
  if (items.length !== 5) add("warn", s.id, `${items.length} retrieval items (need 5)`);
  items.forEach((it, i) => {
    if (!it.q || it.q.trim().length < 10) add("warn", s.id, `retrieval ${i + 1} question too short`);
    if (!it.a || it.a.trim().length < 3) add("warn", s.id, `retrieval ${i + 1} answer missing`);
  });
}
for (const id of ["4.4", "5.3", "5.5"]) {
  if (!DATA.sessions.find((s) => s.id === id && s.diagram))
    add("warn", id, "required structural diagram is missing");
}

const domainCount = {};
const questions = new Map();
const taught = new Map();
for (const s of DATA.sessions) for (const b of s.blocks) for (const u of b.uids) taught.set(u, s.id);
for (const sc of DATA.scenarios) {
  domainCount[sc.domain] = (domainCount[sc.domain] || 0) + 1;
  const q = sc.question.trim().toLowerCase();
  if (questions.has(q)) add("warn", sc.id, `duplicate live question with ${questions.get(q)}`);
  else questions.set(q, sc.id);
  if (words(sc.prompt) < 40) add("warn", sc.id, `prompt ${words(sc.prompt)} words (min 40)`);
  if (sc.seminar.length < 3) add("warn", sc.id, `${sc.seminar.length} seminar questions (min 3)`);
  if (!sc.counter || sc.counter.length < 2) add("warn", sc.id, "needs two counter-positions");
  if (String(sc.leavesOpen || "").length < 30)
    add("warn", sc.id, `leavesOpen too short (min 30 chars)`);

  const missing = (sc.anchor.uids || []).filter((u) => !taught.has(u));
  if (missing.length) add("warn", sc.id, `anchor segments not taught: ${missing.join(", ")}`);
  const sources = [...new Set((sc.anchor.uids || []).map((u) => taught.get(u)).filter(Boolean))];
  if (!sources.includes(sc.anchor.session))
    add("warn", sc.id, `anchor session ${sc.anchor.session} does not teach its passage`);
}

for (const t of DATA.tracks) {
  if (!t.goal) add("warn", `track ${t.id}`, "no learning goal");
}

for (const [k, t] of Object.entries(glossary)) {
  if (!t.respelling) add("warn", `glossary:${k}`, "missing respelling");
}
const orphans = Object.keys(glossary).filter((k) => !usedTerms.has(k));

console.log("SuttaPath content audit");
console.log("=======================");
console.log(`${DATA.sessions.length} sessions · ${DATA.checkpoints.length} checkpoints · ${DATA.scenarios.length} scenarios · ${Object.keys(glossary).length} terms`);
console.log(`Translation words: ${totalTrans} · Total reading words: ${totalWords}`);
console.log(`Scenario domains: ${Object.entries(domainCount).map(([d, n]) => d + " " + n).join(" · ")}`);
const totalMinutes = DATA.sessions.reduce((n, s) => n + s.minutes, 0) + DATA.checkpoints.reduce((n, c) => n + c.minutes, 0);
console.log(`Plan: ${totalMinutes} min (${(totalMinutes / 60).toFixed(1)} h) · ${Math.ceil(DATA.sessions.length / 2)} weeks at 2 sessions/week · ${Math.ceil(DATA.sessions.length / 3)} at 3`);
console.log(`Glossary: ${usedTerms.size} terms attached to sessions, ${orphans.length} reference-only`);

const order = { warn: 0, info: 1 };
report.sort((a, b) => order[a.level] - order[b.level]);
const counts = { warn: 0, info: 0 };
for (const r of report) {
  counts[r.level]++;
  if (process.argv.includes("--quiet") && r.level === "info") continue;
  console.log(`${r.level === "warn" ? "!" : "·"} [${r.area}] ${r.msg}`);
}
console.log(`\n${counts.warn} warning(s), ${counts.info} note(s).`);

if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ counts, orphans, report }, null, 2));
}
