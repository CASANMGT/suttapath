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
      version: "0.2.0",
      translationLabel: "Bhikkhu Sujato · CC0",
      totalSessions: 36,
      builtSessions: 18,
      builtTracks: [1, 2, 3],
    },

    tracks: [
      { id: 1, title: "How to Read This", subtitle: "No doctrine. Just the instrument.", status: "ready" },
      { id: 2, title: "What the Teaching Claims", subtitle: "The frame, before the ethics.", status: "ready" },
      { id: 3, title: "The Ethical Life", subtitle: "Relationships, not rules.", status: "ready" },
      { id: 4, title: "The Mind", subtitle: "Attention, habit, and the second arrow.", status: "later" },
      { id: 5, title: "The Deep End", subtitle: "Not-self, conditionality, and the unknown.", status: "later" },
      { id: 6, title: "Living With Others", subtitle: "Speech, friendship, and the last words.", status: "later" },
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
            para: "Good friendship: living near people accomplished in faith, ethics, generosity, and wisdom, and emulating them.",
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
          "The list is short because the principle is meant to be applied, not legislated. Two readings are defensible: a narrow one (do not be the seller whose product is the harm) and a broad one (do not profit from an industry whose core product is harm). The canon does not settle it. What it does rule out is the claim that livelihood is ethically neutral. This is also the passage most often cited in arguments about whether Buddhists may serve in the military, work in gambling, or invest in arms manufacturers — note that the text addresses trade, not employment or investment, and that gap is real.",
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
    ],
  };

  if (typeof module !== "undefined" && module.exports) module.exports = data;
  else (root.SP = root.SP || {}), (root.SP.source = data);
})(typeof globalThis !== "undefined" ? globalThis : this);
