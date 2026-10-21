/* Dev helper: node scripts/dump.js <canonUid> [regex] [context]
 * Prints matching segments (or all) with their UIDs so ranges can be chosen.
 */
const fs = require("fs");
const path = require("path");
const [uid, pattern, ctxArg] = process.argv.slice(2);
const file = path.join(__dirname, "..", "content", "canon", uid + ".json");
const rec = JSON.parse(fs.readFileSync(file, "utf8"));
const re = pattern ? new RegExp(pattern, "i") : null;
const ctx = ctxArg ? parseInt(ctxArg, 10) : 0;
const idx = rec.segments.map((s, i) => (re ? re.test(s.text) : true) ? i : -1).filter((i) => i >= 0);
const keep = new Set();
for (const i of idx) for (let j = i - ctx; j <= i + ctx; j++) if (j >= 0 && j < rec.segments.length) keep.add(j);
[...keep].sort((a, b) => a - b).forEach((i) => {
  const s = rec.segments[i];
  console.log(`${s.uid}\t${s.text}`);
});
