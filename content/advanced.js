/* SuttaPath — Level 2 sessions (editorial layer).
 *
 * Tracks A and the first B sessions. The rest live in advanced-b/c/d.js.
 * Canon text is resolved by scripts/build.js from the pinned snapshot.
 */
module.exports = {
  status: "Level 2 content-complete: 24 sessions plus a capstone. Not yet scholar-reviewed; the pilot reader gate is still open.",
  tracks: [
    {
      code: "A",
      name: "How the Canon Is Built",
      goal: "Find a text, expand its repetitions, and know which basket you are reading.",
      minutes: "15–25 min",
      status: "ready",
    },
    {
      code: "B",
      name: "Reading Whole Suttas",
      goal: "Read a complete sutta with a map, stop points, and no paraphrase crutch.",
      minutes: "35–60 min",
      status: "ready",
    },
    {
      code: "C",
      name: "Doctrine in Depth",
      goal: "Explain the same doctrines with their joints exposed, not their slogans repeated.",
      minutes: "20–35 min",
      status: "ready",
    },
    {
      code: "D",
      name: "Comparative and Critical Reading",
      goal: "Compare versions, use Pali tools, and tell a sutta from a commentarial reading.",
      minutes: "30–45 min",
      status: "ready",
    },
  ],

  sessions: [
    {
      id: "a1", code: "A1", track: "A", order: 1, kind: "essay",
      title: "The four nikāyas, and how to find a text", minutes: 18,
      hook: "Before you read a sutta, know which collection you are in.",
      oneIdea: "The canon is a library with a map; finding a text is a skill, not luck.",
      context:
        "The four main collections are not genres in the modern sense, but they are different kinds of library. Dīgha holds the long discourses, Majjhima the middle-length arguments, Saṃyutta the short texts grouped by theme, Aṅguttara the texts grouped by number. Knowing which shelf you are on tells you what kind of reading you are about to do — and where to look when a text is quoted without its number.",
      essay: [
        "The Dīgha Nikāya is the long-discourse collection: thirty-four texts, often narrative, often addressed to kings, brahmins, or householders. It contains DN 16, the account of the Buddha's final months, and DN 31, the Sigālovāda. Long here means long by the standards of oral recitation, not long by the standards of a novel.",
        "The Majjhima Nikāya holds 152 middle-length discourses. This is where the canon argues: close analyses, extended similes, and dialogues that turn on a single distinction. MN 10, MN 63, and MN 72 all live here, and they are the texts this app uses when it wants a reader to follow a move rather than receive a list.",
        "The Saṃyutta Nikāya is the connected collection: thousands of short texts arranged by subject. SN 56.11, the first sermon, sits in the section on the four truths; SN 12.23 sits in the section on causation. Because the collection is thematic, SN is the best place to read around a topic — and the worst place to read a single text without its neighbours.",
        "The Aṅguttara Nikāya arranges texts by number: the ones, the twos, the threes, and so on up to the elevens. It is the canon's filing cabinet of lists. AN 4.41, a compact teaching on developing concentration, is in the fours; AN 8.54, on household welfare, is in the eights.",
        "A text's identifier is collection plus number. The same teaching can appear in more than one place — the first sermon is SN 56.11 and also part of the Vinaya — and titles vary by translator. On SuttaCentral, the URL pattern is collection and number, then language, then translator: /mn10/en/sujato. Parallels and alternate versions are listed on the same page.",
        "This is why 'the canon says' is almost always too coarse. A claim from AN 4.62 is a claim made to a householder, in a collection organised by number. A claim from MN 22 is made inside an argument with a monk. The shelf is part of the meaning.",
      ],
      inference:
        "Collection is context, not decoration. Reading AN as if it were MN — treating a list as an argument, or an argument as a list — is one of the most common mistakes in popular Buddhist writing. The identifiers are not bureaucracy; they tell you what kind of text you have.",
      terms: ["nikaya", "sutta", "tipitaka"],
      reflection: "Which collection have you been reading without knowing it — and what did you assume it was doing?",
      practice: "Find MN 10, SN 12.23, and AN 4.41 by their identifiers. For each, note the collection, the number, and one parallel listed on SuttaCentral.",
      retrieval: [
        { q: "What are the four main nikāyas and how is each organised?", a: "Dīgha (long), Majjhima (middle), Saṃyutta (connected by theme), Aṅguttara (numbered)." },
        { q: "Which collection holds the long discourses?", a: "Dīgha Nikāya — 34 texts, often narrative." },
        { q: "What does Saṃyutta group texts by?", a: "Theme or connected subject." },
        { q: "Why can one teaching have several identifiers?", a: "It can appear in more than one collection, or also in the Vinaya." },
        { q: "What is the SuttaCentral URL pattern?", a: "Collection and number, language, translator: /mn10/en/sujato." },
      ],
    },
    {
      id: "a2", code: "A2", track: "A", order: 2, kind: "essay",
      title: "Formula, repetition, and the ellipsis", minutes: 20,
      hook: "Repetition is not padding; it is the sutta's architecture.",
      oneIdea: "A repeated formula marks a structural unit, and an ellipsis tells you to supply it.",
      context:
        "These texts were composed for recitation and memory. Repetition is how an oral tradition keeps its place: the same sentence closes each exercise, and the listener hears the structure. When a printed edition replaces a repeated passage with an ellipsis, it is trusting you to know the formula. Read the repetitions and the text becomes a building; skip them and it becomes a list of advice.",
      essay: [
        "MN 10 repeats a refrain after every exercise. The body exercises end with a statement that the practitioner observes internally, externally, and both; that they observe arising and passing; that mindfulness is established just enough for knowledge; and that they live independent, not grasping at anything in the world. The wording barely changes. That is the point.",
        "The refrain is doing doctrinal work. It says that the exercise is not about the object — breath, posture, parts of the body — but about the pattern of observing: inside and outside, arising and passing, without clinging. The object changes; the structure does not.",
        "When the printed text shows an ellipsis, as in 'And so they meditate observing an aspect of the body internally …', it is not a gap in the source. It is a shorthand for the full refrain you have already read. The reciter expands it. A reader who does not expand it loses the frame that makes the exercise more than a technique.",
        "The same convention appears everywhere: the four jhāna formulas, the gradual training, the noble eightfold path definitions, the descriptions of the Buddha. Learn one formula and you can read a hundred texts that use it. This is not laziness in the composition; it is how a memorised literature scales.",
      ],
      excerpts: [
        {
          uids: ["mn10:5.1", "mn10:5.2", "mn10:5.3"],
          note: "The full refrain after the breathing exercise. Read it as the definition of what 'observing the body' means here.",
        },
        {
          uids: ["mn10:7.1", "mn10:7.2", "mn10:7.3"],
          note: "The same refrain after the postures. Word for word — that repetition is the structure.",
        },
        {
          uids: ["mn10:9.1"],
          note: "The ellipsis. Nothing is missing from the source; the reciter supplies the refrain above.",
        },
      ],
      inference:
        "Treating repetition as filler is a modern reading habit, and it costs the reader the argument. The refrain is the doctrine: impermanence, non-clinging, and the shift from inside to outside. If you find yourself skimming the repeated passages, you are skimming the part the text most wants you to hear.",
      terms: ["sutta", "sati", "satipatthana"],
      reflection: "Where do you skim in a text because it looks familiar — and what is the familiarity hiding?",
      practice: "Write out the MN 10 refrain once, by hand. Then mark every place it recurs in the sutta and count them.",
      retrieval: [
        { q: "What does a repeated refrain mark?", a: "A structural unit — the close of an exercise." },
        { q: "What does an ellipsis mean in a sutta?", a: "Supply the omitted repetition; it is not missing source text." },
        { q: "What does the MN 10 refrain say?", a: "Observed internally and externally, arising and passing, mindfulness established, independent, not grasping." },
        { q: "Why do oral texts repeat?", a: "For recitation, memory, and structure." },
        { q: "What is lost by skimming repetition?", a: "The structure and the doctrine the refrain carries." },
      ],
    },
    {
      id: "a3", code: "A3", track: "A", order: 3, kind: "essay",
      title: "Three reading protocols", minutes: 20,
      hook: "A dialogue, a verse, and a list are read three different ways.",
      oneIdea: "Match the reading protocol to the form: follow the exchange, the image, or the set.",
      context:
        "The canon uses several forms, and each makes a different contract with the reader. A dialogue asks you to follow who wants what. A verse asks you to hold an image. A list asks you to see the set and its order. Reading all three the same way is like reading a recipe, a poem, and a legal clause with one method — you will get something, but not what the form offers.",
      essay: [
        "SN 3.8 is a dialogue. King Pasenadi asks Queen Mallikā whether anyone is dearer to her than herself; she answers no and turns the question back. The teaching is in the exchange: the king's question, the queen's honesty, and the verse the Buddha adds when the king reports it. To read it as a doctrine about self-love is to miss the move — the argument is analogical, and the analogy is built in conversation.",
        "Snp 2.4 is verse. A deity asks for the highest blessing, and the answer is a list of ordinary decencies in metre. The form matters: verse compresses, repeats, and makes the items memorable. You do not read it for a definition; you read it for the shape of a life, held in rhythm.",
        "AN 5.177 is a list, and almost nothing else: five trades a lay follower should not engage in. There is no argument, no story, no image. The form tells you the text is a boundary marker, and the difficulty is entirely in application — what counts as a weapon, meat, or an intoxicant. A list gives you the set; it does not give you the judgment.",
        "Ask of any text: what is the form asking me to do? If the answer is 'follow the argument', track the turns. If it is 'hold the image', slow down and let the image work. If it is 'learn the set', write the set down and look for what it leaves out.",
      ],
      excerpts: [
        { uids: ["sn3.8:1.4", "sn3.8:1.5", "sn3.8:1.6", "sn3.8:1.7"], note: "Dialogue. Note who asks, who answers, and who turns the question back." },
        { uids: ["snp2.4:3.1", "snp2.4:3.2", "snp2.4:3.3", "snp2.4:3.4"], verse: true, note: "Verse. The line breaks are part of the teaching: each item lands as a unit." },
        { uids: ["an5.177:1.1", "an5.177:1.2", "an5.177:1.3"], note: "List. No argument is offered; the work is in the application." },
      ],
      inference:
        "Form is not packaging. The same claim in verse and in argument does different work in a reader, and the canon uses both deliberately. When a modern summary flattens a dialogue into a proposition, or a list into advice, it is changing the genre — and usually the authority — of what it reports.",
      terms: ["sutta", "dhamma", "sati"],
      reflection: "Which form do you trust most — and is that trust a reading habit or a real judgment?",
      practice: "For each of the three excerpts, write one sentence: what does this form let the text do that another form could not?",
      retrieval: [
        { q: "What are the three reading protocols?", a: "Dialogue, verse, and list." },
        { q: "What does a dialogue reward?", a: "Following the exchange and the questioner's move." },
        { q: "What does a verse reward?", a: "The image and its compression." },
        { q: "What does a list reward?", a: "The set, its order, and what it leaves out." },
        { q: "Which form is SN 3.8?", a: "A dialogue." },
      ],
    },
    {
      id: "a4", code: "A4", track: "A", order: 4, kind: "essay",
      title: "The Khuddaka and the verse books", minutes: 18,
      hook: "The verse books are not a beginner's annex; they are a different register.",
      oneIdea: "Dhp, Snp, Ud, Iti, Thag, and Thig carry the path as image, lament, and celebration.",
      context:
        "The Khuddaka Nikāya is the 'small collection', and it is the most varied part of the canon: verse anthologies, birth stories, songs of awakening, and short doctrinal texts. Its books are often treated as devotional supplements. They are better read as a different register of the same teaching — compressed, emotional, and meant to be remembered.",
      essay: [
        "The Dhammapada is the best known: short verses arranged by theme, each a compressed claim. Its opening pair makes intention the forerunner of experience. Read as poetry, the verses are memorable; read as propositions, they are almost too compact to argue with.",
        "The Sutta Nipāta contains some of the oldest material in the canon, including dialogues in verse and the Maṅgala Sutta's list of blessings. Its register is often archaic and image-heavy; it rewards reading aloud.",
        "The Udāna and Itivuttaka are short collections of heartfelt utterances and sayings, each framed by a story. They show the teaching as occasion: something happens, and the Buddha responds. The frame is part of the meaning.",
        "The Theragāthā and Therīgāthā are songs of awakening by monks and nuns. They are the canon's most personal literature, and they are doctrinally serious: impermanence, renunciation, and freedom are stated as experience rather than as analysis.",
        "The lesson is not that verse is easier. It is that the canon teaches in more than one key, and a reader who only reads prose arguments will mistake the tradition's emotional register for decoration.",
      ],
      excerpts: [
        { uids: ["dhp1:1", "dhp1:2", "dhp1:3", "dhp1:4", "dhp1:5", "dhp1:6"], verse: true, note: "Dhp 1. The claim is causal, compressed into an image of a wheel following an ox's hoof." },
        { uids: ["ud8.3:3.1", "ud8.3:3.2", "ud8.3:3.3"], note: "Ud 8.3. A heartfelt utterance: the unconditioned argued by absence, not described." },
      ],
      inference:
        "Verse is where the canon does its emotional and mnemonic work. Calling these books 'devotional' is not wrong, but it can imply they are optional. They are the register in which the teaching is carried by heart — and the register most likely to survive when the arguments are forgotten.",
      terms: ["gatha", "dhamma", "nibbana"],
      reflection: "Which verse has stayed with you, and what is it doing that a prose summary could not?",
      practice: "Read one verse aloud twice: once for its argument, once for its image. Note which reading the verse rewards.",
      retrieval: [
        { q: "Which books are the verse collections?", a: "Dhp, Snp, Ud, Iti, Thag, and Thig, among the Khuddaka." },
        { q: "What do verses do that prose does not?", a: "Compress doctrine into image, emotion, and memorability." },
        { q: "What is the Udāna?", a: "Heartfelt utterances, each framed by a story." },
        { q: "Are verse books less doctrinal?", a: "No — differently doctrinal; the same claims in another register." },
        { q: "What should you do with a verse first?", a: "Read it aloud and locate the image before paraphrasing." },
      ],
    },
    {
      id: "a5", code: "A5", track: "A", order: 5, kind: "essay",
      title: "Vinaya orientation", minutes: 18,
      hook: "The Vinaya is not a rulebook for laypeople, but its shape explains the canon's world.",
      oneIdea: "The Vinaya is procedural law for a community, and knowing its structure changes how you read the suttas.",
      context:
        "Most suttas are spoken inside a monastic community with rules, seasons, and procedures. The Vinaya Piṭaka is that community's law: the monastic code, the stories that produced it, and the procedures for handling disputes. A lay reader does not adopt it, but ignoring it makes the suttas look like free-floating advice rather than teaching addressed to an institution.",
      essay: [
        "The Vinaya has three main divisions. The Suttavibhaṅga contains the Pāṭimokkha — the code recited fortnightly — together with the story of each rule's origin and its analysis. The Khandhaka (Mahāvagga and Cūḷavagga) contains the community's procedures: ordination, the rains retreat, robes, food, medicine, schism, and the handling of offences. The Parivāra is a later summary and classification.",
        "The logic is legal rather than moralistic. A rule exists because something happened; the text tells you what happened, what was decided, and how the case is analysed. Offences have categories and repair. The community is expected to disagree and to have procedures for disagreement.",
        "This explains features of the suttas that otherwise look odd: the rains retreat, the emphasis on alms, the protocols for addressing monks and nuns, the repeated concern with schism, and the assumption that practice happens in a group with a teacher. It also explains why the canon's ethics can be both strict and procedural at once.",
        "Two cautions. First, the Vinaya is not a personal rulebook for lay readers; treating it as one misreads its purpose. Second, it is historically layered: rules accumulated over time, and the text preserves the arguments about them. Read it as law and history, not as a timeless manual.",
      ],
      inference:
        "Knowing the Vinaya changes the reading of the suttas from advice literature to institutional teaching. It also disciplines modern claims: a rule about monastic conduct is not automatically a rule for a householder, and a procedure for a community is not a private ethic. The app cites it for orientation only.",
      terms: ["vinaya", "bhikkhu", "sangha"],
      reflection: "Which sutta have you read as personal advice when it was addressed to a community with rules?",
      practice: "Open the Pātimokkha contents on SuttaCentral and note three things it regulates that a sutta simply assumes.",
      retrieval: [
        { q: "What are the three divisions of the Vinaya?", a: "Suttavibhaṅga, Khandhaka, Parivāra." },
        { q: "What is the Pāṭimokkha?", a: "The monastic code recited at the uposatha." },
        { q: "What does the Khandhaka cover?", a: "Community procedure and monastic life (Mahāvagga, Cūḷavagga)." },
        { q: "Why should a lay reader know its shape?", a: "Suttas assume a monastic community; the Vinaya explains its rules and procedures." },
        { q: "Is the Vinaya a personal rulebook for laypeople?", a: "No — it is procedural law for the monastic community." },
      ],
    },
    {
      id: "a6", code: "A6", track: "A", order: 6, kind: "essay",
      title: "Abhidhamma and commentary orientation", minutes: 20,
      hook: "The third basket and the commentaries are where the tradition systematises — and where the sutta stops being the only voice.",
      oneIdea: "Abhidhamma and aṭṭhakathā are later, systematic readings; label them, and never let them impersonate the sutta.",
      context:
        "The Abhidhamma Piṭaka and the commentarial literature are not the suttas, and they are not optional footnotes either. They are the tradition thinking systematically about the suttas: analysing experience into dhammas, reconciling passages, and prescribing practice. A serious reader needs to know they exist, what they do, and how to tell their voice from the text's.",
      essay: [
        "The Abhidhamma is the third basket: seven books that analyse experience into dhammas — momentary, conditioned phenomena — and organise them with matrices (mātikā). Its register is taxonomic rather than narrative. It asks not 'what happened?' but 'what is this made of, and under which categories does it fall?'",
        "The commentarial literature (aṭṭhakathā) explains the suttas word by word, resolves apparent contradictions, and supplies practice instructions. The Visuddhimagga, a fifth-century manual, is the best-known synthesis. Much of what is taught today as 'Theravāda meditation' comes from this layer, not directly from the suttas.",
        "This is not a scandal. A tradition is entitled to systematise. The problem is category confusion: quoting a commentarial definition as if it were the sutta's, or treating a later synthesis as the original teaching. The voices are different, and the difference is historically real.",
        "The rule this app follows: sutta text is quoted verbatim and attributed; our paraphrase and inference are labelled; commentarial or later readings are named as such and never presented as the text. When you read a modern teacher, ask which layer they are speaking from.",
      ],
      inference:
        "Depth in this tradition is impossible without the commentarial layer, and honesty is impossible without distinguishing it. The mature position is neither 'only the suttas' nor 'the commentaries are the real teaching', but a clear account of which voice is speaking and why it matters.",
      terms: ["abhidhamma", "dhamma", "sutta", "khandha"],
      reflection: "Where have you heard a commentarial reading presented as the plain word of the Buddha?",
      practice: "Take one term — sati, for example — and write two sentences: what a sutta says, and what a commentary adds.",
      retrieval: [
        { q: "What is the Abhidhamma?", a: "The third basket: systematic analysis of experience into dhammas." },
        { q: "What is a mātikā?", a: "A matrix or list that organises the analysis." },
        { q: "What is the aṭṭhakathā?", a: "Commentarial literature explaining and systematising the suttas." },
        { q: "What is the Visuddhimagga?", a: "A fifth-century systematic manual of doctrine and practice." },
        { q: "What is the app's rule about commentary?", a: "Label it; never let it impersonate the sutta." },
      ],
    },
    {
      id: "b1", code: "B1", track: "B", order: 1, kind: "whole",
      ref: "MN 10", pali: "Satipaṭṭhānasutta",
      title: "MN 10 · Mindfulness Meditation", minutes: 45,
      hook: "The whole text, not the famous excerpt.",
      oneIdea: "The four foundations are one exercise with four fields, held together by a refrain about arising and passing.",
      safety:
        "This text includes charnel-ground contemplations on decay and death. They are intense by design. If reading them destabilises you, skip that section — the sutta's structure is still visible without it — and return only if you want to. Nothing here is a meditation assignment.",
      context:
        "The setting is a town in the Kuru country, and the audience is monks. The sutta states its claim before its method: these four kinds of mindfulness are the direct path to the end of suffering. Then it works through four fields — body, feelings, mind, principles — repeating one refrain after each exercise. Read for the structure first; the famous opening on breathing is one exercise among many.",
      diagram: {
        type: "groups",
        title: "Four fields, one refrain",
        note: "The refrain is the constant: observe inside and outside, see arising and passing, establish mindfulness just enough, and do not cling.",
        groups: [
          { name: "Body", factors: ["Breathing", "Postures", "Situational awareness", "Parts", "Elements", "Charnel ground"] },
          { name: "Feelings", factors: ["Pleasant", "Painful", "Neutral", "Of the flesh / not"] },
          { name: "Mind", factors: ["With/without greed", "Hate", "Delusion", "Constricted/scattered", "Freed/unfreed"] },
          { name: "Principles", factors: ["Hindrances", "Aggregates", "Sense fields", "Awakening factors", "Truths"] },
        ],
      },
      sections: [
        { label: "Setting", uids: ["mn10:1.1", "mn10:1.2", "mn10:1.3", "mn10:1.4", "mn10:1.5", "mn10:1.6"], note: "No patron, no miracle, no story — just the instruction and its audience." },
        { label: "The claim", uids: ["mn10:2.1", "mn10:3.1", "mn10:3.2", "mn10:3.3", "mn10:3.4", "mn10:3.5"], note: "The four foundations are called the direct path, and the claim is made before the method. Note the four fields named in order." },
        { label: "Body: breathing", uids: ["mn10:4.1", "mn10:4.2", "mn10:4.3", "mn10:4.4", "mn10:4.5", "mn10:4.6", "mn10:4.7", "mn10:4.8", "mn10:5.1", "mn10:5.2", "mn10:5.3", "mn10:5.4"], mark: "internally, externally, and both internally and externally", note: "The first exercise, and the first full refrain. The lathe-turner knows a long pull from a short one; the meditator knows a heavy breath from a light one." },
        { label: "Body: postures", uids: ["mn10:6.1", "mn10:6.2", "mn10:7.1", "mn10:7.2", "mn10:7.3", "mn10:7.4"], note: "Not a meditation posture: any posture, known as it is. The exercise is recognition, not correction." },
        { label: "Body: situational awareness", uids: ["mn10:8.1", "mn10:9.1", "mn10:9.2"], note: "The list is deliberately mundane — eating, dressing, speaking. Nothing is excluded from the field." },
        { label: "Body: the parts", uids: ["mn10:10.1", "mn10:10.2", "mn10:10.3", "mn10:11.1", "mn10:11.2"], note: "The body as contents rather than as a self. The grain-bag image is analytical, not disgust for its own sake." },
        { label: "Body: the elements", uids: ["mn10:12.1", "mn10:12.2", "mn10:12.3", "mn10:13.1", "mn10:13.2"], note: "The butcher's image: the same body, cut into components. 'Mine' is not one of the elements." },
        { label: "Body: charnel ground", uids: ["mn10:14.1", "mn10:14.2", "mn10:14.3", "mn10:15.1", "mn10:15.2", "mn10:16.1", "mn10:16.2", "mn10:16.3", "mn10:17.1", "mn10:17.2", "mn10:18-23.1", "mn10:18-23.2", "mn10:18-23.3", "mn10:24.1", "mn10:26-28.1", "mn10:29.1", "mn10:30.1", "mn10:30.2", "mn10:30.3", "mn10:31.1", "mn10:31.2", "mn10:31.3", "mn10:31.4"], note: "The longest and least comfortable section: stages of decay, each applied to one's own body. Skipping it changes the text, not just the mood." },
        { label: "Feelings", uids: ["mn10:32.1", "mn10:32.2", "mn10:32.3", "mn10:32.4", "mn10:32.5", "mn10:32.6", "mn10:32.7", "mn10:32.8", "mn10:32.9", "mn10:32.10", "mn10:33.1", "mn10:33.2", "mn10:33.3", "mn10:33.4"], note: "Three tones, then the distinction of flesh and not-flesh. Know the tone; do not change it." },
        { label: "Mind", uids: ["mn10:34.1", "mn10:34.2", "mn10:34.3", "mn10:34.4", "mn10:34.5", "mn10:34.6", "mn10:34.7", "mn10:34.8", "mn10:34.9", "mn10:34.10", "mn10:34.11", "mn10:34.12", "mn10:34.13", "mn10:34.14", "mn10:34.15", "mn10:34.16", "mn10:34.17", "mn10:35.1", "mn10:35.2", "mn10:35.3", "mn10:35.4"], note: "Eight pairs of states. The mind is observed as 'with' or 'without', not as 'me'." },
        { label: "Principles: hindrances", uids: ["mn10:36.1", "mn10:36.2", "mn10:36.3", "mn10:36.4", "mn10:36.5", "mn10:36.6", "mn10:36.7", "mn10:36.8", "mn10:37.1", "mn10:37.2", "mn10:37.3", "mn10:37.4"], note: "Not just noticing a hindrance, but how it arises, is given up, and does not return." },
        { label: "Principles: aggregates", uids: ["mn10:38.1", "mn10:38.2", "mn10:38.3", "mn10:38.4", "mn10:38.5", "mn10:38.6", "mn10:38.7", "mn10:38.8", "mn10:39.1", "mn10:39.4"], note: "The same fivefold analysis as SN 22.59, used here as a field of observation." },
        { label: "Principles: sense fields", uids: ["mn10:40.1", "mn10:40.2", "mn10:40.3", "mn10:40.4", "mn10:40.5", "mn10:40.6", "mn10:40.7", "mn10:40.8", "mn10:41.1", "mn10:41.4"], note: "The fetter is the unit: what arises between sense and object. This is where craving is caught." },
        { label: "Principles: awakening factors", uids: ["mn10:42.1", "mn10:42.2", "mn10:42.3", "mn10:42.4", "mn10:42.5", "mn10:42.6", "mn10:42.7", "mn10:42.8", "mn10:42.9", "mn10:43.1", "mn10:43.2", "mn10:43.3", "mn10:43.4"], note: "The positive counterparts of the hindrances; the exercise includes making them arise and developing them." },
        { label: "Principles: the truths", uids: ["mn10:44.1", "mn10:44.2", "mn10:44.3", "mn10:45.1", "mn10:45.2", "mn10:45.3", "mn10:45.4"], note: "The four truths appear as the last field, not the first — the text ends where the first sermon began." },
        { label: "The promise", uids: ["mn10:46.1", "mn10:46.2", "mn10:46.3", "mn10:46.4", "mn10:46.5", "mn10:46.6", "mn10:46.7", "mn10:46.8", "mn10:46.9", "mn10:46.10", "mn10:46.11", "mn10:46.12", "mn10:46.13", "mn10:46.14", "mn10:46.15", "mn10:46.16", "mn10:46.17", "mn10:46.18", "mn10:46.19", "mn10:46.20", "mn10:46.21", "mn10:46.22", "mn10:46.23", "mn10:47.1", "mn10:47.2", "mn10:47.3", "mn10:47.4"], note: "Seven years down to seven days. The claim is strong, and the text does not soften it." },
      ],
      omit: [
        { uids: ["mn10:0.1", "mn10:0.2"], reason: "text title" },
        { uids: ["mn10:4.0.1", "mn10:4.0.2", "mn10:6.0", "mn10:8.0", "mn10:10.0", "mn10:12.0", "mn10:14.0", "mn10:32.0", "mn10:34.0", "mn10:36.0.1", "mn10:36.0.2", "mn10:38.0", "mn10:40.0", "mn10:42.0", "mn10:44.0"], reason: "section headings, replaced by this reader's labels" },
      ],
      inference:
        "Read whole, MN 10 is not a relaxation script. It is a map of four fields held together by one doctrinal refrain, ending in a claim about how long the path takes. The breathing exercise is the doorway, not the whole house. The charnel-ground section is doing the work of impermanence, and it is meant to be uncomfortable. If the text feels like a list of techniques, the refrain is the part you skipped.",
      terms: ["satipatthana", "sati", "sampajanna", "vedana"],
      reflection: "Which of the four fields do you never actually observe — and what would a week of noticing it change?",
      practice: "Take one field for one day. Name what you notice in it, without trying to change it, and stop at the end of the day.",
      retrieval: [
        { q: "What are the four foundations?", a: "Body, feelings, mind, and principles." },
        { q: "What does the refrain add after each exercise?", a: "Internal/external observation, arising and passing, established mindfulness, independence." },
        { q: "What is the first body exercise?", a: "Mindfulness of breathing." },
        { q: "What does the charnel-ground section do?", a: "Applies the stages of decay to one's own body, for impermanence." },
        { q: "What is the closing promise?", a: "From seven years down to seven days, with two possible results." },
      ],
    },
    {
      id: "b3", code: "B3", track: "B", order: 3, kind: "whole",
      ref: "SN 12.23", pali: "Upanisasutta",
      title: "SN 12.23 · Vital Conditions", minutes: 30,
      hook: "Suffering is not the end of the chain. It is a condition for faith.",
      oneIdea: "The chain that produces suffering, read forward, also produces the conditions for freedom.",
      context:
        "Upanisā means 'vital condition' — a support without which the next thing cannot be. The sutta runs the chain backwards from the knowledge of ending to ignorance, then forwards from ignorance to freedom, inserting four positive links after suffering: faith, joy, rapture, tranquility, bliss, immersion. It is the canon's most hopeful account of conditionality, and it is short enough to read twice.",
      diagram: {
        type: "groups",
        title: "One chain, two directions",
        note: "The downward sequence explains how suffering is produced. The upward sequence shows the same conditions becoming a path — with suffering as the hinge.",
        groups: [
          { name: "Downward", factors: ["Ignorance", "Choices", "Consciousness", "Name & form", "Six sense fields", "Contact", "Feeling", "Craving", "Grasping", "Existence", "Rebirth", "Suffering"] },
          { name: "Upward", factors: ["Suffering", "Faith", "Joy", "Rapture", "Tranquility", "Bliss", "Immersion", "Knowing & seeing", "Disillusionment", "Dispassion", "Freedom", "Knowledge of ending"] },
        ],
      },
      sections: [
        { label: "The claim", uids: ["sn12.23:1.1", "sn12.23:1.2", "sn12.23:1.3", "sn12.23:1.4", "sn12.23:1.5", "sn12.23:1.6", "sn12.23:1.7", "sn12.23:1.8", "sn12.23:1.9"], note: "The ending of defilements is for one who knows and sees — and what they see is the arising and passing of the five aggregates." },
        { label: "Backwards to ignorance", uids: ["sn12.23:2.1", "sn12.23:2.2", "sn12.23:2.3", "sn12.23:2.4", "sn12.23:2.5", "sn12.23:2.6", "sn12.23:2.7", "sn12.23:2.8", "sn12.23:2.9", "sn12.23:2.10", "sn12.23:2.11", "sn12.23:2.12", "sn12.23:2.13", "sn12.23:2.14", "sn12.23:2.15", "sn12.23:2.16", "sn12.23:3.1", "sn12.23:3.2", "sn12.23:3.3", "sn12.23:3.4", "sn12.23:3.5", "sn12.23:3.6", "sn12.23:3.7", "sn12.23:3.8", "sn12.23:3.9", "sn12.23:3.10", "sn12.23:3.11", "sn12.23:3.12", "sn12.23:3.13", "sn12.23:3.14", "sn12.23:3.15", "sn12.23:4.1", "sn12.23:4.2", "sn12.23:4.3", "sn12.23:4.4", "sn12.23:4.5", "sn12.23:4.6", "sn12.23:4.7", "sn12.23:4.8", "sn12.23:4.9", "sn12.23:4.10", "sn12.23:4.11", "sn12.23:4.12", "sn12.23:4.13", "sn12.23:4.14", "sn12.23:4.15", "sn12.23:5.1", "sn12.23:5.2", "sn12.23:5.3", "sn12.23:5.4", "sn12.23:5.5", "sn12.23:5.6", "sn12.23:5.7", "sn12.23:5.8", "sn12.23:5.9", "sn12.23:5.10"], note: "The questioning runs backwards: freedom depends on dispassion, dispassion on disillusionment, down to ignorance. A chain of conditions, not a ladder of achievements." },
        { label: "Forwards from ignorance", uids: ["sn12.23:6.1", "sn12.23:6.2", "sn12.23:6.3", "sn12.23:6.4", "sn12.23:6.5", "sn12.23:6.6", "sn12.23:6.7", "sn12.23:6.8", "sn12.23:6.9", "sn12.23:6.10", "sn12.23:6.11", "sn12.23:6.12", "sn12.23:6.13", "sn12.23:6.14", "sn12.23:6.15", "sn12.23:6.16", "sn12.23:6.17", "sn12.23:6.18", "sn12.23:6.19", "sn12.23:6.20", "sn12.23:6.21", "sn12.23:6.22"], note: "The same sequence forward: ignorance to suffering, then suffering to faith, joy, rapture, tranquility, bliss, immersion, knowledge, disillusionment, dispassion, freedom." },
        { label: "The rain on the mountain", uids: ["sn12.23:7.1", "sn12.23:8.1"], note: "Each full pool fills the next. The chain is a downpour, not a set of switches." },
      ],
      omit: [
        { uids: ["sn12.23:0.1", "sn12.23:0.2", "sn12.23:0.3"], reason: "text title" },
      ],
      inference:
        "The surprise is the hinge: suffering conditions faith. That is not a prosperity promise, and it is not a claim that pain is good. It is the observation that being stuck can make a person willing to look — and that willingness has conditions of its own. The sequence is not a timetable, and 'vital condition' is broader than cause: it names a support without which the next state cannot arise.",
      terms: ["paticcasamuppada", "saddha", "passaddhi", "samadhi"],
      reflection: "Where has a difficulty actually made you willing to look — and what followed from that willingness?",
      practice: "Trace one ordinary difficulty through the upward chain in three steps: suffering → what it made you willing to do → what followed.",
      retrieval: [
        { q: "What does 'upanisā' mean?", a: "Vital condition — a support without which the next thing cannot arise." },
        { q: "Where does the backward chain end?", a: "Ignorance." },
        { q: "What conditions faith in the forward chain?", a: "Suffering." },
        { q: "What comes between bliss and truly knowing and seeing?", a: "Immersion." },
        { q: "What is the simile?", a: "Rain on a mountain filling pools, lakes, streams, rivers, and the ocean." },
      ],
    },
  ],
};
