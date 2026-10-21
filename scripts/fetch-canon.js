/* Phase 0 — canon ingest.
 *
 * Fetches CC0 Bhikkhu Sujato translations from SuttaCentral and writes a
 * pinned local snapshot under content/canon/. The snapshot is the canon
 * layer: immutable, segment-UID addressed. Editorial content never invents
 * a UID; validate.js checks every citation against this snapshot.
 *
 * Usage: node scripts/fetch-canon.js
 */
const fs = require("fs");
const path = require("path");

const UIDS = [
  "dn16", "dn31",
  "mn19", "mn20", "mn21", "mn22", "mn58", "mn61", "mn63", "mn72", "mn118",
  "sn3.8", "sn3.17", "sn12.2", "sn22.59", "sn35.28", "sn36.6", "sn45.2", "sn45.8", "sn56.11", "sn56.31",
  "an3.65", "an4.62", "an4.180", "an4.192", "an5.57", "an5.177", "an6.55", "an6.63", "an8.54",
  "snp2.4",
  "dhp1-20",
  "ud8.3",
];

const OUT = path.join(__dirname, "..", "content", "canon");

async function get(uid) {
  const url = `https://suttacentral.net/api/bilarasuttas/${uid}/sujato?lang=en`;
  const res = await fetch(url, {
    headers: { "User-Agent": "SuttaPath/0.2 (content ingest; contact: local)" },
  });
  if (!res.ok) throw new Error(`${uid}: HTTP ${res.status}`);
  return res.json();
}

function clean(s) {
  return String(s || "")
    .replace(/<[^>]+>/g, "")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const manifest = { generatedAt: new Date().toISOString(), translator: "Bhikkhu Sujato", license: "CC0", suttas: [] };

  for (const uid of UIDS) {
    try {
      const data = await get(uid);
      const t = data.translation_text || {};
      const keys = (data.keys_order || Object.keys(t)).filter((k) => t[k] !== undefined);
      const record = {
        uid,
        title: clean(data.translation?.title || ""),
        translator: data.translation?.author || "Bhikkhu Sujato",
        segments: keys.map((k) => ({ uid: k, text: clean(t[k]) })),
      };
      fs.writeFileSync(path.join(OUT, uid + ".json"), JSON.stringify(record, null, 2) + "\n", "utf8");
      manifest.suttas.push({ uid, title: record.title, segments: record.segments.length });
      console.log(`${uid.padEnd(9)} ${String(record.segments.length).padStart(4)} segs  ${record.title}`);
    } catch (err) {
      manifest.suttas.push({ uid, error: String(err.message || err) });
      console.error(`${uid.padEnd(9)} FAILED  ${err.message}`);
    }
  }

  fs.writeFileSync(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
  console.log(`\nWrote ${manifest.suttas.filter((s) => !s.error).length}/${UIDS.length} suttas to content/canon/`);
})();
