/* SuttaPath — editorial source (sessions).
 *
 * This file contains NO canonical text. Each block lists SuttaCentral
 * segment UIDs; scripts/build.js resolves them against content/canon/ and
 * refuses to build if a citation is missing. Paraphrases, context, inference
 * and practice are ours.
 *
 * Canon: Bhikkhu Sujato, CC0.
 */
(function (root) {
  const data = {
    meta: {
      version: "1.1.0",
      translationLabel: "Bhikkhu Sujato · CC0",
      totalSessions: 36,
      builtSessions: 36,
      builtTracks: [1, 2, 3, 4, 5, 6],
    },

    tracks: [
      { id: 1, title: "How to Read This", subtitle: "No doctrine. Just the instrument.", status: "ready" },
      { id: 2, title: "What the Teaching Claims", subtitle: "The frame, before the ethics.", status: "ready" },
      { id: 3, title: "The Ethical Life", subtitle: "Relationships, not rules.", status: "ready" },
      { id: 4, title: "The Mind", subtitle: "Attention, habit, and the second arrow.", status: "ready" },
      { id: 5, title: "The Deep End", subtitle: "Not-self, conditionality, and the unknown.", status: "ready" },
      { id: 6, title: "Living With Others", subtitle: "Speech, friendship, and the last words.", status: "ready" },
    ],

    sessions: [
      {
        id: "1.1", track: 1, order: 1, ref: "DN 16", pali: "Mahāparinibbānasutta",
        title: "Be Your Own Island", minutes: 11,
        hook: "The Buddha's last instructions are not about him.",
        oneIdea: "The teaching is carried by practising it, not by holding on to a teacher.",
        context:
          "This is from the long account of the Buddha's final months. He is eighty, ill, and camped near Vesālī. Ānanda is anxious about who will lead the community after he dies. The answer is not a successor. It is a practice.",
        blocks: [
          {
            uids: ["dn16:2.25.9", "dn16:2.25.10", "dn16:2.25.11", "dn16:2.25.12"],
            para: "He begins with the body: old, failing, held together the way a worn cart is held together with rope.",
          },
          {
            uids: ["dn16:2.26.1"],
            para: "Then the instruction: be your own island. Take the teaching as refuge, not a person.",
          },
          {
            uids: ["dn16:2.26.2", "dn16:2.26.3", "dn16:2.26.4", "dn16:2.26.5", "dn16:2.26.6"],
            para: "And the method is specific — watch body, feelings, mind, and principles, keenly and without longing or distress.",
          },
          {
            uids: ["dn16:2.26.7"],
            para: "That is what it means to be an island: not isolation, but a practice you can do when no one is standing over you.",
          },
          {
            uids: ["dn16:2.26.8"],
            para: "He extends it past his death: whoever lives this way, now or later, will be among the best of the best.",
            mark: "now or after I have passed",
          },
        ],
        inference:
          "This passage is often read as individualism. It is narrower than that: no person can be your refuge, but the teaching can, and the teaching here is a set of things you observe. The instruction is satipaṭṭhāna — the four ways of establishing mindfulness — not a belief about self-reliance.",
        terms: ["sutta", "dhamma", "satipatthana", "parinibbana"],
        reflection:
          "Who is your default authority on hard questions — a person, a publication, a habit? What would it take to check one of their answers against something you can observe yourself?",
        practice:
          "Take one decision you are currently deferring to someone else. Write the reason they gave you. Mark which part of it you could verify this week.",
      },

      {
        id: "1.2", track: 1, order: 2, ref: "MN 63", pali: "Cūḷamālukyasutta",
        title: "The Arrow", minutes: 12,
        hook: "A man is shot. He wants the archer's biography before treatment.",
        oneIdea: "Some questions are real but badly timed, and waiting for answers can be the harm.",
        context:
          "Māluṅkyaputta is a monk who wants the Buddha to settle a list of metaphysical questions — is the cosmos eternal, is the soul the same as the body, what happens to an awakened person after death. The Buddha has declined to answer them. This is his reply.",
        blocks: [
          {
            uids: ["mn63:5.6", "mn63:5.7"],
            para: "A man is struck by a poisoned arrow. His relatives call a surgeon.",
          },
          {
            uids: ["mn63:5.8", "mn63:5.9"],
            para: "The man refuses treatment until he knows the caste of the archer.",
          },
          {
            uids: ["mn63:5.10", "mn63:5.11", "mn63:5.13", "mn63:5.15", "mn63:5.17"],
            para: "Then the archer's name and clan, his height, his complexion, and his village.",
          },
          {
            uids: ["mn63:5.19", "mn63:5.21"],
            para: "Then the bow, and what the string is made of.",
          },
          {
            uids: ["mn63:5.30"],
            para: "He would die still asking.",
          },
          {
            uids: ["mn63:5.31", "mn63:5.32", "mn63:5.33", "mn63:5.34", "mn63:5.35"],
            para: "The same, the Buddha says, for someone who will not practise until the cosmos is explained.",
          },
          {
            uids: ["mn63:8.1", "mn63:8.2", "mn63:8.3"],
            para: "His reason for silence is not that the questions are stupid. It is that they do not lead to the end of suffering.",
            mark: "they aren't beneficial",
          },
        ],
        inference:
          "This is not anti-intellectualism. The Buddha does not say the questions are meaningless; he says they are undeclared and that holding them as a precondition for practice is self-defeating. The sutta also contains a positive list — the four noble truths — which he does declare. The contrast is the point.",
        terms: ["sutta", "ditthi", "dukkha", "ariyasacca"],
        reflection:
          "Which question are you currently treating as a prerequisite for acting well? What would you do this week if you stopped waiting for its answer?",
        practice:
          "Name one open question you have parked your life in front of. Do one small action that does not depend on its answer.",
      },

      {
        id: "1.3", track: 1, order: 3, ref: "AN 4.180", pali: "Mahāpadesasutta",
        title: "Four Great References", minutes: 12,
        hook: "How do you check a teaching that claims to come from the Buddha?",
        oneIdea: "A claim is tested against the wider body of teaching, not against the authority of the person repeating it.",
        context:
          "The community is growing and the teacher is travelling. Sayings circulate. This sutta gives a procedure for handling a report that begins 'I heard this from the Buddha himself' — or from a whole monastery, or from a group of learned elders, or from one learned elder.",
        blocks: [
          {
            uids: ["an4.180:2.2", "an4.180:2.3", "an4.180:2.4"],
            para: "Someone reports a saying and attributes it to the Buddha.",
          },
          {
            uids: ["an4.180:2.5"],
            para: "The instruction is surprising: neither approve nor reject it.",
            mark: "neither approve nor reject",
          },
          {
            uids: ["an4.180:2.6"],
            para: "Instead, compare the words with the discourses and the training.",
          },
          {
            uids: ["an4.180:2.7", "an4.180:2.8", "an4.180:2.9", "an4.180:2.10"],
            para: "If it does not fit, conclude it was misremembered — and discard it.",
          },
          {
            uids: ["an4.180:3.6", "an4.180:3.7", "an4.180:3.8", "an4.180:3.9"],
            para: "If it fits, remember it. That is the first reference; the same test applies to the other three sources.",
            mark: "You should remember it",
          },
        ],
        inference:
          "The four sources are ranked by prestige, not by reliability — the procedure is identical for the Buddha's own reported words and for a single elder's. The sutta is a check on testimony, and it assumes a body of text stable enough to check against. That is worth noticing: the canon is being used to police the canon.",
        terms: ["dhamma", "vinaya", "sangha", "sutta"],
        reflection:
          "Think of the last confident claim you repeated because of who said it. What would 'comparing it with the wider body of teaching' look like in your own field?",
        practice:
          "Take one quotation you have shared in the last month. Find its source, not its reposter. If you cannot, note that as the finding.",
      },

      {
        id: "1.4", track: 1, order: 4, short: true, ref: "Dhp 1–2", pali: "Yamakavagga",
        title: "Two Translations", minutes: 10,
        hook: "The same four lines, two English versions, two different metaphysics.",
        oneIdea: "Translation is interpretation; the choice of one word can change what the text claims.",
        context:
          "The Dhammapada opens with a pair of verses that every Buddhist tradition quotes. They are four lines long in Pali and almost impossible to render without deciding what 'dhamma' means here — things, phenomena, experiences, or teachings. Compare the two versions before reading the note.",
        blocks: [
          {
            uids: ["dhp1:1", "dhp1:2", "dhp1:3", "dhp1:4", "dhp1:5", "dhp1:6"],
            verse: true,
            para: "First verse: intention leads; corrupt intention brings suffering behind it like a wheel behind an ox's hoof.",
          },
          {
            uids: ["dhp2:1", "dhp2:2", "dhp2:3", "dhp2:4", "dhp2:5", "dhp2:6"],
            verse: true,
            para: "Second verse: the same structure, with pure intention and happiness following like a shadow.",
          },
        ],
        parallel: [
          {
            label: "Version A — 'things'",
            text: "Intention is the leader of things; intention is first, they're made by intention. If with corrupt intent you speak or act, suffering follows you, like a wheel, the ox's foot.",
          },
          {
            label: "Version B — 'experiences'",
            text: "Experience is led by intention; intention is chief, experience is made by intention. Speak or act from a corrupt intention and pain follows you the way the wheel follows the ox's hoof.",
          },
        ],
        inference:
          "Version A makes a claim about the structure of reality: mental intention is prior to things. Version B makes a claim about experience: what you undergo is shaped by what you intend. The Pali 'dhammā' supports either, and the commentary does not settle it for a modern reader. This is not a defect in the translation; it is a decision the translator makes, usually without flagging it.",
        terms: ["dhamma", "cetana", "kamma", "dukkha"],
        reflection:
          "Where else have you treated a translation as if it were the original? What would change if you read it as one person's decision?",
        practice:
          "Pick a sentence you use often at work. Write two versions of it that differ by one word, and notice which version commits you to more.",
      },

      {
        id: "1.5", track: 1, order: 5, ref: "MN 22", pali: "Alagaddūpamasutta",
        title: "The Raft", minutes: 11,
        hook: "A raft is useful. That is not a reason to carry it.",
        oneIdea: "The teaching is instrumental — for crossing, not for possession.",
        context:
          "The simile appears in a long and sometimes sharp sutta about monks who have misunderstood the teaching. The Buddha has just warned that grasping a teaching wrongly is like grabbing a snake by the tail. Then he offers the raft.",
        blocks: [
          {
            uids: ["mn22:13.5", "mn22:13.6", "mn22:13.7"],
            para: "A traveller reaches a flood: this shore dangerous, the far shore safe, no bridge.",
          },
          {
            uids: ["mn22:13.11", "mn22:13.12"],
            para: "So he builds a raft from grass, sticks, branches, and leaves, and crosses.",
          },
          {
            uids: ["mn22:13.13", "mn22:13.14", "mn22:13.15", "mn22:13.16"],
            para: "On the far shore he thinks: this raft saved me. Why not carry it on my head?",
          },
          {
            uids: ["mn22:13.17", "mn22:13.18", "mn22:13.19"],
            para: "The Buddha asks whether that is what should be done with a raft. The answer is no.",
            mark: "Would that person be doing what should be done",
          },
          {
            uids: ["mn22:13.21", "mn22:13.22", "mn22:13.24", "mn22:13.25"],
            para: "The right move is to beach it or set it adrift, and go on.",
          },
          {
            uids: ["mn22:13.26", "mn22:14.1"],
            para: "So: the teaching is for crossing, not for holding. Give up the teachings, let alone what is not the teaching.",
          },
        ],
        inference:
          "The last line is the hardest in the sutta and has been read as antinomian. Read with the raft, it is narrower: even a correct teaching is a tool, and tools are put down when the crossing is done. It is not a licence to disregard ethics; the sutta's own argument depends on the raft being well built.",
        terms: ["dhamma", "upadana", "nibbana"],
        reflection:
          "What have you kept holding after it stopped being useful — a method, a framework, an identity built on being right?",
        practice:
          "Choose one tool or rule you still apply by habit. Write the job it was built for. Decide whether that job is finished.",
      },

      {
        id: "1.6", track: 1, order: 6, ref: "AN 3.65", pali: "Kesamuttisutta",
        title: "The Kālāmas", minutes: 13,
        hook: "The most-quoted scepticism passage in Buddhism is not scepticism.",
        oneIdea: "Test teachings by observed harm and benefit, not by the status of the speaker.",
        context:
          "The Kālāmas live at a crossroads. Teachers pass through, each praising their own doctrine and disparaging the rest. They ask the Buddha whom to believe. His answer is a list of things not to rely on, followed by a criterion.",
        blocks: [
          {
            uids: ["an3.65:3.5", "an3.65:3.6"],
            para: "The question: several teachers, each confident, each contradicting the others. Who is right?",
          },
          {
            uids: ["an3.65:4.1"],
            para: "Do not go by oral transmission, lineage, scripture, logic, inference, or the competence of the teacher.",
            mark: "don't go by oral transmission",
          },
          {
            uids: ["an3.65:4.2", "an3.65:4.3"],
            para: "But when you know for yourselves that something is unskillful, blamed by sensible people, and leads to harm — give it up.",
          },
          {
            uids: ["an3.65:5.1", "an3.65:5.2", "an3.65:6.1"],
            para: "He then tests them: does greed arise for your welfare or your harm? They answer: harm.",
          },
          {
            uids: ["an3.65:7.1", "an3.65:8.1"],
            para: "A greedy person kills, steals, commits adultery, lies — and that is harm, they agree.",
          },
          {
            uids: ["an3.65:26.1", "an3.65:26.2", "an3.65:26.3"],
            para: "The positive form: what you know to be skillful, blameless, praised, and leading to welfare — take it up and keep it.",
          },
        ],
        inference:
          "This is usually quoted as 'believe nothing; think for yourself'. The sutta says something more specific: the test is whether a state, when undertaken, leads to harm — and the Kālāmas are asked to check that against greed, hate, and delusion they can observe. It is empirical, not relativistic. Note also that the Buddha does not tell them to ignore teachers; he tells them not to accept a teaching because of the teacher.",
        terms: ["kamma", "sila", "ditthi", "kalyannamitta"],
        reflection:
          "What is the last thing you believed because the person saying it seemed competent? What would checking it against observed harm require?",
        practice:
          "Take one habitual behaviour you defend. Write what it costs the people around you, in concrete terms. Do not write what it costs you yet.",
      },

      {
        id: "2.1", track: 2, order: 1, ref: "Dhp 1–2", pali: "Yamakavagga",
        title: "The Claim Behind the Verses", minutes: 9,
        hook: "The same two verses, read a second time. This time for the argument.",
        oneIdea: "The verses claim that intention is causally prior to experience — a strong and testable proposition.",
        context:
          "You have read these verses as a translation problem. Read them now as a doctrine. The claim is not 'be nice and good things happen'. It is that intention is the leading condition of what a person undergoes — which is either false, trivial, or a precise claim about attention and action. Sorting out which one is the work of this session.",
        blocks: [
          {
            uids: ["dhp1:1", "dhp1:2"],
            verse: true,
            para: "Intention leads; things are made by intention.",
            mark: "intention is first",
          },
          {
            uids: ["dhp1:3", "dhp1:4", "dhp1:5", "dhp1:6"],
            verse: true,
            para: "Corrupt intention, then speech or action, then suffering — in that order.",
          },
          {
            uids: ["dhp2:1", "dhp2:2"],
            verse: true,
            para: "The same three-step structure with a pure intention.",
          },
          {
            uids: ["dhp2:3", "dhp2:4", "dhp2:5", "dhp2:6"],
            verse: true,
            para: "And happiness following like a shadow — the image is of something attached, not something sent.",
          },
        ],
        inference:
          "Read as a universal causal law, the verses are easy to falsify: good intentions often produce disaster. Read as a claim about the shape of a life — that repeated intention trains attention, and attention selects what a person notices and does — they are plausible and consistent with the rest of the canon. The sutta does not specify which reading is correct. That is why the next four sessions are about the frame rather than the ethics.",
        terms: ["cetana", "kamma", "vipaka", "anicca"],
        reflection:
          "Think of a repeated intention you have — a way you enter every meeting, every conversation with a particular person. What does it make you notice, and what does it make you miss?",
        practice:
          "Before one ordinary interaction today, name your intention in a single word. Afterwards, write what you noticed that you would otherwise have missed.",
      },

      {
        id: "2.2", track: 2, order: 2, ref: "SN 56.31", pali: "Siṃsapāvana",
        title: "A Handful of Leaves", minutes: 10,
        hook: "The Buddha admits he has not told you most of what he knows.",
        oneIdea: "The teaching is deliberately partial: it claims to be sufficient for one goal, not complete about everything.",
        context:
          "The setting is a rosewood grove. The Buddha picks up a handful of leaves. The comparison that follows is one of the clearest statements in the canon about what the teaching is for — and what it leaves out on purpose.",
        blocks: [
          {
            uids: ["sn56.31:1.2", "sn56.31:1.3", "sn56.31:1.4", "sn56.31:1.5"],
            para: "He picks up a few leaves and asks which is more: these, or the grove above?",
          },
          {
            uids: ["sn56.31:1.6", "sn56.31:1.7"],
            para: "The grove, obviously.",
          },
          {
            uids: ["sn56.31:1.8"],
            para: "In the same way, what he has directly known but not explained is far greater than what he has explained.",
            mark: "much more that I have directly known",
          },
          {
            uids: ["sn56.31:1.9", "sn56.31:1.10", "sn56.31:1.11"],
            para: "The reason is not secrecy. It is that the rest is not beneficial, not relevant, and does not lead to the goal.",
          },
          {
            uids: ["sn56.31:2.1", "sn56.31:2.2"],
            para: "What he has explained is the four noble truths.",
          },
          {
            uids: ["sn56.31:3.1", "sn56.31:3.2"],
            para: "And the justification is the same criterion: it is beneficial and it leads somewhere.",
          },
        ],
        inference:
          "This is the canon's own answer to the complaint that Buddhism is vague about cosmology. It is not vague by accident; it is restricted by design. That design decision creates a boundary you will meet repeatedly: silence is not a claim, and it is not permission to fill the gap with whatever you prefer.",
        terms: ["dhamma", "ariyasacca", "dukkha", "nibbana"],
        reflection:
          "What have you wanted this teaching to answer that it declines to answer? What would it mean to accept the restriction rather than argue with it?",
        practice:
          "Write one question you are carrying that the canon explicitly leaves open. Put it somewhere you will see it. Do not resolve it this week.",
      },

      {
        id: "2.3", track: 2, order: 3, ref: "AN 6.63", pali: "Nibbedhikasutta",
        title: "Intention Is the Act", minutes: 11,
        hook: "The canon's most quoted line on karma is six words long.",
        oneIdea: "What counts as an action is the intention behind it, not only the visible movement.",
        context:
          "This sutta is a systematic list: six things to be known under six headings, each with a source, a variety, a result, a cessation, and the practice that ends it. The section on deeds contains the definition later Buddhist ethics depends on. Read it slowly — the grammar is doing work, and the order of the clauses matters more than the vocabulary.",
        blocks: [
          {
            uids: ["an6.63:33.1", "an6.63:33.2"],
            para: "Deeds, he says, should be known — with their source, variety, result, cessation, and the practice that ends them.",
          },
          {
            uids: ["an6.63:33.3", "an6.63:33.4", "an6.63:33.5"],
            para: "Then the definition: it is intention that I call deeds. Having chosen, one acts by body, speech, and mind.",
            mark: "It is intention that I call deeds",
          },
          {
            uids: ["an6.63:34.1", "an6.63:34.2"],
            para: "The source of deeds is contact — the meeting of sense, object, and attention.",
          },
          {
            uids: ["an6.63:36.1", "an6.63:36.2", "an6.63:36.3"],
            para: "The result is threefold: in this life, in the next, or at some later time.",
          },
          {
            uids: ["an6.63:37.1", "an6.63:37.2"],
            para: "And deeds cease when contact ceases — which is a claim about the whole chain, not about willpower.",
          },
        ],
        inference:
          "This definition makes negligence and 'I didn't mean it' complicated. It also makes the internal act — the rehearsing, the deciding — part of the deed, not merely preparation for it. What the sutta does not do is give a calculus. The threefold timing of results is explicitly vague, which is why later Buddhist ethics argues about it rather than calculating from it.",
        terms: ["kamma", "cetana", "vipaka", "phassa"],
        reflection:
          "Where do you treat the visible act as the real act, and the intention as private and therefore secondary? What changes if the intention is the act?",
        practice:
          "Keep a small tally today: each time you decide to say nothing, mark it. Silence is an act with an intention. What were yours?",
      },

      {
        id: "2.4", track: 2, order: 4, ref: "SN 3.17", pali: "Appamādasutta",
        title: "One Thing", minutes: 9,
        hook: "A king asks for the single quality that secures both lives.",
        oneIdea: "Diligence is presented as the one quality that makes every other quality possible.",
        context:
          "King Pasenadi is a recurring character — powerful, devout, and frequently anxious. Here he asks a practical question: is there one thing that pays off both now and later? The answer is not wisdom, ethics, or generosity. It is appamāda, usually translated 'diligence' or 'non-negligence'.",
        blocks: [
          {
            uids: ["sn3.17:1.4", "sn3.17:1.5"],
            para: "Is there one thing, the king asks, that secures benefit in this life and the next?",
          },
          {
            uids: ["sn3.17:4.1", "sn3.17:4.2"],
            para: "Yes: diligence.",
          },
          {
            uids: ["sn3.17:4.3"],
            para: "The image is an elephant's footprint, which contains the footprints of every other animal.",
            mark: "an elephant's footprint",
          },
          {
            uids: ["sn3.17:4.4", "sn3.17:4.5"],
            para: "In the same way, diligence contains every other benefit.",
          },
          {
            uids: ["sn3.17:6.1", "sn3.17:6.2", "sn3.17:6.3", "sn3.17:6.4"],
            para: "The verse adds the reason: the diligent secure both benefits, and the attentive understand why.",
          },
        ],
        inference:
          "Diligence here is not busyness. The Pali is closer to 'not letting things slip' — the opposite of negligence, which the canon treats as a moral failure rather than a scheduling problem. The claim is strong: every other good quality is unstable without it. That is testable in your own life, which is probably why the sutta uses a king rather than a monk.",
        terms: ["appamada", "sila", "punna"],
        reflection:
          "Which good intention of yours keeps failing not because you disagree with it but because you let it slip? What would non-negligence look like there?",
        practice:
          "Choose the smallest recurring obligation you have been letting slide. Do it at a fixed time for three days. Note what it costs to remember.",
      },

      {
        id: "2.5", track: 2, order: 5, ref: "AN 4.62", pali: "Anāṇasutta",
        title: "Four Kinds of Happiness", minutes: 11,
        hook: "The canon ranks the happiness of having money. Then it demotes it.",
        oneIdea: "Legitimate wealth, enjoyment, and debtlessness are real goods; blamelessness outranks them all.",
        context:
          "Anāthapiṇḍika is the canon's model lay donor — enormously wealthy, and the person who buys the Jeta Grove for the community. The Buddha is not talking to a renunciant here, and he does not treat wealth as a problem to be solved. He gives a hierarchy of ordinary happiness, ranked by what can be taken from you.",
        blocks: [
          {
            uids: ["an4.62:2.1", "an4.62:2.2", "an4.62:2.3"],
            para: "Four kinds of happiness a layperson can earn, depending on time and occasion.",
          },
          {
            uids: ["an4.62:3.2", "an4.62:3.3", "an4.62:3.4"],
            para: "The first is ownership: wealth earned by your own effort, reflected on with pleasure.",
          },
          {
            uids: ["an4.62:4.1", "an4.62:4.2", "an4.62:4.3", "an4.62:4.4"],
            para: "The second is use: spending it, and making merit with it.",
          },
          {
            uids: ["an4.62:5.1", "an4.62:5.2", "an4.62:5.3", "an4.62:5.4"],
            para: "The third is debtlessness — owing nothing, large or small.",
          },
          {
            uids: ["an4.62:6.1", "an4.62:6.2", "an4.62:6.3", "an4.62:6.4"],
            para: "The fourth is blamelessness: conduct by body, speech, and mind that you would not have to hide.",
            mark: "blameless conduct",
          },
          {
            uids: ["an4.62:8.3", "an4.62:8.4"],
            para: "The verse is blunt: the other three are not worth a sixteenth of the happiness of blamelessness.",
          },
        ],
        inference:
          "This is not asceticism. The first three are called happiness without qualification, and ownership is not condemned as attachment. The ranking is about durability and dependence: the first three can be lost or taken; the fourth cannot be taken from you, only given up. Note that 'blamelessness' is defined negatively — it is the absence of something you would have to conceal.",
        terms: ["dana", "punna", "sila", "hiri"],
        reflection:
          "Which of the four do you actually organise your week around? Which one, if you lost it, would change how you feel about yourself?",
        practice:
          "List the income you have and the debts you carry. Next to each, write whether you could explain it to someone you respect. That is the blamelessness test.",
      },

      {
        id: "2.6", track: 2, order: 6, ref: "SN 56.11", pali: "Dhammacakkappavattanasutta",
        title: "The First Turning", minutes: 14,
        hook: "The sermon that starts the tradition, in the form the tradition remembers it.",
        oneIdea: "The four truths are a diagnosis with a treatment, stated in a fixed order.",
        context:
          "This is the first discourse, delivered to the five ascetics who had previously practised with the Buddha. It contains the middle way, the four noble truths, and the three rounds of understanding each truth — the structure the rest of the canon assumes. Read it as a template, not a slogan.",
        blocks: [
          {
            uids: ["sn56.11:2.1", "sn56.11:2.2", "sn56.11:2.3", "sn56.11:2.4"],
            para: "Two extremes are rejected: indulgence and self-mortification. The middle way is the eightfold path.",
          },
          {
            uids: ["sn56.11:4.1", "sn56.11:4.2"],
            para: "First truth: this is suffering — birth, ageing, illness, death, union with the disliked, separation from the liked, not getting what you want.",
            mark: "the five grasping aggregates are suffering",
          },
          {
            uids: ["sn56.11:4.3", "sn56.11:4.4", "sn56.11:4.5"],
            para: "Second: the origin is craving — for pleasure, for existence, for non-existence.",
          },
          {
            uids: ["sn56.11:4.6", "sn56.11:4.7"],
            para: "Third: cessation is the fading and release of that same craving, with nothing left over.",
          },
          {
            uids: ["sn56.11:4.8", "sn56.11:4.9", "sn56.11:4.10"],
            para: "Fourth: the path is the eightfold path.",
          },
          {
            uids: ["sn56.11:5.1", "sn56.11:5.2", "sn56.11:5.3"],
            para: "Then the three rounds: this truth is to be seen, then understood, then understood completely — for each of the four.",
            mark: "should be completely understood",
          },
        ],
        inference:
          "The four truths are often presented as pessimistic because they begin with suffering. The structure is medical: diagnosis, cause, prognosis, treatment. The third truth is the claim that the condition is not permanent, which is why the set is not despair. The 'three rounds' are easy to skip and are the part that turns the list into a practice: each truth has a task, not just a proposition.",
        terms: ["dukkha", "samudaya", "nirodha", "magga", "tanha"],
        reflection:
          "Take one recurring difficulty in your life. Which of the four slots does it occupy — symptom, cause, possibility of ending, or practice? Most people stop at the first.",
        practice:
          "Write your difficulty in four lines, one per truth. If you cannot fill the fourth line with something you could do, the diagnosis is incomplete.",
      },

      {
        id: "3.1", track: 3, order: 1, ref: "DN 31", pali: "Sigālovādasutta",
        title: "Fourteen Things Left Behind", minutes: 12,
        hook: "Before the famous part about directions, there is a list of what to stop doing.",
        oneIdea: "Ethical life starts as subtraction: remove the behaviours that corrupt action and drain a household.",
        context:
          "DN 31 is addressed to Sigālaka, a young householder performing a ritual his dying father asked for. Before reinterpreting the ritual, the Buddha gives a diagnostic: fourteen things a person leaves behind. Four corrupt deeds, four motives for wrongdoing, six drains on wealth. The order matters — conduct first, then the positive relationships.",
        blocks: [
          {
            uids: ["dn31:3.1"],
            para: "Leave behind fourteen bad things, and the six directions are covered.",
          },
          {
            uids: ["dn31:3.6"],
            para: "The four corrupt deeds: killing, stealing, sexual misconduct, lying.",
          },
          {
            uids: ["dn31:5.1", "dn31:5.2", "dn31:5.3", "dn31:5.4"],
            para: "The four grounds for doing them: favoritism, hostility, stupidity, cowardice.",
            mark: "favoritism, hostility, stupidity, and cowardice",
          },
          {
            uids: ["dn31:7.1", "dn31:7.2"],
            para: "The six drains: drink, night roaming, festivals, gambling, bad friends, laziness.",
          },
          {
            uids: ["dn31:8.1", "dn31:8.2"],
            para: "Drink costs money, starts quarrels, damages health and reputation, and weakens judgment.",
          },
          {
            uids: ["dn31:9.1", "dn31:9.2"],
            para: "Night roaming leaves the household unguarded and invites suspicion and rumour.",
          },
        ],
        inference:
          "The list is not a universal moral code; it is addressed to a wealthy householder in a specific economy, and several items (festivals, night markets) are about reputation and property as much as ethics. What travels is the structure: corrupt action, corrupt motive, and slow leakage. The four grounds are the most portable part — they describe why people do wrong when they know better.",
        terms: ["sila", "apayamukha", "hiri", "ottappa"],
        reflection:
          "Which of the four grounds — favoritism, hostility, stupidity, cowardice — most often explains your own compromises? Be specific about the last one.",
        practice:
          "Take one decision you are avoiding. Name which of the four grounds is operating. If it is cowardice, write the sentence you are afraid to say.",
      },

      {
        id: "3.2", track: 3, order: 2, ref: "DN 31", pali: "Sigālovādasutta",
        title: "The Six Directions", minutes: 15,
        hook: "The ritual is replaced by a map of obligations — and every one runs both ways.",
        oneIdea: "A relationship is a pair of duties, not a status; each direction names what both parties owe.",
        context:
          "Sigālaka has been worshipping the six directions because his father told him to. The Buddha does not tell him to stop. He tells him what the directions mean: six relationships, each with five duties in each direction. Read the reciprocity carefully — it is the part usually omitted when the sutta is quoted.",
        blocks: [
          {
            uids: ["dn31:27.2", "dn31:27.3"],
            para: "Parents are the east, teachers the south, partner and children the west, friends the north, workers below, ascetics above.",
          },
          {
            uids: ["dn31:28.1", "dn31:28.2"],
            para: "A child serves parents by supporting them, doing their duty, maintaining the family, caring for the inheritance, and making offerings after death.",
          },
          {
            uids: ["dn31:28.3", "dn31:28.4"],
            para: "Parents return it: they restrain from bad, support good, train in a profession, arrange a marriage, and hand over the inheritance in time.",
            mark: "show sympathy to them in five ways",
          },
          {
            uids: ["dn31:30.1", "dn31:30.2"],
            para: "A husband serves his wife by honouring her, not looking down on her, fidelity, sharing authority, and gifts.",
          },
          {
            uids: ["dn31:30.3", "dn31:30.4"],
            para: "She returns it by managing the work and the household, fidelity, protecting his earnings, and diligence.",
          },
          {
            uids: ["dn31:32.1", "dn31:32.2"],
            para: "A master serves workers by assigning work by ability, paying food and wages, nursing them when sick, sharing treats, and giving time off.",
            mark: "paying food and wages",
          },
          {
            uids: ["dn31:32.3", "dn31:32.4"],
            para: "They return it by rising first, retiring last, not stealing, doing the work well, and protecting his reputation.",
          },
        ],
        directions: [
          { dir: "East", who: "Parents", serve: "Support, duty, family line, inheritance, offerings after death", receive: "Restraint, encouragement, training, a suitable partner, inheritance in time" },
          { dir: "South", who: "Teachers", serve: "Rising, service, listening, care, learning the craft", receive: "Thorough teaching, clear explanation, introductions, protection" },
          { dir: "West", who: "Partner & children", serve: "Honour, respect, fidelity, shared authority, gifts", receive: "Household management, fidelity, protecting earnings, diligence" },
          { dir: "North", who: "Friends & colleagues", serve: "Giving, kind words, care, equality, honesty", receive: "Guardianship, protecting property, safety, loyalty, honouring descendants" },
          { dir: "Below", who: "Workers", serve: "Work by ability, wages, care in illness, shared treats, time off", receive: "Early rising, late retiring, honesty, good work, good reputation" },
          { dir: "Above", who: "Ascetics & brahmins", serve: "Loving deeds, not turning them away, material support", receive: "Restraint from bad, support in good, kindly thought, teaching, clarification, the path" },
        ],
        inference:
          "The sutta is often cited for the 'five duties of a husband' and stops there. The full passage gives five duties to the wife as well, and to workers, and to masters. It is a reciprocity text inside a hierarchical society, not a blueprint for one. Two instructions are genuinely radical for the setting: paying wages and nursing workers when sick. Read the hierarchy critically, but do not pretend the reciprocity is not there.",
        terms: ["sila", "disa", "dana", "sangha"],
        reflection:
          "Pick the direction you occupy most often. Which of your five duties do you actually perform? Which do you expect the other party to perform without reciprocating?",
        practice:
          "Choose one relationship on the map. Write your five duties in your own words. Do the one you have been skipping, this week, without announcing it.",
      },

      {
        id: "3.3", track: 3, order: 3, ref: "Snp 2.4", pali: "Maṅgalasutta",
        title: "What Counts as a Blessing", minutes: 11,
        hook: "A deity asks for the highest blessing. The answer is a list of ordinary competence.",
        oneIdea: "Blessing is not luck; it is the accumulated effect of decent, skilled, well-ordered living.",
        context:
          "The Maṅgala Sutta is one of the most recited texts in Theravāda households. A deity asks what the highest blessing is, expecting perhaps a ritual answer. The reply is a list that starts with avoiding fools and ends with a mind that does not shake. It is a portrait of a good life, not a promise of one.",
        blocks: [
          {
            uids: ["snp2.4:2.1", "snp2.4:2.2", "snp2.4:2.3", "snp2.4:2.4"],
            verse: true,
            para: "Gods and humans have wondered about blessings. Declare the highest.",
          },
          {
            uids: ["snp2.4:3.1", "snp2.4:3.2", "snp2.4:3.3", "snp2.4:3.4"],
            verse: true,
            para: "Not keeping company with fools, keeping company with the wise, honouring the worthy.",
          },
          {
            uids: ["snp2.4:5.1", "snp2.4:5.2", "snp2.4:5.3", "snp2.4:5.4"],
            verse: true,
            para: "Education, a craft, discipline, and well-spoken speech.",
            mark: "well-spoken speech",
          },
          {
            uids: ["snp2.4:6.1", "snp2.4:6.2", "snp2.4:6.3", "snp2.4:6.4"],
            verse: true,
            para: "Caring for parents, kindness to partner and children, work that does not distress.",
          },
          {
            uids: ["snp2.4:8.1", "snp2.4:8.2", "snp2.4:8.3", "snp2.4:8.4"],
            verse: true,
            para: "Abstaining from evil, avoiding liquor, diligence in good qualities.",
          },
          {
            uids: ["snp2.4:12.1", "snp2.4:12.2", "snp2.4:12.3", "snp2.4:12.4"],
            verse: true,
            para: "And the last: when touched by worldly conditions, the mind does not tremble — sorrowless, stainless, secure.",
          },
        ],
        inference:
          "The list is often read as a recipe for respectability. Notice where it ends: not wealth, family, or reputation, but equanimity under change. The earlier items are conditions that make the last one possible, not the blessing itself. Also notice 'work that does not distress' — the sutta assumes that the kind of work you do is part of the ethical life, which is the bridge to the next two sessions.",
        terms: ["mangala", "sila", "appamada", "upekkha"],
        reflection:
          "Which item on the list would your life look most different without? Which one are you treating as optional?",
        practice:
          "Write your own list of six blessings, in the same plain register. Put the last one as a state of mind, not an achievement.",
      },

      {
        id: "3.4", track: 3, order: 4, ref: "AN 8.54", pali: "Dīghajāṇusutta",
        title: "Eight Things a Household Needs", minutes: 13,
        hook: "A layman asks for advice that works in this life, not only the next.",
        oneIdea: "Worldly welfare has four components — effort, protection, friendship, balance — and none of them is maximising income.",
        context:
          "Dīghajāṇu is explicit that he is not a monk: he has children, wears cologned garlands, and handles money. He asks for teaching that fits. The answer is unusually concrete, and it includes a budget rule that would not be out of place in a personal finance book.",
        blocks: [
          {
            uids: ["an8.54:2.1", "an8.54:2.2", "an8.54:2.3"],
            para: "Four things lead to welfare in this life: initiative, protection, good friendship, balanced finances.",
          },
          {
            uids: ["an8.54:2.5", "an8.54:2.6", "an8.54:2.7", "an8.54:2.8"],
            para: "Initiative: knowing how to organise work so it actually gets finished.",
          },
          {
            uids: ["an8.54:3.2", "an8.54:3.3", "an8.54:3.4", "an8.54:3.5"],
            para: "Protection: guarding what you have earned against rulers, thieves, fire, flood, and unloved heirs.",
          },
          {
            uids: ["an8.54:4.1", "an8.54:4.2", "an8.54:4.3"],
            para: "Good friendship: live near people mature in faith, ethics, generosity, and wisdom. Talk with them, and copy what they do.",
            mark: "emulates the same kind of accomplishment",
          },
          {
            uids: ["an8.54:5.1", "an8.54:5.2", "an8.54:5.3", "an8.54:5.4"],
            para: "Balance: knowing income and expenditure, neither extravagant nor frugal, so income exceeds outgo.",
          },
          {
            uids: ["an8.54:9.1", "an8.54:9.2", "an8.54:9.3"],
            para: "For the next life, four more: faith, ethics, generosity, wisdom.",
          },
        ],
        inference:
          "The four worldly goods are not a prosperity gospel. Protection is explicitly about loss, and the budget rule is about sufficiency, not growth. The most interesting claim is the third: your financial behaviour is shaped by the people you spend time with, and the sutta treats that as a structural factor rather than a matter of willpower. That is a more sociological claim than the canon is usually given credit for.",
        terms: ["kalyannamitta", "samajivita", "dana", "sila"],
        reflection:
          "Who are the five people you speak to most about money? What do they treat as normal? What would change if you took the friendship factor seriously?",
        practice:
          "Write your monthly income and your three largest expenses. Compare them as a ratio. Do not change anything yet — just write the number you have been avoiding.",
      },

      {
        id: "3.5", track: 3, order: 5, short: true, ref: "AN 5.177", pali: "Vaṇijjāsutta",
        title: "Five Trades", minutes: 8,
        hook: "Five lines. The shortest text in the path, and the hardest to apply.",
        oneIdea: "Some livelihoods are ruled out for lay followers because their business model requires harm.",
        context:
          "This is the whole sutta: a list of five trades a lay follower should not engage in. There is no argument attached. Everything difficult about it is in the application — what counts as a weapon, whether 'meat' means butchery or any food business, whether intoxicants includes a bar or a delivery app.",
        blocks: [
          {
            uids: ["an5.177:1.1", "an5.177:1.2", "an5.177:1.3"],
            para: "A lay follower should not trade in weapons, living beings, meat, intoxicants, or poisons.",
            mark: "weapons, living creatures, meat, intoxicants, and poisons",
          },
          {
            uids: ["an5.177:1.4"],
            para: "That is the whole instruction.",
          },
        ],
        inference:
          "The list is short because the principle is meant to be applied, not legislated. Two readings are defensible: a narrow one (do not be the seller whose product is the harm) and a broad one (do not profit from an industry whose core product is harm). The canon does not settle it. What it rules out is the claim that livelihood is ethically neutral. Note that the text addresses trade, not employment or investment, and that gap is real.",
        terms: ["sila", "samma-ajiva", "kamma"],
        reflection:
          "Where does your income come from, at two removes? If your employer's core product were a weapon, would you need to know?",
        practice:
          "Trace one purchase you made this week back to the trade that produced it. If you cannot, write down why not.",
      },

      {
        id: "3.6", track: 3, order: 6, ref: "AN 4.192", pali: "Sappurisasutta",
        title: "How to Know a Person", minutes: 10,
        hook: "Character is not visible in an interview. The sutta gives four tests and a time frame.",
        oneIdea: "You learn what a person is like by duration, dealings, trouble, and conversation — not by impression.",
        context:
          "This is a short, almost procedural sutta. Four things can be known in four situations, and each comes with a condition: over a long time, not casually; by the attentive, not the inattentive. It is a direct answer to the question of how to judge character without pretending to read minds.",
        blocks: [
          {
            uids: ["an4.192:1.1", "an4.192:1.2", "an4.192:1.3"],
            para: "Ethics is known by living together — over a long time, attentively, by the wise.",
            mark: "only after a long time",
          },
          {
            uids: ["an4.192:1.4"],
            para: "Purity is known by dealing with someone — how they behave when something is at stake.",
          },
          {
            uids: ["an4.192:1.5"],
            para: "Resilience is known in times of trouble.",
          },
          {
            uids: ["an4.192:1.6"],
            para: "Wisdom is known by discussion — again, over time, attentively.",
          },
          {
            uids: ["an4.192:2.1", "an4.192:2.2"],
            para: "He then repeats the claim and asks why he said it, which is the sutta's way of marking it as the point.",
          },
        ],
        inference:
          "The four tests are ordered by cost: cohabitation is expensive, a transaction is cheaper, trouble is unpredictable, conversation is cheap. That ordering is a warning about the cheapest test — you can learn a lot from talking to someone, and it is the least reliable. It also implies that trusting someone quickly is not a virtue, which cuts against a lot of modern advice about 'gut instinct'.",
        terms: ["sila", "panna", "kalyannamitta", "khanti"],
        reflection:
          "Which of the four tests have you actually used on the people you trust? Which one have you substituted with impression?",
        practice:
          "Pick one person you are about to trust with something. Name which of the four tests you have evidence for, and which you are assuming.",
      },

      {
        id: "4.1", track: 4, order: 1, ref: "MN 19", pali: "Dvedhāvitakkasutta",
        title: "Two Kinds of Thought", minutes: 11,
        hook: "Before his awakening, the Buddha sorted his thoughts into two piles.",
        oneIdea: "Whatever the mind rehearses becomes its inclination; attention is not a neutral act.",
        context:
          "This is a rare first-person account. Before his awakening, the Buddha ran an experiment on his own mind: he divided the thoughts that arose into two classes, and watched where each class led. What follows is not a rule about which thoughts are forbidden but a report on what repeated thinking does to a mind. The cowherd simile makes the stakes ordinary — a herd kept out of the crops because the cost of wandering is real.",
        blocks: [
          {
            uids: ["mn19:2.3", "mn19:2.4", "mn19:2.5", "mn19:2.6"],
            para: "He assigned sensual, malicious, and cruel thoughts to one class; thoughts of renunciation, good will, and harmlessness to the other.",
            mark: "to one class",
          },
          {
            uids: ["mn19:3.1", "mn19:3.2", "mn19:3.3", "mn19:3.4", "mn19:3.5"],
            para: "When a sensual thought arose, he checked what it led to — harm to himself, to others, to both — and it faded on its own.",
            mark: "It leads to hurting myself, hurting others, and hurting both",
          },
          {
            uids: ["mn19:6.1", "mn19:6.2"],
            para: "Then the general law: whatever you think about and consider often becomes the mind's inclination.",
            mark: "becomes their heart's inclination",
          },
          {
            uids: ["mn19:7.1", "mn19:7.2", "mn19:7.3", "mn19:7.4", "mn19:7.5"],
            para: "The cowherd keeps the herd out of the crops because the penalty is real, not because wandering is abstractly wrong.",
          },
        ],
        inference:
          "The claim is causal, not moralistic: attention trains inclination. Notice what the sutta does not say — that thoughts are deeds to be punished, or that the goal is to stop thinking. He lets a thought go once he sees where it leads, and the seeing is what does the work. That is why the practice asks you to name the destination of a thought rather than to suppress it.",
        terms: ["vitakka", "sati", "samadhi"],
        reflection:
          "Which thought do you rehearse most often, and where is it leading? Not what you believe about it — where it actually goes.",
        practice:
          "For one day, when a recurring thought appears, name it as leading somewhere or nowhere. Write the name once, not the analysis.",
      },

      {
        id: "4.2", track: 4, order: 2, ref: "MN 20", pali: "Vitakkasaṇṭhānasutta",
        title: "Five Ways to Put a Thought Down", minutes: 12,
        hook: "The canon's manual for a thought you cannot stop thinking.",
        oneIdea: "A stuck thought is not fought with one technique; the sutta gives five, ordered by cost.",
        context:
          "The title means 'the settling of thoughts'. The Buddha lists five strategies for an unskillful thought that will not leave, each with its own image, and each presented as a fallback for when the previous one failed. The order matters: the first is cheap and gentle, the last is physical and ugly. Commentaries describe it as a ladder you descend only as far as you must, which is why the sequence runs from substitution to force.",
        blocks: [
          {
            uids: ["mn20:2.1", "mn20:2.2", "mn20:3.1", "mn20:3.2", "mn20:3.3", "mn20:3.4"],
            para: "First, substitution: move attention to a different, skillful subject, the way a mason knocks out a peg with a finer peg.",
            mark: "focus on five subjects",
          },
          {
            uids: ["mn20:4.1", "mn20:4.2"],
            para: "Second, look at the cost: these thoughts are unskillful, blameworthy, and end in suffering.",
            mark: "examine the drawbacks",
          },
          {
            uids: ["mn20:5.1", "mn20:5.2", "mn20:5.3", "mn20:5.4", "mn20:5.5"],
            para: "Third, look away: not every thought deserves engagement. Shut your eyes, or turn them elsewhere.",
          },
          {
            uids: ["mn20:6.1", "mn20:6.2", "mn20:6.3"],
            para: "Fourth, still the formation: step the mind down to something subtler, as a walker slows, stands, sits, and lies down.",
          },
          {
            uids: ["mn20:7.1", "mn20:7.2", "mn20:7.3"],
            para: "Fifth and last: teeth clenched, tongue to the palate, crush the thought by force. The emergency option, not the opening move.",
            mark: "squeeze, squash, and crush mind with mind",
          },
          {
            uids: ["mn20:8.11", "mn20:8.12"],
            para: "The result is not a blank mind but a trained one: to think what you intend to think.",
            mark: "master of the ways of thought",
          },
        ],
        inference:
          "The last technique is deliberately ugly, and the text does not apologise for it. That honesty is the point: some thoughts do not yield to gentle substitution, and pretending otherwise leaves people feeling like failures. What the sutta does not promise is that any technique works every time. It presents the five as a set you try in order, which is closer to how stuckness actually behaves than a single remedy would be.",
        terms: ["vitakka", "kilesa", "samadhi"],
        reflection:
          "Which technique do you reach for first — and is it the cheapest one, or the one that feels most like trying?",
        practice:
          "Take one recurring thought this week. Try substitution first. Go to the next technique only if it returns, and note which one actually worked.",
      },

      {
        id: "4.3", track: 4, order: 3, ref: "MN 61", pali: "Ambalaṭṭhikārāhulovādasutta",
        title: "The Mirror", minutes: 11,
        hook: "Before, during, and after: the canon's three-time check on any action.",
        oneIdea: "Actions are checked three times — before, during, and after — against harm to yourself, to others, and to both.",
        context:
          "The Buddha is teaching his son Rāhula, and he begins with something a child can answer: what is a mirror for? The answer, checking your reflection, becomes the frame for the whole instruction. Deeds of body, speech, and mind are to be done only after repeated checking. The criterion is not a rule list but a question about harm, asked in three tenses, with a repair procedure for when the answer is bad.",
        blocks: [
          {
            uids: ["mn61:8.1", "mn61:8.2", "mn61:8.3", "mn61:8.4"],
            para: "He asks his son what a mirror is for, and gets the obvious answer: to check yourself.",
            mark: "What is the purpose of a mirror",
          },
          {
            uids: ["mn61:9.1", "mn61:9.2", "mn61:9.3"],
            para: "Before acting with the body, check: does this lead to harm for me, for others, or for both?",
            mark: "lead to hurting myself, hurting others, or hurting both",
          },
          {
            uids: ["mn61:10.1", "mn61:10.2", "mn61:10.3"],
            para: "While acting, check again — the same question, in the present tense.",
          },
          {
            uids: ["mn61:11.1", "mn61:11.2", "mn61:11.3", "mn61:11.4", "mn61:11.5", "mn61:11.6", "mn61:11.7"],
            para: "Afterwards, check once more. If it harmed, confess and reveal it, and restrain yourself in future.",
            mark: "confess, reveal, and clarify",
          },
        ],
        inference:
          "Three tenses is the unusual part: most systems check intention beforehand and consequences afterwards, but this one also asks in the middle of the act. It also assumes failure — the repair procedure is confession and restraint, not absolution. And the criterion is harm rather than rule-compliance, which makes the check portable to situations the canon never imagined. That portability is a strength and a difficulty: you have to judge.",
        terms: ["kamma", "sila", "sati"],
        reflection:
          "Which recurring action of yours would fail the mid-act check — the one you never pause inside of?",
        practice:
          "Run one real decision through all three checks this week. Write one line before, one during, one after.",
      },

      {
        id: "4.4", track: 4, order: 4, ref: "SN 36.6", pali: "Sallathasutta",
        title: "Two Arrows", minutes: 10,
        hook: "Pain is the first arrow. The story you tell about it is the second.",
        oneIdea: "Pain is unavoidable; the resistance and commentary added to it are a second, optional suffering.",
        context:
          "The sutta compares an ordinary person with a trained disciple, and both are struck by pain. The difference is not the sensation but what is added to it. The image is exact and has been reused for two thousand years: one arrow is the pain, the second is the reaction. Read the careful phrasing — the disciple still feels the first arrow; what is dropped is the second.",
        blocks: [
          {
            uids: ["sn36.6:1.5", "sn36.6:1.6", "sn36.6:1.7", "sn36.6:1.8", "sn36.6:1.9", "sn36.6:1.10"],
            para: "An untrained person struck by pain sorrows and resists, and so feels two feelings — physical and mental.",
            mark: "only to be struck with a second arrow",
          },
          {
            uids: ["sn36.6:2.1", "sn36.6:2.2", "sn36.6:2.3"],
            para: "The trained disciple feels the same pain without the wailing: one feeling, physical, not mental.",
            mark: "physical, not mental",
          },
          {
            uids: ["sn36.6:3.1", "sn36.6:3.2", "sn36.6:3.3", "sn36.6:3.4", "sn36.6:3.5", "sn36.6:3.6"],
            para: "The image is exact: struck with one arrow, not two.",
          },
          {
            uids: ["sn36.6:3.7", "sn36.6:3.8", "sn36.6:3.9", "sn36.6:3.10", "sn36.6:3.11"],
            para: "What is dropped is the resistance — and with it the scramble for a distraction.",
            mark: "they don't resist it",
          },
        ],
        inference:
          "The sutta is narrower than its modern reputation. It does not say pain is optional, or that the disciple feels nothing; the first arrow remains. What is optional is the second — aversion, narrative, and the search for a sensual escape. That distinction is useful precisely because it is modest: you cannot always change the sensation, but the reaction is trainable, and the text says so without promising bliss.",
        terms: ["vedana", "dukkha", "tanha"],
        reflection:
          "Take one discomfort from today. Which part was the sensation, and which part was the story about the sensation?",
        practice:
          "Next time something hurts — something small is fine — separate it in words: this is the sensation; this is what I am adding.",
      },

      {
        id: "4.5", track: 4, order: 5, ref: "AN 6.55", pali: "Soṇasutta",
        title: "The Lute String", minutes: 10,
        hook: "Too tight, too slack, or tuned: the canon's argument against grinding.",
        oneIdea: "Effort has a tuning; too forceful leads to restlessness, too slack to laziness.",
        context:
          "Soṇa has been practising hard and getting nowhere. He considers disrobing and going home to his family's wealth. The Buddha does not tell him to try harder. He asks about Soṇa's old skill, playing the arched harp, and draws the analogy from the strings. The advice that follows is about balance, but notice who it is addressed to: someone already straining, not someone avoiding the work.",
        blocks: [
          {
            uids: ["an6.55:3.3", "an6.55:3.4"],
            para: "Soṇa, straining in practice, considers giving it up and returning to his family's wealth.",
            mark: "return to a lesser life",
          },
          {
            uids: ["an6.55:4.2", "an6.55:4.3", "an6.55:4.4"],
            para: "The Buddha asks about his harp: were the strings playable when tuned too tight?",
          },
          {
            uids: ["an6.55:5.1", "an6.55:5.2"],
            para: "Or when tuned too slack?",
          },
          {
            uids: ["an6.55:6.1", "an6.55:6.2"],
            para: "Only at even tension was the sound resonant.",
            mark: "neither too tight nor too slack",
          },
          {
            uids: ["an6.55:7.1", "an6.55:7.2"],
            para: "The application: forceful energy breeds restlessness, slack energy breeds laziness. Balance energy and serenity.",
            mark: "when energy is too forceful it leads to restlessness",
          },
        ],
        inference:
          "This is a permission slip, but a conditional one. The sutta names two failure modes, and it does not pretend that rest is always the answer — slack energy has its own name and its own cost. The teaching also comes with a diagnosis of Soṇa's specific problem, not a general rule. Where you are on the tuning is yours to judge, and the sutta gives you the vocabulary.",
        terms: ["viriya", "samadhi", "passaddhi"],
        reflection:
          "Where are you over-tight right now — and what would even tension look like there, concretely?",
        practice:
          "Pick the practice you have been forcing. Halve it for one week. Note whether you do it more or less often.",
      },

      {
        id: "4.6", track: 4, order: 6, short: true, ref: "MN 118", pali: "Ānāpānassatisutta",
        title: "Breathing, Plainly", minutes: 8,
        hook: "The canon's most famous meditation instruction is almost boringly simple.",
        oneIdea: "Attention to breathing is trainable, ordinary, and starts with noticing whether the breath is heavy or light.",
        safety:
          "Breath practice can surface difficult material, especially for people with trauma histories or panic disorder. Stop if this destabilises you; you do not need this exercise. If breath-focused attention has distressed you before, skip this session — the practice in session 4.4 does similar work without it. If you are in crisis, contact your local emergency number or a crisis line.",
        context:
          "This is the opening of the Ānāpānassati Sutta, the canonical instruction on mindfulness of breathing. The full text has sixteen steps; this excerpt is the first four. Nothing here is exotic: the method assumes you can already breathe and can already notice. The sutta is not a promise of calm. It is a description of a trainable attention, starting at the most ordinary possible object.",
        blocks: [
          {
            uids: ["mn118:17.1", "mn118:17.2"],
            para: "Sit down, straighten up, and bring attention to the present. Breathe in mindfully; breathe out mindfully.",
            mark: "Just mindful, they breathe in",
          },
          {
            uids: ["mn118:18.1", "mn118:18.2", "mn118:18.3", "mn118:18.4"],
            para: "Notice whether the breath is heavy or light. Then the whole body, then let the body settle.",
            mark: "experiencing the whole body",
          },
        ],
        inference:
          "The entry point is deliberately mundane, which is the opposite of how meditation is usually sold. The claim is that attention is trainable in the ordinary sense — repeated, unspectacular, cumulative — and that the breath is a suitable first object because it is always present and requires no belief. The sixteen steps continue into feeling, mind, and principles, but this session stops at the body, and that stopping point is a boundary worth respecting.",
        terms: ["anapanasati", "sati", "samadhi"],
        reflection:
          "What did you notice about the breath that you had not noticed before — and how quickly did attention leave?",
        practice:
          "Five minutes, once. Sit, straighten up, and follow the breath. Not more than five minutes, and not every day unless you want to.",
      },

      {
        id: "5.1", track: 5, order: 1, ref: "SN 22.59", pali: "Anattalakkhaṇasutta",
        title: "Nothing You Can Point To", minutes: 12,
        hook: "Not-self does not mean you do not exist. It means something narrower and stranger.",
        oneIdea: "Nothing you can point to is controllable, permanent, or worth calling 'mine' in the way you assume.",
        context:
          "This is the second sermon the Buddha is said to have given, to the same five ascetics who heard the first. It is an argument, not an announcement: if any of the five aggregates were really yours, you could command it to be otherwise. You cannot. The conclusion is applied to every kind of experience, past, future, internal, external, and then the sutta states what follows from seeing it.",
        blocks: [
          {
            uids: ["sn22.59:2.1", "sn22.59:2.2", "sn22.59:2.3", "sn22.59:2.4", "sn22.59:2.5"],
            para: "If form were self, you could command it to be otherwise. You cannot — and that is the whole argument.",
            mark: "form is not-self",
          },
          {
            uids: ["sn22.59:6.1", "sn22.59:6.2", "sn22.59:6.3", "sn22.59:6.4", "sn22.59:6.5", "sn22.59:6.6", "sn22.59:6.7", "sn22.59:6.8"],
            para: "The five aggregates are impermanent; what is impermanent is suffering; what is suffering is not fit to be called mine.",
            mark: "'This is mine, I am this, this is my self'",
          },
          {
            uids: ["sn22.59:7.1"],
            para: "The conclusion is applied to every kind of form, at every time, inside and out.",
            mark: "This is not mine, I am not this, this is not my self",
          },
          {
            uids: ["sn22.59:11.1", "sn22.59:11.2"],
            para: "What follows is not nihilism but disenchantment: seeing this, desire fades, and with it the grip.",
            mark: "Being disillusioned, desire fades away",
          },
        ],
        inference:
          "The argument is about control and ownership, not about existence. The sutta never says there is no person; it says nothing you can point to behaves like a self you own. That distinction is the one most readers miss, which is why the practice asks what you can command. If you finish concluding 'nothing matters', the reading has gone wrong — disenchantment is closer to sobering up than to despair.",
        terms: ["anatta", "khandha", "dukkha"],
        reflection:
          "Find the thing you call 'me' that has not changed in ten years. What did you find instead?",
        practice:
          "Pick one thing you call yours — a habit, a role, a body part. Ask once whether you can command it to stay. Note the answer.",
      },

      {
        id: "5.2", track: 5, order: 2, ref: "SN 35.28", pali: "Ādittapariyāyasutta",
        title: "Everything Is Burning", minutes: 11,
        hook: "A sermon delivered to fire-worshippers, using their own element against them.",
        oneIdea: "Experience is on fire with craving, aversion, and confusion — which changes what 'enjoying' means.",
        context:
          "The setting matters. The Buddha is at Gayā Head, addressing a thousand ascetics who had been fire-worshippers. The metaphor of burning is not decorative; it takes the central image of their practice and turns it into a diagnosis. The list runs through every sense door and what arises there — consciousness, contact, feeling — and then names the fuel. What is being described is not the world but the way experience is consumed.",
        blocks: [
          {
            uids: ["sn35.28:1.3", "sn35.28:1.4", "sn35.28:1.5", "sn35.28:1.6", "sn35.28:1.7"],
            para: "The claim is total: the senses, their objects, and the feelings they produce are all burning.",
            mark: "all is burning",
          },
          {
            uids: ["sn35.28:1.8"],
            para: "The same analysis is then run through every sense door.",
          },
          {
            uids: ["sn35.28:1.11", "sn35.28:1.12", "sn35.28:1.13"],
            para: "The fire is not literal. It is greed, hate, and delusion, and what they keep producing.",
            mark: "Burning with the fires of greed, hate, and delusion",
          },
          {
            uids: ["sn35.28:1.14", "sn35.28:1.15", "sn35.28:1.16"],
            para: "The response is not to flee experience but to cool it: seeing this, desire fades.",
            mark: "grow disillusioned",
          },
        ],
        inference:
          "The image is often heard as 'the world is bad', but the burning is located in the relation — sense, contact, feeling — and the fuel is craving, hate, and delusion. Nothing here says the world is illusory; that is a later development. The practical claim is narrower and testable: notice what a pleasant experience is doing while you are having it. The title's pun is real, too: nibbāna means extinguishment, and this sermon is where the cooling begins.",
        terms: ["tanha", "vedana", "nibbana"],
        reflection:
          "Take one thing you enjoyed today. What was it actually doing — feeding what?",
        practice:
          "Eat or scroll once this week and narrate the fuel in three lines: what was wanted, what was feared, what went blurry.",
      },

      {
        id: "5.3", track: 5, order: 3, ref: "SN 12.2", pali: "Vibhaṅgasutta",
        title: "The Chain You Can Watch", minutes: 13,
        hook: "Suffering is manufactured, in a specific order, and the order is observable.",
        oneIdea: "Suffering is produced by a chain of conditions, not inflicted — and a chain has joints you can interrupt.",
        context:
          "This is an analysis, not a sermon: the Buddha takes dependent origination, a formula already in use, and defines each link in turn. The chain runs from ignorance through choices, consciousness, name and form, the sense fields, contact, and feeling, then turns at craving and grasping toward existence, rebirth, and the whole mass of suffering. The turn at feeling is the part a practitioner can actually observe.",
        blocks: [
          {
            uids: ["sn12.2:1.2", "sn12.2:1.3", "sn12.2:1.4", "sn12.2:1.5", "sn12.2:2.1"],
            para: "He offers an analysis rather than a doctrine: dependent origination, defined one link at a time.",
          },
          {
            uids: ["sn12.2:2.2", "sn12.2:2.3", "sn12.2:2.4", "sn12.2:2.5", "sn12.2:2.6", "sn12.2:2.7"],
            para: "It begins in the dark: ignorance conditions choices, and choices shape what can be known and felt.",
          },
          {
            uids: ["sn12.2:2.8", "sn12.2:2.9", "sn12.2:2.10", "sn12.2:2.11", "sn12.2:2.12"],
            para: "The turn happens at feeling: craving is where a sensation becomes a demand.",
            mark: "Feeling is a requirement for craving",
          },
          {
            uids: ["sn12.2:2.13"],
            para: "The conclusion is a claim about origin, not blame: this is how suffering is put together.",
            mark: "mass of suffering originates",
          },
        ],
        inference:
          "The chain is not a timeline you can put years on, and the commentarial traditions disagree about how literally to read the links across lives. What the text makes plain is structural: craving depends on feeling, and feeling depends on contact, so there are joints before the demand forms. The list is diagnostic, not devotional; memorising twelve items without locating one joint has missed the point.",
        terms: ["paticcasamuppada", "avijja", "tanha", "vedana"],
        reflection:
          "Trace one bad mood backwards: what was the contact, the feeling, and the demand?",
        practice:
          "Once this week, catch a mood early and write the chain backwards in three steps: contact, feeling, demand. Stop at demand.",
      },

      {
        id: "5.4", track: 5, order: 4, ref: "Ud 8.3", pali: "Nibbānasutta",
        title: "The Unborn", minutes: 9,
        hook: "Nibbāna is described by what it is not, and the text is very short about it.",
        oneIdea: "Nibbāna is described by negation because it is not a place or a state you can picture — and the refusal is the teaching.",
        context:
          "This is one of the canon's shortest and most quoted statements about extinguishment, delivered as a heartfelt utterance after a talk. It does not describe nibbāna; it argues that an escape from the conditioned must exist, on the grounds that experience would otherwise have no way out. The logic is spare, and the text leaves almost everything else unsaid — which is the point, and also the difficulty.",
        blocks: [
          {
            uids: ["ud8.3:3.1"],
            para: "The claim is bare: there is a freedom from rebirth and from everything produced, made, and conditioned.",
            mark: "freedom from what has been produced, made, and conditioned",
          },
          {
            uids: ["ud8.3:3.2"],
            para: "The argument is conditional: if there were no such freedom, there would be no escape from the made.",
          },
          {
            uids: ["ud8.3:3.3"],
            para: "And since there is such a freedom, the text concludes that an escape is found.",
            mark: "an escape is found",
          },
        ],
        inference:
          "The passage describes by absence and by logic, not by picture. It does not say where nibbāna is, what it feels like, or whether it is a kind of consciousness, and the traditions genuinely differ on those questions. What the text insists on is that the unconditioned is not simply the conditioned switched off. Any sentence that turns this into a spa has added what the sutta refused to add — including sentences in this app.",
        terms: ["nibbana", "sankhara", "nirodha"],
        reflection:
          "Write your own picture of 'being at peace'. Which parts of the picture would this text refuse?",
        practice:
          "Write one sentence about what you hope 'the end of suffering' is. Read it again in a week and cross out what you have added.",
      },

      {
        id: "5.5", track: 5, order: 5, ref: "SN 45.8", pali: "Vibhaṅgasutta",
        title: "Eight Practices, Not Eight Virtues", minutes: 12,
        hook: "The eightfold path, defined one item at a time — and the definitions are concrete.",
        oneIdea: "The path is eight practices with working definitions, not eight abstract virtues.",
        context:
          "The eightfold path is usually presented as a list of noble qualities. This sutta analyses it, and the analysis is procedural: right view is knowing four things, right speech is refusing four kinds of talk, right effort is four moves. Reading the definitions is a corrective to the misty version. It also shows the order doing work — view shapes purpose, purpose shapes speech and action, and the last three items describe the effort that holds the rest.",
        blocks: [
          {
            uids: ["sn45.8:2.1", "sn45.8:2.2"],
            para: "First the list, in order: view, purpose, speech, action, livelihood, effort, mindfulness, immersion.",
            mark: "right view, right purpose, right speech",
          },
          {
            uids: ["sn45.8:3.1", "sn45.8:3.2", "sn45.8:3.3"],
            para: "Right view is not optimism. It is knowing suffering, its origin, its cessation, and the practice.",
          },
          {
            uids: ["sn45.8:4.1", "sn45.8:4.2"],
            para: "Right purpose is three orientations: letting go, good will, and harmlessness.",
          },
          {
            uids: ["sn45.8:5.2", "sn45.8:5.3"],
            para: "Right speech is defined by four refusals: false, divisive, harsh, and pointless talk.",
            mark: "false, backbiting, harsh, or nonsensical",
          },
          {
            uids: ["sn45.8:7.1", "sn45.8:7.2", "sn45.8:7.3"],
            para: "Right livelihood is the one definition that points elsewhere: give up wrong livelihood — and session 3.5 names the five trades.",
            mark: "gives up wrong livelihood",
          },
          {
            uids: ["sn45.8:8.2", "sn45.8:8.3", "sn45.8:8.4", "sn45.8:8.5"],
            para: "Right effort is four moves: prevent, abandon, arouse, and maintain.",
          },
        ],
        inference:
          "The definitions are procedural because the path is a set of things to do, not states to admire. Right speech is not a personality trait but four refusals you can check at the end of a day. The ordering is also a claim — view first — which is why the path is not a menu. The factors support each other; the text treats them as a system, not a ladder.",
        terms: ["magga", "sammaditthi", "sammavaca"],
        reflection:
          "Score yourself 1–5 on each of the eight. Which number is lowest — and is it a practice you have never actually defined?",
        practice:
          "Score yourself 1–5 on all eight. Do not fix anything this week. Keep the card and look at it once.",
      },

      {
        id: "5.6", track: 5, order: 6, ref: "MN 72", pali: "Vacchagottasutta",
        title: "The Questions Left Alone", minutes: 12,
        hook: "The Buddha refuses to answer, and the refusal is the lesson.",
        oneIdea: "A teaching that knows its limits is more trustworthy than one that answers everything.",
        context:
          "The wanderer Vacchagotta asks whether a realized one exists after death, does not exist, both, or neither. The Buddha refuses all four, and when pressed explains why: these views are a thicket, a fever, and they do not lead to peace. The fire simile that follows is the canon's clearest statement that some questions are not answered because the categories do not apply. This is the ethical centre of the app's method.",
        blocks: [
          {
            uids: ["mn72:14.1"],
            para: "The reason is stated: these convictions are a thicket, a fever, and they do not lead to peace.",
            mark: "thicket of views",
          },
          {
            uids: ["mn72:16.1", "mn72:16.2", "mn72:16.3", "mn72:16.4", "mn72:16.5", "mn72:16.6", "mn72:16.7", "mn72:16.8"],
            para: "Vacchagotta runs the four options — reborn, not, both, neither — and each is refused.",
            mark: "doesn't apply",
          },
          {
            uids: ["mn72:19.11", "mn72:19.12", "mn72:19.13", "mn72:19.14", "mn72:19.15", "mn72:19.16", "mn72:19.17", "mn72:19.18"],
            para: "The simile: ask which direction an extinguished fire went, and the question has no answer.",
          },
          {
            uids: ["mn72:20.1", "mn72:20.2", "mn72:20.3", "mn72:20.4"],
            para: "The point is not that the answer is secret. It is that the categories do not fit.",
            mark: "like the ocean",
          },
        ],
        inference:
          "This is the session to cite against the idea that Buddhism is a set of answers. The refusal is methodological: the four options all presuppose a thing to be located, and the teaching has undercut that presupposition. It also sets the app's own boundary — where the canon is silent, we say so rather than filling the gap. Later traditions did develop answers to some of these questions; we are describing the sutta, not adjudicating between schools.",
        terms: ["ditthi", "avijja", "nibbana"],
        reflection:
          "Name one question you keep demanding an answer to. What would stopping the demand cost you?",
        practice:
          "Write the question you will stop demanding this week. When it returns, note what the demand was doing.",
      },

      {
        id: "6.1", track: 6, order: 1, ref: "MN 58", pali: "Abhayarājakumārasutta",
        title: "True, Useful, Timely", minutes: 11,
        hook: "Truth alone is not a licence to speak.",
        oneIdea: "Speech is judged by truth, benefit, and timing together — and even then, gently.",
        context:
          "Prince Abhaya is sent by a rival sect with a question built as a trap: does the Buddha say things people dislike? A yes makes him ordinary; a no contradicts the obvious. The Buddha refuses the frame — 'this matter is not categorical' — and then gives the four-case analysis that has been quoted ever since. The image used to explain it is a child with something stuck in their throat: the point is help, not victory.",
        blocks: [
          {
            uids: ["mn58:6.2", "mn58:6.3"],
            para: "The question is built as a trap: yes or no. He refuses the frame.",
            mark: "This matter is not categorical",
          },
          {
            uids: ["mn58:8.1", "mn58:8.2"],
            para: "Speech that is false and pointless is out. So is speech that is true but harmful.",
          },
          {
            uids: ["mn58:8.3"],
            para: "What remains is true, beneficial, and timely — even when it is unwelcome.",
            mark: "knows the right time to speak",
          },
          {
            uids: ["mn58:8.4", "mn58:8.5", "mn58:8.6"],
            para: "The same test runs the other way: being liked is not a licence either.",
          },
        ],
        inference:
          "The three-part test is usually quoted as a green light, but the sutta is equally a brake. Notice the two refusals that do not depend on the listener's reaction: false speech is out even when popular, and harmful speech is out even when true. The hardest case is the one the text keeps returning to — true, beneficial, and still disliked. There the only variable is timing, a judgement rather than a rule.",
        terms: ["sammavaca", "sila", "metta"],
        reflection:
          "Catch one true thing you said this week that did not need saying. What was it for?",
        practice:
          "Before one difficult sentence this week, run the three tests — true, beneficial, timely. If it fails one, wait a day.",
      },

      {
        id: "6.2", track: 6, order: 2, ref: "SN 45.2", pali: "Upaḍḍhasutta",
        title: "Half Is Not Enough", minutes: 9,
        hook: "Ānanda offers a modest estimate of friendship. The Buddha overrules him twice.",
        oneIdea: "Good friendship is not a support to the path; the sutta calls it the whole of the path.",
        context:
          "Ānanda, usually the most careful of the disciples, proposes that good friendship is half of the spiritual life. The Buddha's reply is unusually emphatic — 'not so, Ānanda, not so' — and the correction is total. What follows is not sentiment but an argument: people are freed by relying on a good friend, and a mendicant with good friends can be expected to develop the whole eightfold path. It is a structural claim about how teaching is transmitted.",
        blocks: [
          {
            uids: ["sn45.2:1.4"],
            para: "Ānanda proposes that good friends, companions, and associates are half of the spiritual life.",
            mark: "half the spiritual life",
          },
          {
            uids: ["sn45.2:2.1", "sn45.2:2.2", "sn45.2:2.3"],
            para: "The Buddha corrects him twice: it is the whole of the spiritual life.",
            mark: "the whole of the spiritual life",
          },
          {
            uids: ["sn45.2:4.1", "sn45.2:4.2", "sn45.2:4.3"],
            para: "The argument is by example: people are freed by relying on a good friend.",
            mark: "by relying on me as a good friend",
          },
        ],
        inference:
          "The claim is stronger than 'community helps'. It says the path is carried by persons, and that the company you keep is constitutive rather than decorative. That is uncomfortable for an app, which is why the sessions keep pointing outward. It also gives you a usable test: not whether you have friends, but whether anyone you know is good for you in this sense.",
        terms: ["kalyannamitta", "sangha", "magga"],
        reflection:
          "Name the person who is actually good for you in this sense. When did you last tell them?",
        practice:
          "Tell one person this week, specifically, what they have changed in you. Not a compliment — an observation.",
      },

      {
        id: "6.3", track: 6, order: 3, ref: "MN 21", pali: "Kakacūpamasutta",
        title: "The Saw Simile", minutes: 12,
        hook: "The standard is absurd on purpose: even under a saw, speech stays clean.",
        oneIdea: "Even under extreme provocation, the instruction is to keep mind and speech uncorrupted.",
        context:
          "The occasion is a monk, Phagguna, who has become so entangled with a group of nuns that any criticism of either party triggers anger and disciplinary action. The Buddha's response is not a boundary but a training in endurance: criticism comes in five dimensions, none of which changes the instruction, and the limit case is bandits with a two-handed saw. The image is deliberately extreme, and the text says a single malevolent thought is already a failure.",
        blocks: [
          {
            uids: ["mn21:11.1", "mn21:11.2", "mn21:11.3", "mn21:11.4", "mn21:11.5", "mn21:11.6", "mn21:11.7"],
            para: "Criticism arrives in five dimensions, and none of them change the instruction.",
            mark: "five ways in which others might criticize you",
          },
          {
            uids: ["mn21:20.1"],
            para: "Then the extreme case: bandits with a saw. A single malevolent thought means you have left the training.",
            mark: "two-handed saw",
          },
          {
            uids: ["mn21:20.3"],
            para: "The standard is stated positively: mind not degenerate, no bad words, a heart of love without secret hate.",
            mark: "We will blurt out no bad words",
          },
          {
            uids: ["mn21:21.1", "mn21:21.2"],
            para: "The test is whether any criticism remains unendurable. The answer is meant to be no.",
            mark: "any criticism, large or small, that you could not endure",
          },
        ],
        inference:
          "The saw is a thought experiment about the state of your mind under attack, not a policy about staying where harm is happening. Read alongside 3.2's duties and 4.3's harm check, it forbids retaliatory corruption; it does not require passivity, and it certainly does not require you to remain in an abusive situation. That distinction — endure without corrupting yourself versus stay and be harmed — is one the sutta does not resolve, and we should not pretend it does.",
        terms: ["khanti", "metta", "sammavaca"],
        reflection:
          "Which provocation this week would the saw test find hardest — and what would 'no bad words' require of you?",
        practice:
          "Choose one provocation you expect this week. Decide in advance what you will not say. Notice what it costs.",
      },

      {
        id: "6.4", track: 6, order: 4, ref: "SN 3.8", pali: "Mallikāsutta",
        title: "Everyone Holds Themselves Dear", minutes: 9,
        hook: "A queen and a king agree on one thing, and the Buddha turns it into an argument against harm.",
        oneIdea: "'Everyone holds themselves dearest' is offered as a basis for not harming, not a licence for selfishness.",
        context:
          "King Pasenadi and Queen Mallikā are talking privately, and the king asks whether anyone is dearer to her than herself. She says no, and turns the question back; he agrees. When he reports the exchange, the Buddha answers in verse. The reasoning is analogical, and it is one of the canon's few explicit arguments from other minds to ethics — which is why it is so often misquoted.",
        blocks: [
          {
            uids: ["sn3.8:1.4", "sn3.8:1.5", "sn3.8:1.6", "sn3.8:1.7"],
            para: "The king asks whether anyone is dearer to the queen than herself. No — and the same for him.",
          },
          {
            uids: ["sn3.8:4.1", "sn3.8:4.2"],
            para: "The verse begins with the search: having explored every quarter, one finds no one dearer than oneself.",
          },
          {
            uids: ["sn3.8:4.3", "sn3.8:4.4"],
            para: "It then draws the inference: since others hold themselves dear too, harm no one.",
            mark: "would harm no other",
          },
        ],
        inference:
          "The move is analogical: what is true of me is true of others, therefore the same protection is owed. It is not a claim that people are selfish; it is a claim that self-regard is universal, and universality is what makes harm indefensible. Read carelessly it becomes 'everyone is out for themselves', the opposite of the argument. The conclusion is an obligation, not an excuse.",
        terms: ["metta", "sila", "anatta"],
        reflection:
          "Where do you treat your own self-regard as reasonable but someone else's as selfish?",
        practice:
          "Once this week, when annoyed at someone, say silently: this person wants what I want. Note what changes, if anything.",
      },

      {
        id: "6.5", track: 6, order: 5, ref: "AN 5.57", pali: "Abhiṇhapaccavekkhitabbaṭṭhānasutta",
        title: "Five Things to Remember", minutes: 11,
        hook: "You will age, sicken, die, lose everyone, and inherit your actions. The sutta thinks this is clarifying.",
        oneIdea: "Remembering the five facts is a clarity practice, not a gloom practice.",
        safety:
          "This session is about clarity, not gloom. If reflecting on ageing, illness, or loss darkens your mood rather than steadying it, stop and skip this one — the path does not depend on it. If you are grieving or unwell, it is reasonable to come back later.",
        context:
          "The five recollections are addressed to everyone — lay or monastic, woman or man — and the sutta is explicit about their purpose. Each fact is paired with a vanity it dissolves: youth, health, life, love, ownership. The claim is that these vanities make people careless, and that remembering reduces the carelessness. It is a diagnostic text, not a meditation on death, and the whole instruction is one sentence reviewed often.",
        blocks: [
          {
            uids: ["an5.57:1.1", "an5.57:1.2", "an5.57:1.3"],
            para: "The five subjects begin with the plainest: you are liable to age.",
            mark: "I am liable to grow old",
          },
          {
            uids: ["an5.57:1.4", "an5.57:1.5", "an5.57:1.6", "an5.57:1.7", "an5.57:1.8"],
            para: "Then sickness, death, separation from all you love, and the ownership of your actions.",
            mark: "I am liable to die, I am not exempt from death",
          },
          {
            uids: ["an5.57:2.2", "an5.57:2.3"],
            para: "The reason is specific: each recollection dissolves a vanity that makes people careless.",
            mark: "intoxicated with the vanity of youth",
          },
          {
            uids: ["an5.57:7.2"],
            para: "The second turn universalises it: not just me, but everyone.",
            mark: "It's not just me who is liable to grow old",
          },
        ],
        inference:
          "The five are diagnostics of intoxication, not morbid facts to dwell on. Each names a vanity and says that seeing through it reduces careless harm — which is why the practice is one sentence and a minute, not an hour of brooding. The tradition calls this recollection, and the word is closer to remembering a fact than to ruminating on it. If it makes you feel worse rather than clearer, the instruction has been misapplied.",
        terms: ["appamada", "kamma", "anicca"],
        reflection:
          "Which of the five vanities is currently making you careless, and where?",
        practice:
          "Say one of the five plainly, out loud. Sit with it for one minute. Then stop and go do something ordinary.",
      },

      {
        id: "6.6", track: 6, order: 6, short: true, ref: "DN 16", pali: "Mahāparinibbānasutta",
        title: "The Last Words", minutes: 8,
        hook: "The path ends where it began: the same sutta, the last sentence.",
        oneIdea: "The final instruction is not a doctrine but an urgency: conditions fall apart; practise with diligence.",
        context:
          "This is the end of the long discourse that opened the path in session 1.1 — the same text, the same deathbed. The Buddha has just finished instructing the assembled mendicants, and the last words are addressed to all of them. There is no summary of the teaching here, no final doctrine, only a statement about conditioned things and an imperative. It is the only place in the app where the design allows a sentimental gesture, and it is earned.",
        blocks: [
          {
            uids: ["dn16:6.7.1", "dn16:6.7.2", "dn16:6.7.3"],
            para: "The last instruction: conditions fall apart; persist with diligence.",
            mark: "Conditions fall apart. Persist with diligence",
          },
          {
            uids: ["dn16:6.7.4"],
            para: "And then the text says, plainly, that these were his last words.",
            mark: "These were the Realized One's last words",
          },
        ],
        inference:
          "The bookend is deliberate on our part, not the canon's: 1.1 and 6.6 are the same sutta, and the path is arranged so that the first instruction and the last are the same kind of instruction — about practice, not about belief. 'Conditions fall apart' is not a consolation; it is the premise of the urgency. The app ends here because there is nothing left to add that would not be ours rather than the text's.",
        terms: ["appamada", "sankhara", "anicca"],
        reflection:
          "Write your own last line: the one sentence you would want to leave behind.",
        practice:
          "Write that sentence. Keep it where you will see it. Do not edit it for a week.",
      },
    ],

    checkpoints: [
      {
        id: "cp1", track: 2, order: 7, type: "checkpoint", ref: "Checkpoint 1",
        title: "Looking Back", minutes: 10,
        hook: "Three passages, no new teaching. What did you keep?",
        oneIdea: "Retrieval, not review: the point is what you can reconstruct without the notes.",
        intro:
          "No commentary this time. Read each passage, then answer from memory before scrolling back. Nothing here is scored, and nothing is stored anywhere but your own device.",
        passages: [
          {
            label: "Track 1 · MN 22",
            uids: ["mn22:14.1"],
            prompt: "What is the teaching compared to, and what should you do with it when you have crossed?",
          },
          {
            label: "Track 2 · SN 56.31",
            uids: ["sn56.31:1.8"],
            prompt: "What does the handful of leaves claim about what the Buddha did and did not explain?",
          },
          {
            label: "Track 2 · SN 3.17",
            uids: ["sn3.17:4.3", "sn3.17:4.4", "sn3.17:4.5"],
            prompt: "Why an elephant's footprint? What is the claim being made about diligence?",
          },
        ],
        question:
          "Which of these three claims would change something you do this week — and what would you have to stop doing for it to change?",
        reflection:
          "If you could not answer one of the three from memory, that is information, not failure. Note which one, and reread only that session before Track 3.",
      },
      {
        id: "cp2", track: 4, order: 7, type: "checkpoint", ref: "Checkpoint 2",
        title: "What You Actually Used", minutes: 10,
        hook: "Three passages you have met. Which one changed a week?",
        oneIdea: "Understanding a passage and using it are different tests; this checkpoint asks for the second.",
        intro:
          "No commentary this time. Read each passage, then answer from memory before opening it. Nothing here is scored, and nothing is stored anywhere but your own device.",
        passages: [
          {
            label: "Track 2 · AN 6.63",
            uids: ["an6.63:33.3", "an6.63:33.4", "an6.63:33.5"],
            prompt: "What does the sutta call a deed, and what does that make of an intention you never acted on?",
          },
          {
            label: "Track 3 · DN 31",
            uids: ["dn31:27.2", "dn31:27.3"],
            prompt: "What are the six directions, and what does the mapping do to the word 'duty'?",
          },
          {
            label: "Track 4 · SN 36.6",
            uids: ["sn36.6:3.1", "sn36.6:3.2", "sn36.6:3.3"],
            prompt: "What is the second arrow, and who is said to feel only one?",
          },
        ],
        question:
          "Which of these have you actually used, and which did you only understand?",
        reflection:
          "Name the one you only understood. That is the session to reread before Track 5, and the difference between the two answers is the whole point of the checkpoint.",
      },
      {
        id: "cp3", track: 6, order: 7, type: "checkpoint", ref: "Checkpoint 3",
        title: "The Whole Path, In Three Passages", minutes: 12,
        hook: "Three passages from three different tracks. Which one is yours now?",
        oneIdea: "The end of the path is not completion; it is knowing which passages you can use without notes.",
        intro:
          "No commentary, no scoring. Read each passage, answer from memory, then open it. This is the last checkpoint in the path, and the only question that matters is the one at the bottom.",
        passages: [
          {
            label: "Track 1 · AN 4.180",
            uids: ["an4.180:2.6"],
            prompt: "What is a teaching checked against, and what happens when a claim fails the test?",
          },
          {
            label: "Track 5 · SN 22.59",
            uids: ["sn22.59:7.1"],
            prompt: "What is the argument for not-self, and what is it not saying?",
          },
          {
            label: "Track 6 · DN 16",
            uids: ["dn16:6.7.1", "dn16:6.7.2", "dn16:6.7.3", "dn16:6.7.4"],
            prompt: "Why does the path end on this sentence rather than on a doctrine?",
          },
        ],
        question:
          "Which of these would you now defend, and which would you only repeat?",
        reflection:
          "The difference between defending and repeating is the whole of this path. If one of the three is only a repetition, you know exactly what to reread — and you know it without being told.",
      },
    ],
  };

  if (typeof module !== "undefined" && module.exports) module.exports = data;
  else (root.SP = root.SP || {}), (root.SP.source = data);
})(typeof globalThis !== "undefined" ? globalThis : this);
