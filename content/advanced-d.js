/* SuttaPath — Level 2 · Track D (comparative and critical) + capstone. */
module.exports = [
  {
    id: "d1", code: "D1", track: "D", order: 1, kind: "essay",
    title: "D1 · One Teaching, Two Nikāyas", minutes: 35,
    hook: "The same refrain in MN 10 and DN 22 — so what changed?",
    oneIdea: "Versions of a teaching differ in structure and emphasis, and the differences are evidence about how the tradition carried it.",
    context:
      "MN 10 and DN 22 present the same four foundations of mindfulness, often word for word. DN 22 is longer, adds the four noble truths as a full analysis, and organises the material differently. Comparing them is the cheapest way to learn that a sutta is not a fixed text but a version — and that the differences are not errors to be harmonised away.",
    essay: [
      "Start with the refrain. After each exercise, both texts say that the practitioner observes internally, externally, and both; that they observe arising and passing; that mindfulness is established just enough for knowledge; and that they live independent, not grasping. The wording is effectively identical. That identity is the baseline: whatever else differs, the doctrinal frame is shared.",
      "Now the differences. DN 22 is roughly half again as long. It expands the fourth foundation — principles — into a full treatment of the four noble truths, with each truth analysed at length. MN 10 states the truths in a single sentence. DN 22 also changes the order and emphasis of some exercises, and its frame is a longer narrative setting.",
      "What does a difference like that mean? At minimum, it shows that the tradition did not treat the discourse as a fixed script. The same teaching was expanded for different occasions and audiences, and the expansions became their own texts. The shared refrain is the stable core; the structure around it is variable.",
      "This is the beginning of comparative reading. You are not looking for the 'original' behind the versions, and you are not harmonising them into one. You are asking what each version does with the same material — and what that tells you about the community that carried it.",
    ],
    compare: [
      { label: "MN 10 · the refrain", uids: ["mn10:5.1", "mn10:5.2", "mn10:5.3"] },
      { label: "DN 22 · the refrain", uids: ["dn22:2.11", "dn22:2.12", "dn22:2.13"] },
    ],
    inference:
      "Identical passages across collections are evidence of shared material; differences are evidence of editorial work. Neither is a scandal. The comparative question is not 'which is authentic' but 'what is each version doing' — and that question has a defensible answer only when you read both whole.",
    terms: ["satipatthana", "sutta", "nikaya"],
    reflection: "When you meet two versions of a teaching, what do you assume the difference means?",
    practice: "Read the two refrains aloud. Mark every word that differs, then note what the difference changes.",
    retrieval: [
      { q: "What is identical in the two texts?", a: "The refrain after each exercise, effectively word for word." },
      { q: "What does DN 22 add?", a: "A full analysis of the four noble truths as the fourth foundation." },
      { q: "What does a difference between versions show?", a: "Editorial work in transmission, not necessarily error." },
      { q: "What is the comparative question?", a: "What each version does with the shared material." },
      { q: "Why read both whole?", a: "Differences in structure only become visible against the whole." },
    ],
  },

  {
    id: "d2", code: "D2", track: "D", order: 2, kind: "essay",
    title: "D2 · Two Arguments for One Doctrine", minutes: 35,
    hook: "SN 12.2 states the chain. DN 15 interrogates it.",
    oneIdea: "The same doctrine can be presented as an analysis or as a cross-examination, and the form changes what it claims.",
    context:
      "SN 12.2 gives the twelve links and defines each one. DN 15 takes the same chain and turns it into a dialogue: for each link, it asks whether there is a specific condition, answers with the previous link, and then asks what would follow if that condition were absent. One text is a glossary; the other is an argument. Comparing them shows how much work genre does.",
    essay: [
      "SN 12.2 is declarative. 'Ignorance is a requirement for choices. Choices are a requirement for consciousness.' Then it defines the terms. The reader's job is to understand the vocabulary and see the sequence. The text does not argue for the chain; it presents it.",
      "DN 15 is interrogative. Ānanda says the teaching looks plain; the Buddha says it is deep. Then, link by link, the text asks: is there a specific condition for old age and death? What is it? Suppose there were no rebirth at all — would old age and death be discerned? The answer is no, and that counterfactual is the argument.",
      "The difference matters. A list can be memorised without being understood; a cross-examination cannot. DN 15 forces the reader to see that each link is not merely followed by the next but depends on it — remove the condition and the result cannot be found. That is a stronger claim than sequence, and it is made by form as much as by content.",
      "So when you meet 'dependent origination' in a summary, ask which text the summary is following. A list, a definition, and a counterfactual argument are three different teachings with one name.",
    ],
    compare: [
      { label: "SN 12.2 · the chain, declared", uids: ["sn12.2:2.2", "sn12.2:2.3", "sn12.2:2.4", "sn12.2:2.5", "sn12.2:2.6", "sn12.2:2.7", "sn12.2:2.8", "sn12.2:2.9", "sn12.2:2.10", "sn12.2:2.11", "sn12.2:2.12", "sn12.2:2.13"] },
      { label: "DN 15 · the chain, interrogated", uids: ["dn15:2.1", "dn15:2.2", "dn15:2.3", "dn15:2.4", "dn15:2.5", "dn15:2.6", "dn15:2.7", "dn15:2.8"] },
    ],
    inference:
      "Genre is part of the doctrine. SN 12.2 gives you the vocabulary; DN 15 gives you the dependency. A reader who only knows the list has the names without the argument, and a reader who only knows the argument has the shape without the definitions. Together they show why the tradition treats conditionality as deep rather than obvious.",
    terms: ["paticcasamuppada", "sutta", "avijja"],
    reflection: "Which form do you trust more — the list or the cross-examination?",
    practice: "Take one link and write the counterfactual question for it: if this were absent, what could not be discerned?",
    retrieval: [
      { q: "How does SN 12.2 present the chain?", a: "As a declaration, followed by definitions of each link." },
      { q: "How does DN 15 present it?", a: "As a cross-examination, link by link, with counterfactuals." },
      { q: "What counterfactual does DN 15 use for old age and death?", a: "If there were no rebirth, old age and death would not be discerned." },
      { q: "What does the counterfactual establish?", a: "Dependence, not merely sequence." },
      { q: "Why does the difference matter?", a: "A list can be memorised; an argument has to be understood." },
    ],
  },

  {
    id: "d3", code: "D3", track: "D", order: 3, kind: "essay",
    title: "D3 · Translation as Evidence", minutes: 30,
    hook: "Every English word is a decision. Some decisions are visible.",
    oneIdea: "A translation is an argument about what the source means, and the choices are evidence you can examine.",
    context:
      "You do not need Pali to see translation at work. This session takes one passage and three English decisions — 'suffering' for dukkha, 'feeling' for vedanā, 'mindfulness' for sati — and asks what each choice adds, hides, or imports. The app's glossary gives the literal senses; the passage gives the context; the gap between them is the evidence.",
    essay: [
      "Take dukkha. The glossary gives 'bad axle-hole; hard to bear'. The translation says 'suffering'. Both are defensible: dukkha covers pain, unsatisfactoriness, and the instability of anything conditioned. But 'suffering' sounds like an emotion, and dukkha is wider — a wheel off its axle is not sad, it is unreliable. The English word narrows the claim.",
      "Take vedanā. The translation says 'feeling', which in English suggests emotion. In the canon it is the affective tone of experience — pleasant, painful, or neutral — arising at contact. 'Feeling' is not wrong, but it invites the reader to hear 'emotion', and then the analysis of feelings looks like mood-watching rather than the recognition of tone.",
      "Take sati. 'Mindfulness' is now a brand. The literal sense is 'remembering, keeping in mind'. The translation is a choice made a century ago and now almost invisible. Reading 'mindfulness' as remembering — keeping the object in mind — restores the continuity the word implies and removes some of the wellness noise.",
      "None of this means the translations are bad. It means translation is interpretation, and the interpreter is visible if you look. A reader who checks one word against its literal sense has begun to read critically; a reader who checks the word against the passage has begun to read the canon.",
    ],
    excerpts: [
      { uids: ["sn36.6:1.5", "sn36.6:1.6", "sn36.6:1.7", "sn36.6:1.8", "sn36.6:1.9", "sn36.6:1.10"], note: "Read 'suffering', 'painful', and 'feeling' here, then compare with the glossary's literals. What does the English add?" },
    ],
    inference:
      "The point is not to distrust translators but to read them as interpreters. Every choice is a claim about the source, and the claim can be examined against context. This is also why the app quotes the translation verbatim and labels its own paraphrase: the reader should always know which voice is speaking.",
    terms: ["dukkha", "vedana", "sati"],
    reflection: "Which Buddhist English word have you been reading as if it were neutral?",
    practice: "Take one term from this session and write two sentences: what the literal says, and what the translation adds.",
    retrieval: [
      { q: "What is the literal sense of dukkha given here?", a: "Bad axle-hole; hard to bear." },
      { q: "What does 'feeling' (vedanā) actually mean in the canon?", a: "The affective tone of experience: pleasant, painful, or neutral." },
      { q: "What is the literal sense of sati?", a: "Remembering, keeping in mind." },
      { q: "What does a translation choice reveal?", a: "An interpretation of the source." },
      { q: "Why does the app quote translations verbatim?", a: "So the reader always knows which voice is speaking." },
    ],
  },

  {
    id: "d4", code: "D4", track: "D", order: 4, kind: "essay",
    title: "D4 · Pali Tools I: Using the Dictionary", minutes: 30,
    hook: "You do not need the language to use the tools — but you do need to know what they can't tell you.",
    oneIdea: "A dictionary gives you a range of senses; the passage tells you which one is in play.",
    context:
      "This is a method session, not a grammar lesson. The tools are: the Pali text on SuttaCentral, its word-by-word lookup, a dictionary such as the PTS, and this app's literal glosses. The skill is moving from a dictionary entry to a defensible reading of one passage — and stopping when the evidence stops. No parsing claims are made here that are not in the glossary.",
    essay: [
      "Start with a word you already know from the glossary. Anattā is glossed as 'not-self', with the literal structure an- (not) + attā (self). That much is safe and useful: it tells you the term is a negation, not a synonym for 'no soul'. But it does not tell you what the sutta means by attā in a given passage — that comes from the argument around it.",
      "Use the tools in order. First the passage: what is the word doing in this sentence? Second the app's glossary: what range does the editor give? Third a dictionary: what senses are attested, and with what examples? Fourth, the Pali lookup on SuttaCentral: where else does this word occur, and in what company? The last step is the most valuable and the most neglected.",
      "Stop when the evidence stops. A dictionary gives possibilities, not a verdict. A word-by-word gloss gives a construction, not a doctrine. If you find yourself building an argument on an etymology alone, you have left the evidence behind. The canon's own usage is the authority, and that means reading more passages, not better dictionaries.",
      "One practical rule: never let a Pali observation overturn a clear passage without a second passage to support it. The text is the evidence; the language is a tool for reading it.",
    ],
    excerpts: [
      { uids: ["dhp1:1", "dhp1:2", "dhp1:3", "dhp1:4", "dhp1:5", "dhp1:6"], verse: true, note: "A passage with a key term (mano, 'mind') and a claim. Use the tools to ask what the Pali word covers, then check the claim against the English." },
    ],
    inference:
      "The purpose of Pali tools is not to make the reader a Pali scholar; it is to make the translation visible and to slow down overclaiming. A reader who can use a dictionary and a concordance is harder to mislead than one who cannot, and safer than one who thinks a glossary is a grammar.",
    terms: ["anatta", "dhamma", "sutta"],
    reflection: "Where have you seen an etymology used as if it settled a doctrinal question?",
    practice: "Take one glossary term. Look it up in a dictionary and in three passages. Note where the senses diverge.",
    retrieval: [
      { q: "What does the anattā gloss tell you?", a: "That the term is a negation, not a synonym for 'no soul'." },
      { q: "What is the first tool to use?", a: "The passage itself: what the word is doing in the sentence." },
      { q: "What does a dictionary give you?", a: "A range of attested senses, not a verdict for this passage." },
      { q: "What is the most neglected tool?", a: "The concordance — where else the word occurs and with what company." },
      { q: "What rule guards against overclaiming?", a: "Never let a Pali observation overturn a clear passage without a second passage." },
    ],
  },

  {
    id: "d5", code: "D5", track: "D", order: 5, kind: "essay",
    title: "D5 · Pali Tools II: Term Clusters", minutes: 30,
    hook: "Doctrine lives in the space between near-synonyms.",
    oneIdea: "Terms come in clusters, and the distinctions inside a cluster are doctrinal work.",
    context:
      "Translators render clusters of Pali terms with overlapping English words, and the overlaps hide distinctions the texts rely on. Sati and sampajañña both become 'mindfulness' or 'awareness'; vitakka and vicāra both become 'thought'; saṅkhāra becomes 'formations', 'choices', or 'volitional activities' depending on the translator. This session maps three clusters using the glossary and the passages, without making new philological claims.",
    essay: [
      "Sati and sampajañña. Sati is glossed as remembering or keeping in mind; sampajañña as clear knowing. In MN 10 they appear together in the formula 'keen, aware, and mindful', and in the list of daily activities — eating, walking, speaking. The pair suggests two things: keeping something in mind, and knowing what is actually happening. English 'mindfulness' collapses them.",
      "Vitakka and vicāra. Both are rendered 'thought' or 'placing the mind and keeping it connected'. In the first absorption formula they are present; in the second they are stilled. The distinction is between the initial movement of attention and its continued application. English 'thinking' makes the second absorption sound like ceasing to think, which is not quite the claim.",
      "Saṅkhāra. In the aggregates it is 'choices'; in dependent origination, 'choices' again; in the formula 'all conditioned things', 'conditions' or 'formations'. One Pali word, several English words, because the contexts differ. The translator's choice is a signal about which aspect is being emphasised — and a reader who sees only one English word will miss the connection between the aggregate and the chain.",
      "The method is simple: when two English words translate one Pali term, or one English word translates several, stop and look at the contexts. The cluster is where the doctrine is doing its work.",
    ],
    excerpts: [
      { uids: ["mn10:8.1"], note: "The situational-awareness formula. 'Situational awareness' is sampajañña; 'mindful' is sati. English hides the distinction; the passage uses both." },
      { uids: ["mn10:34.1", "mn10:34.2", "mn10:34.3"], note: "'Mind' here is citta. Note how much work one English word is doing." },
    ],
    inference:
      "Term clusters are not pedantry. The canon's arguments often turn on distinctions that English flattens, and the flattening is invisible unless you notice the cluster. You do not need to resolve the Pali to benefit: seeing that two words are in play is enough to make you read the passage more carefully.",
    terms: ["sati", "sampajanna", "vitakka", "sankhara"],
    reflection: "Which English word in your reading is doing several Pali jobs at once?",
    practice: "Choose one cluster. Find two passages where the terms appear together and write what the English loses.",
    retrieval: [
      { q: "What do sati and sampajañña mean in the glossary?", a: "Remembering/keeping in mind; clear knowing." },
      { q: "What is the difference between vitakka and vicāra?", a: "The initial movement of attention and its continued application." },
      { q: "Why is saṅkhāra translated differently in different contexts?", a: "Because the contexts emphasise different aspects: choices, formations, conditions." },
      { q: "What does English 'mindfulness' collapse?", a: "The distinction between sati and sampajañña." },
      { q: "What is the method for a cluster?", a: "Stop and compare the contexts where each term appears." },
    ],
  },

  {
    id: "d6", code: "D6", track: "D", order: 6, kind: "essay",
    title: "D6 · Commentary and the Sutta", minutes: 30,
    hook: "The tradition's reading is not the text — and it is not optional either.",
    oneIdea: "Commentarial literature systematises the suttas; labelling the voice is what keeps the reading honest.",
    context:
      "Most of what is taught today as Theravāda doctrine and meditation comes from a layer later than the suttas: the aṭṭhakathā and the Visuddhimagga. That layer is not a corruption, and it is not the sutta. It is a systematic reading, with its own questions and answers. This session takes one sutta passage and describes what a commentary does with it, without quoting commentarial text.",
    essay: [
      "Take the five hindrances in MN 10. The sutta says: know when a hindrance is present, know how it arises, know how it is given up, and know how it does not arise again. That is a practice instruction at the level of observation. A commentary asks different questions: what exactly is sensual desire, what are its proximate causes, which meditation object counters it, and how does it relate to the stages of absorption?",
      "Those are good questions, and the answers are not in the sutta. The commentarial tradition supplies definitions, similes, and a map of practice that later teachers rely on. When someone says 'the Buddha taught that you should apply the counteractive factor', they are usually quoting that layer, not the discourse.",
      "This matters for reading. If you treat the commentary as the sutta, you will think the text says more than it does. If you dismiss the commentary, you will lose the system that made the teaching teachable. The honest position is layered: quote the sutta as the sutta, name the commentary as commentary, and say when a modern teacher is synthesising both.",
      "The test is simple. Ask: could I show this sentence in a sutta? If yes, quote it. If no, say whose reading it is. That discipline is the whole of this session.",
    ],
    excerpts: [
      { uids: ["mn10:36.1", "mn10:36.2", "mn10:36.3", "mn10:36.4"], note: "The sutta's own level: presence, arising, abandonment, non-arising. Everything beyond this is commentary, however useful." },
    ],
    inference:
      "The layered reading is not relativism. It is a claim about evidence: a sutta says what it says, and a commentary is a later, systematic attempt to explain it. Both can be true; they are not the same voice. The app's rule — canon verbatim, our inference labelled, commentary named — is this session applied to every page.",
    terms: ["abhidhamma", "sutta", "nivarana"],
    reflection: "Where have you heard a commentarial answer presented as the plain word of the Buddha?",
    practice: "Take one teaching you know from a modern teacher. Try to find it in a sutta. If you cannot, write whose reading it might be.",
    retrieval: [
      { q: "What does the sutta say about the hindrances?", a: "Know their presence, arising, abandonment, and non-arising." },
      { q: "What does a commentary add?", a: "Definitions, causes, counteractive factors, and systematic maps." },
      { q: "What is the risk of treating commentary as sutta?", a: "You think the text says more than it does." },
      { q: "What is the risk of dismissing commentary?", a: "You lose the system that made the teaching teachable." },
      { q: "What is the test for a claim?", a: "Can you show the sentence in a sutta? If not, name whose reading it is." },
    ],
  },

  {
    id: "capstone", code: "CAP", track: "D", order: 7, kind: "whole",
    ref: "AN 8.30", pali: "Anuruddhasutta",
    title: "Capstone · Anuruddha and the Great Thoughts", minutes: 60,
    hook: "An unseen sutta, read unaided, then checked against a model note.",
    oneIdea: "The test of Level 2 is not recall; it is whether you can read a new text and show your evidence.",
    context:
      "This is the capstone. Read the whole sutta once without the notes, then write a 400-word note of your own: what it claims, what it does not claim, one segment citation per claim, and one translation choice worth noticing. Only then open the model note. The sutta is Anuruddha's eight 'thoughts of a great man', the Buddha's expansion of them, and Anuruddha's awakening.",
    sections: [
      { label: "Setting", from: "an8.30:1.1", note: "" },
      { label: "The eight thoughts", from: "an8.30:3.1", note: "" },
      { label: "What the thoughts lead to", from: "an8.30:4.1", note: "" },
      { label: "Why each thought", from: "an8.30:14.1", note: "" },
      { label: "Anuruddha's awakening", from: "an8.30:22.1", note: "" },
    ],
    capstone: {
      prompt:
        "Write 400 words: what does AN 8.30 claim, what does it leave open, and which segment supports each claim? Name one translation choice worth noticing.",
      model: [
        "AN 8.30 is a teaching about the conditions for practice, framed as a private thought that the Buddha completes. Anuruddha reflects that the teaching is for those of few wishes, content, secluded, energetic, mindful, immersed, and wise (an8.30:1.4–1.10). The Buddha confirms the list and adds an eighth: not enjoying proliferation (an8.30:3.11). The claim is not that these are virtues to admire but that they are the dispositions in which the path can be practised — each is stated as 'for those who…, not for those who…'.",
        "The sutta then makes a stronger claim: with these thoughts, a mendicant can enter the four absorptions and realise the three knowledges (an8.30:4.1–7.1). That is a claim about causal sufficiency, and it is not argued; it is asserted. What the text leaves open is how the eight thoughts produce absorption, and whether the sequence is necessary or typical. It also leaves open the status of the 'thoughts' themselves — whether they are reflections, attitudes, or something closer to vows.",
        "The last part is a reminder that the framework is not the goal: Anuruddha goes to the forest, practises, and awakens (an8.30:22.1–22.4). The verses then attribute his awakening to the Buddha's teaching on non-proliferation (an8.30:24.3–25.4). The text is therefore both a list and a narrative, and the narrative is what shows the list working.",
        "One translation choice: 'proliferation' for papañca (an8.30:3.11, 24.3). The English suggests talkativeness; the term in the canon is closer to the mind's tendency to elaborate experience into concepts and stories. That choice matters, because it turns the eighth thought from a rule about speech into a claim about attention.",
      ],
    },
    inference:
      "The capstone is self-checked. The model note shows its citations and its uncertainties; your note should do the same. If your note has no segment citations, it is a summary, not a reading. If it has citations but no claim about what the text leaves open, it has not yet done the second half of the work.",
    terms: ["appamada", "jhana", "sati", "kilesa"],
    reflection: "Which part of your note was actually yours, and which was the app talking?",
    practice: "Write the note before opening the model. Then mark one place where your reading and the model disagree, and say which citation supports which.",
    retrieval: [
      { q: "How many thoughts does the Buddha confirm?", a: "Eight — the seven Anuruddha had, plus non-proliferation." },
      { q: "What is each thought framed as?", a: "'This teaching is for those who…, not for those who…'." },
      { q: "What does the sutta claim the thoughts lead to?", a: "The four absorptions and the three knowledges." },
      { q: "What does the ending show?", a: "Anuruddha practising and awakening — the list working in a life." },
      { q: "What is papañca usually translated as?", a: "Proliferation." },
    ],
  },
];
