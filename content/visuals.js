/* SuttaPath — structural diagrams (editorial layer).
 *
 * Keyed by session id. Rendered in the Understand panel and in print.
 * No canon text lives here; captions are ours.
 *
 * type: "flow"   — ordered steps, each { label, note? }
 * type: "groups" — { name, factors: [string] } groups
 */
module.exports = {
  "4.4": {
    type: "flow",
    title: "Where the second arrow comes from",
    steps: [
      { label: "Contact", note: "something happens — a sensation, a thought, a message" },
      { label: "First arrow", note: "the painful feeling itself; unavoidable, and not optional" },
      { label: "Second arrow", note: "resistance, dread, the story about the feeling" },
      { label: "Added suffering", note: "what the story produces — and what the text says can cease" },
    ],
  },

  "5.3": {
    type: "groups",
    title: "The chain, in four movements",
    note: "Read downward. The joints that matter for practice are the arrows between feeling and craving — not the whole list at once.",
    groups: [
      { name: "Past causes", factors: ["Ignorance", "Choices"] },
      { name: "Present result", factors: ["Consciousness", "Name & form", "Six sense fields", "Contact", "Feeling"] },
      { name: "Present causes", factors: ["Craving", "Grasping", "Existence"] },
      { name: "Future result", factors: ["Rebirth", "Ageing & death", "Sorrow, lamentation, pain"] },
    ],
  },

  "5.5": {
    type: "groups",
    title: "Eight factors, three trainings",
    note: "The list is ordered, but the trainings are held together: view shapes purpose, ethics makes the mind workable, concentration makes insight possible.",
    groups: [
      { name: "Wisdom", factors: ["Right view", "Right purpose"] },
      { name: "Ethics", factors: ["Right speech", "Right action", "Right livelihood"] },
      { name: "Concentration", factors: ["Right effort", "Right mindfulness", "Right immersion"] },
    ],
  },
};
