/* SuttaPath — review status.
 *
 * Reads docs/review/verdicts.json and reports which sessions have been
 * signed off, which are outstanding, and whether a release may proceed.
 *
 * Usage:
 *   node scripts/review-status.js
 *   node scripts/review-status.js --require   # exit 1 unless all clear
 *   node scripts/review-status.js --json
 */
const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "docs", "review", "verdicts.json");
const STATUSES = ["pending", "pass", "minor", "revise"];

const SCHOLAR = ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "C1", "C2", "C3", "C4", "C5", "C6", "D1", "D2", "D3", "D4", "D5", "D6"];
const CLINICAL = ["4.6", "6.5", "B1", "B6", "C5"];

function load() {
  if (!fs.existsSync(FILE)) {
    console.error(`Missing ${FILE}. Copy the template from VERDICTS.md.`);
    process.exit(2);
  }
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf8"));
  } catch (e) {
    console.error(`verdicts.json is not valid JSON: ${e.message}`);
    process.exit(2);
  }
}

function checkSection(name, data, expected) {
  const errors = [];
  const states = (data && data.sessions) || {};
  for (const id of expected) if (!states[id]) errors.push(`${name}: missing "${id}"`);
  for (const id of Object.keys(states)) if (!expected.includes(id)) errors.push(`${name}: unknown "${id}"`);
  for (const [id, st] of Object.entries(states)) {
    if (!STATUSES.includes(st)) errors.push(`${name}: ${id} has invalid status "${st}"`);
  }
  return errors;
}

function summarise(name, data, expected) {
  const states = (data && data.sessions) || {};
  const done = expected.filter((id) => ["pass", "minor"].includes(states[id]));
  const revise = expected.filter((id) => states[id] === "revise");
  const pending = expected.filter((id) => states[id] === "pending");
  return { name, total: expected.length, done, revise, pending };
}

function main() {
  const data = load();
  const errors = [
    ...checkSection("scholar", data.scholar, SCHOLAR),
    ...checkSection("clinical", data.clinical, CLINICAL),
  ];

  const scholar = summarise("scholar", data.scholar, SCHOLAR);
  const clinical = summarise("clinical", data.clinical, CLINICAL);
  const pilot = data.pilot || {};
  const pilotDone = ["level1", "level2"].every((g) => ["pass", "fail"].includes(pilot[g]));

  if (process.argv.includes("--json")) {
    console.log(JSON.stringify({ errors, scholar, clinical, pilot }, null, 2));
  } else {
    console.log("SuttaPath review status");
    console.log("=======================");
    line(scholar);
    line(clinical);
    console.log(`Pilot: Level 1 ${pilot.level1 || "pending"} · Level 2 ${pilot.level2 || "pending"}${pilot.report ? ` · ${pilot.report}` : ""}`);
    console.log("");
    if (errors.length) {
      console.log("Registry errors:");
      errors.forEach((e) => console.log(`  ! ${e}`));
    } else {
      console.log("Registry valid.");
    }
    const clear = !errors.length && !scholar.pending.length && !scholar.revise.length &&
      !clinical.pending.length && !clinical.revise.length && pilotDone;
    console.log(clear ? "All external gates recorded. Release may proceed." : "External gates remain open.");
  }

  const requireAll = process.argv.includes("--require");
  const pass = !errors.length &&
    !scholar.pending.length && !scholar.revise.length &&
    !clinical.pending.length && !clinical.revise.length && pilotDone;
  if (requireAll && !pass) process.exit(1);
}

function line(s) {
  const pct = Math.round((s.done.length / s.total) * 100);
  console.log(`${s.name.padEnd(9)} ${s.done.length}/${s.total} signed (${pct}%)` +
    (s.revise.length ? ` · ${s.revise.length} revise: ${s.revise.join(", ")}` : "") +
    (s.pending.length ? ` · ${s.pending.length} pending` : ""));
}

main();
