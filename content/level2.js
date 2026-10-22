/* SuttaPath — Level 2 plan (editorial layer).
 *
 * The advanced tier: whole suttas, comparison, Pali as a tool. This is a
 * published plan, not shipped lessons; the page says so.
 */
module.exports = {
  title: "Level 2 — Reading the Canon",
  intro:
    "After the beginner path, the question stops being what to read and becomes how to read it whole. Level 2 moves from guided excerpts to complete suttas, from one translation to comparison, and from Pali as vocabulary to Pali as a tool.",
  entry:
    "Entry is earned, not bought: finish the 36-session path, or pass the entry check — read MN 63 unaided and state what it claims, what it refuses, and where its argument turns.",
  status: "Plan, not shipped content. The design is complete; the pilot has not been built.",
  doc: "docs/ADVANCED_TRACK.md",
  docUrl: "https://github.com/CASANMGT/suttapath/blob/main/docs/ADVANCED_TRACK.md",
  shift: [
    { from: "One excerpt, one idea", to: "One whole text, read with a structure map" },
    { from: "Paraphrase under each passage", to: "Marginal notes keyed to segment IDs" },
    { from: "A single translation", to: "Comparison across texts and renderings" },
    { from: "Pali as glossary entries", to: "Pali as a tool: parse, look up, notice the choice" },
    { from: "Mark complete", to: "Produce something: a map, a 400-word note, an essay" },
  ],
  tracks: [
    {
      code: "A",
      name: "How the Canon Is Built",
      minutes: "15–25 min",
      goal: "Find a text, expand its repetitions, and know which basket you are reading.",
      sessions: [
        { code: "A1", title: "The four nikāyas, and how to find a text", note: "Locate a sutta by collection, number, and title; explain why one text has several IDs." },
        { code: "A2", title: "Formula, repetition, and the ellipsis", note: "Read a repeated formula as structure, not padding; expand “…” correctly." },
        { code: "A3", title: "Three reading protocols", note: "Dialogue, verse, and list: choose the protocol the text is using." },
        { code: "A4", title: "The Khuddaka and the verse books", note: "What the verse collections are for — and what they are not." },
        { code: "A5", title: "Vinaya orientation", note: "What the monastic code covers, and why a lay reader should know its shape." },
        { code: "A6", title: "Abhidhamma and commentary orientation", note: "Tell sutta, abhidhamma, and aṭṭhakathā apart; know what this path leaves out." },
      ],
    },
    {
      code: "B",
      name: "Reading Whole Suttas",
      minutes: "35–60 min",
      goal: "Read a complete sutta with a map, stop points, and no paraphrase crutch.",
      sessions: [
        { code: "B1", title: "MN 10 · Satipaṭṭhāna", note: "3,143 words. A long list sutta: find the refrain and the fourfold structure.", words: 3143 },
        { code: "B2", title: "MN 39 · Mahā-Assapura", note: "2,911 words. The gradual training as a whole: a sutta that is a curriculum.", words: 2911 },
        { code: "B3", title: "SN 12.23 · Upanisa", note: "694 words. Conditionality in both directions; short enough to read twice.", words: 694 },
        { code: "B4", title: "AN 4.41 · Samādhi-bhāvanā", note: "479 words. A compact list sutta: four ways to develop concentration.", words: 479 },
        { code: "B5", title: "DN 15 · Mahānidāna", note: "3,860 words. Dependent origination, self, and becoming — the level's hardest text.", words: 3860 },
        { code: "B6", title: "MN 118 · Ānāpānassati (complete)", note: "1,934 words. The sixteen steps end to end, with the safety framing carried over.", words: 1934 },
      ],
    },
    {
      code: "C",
      name: "Doctrine in Depth",
      minutes: "20–35 min",
      goal: "Explain the same doctrines with their joints exposed, not their slogans repeated.",
      sessions: [
        { code: "C1", title: "The aggregates as a process", note: "Why “aggregate” is a verb-like analysis, not a list of parts." },
        { code: "C2", title: "Sense bases, elements, and the sixfold world", note: "How experience is partitioned, and what the partition is for." },
        { code: "C3", title: "Conditionality, both directions", note: "Origination and cessation; why “dependent” is not “determined”." },
        { code: "C4", title: "Kamma, rebirth, and no-self", note: "The hardest coherence problem in the canon, stated honestly." },
        { code: "C5", title: "Jhāna and the formless", note: "The similes, the sequence, and what the texts do not promise." },
        { code: "C6", title: "From jhāna to awakening", note: "The Buddha's own account: the discovery, then the three knowledges." },
      ],
    },
    {
      code: "D",
      name: "Comparative and Critical Reading",
      minutes: "30–45 min",
      goal: "Compare versions, use Pali tools, and tell a sutta from a commentarial reading.",
      sessions: [
        { code: "D1", title: "One teaching, two nikāyas", note: "MN 10 against DN 22: structure, refrain, and why versions differ." },
        { code: "D2", title: "Two arguments for one doctrine", note: "SN 12.2 against DN 15: analysis versus narrative as teaching strategy." },
        { code: "D3", title: "Translation as evidence", note: "One passage, public-domain and CC0 renderings; separate text from choice." },
        { code: "D4", title: "Pali tools I", note: "Parse a compound, use a dictionary, recognise a declension." },
        { code: "D5", title: "Pali tools II", note: "Term clusters — sati/sampajañña, vitakka/vicāra — and how they shape doctrine." },
        { code: "D6", title: "Commentary and the sutta", note: "What the Visuddhimagga adds to satipaṭṭhāna, and how to label it." },
      ],
    },
  ],
  capstone: {
    title: "The capstone is an unseen sutta",
    body: [
      "Read a text you have not seen, unaided, in one sitting. Write 400 words: what it claims, what it does not claim, one segment citation per claim, and one translation choice worth noticing.",
      "Then compare against a model note that shows its own citations and its own uncertainties. This is the only assessment, and it cannot be gamed by remembering paraphrase.",
    ],
  },
  effort: {
    summary: "≈110–120 working days, roughly four months for one editor with a Pali specialist and a scholar on call.",
    items: [
      { work: "Track A — apparatus", days: "10 editor-days" },
      { work: "Track B — six whole texts, maps, notes", days: "24 editor-days" },
      { work: "Track C — doctrinal depth", days: "15 editor-days" },
      { work: "Track D — comparison and licensing", days: "18 editor-days" },
      { work: "Pali strand", days: "10 specialist-days" },
      { work: "Capstone and model notes", days: "5 editor-days" },
      { work: "Scholar review", days: "10 reviewer-days" },
      { work: "Engineering — long-read, compare, review queue", days: "15–20 dev-days" },
    ],
  },
  pilot: {
    title: "Build the pilot first",
    body: "2.0 ships Track A and two whole texts (MN 10, SN 12.23) with a new renderer. The gate: ten Level-1 graduates read MN 10 unaided, and six can state its structure without the map. If it fails, Level 1 is the product — not a reason to write twenty more sessions.",
  },
  notAdd: [
    "A full Pali grammar course",
    "An Abhidhamma survey",
    "A meditation manual",
    "A history of Buddhism",
    "A comparative-religions track",
  ],
};
