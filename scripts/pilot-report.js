/* SuttaPath — pilot report.
 *
 * Reads pilot_tracker.csv and prints the gate decision for Level 1 and
 * Level 2, using the thresholds in PILOT_KIT.md §7.
 *
 * Usage:
 *   node scripts/pilot-report.js docs/pilot/pilot_tracker.csv
 *   node scripts/pilot-report.js <csv> --out docs/pilot/PILOT_REPORT.md
 */
const fs = require("fs");
const path = require("path");

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") { row.push(cell); cell = ""; }
    else if (ch === "\n") {
      row.push(cell);
      if (row.some((c) => c.trim() !== "")) rows.push(row);
      row = []; cell = "";
    } else if (ch !== "\r") cell += ch;
  }
  row.push(cell);
  if (row.some((c) => c.trim() !== "")) rows.push(row);
  const [head, ...body] = rows;
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h.trim(), (r[i] || "").trim()])));
}

const num = (v) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};
const yes = (v) => ["yes", "y", "true", "1"].includes(String(v).toLowerCase());

function main() {
  const file = process.argv[2];
  if (!file) {
    console.error("usage: node scripts/pilot-report.js <tracker.csv> [--out report.md]");
    process.exit(2);
  }
  const rows = parseCsv(fs.readFileSync(path.resolve(file), "utf8"));
  const outIdx = process.argv.indexOf("--out");
  const outFile = outIdx > 0 ? process.argv[outIdx + 1] : null;

  const l1 = rows.filter((r) => r.gate === "level1" && yes(r.consent));
  const l2 = rows.filter((r) => r.gate === "level2" && yes(r.consent));

  const l1Finishers = l1.filter((r) => yes(r.track1_finished));
  const l1Ideas = l1.map((r) => [num(r.one_idea_1_1), num(r.one_idea_1_3), num(r.one_idea_1_6)]);
  const l1Strong = l1Ideas.filter((s) => s.filter((x) => x >= 2).length >= 2).length;
  const l1Buddhism = l1.filter((r) => r.framing_code === "buddhism").length;
  const l1Pass = l1Finishers.length >= 6 && l1Strong >= 7 && l1Buddhism <= 2;

  const l2Entrants = l2.filter((r) => yes(r.entry_check));
  const l2StructureStrong = l2.filter((r) => num(r.mn10_structure) >= 2).length;
  const l2Capstone = l2.filter((r) => yes(r.capstone_done)).length;
  const l2Pass = l2Entrants.length >= 10 && l2StructureStrong >= 6;

  const confusions = rows.map((r) => r.confusions).filter(Boolean);
  const mean = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0);

  const lines = [];
  lines.push("# Pilot report");
  lines.push("");
  lines.push(`Source: \`${path.basename(file)}\` · generated ${new Date().toISOString().slice(0, 10)}`);
  lines.push("");
  lines.push("## Level 1 — beginners, Track 1");
  lines.push("");
  lines.push(`- Readers consented: **${l1.length}** (target 10)`);
  lines.push(`- Finished Track 1: **${l1Finishers.length}** (gate ≥ 6)`);
  lines.push(`- Scored 2 on at least two one-idea checks: **${l1Strong}** (gate ≥ 7)`);
  lines.push(`- Called it a “Buddhism app”: **${l1Buddhism}** (gate ≤ 2)`);
  lines.push(`- Mean one-idea score: ${mean(l1Ideas.flat()).toFixed(2)} / 2`);
  lines.push(`- Median session time: ${median(l1.map((r) => num(r.median_minutes)))} min`);
  lines.push("");
  lines.push(`**Gate 1: ${l1Pass ? "PASS" : "FAIL or not yet met"}**`);
  lines.push("");
  lines.push("## Level 2 — graduates, MN 10");
  lines.push("");
  lines.push(`- Entered (entry check passed): **${l2Entrants.length}** (gate 10)`);
  lines.push(`- Stated MN 10 structure at 2/2: **${l2StructureStrong}** (gate ≥ 6)`);
  lines.push(`- Finished the capstone: **${l2Capstone}** (not a gate)`);
  lines.push(`- Median MN 10 time: ${median(l2.map((r) => num(r.mn10_minutes)))} min`);
  lines.push("");
  lines.push(`**Gate 2: ${l2Pass ? "PASS" : "FAIL or not yet met"}**`);
  lines.push("");
  lines.push("## Confusions reported");
  lines.push("");
  if (confusions.length) confusions.forEach((c) => lines.push(`- ${c}`));
  else lines.push("- None recorded yet.");
  lines.push("");
  lines.push("## Decision");
  lines.push("");
  lines.push(l1Pass && l2Pass
    ? "Both gates met. Proceed to the external reviews before writing more content."
    : "Gates not met. See PILOT_KIT.md §7 for what a failure means: revise format (Level 1) or stop writing Track C/D (Level 2).");
  lines.push("");

  const report = lines.join("\n");
  if (outFile) {
    fs.writeFileSync(path.resolve(outFile), report + "\n", "utf8");
    console.log(`Wrote ${outFile}`);
  } else {
    console.log(report);
  }
}

function median(xs) {
  const ys = xs.filter((x) => x > 0).sort((a, b) => a - b);
  if (!ys.length) return "—";
  const m = Math.floor(ys.length / 2);
  return ys.length % 2 ? ys[m] : ((ys[m - 1] + ys[m]) / 2).toFixed(0);
}

main();
