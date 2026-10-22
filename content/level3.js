/* SuttaPath — Level 3 seminars (editorial layer).
 *
 * Six workshops that produce something: a debrief, a reading-group plan, an
 * essay, a talk, peer reviews, a capstone run. No canon text is quoted here;
 * each workshop points back to sessions and passages already in the app.
 */
module.exports = {
  intro:
    "Level 3 is not more reading. It is six workshops that make you produce something another person can check: a facilitated discussion, a reading-group plan, a cited essay, a recorded talk, two peer reviews, and a capstone run.",
  note:
    "Optional tier. No external review is required, because the outputs are yours and the checks are structural — citations, labels, and a second reader. Do them in any order after Level 1; W3 assumes Level 2.",
  workshops: [
    {
      id: "w1", n: 1,
      title: "Facilitate a scenario", minutes: 90,
      hook: "Run one lab scenario for other people, then write what actually happened.",
      purpose:
        "Facilitation is where you discover whether you can hold a disagreement without resolving it. The lab gives you the material; the debrief is the assessment.",
      steps: [
        "Choose one scenario you have already answered in writing (s1–s24). Read its anchor passage and both counter-positions twice.",
        "Run it for two or more people in 20 minutes: set the scene (2 min), silent writing (3), discussion (12), close (3). Do not take a position.",
        "If you have no group, run it as a written simulation: write the three strongest positions a room would produce, including one you dislike.",
        "Immediately afterwards, write a 300-word debrief while the discussion is still fresh.",
      ],
      deliverable:
        "A 300-word debrief: which positions emerged, where the canon ranked the goods, what stayed open, and what you would change next time.",
      checklist: [
        "The debrief cites the anchor passage by segment or session.",
        "Both counter-positions are represented, including the one you dislike.",
        "The debrief names at least one thing the canon leaves open.",
        "You did not force consensus, and you say so if the room converged.",
      ],
      solo: "Run the written simulation and mark your own debrief against the checklist. The missing element is other people; note that honestly.",
    },
    {
      id: "w2", n: 2,
      title: "Design a six-week reading group", minutes: 120,
      hook: "One sutta, six meetings, and a plan someone else could run.",
      purpose:
        "A plan is a test of whether you can see a text's structure and a group's limits at the same time. If the plan only works for you, it is not a plan.",
      steps: [
        "Choose one text from Level 2 that is long enough to divide (MN 10, DN 15, MN 39, or MN 118).",
        "Divide it into six sittings of roughly equal reading load. Name what each sitting covers, not just pages.",
        "For each week, write one opening question, one passage to read aloud, and one thing to leave unresolved.",
        "Add the practical frame: 60 or 90 minutes, online or in person, what participants read beforehand, and what you will not cover.",
      ],
      deliverable:
        "A six-row plan: week, reading, opening question, passage to read aloud, and the unresolved question.",
      checklist: [
        "Each week's reading is a coherent unit, not an arbitrary page count.",
        "Every opening question can be answered from the text, not from opinion.",
        "At least two weeks leave something deliberately unresolved.",
        "The plan says what is out of scope.",
      ],
      solo: "Ask one other reader to read the plan and tell you which week they would skip. Revise that week.",
    },
    {
      id: "w3", n: 3,
      title: "Write a cited essay", minutes: 240,
      hook: "1,500 words, eight citations, one objection you answer.",
      purpose:
        "The essay is where the layer rule becomes visible. A claim without a citation is an opinion; a quotation without a segment is uncheckable; an inference without a label is smuggling.",
      steps: [
        "Choose a question from a checkpoint or a session's reflection. Make it arguable, not descriptive.",
        "Draft 1,500 words with at least eight segment citations. Quote the translation verbatim; paraphrase in your own words and mark it as yours.",
        "Include one serious objection and answer it, or concede it.",
        "Check every doctrinal sentence: is it the text, your reading, or a commentarial reading? Label it.",
        "Cut 10 per cent. The argument will be clearer.",
      ],
      deliverable:
        "A 1,500-word essay with a citation list of segment IDs and a one-paragraph note on what you could not establish.",
      checklist: [
        "At least eight distinct segment citations.",
        "No uncited sentence that claims what the canon says.",
        "Every quotation is verbatim and attributed.",
        "One objection is stated fairly and answered or conceded.",
        "A closing note names the limit of the argument.",
      ],
      solo: "Give the essay to one reader with the checklist and ask them to mark only the failures, not the style.",
    },
    {
      id: "w4", n: 4,
      title: "Record a ten-minute talk", minutes: 150,
      hook: "Say it aloud, then check what you said against the text.",
      purpose:
        "Speaking exposes claims that reading hides. A talk forces you to choose an order, name your citations aloud, and hear yourself overstate.",
      steps: [
        "Choose one passage you know well. Write a 1,000-word script (about ten minutes) with at least five citations spoken in full.",
        "Record it on a phone. Do not edit the first take.",
        "Listen once with the text open. Mark every sentence you cannot support with a segment.",
        "Cut those sentences, re-record, and add a one-line note on what you removed and why.",
      ],
      deliverable:
        "A ten-minute recording (or script plus recording) and a short removal note.",
      checklist: [
        "At least five citations are spoken, not shown only.",
        "Every doctrinal claim can be traced to a segment.",
        "The talk has one idea, not five.",
        "The removal note names at least one overstatement you cut.",
      ],
      solo: "If you will not record, read the script aloud twice and mark the second reading. The voice is the point; do not skip it entirely.",
    },
    {
      id: "w5", n: 5,
      title: "Peer-review two notes", minutes: 90,
      hook: "Mark the layer rule in someone else's work, not their taste.",
      purpose:
        "Reviewing is the fastest way to see your own habits. You are looking for three failures only: unsupported claims, unlabelled inference, and invented gaps.",
      steps: [
        "Ask two people for a short piece of writing about a sutta (a note, a post, a paragraph).",
        "Read each once for sense, then once with the three failures in mind.",
        "Write 150 words per piece: one thing that works, one unsupported claim, one label or gap problem.",
        "At least one review must disagree with the writer's reading. Say so plainly and cite the segment.",
      ],
      deliverable:
        "Two 150-word reviews, each naming a citation issue and a reading disagreement or agreement.",
      checklist: [
        "Each review quotes or cites the specific sentence at issue.",
        "At least one review disagrees on the reading, not just the wording.",
        "No review comments on style or personality.",
        "Each review says what the writer did well.",
      ],
      solo: "Review two published summaries of a sutta instead. Mark where they cite, where they infer, and where they fill a gap.",
    },
    {
      id: "w6", n: 6,
      title: "Run the capstone for someone else", minutes: 120,
      hook: "Give an unseen sutta to one reader and mark only the citations.",
      purpose:
        "Teaching the capstone is the last test: can you set up a reading task, stay out of the way, and assess evidence rather than agreement?",
      steps: [
        "Choose a short sutta the reader has not seen. AN 8.30 is used in the app; pick another from the same collection or a neighbouring text.",
        "Give the task: read whole, then 400 words with one citation per claim and one translation choice.",
        "Do not explain the text while they read. Answer only procedural questions.",
        "Mark only three things: are the citations real, does each claim have one, and is the translation observation about the text rather than the reader's preference?",
        "Write 200 words on what the reader did well and what the text did that you had not noticed.",
      ],
      deliverable:
        "A marked capstone (citations checked) and a 200-word note.",
      checklist: [
        "Every citation in the reader's note exists and supports the claim.",
        "You did not correct their reading, only their evidence.",
        "The note names one thing the text did that surprised you.",
        "The reader knows what to read next.",
      ],
      solo: "Run it on yourself with a text you have not read; mark the citations after a day's delay.",
    },
  ],
};
