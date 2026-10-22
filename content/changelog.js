/* SuttaPath — release notes (editorial layer).
 *
 * Reader-facing changelog. Keep entries about what changed for the reader;
 * the engineering history lives in CHANGELOG.md at the repository root.
 */
module.exports = {
  intro:
    "Every released version, with what changed for readers. The app ships its content and its code together, so a version number is also a statement about what you can read.",
  releases: [
    {
      version: "1.2",
      date: "22 October 2026",
      name: "The study plan",
      summary:
        "A page that says how to pace the path — and lab passages that now link every session which actually teaches them.",
      groups: [
        {
          label: "New",
          items: [
            "A study plan page: the weekly rhythm, pacing at two sessions a week (about eighteen weeks), three (twelve), or one (about nine months), what to cut if you fall behind, and what 'done' means.",
            "A learning goal for each track, stated as something you can do rather than something you have covered.",
          ],
        },
        {
          label: "Content",
          items: [
            "Session 3.2 now teaches the north direction of the six — the duties friends owe each other. Three lab scenarios relied on that passage, and the session had omitted it.",
            "Session 6.3 gains the missing line of the saw passage, so its lab scenarios quote what the session actually shows.",
          ],
        },
        {
          label: "Fixed",
          items: [
            "Lab passages now link every session that teaches them, not only the declared anchor.",
            "Four scenarios (s4, s13, s16, s17) pointed at passages no session taught. The passages are now taught, and the build refuses this class of error.",
            "Scenario 14's anchor moved to session 5.5, which is where right livelihood is defined.",
          ],
        },
      ],
    },
    {
      version: "1.1",
      date: "22 October 2026",
      name: "The understanding pass",
      summary:
        "The path was complete at 1.0. This release makes the hard sessions easier to reconstruct from memory.",
      groups: [
        {
          label: "New",
          items: [
            "Three structural diagrams in the Understand panel: the two arrows (4.4), dependent origination (5.3), and the eightfold path as three trainings (5.5).",
            "Five retrieval prompts in every session, under Check yourself. Answer from memory, then reveal. Nothing is scored and nothing is stored.",
            "This release-notes page, and a CHANGELOG.md in the repository.",
          ],
        },
        {
          label: "Fixed",
          items: [
            "Long Pāli titles no longer break the mobile header onto three lines.",
            "Glossary cross-links are validated at build time, so a related term can no longer point at an entry that does not exist.",
            "Printing now keeps highlighted phrases without the pink background, and opens collapsed passages.",
          ],
        },
      ],
    },
    {
      version: "1.0",
      date: "22 October 2026",
      name: "The complete path",
      summary:
        "All thirty-six sessions are written, ending where the path began: the last words of the Buddha in DN 16.",
      groups: [
        {
          label: "Content",
          items: [
            "Track 5, The Deep End: not-self, the Fire Sermon, dependent origination, the unborn, the eightfold path analysed, and the questions the canon refuses.",
            "Track 6, Living With Others: the speech test, good friendship, the saw simile, self and other, the five recollections, and the last words.",
            "Checkpoint 3, which returns to three passages from three tracks and asks which you could defend.",
            "The Integrity Lab is complete at twenty-four scenarios, with instructor notes for each.",
            "The glossary reaches 120 terms, including the khandha and dependent-origination clusters.",
          ],
        },
        {
          label: "New",
          items: [
            "A print stylesheet: all three panels print in sequence, so the path survives as paper.",
            "Safety notes on 4.6 (breath practice) and 6.5 (the five recollections).",
            "An internal review pass, recorded in docs/REVIEW.md, with its findings and accepted deviations.",
          ],
        },
      ],
    },
    {
      version: "0.3",
      date: "22 October 2026",
      name: "The Mind",
      summary:
        "The track that changes behaviour: attention, stuck thoughts, the mirror check, and the second arrow.",
      groups: [
        {
          label: "Content",
          items: [
            "Track 4: two kinds of thought (MN 19), five ways to put a thought down (MN 20), the mirror (MN 61), two arrows (SN 36.6), the lute string (AN 6.55), and a plain breathing exercise (MN 118).",
            "Checkpoint 2: what you actually used, not what you understood.",
            "Scenarios 13 and 14, on a loan to a friend and a job you would hate.",
          ],
        },
      ],
    },
    {
      version: "0.2",
      date: "22 October 2026",
      name: "The reading path",
      summary:
        "The first real release: a citation-verified pipeline, eighteen sessions, and the Integrity Lab.",
      groups: [
        {
          label: "Content",
          items: [
            "Tracks 1–3: how to read a sutta, what the teaching claims, and the ethical life.",
            "Checkpoint 1 after Track 2.",
            "Twelve integrity scenarios and a 71-term glossary.",
          ],
        },
        {
          label: "Under the hood",
          items: [
            "Canon text is pinned to a SuttaCentral snapshot, addressed by segment ID. The build fails on any citation the snapshot does not support.",
            "Every session shows Bhikkhu Sujato's CC0 translation verbatim, with attribution; paraphrase and inference are labelled separately.",
          ],
        },
      ],
    },
    {
      version: "0.1",
      date: "22 October 2026",
      name: "Prototype",
      summary: "Three sample sessions, to test the three-mode reader.",
      groups: [
        {
          label: "Content",
          items: ["Three sessions across the planned path, with the Read, Understand, and Live modes."],
        },
      ],
    },
  ],
};
