/* SuttaPath — sample content
 *
 * TRANSLATION NOTE
 * The passages below are an original working translation written for this
 * prototype. They are NOT the SuttaCentral / Bhikkhu Sujato translation, and
 * they must be replaced by ingested CC0 segments before any release.
 * Every editorial claim is marked `inference: true` and renders differently
 * from the source text, per CONTENT_SCHEMA.md §4.2.
 */

window.SUTTAPATH = {
  meta: {
    version: "0.1.0-sample",
    translationLabel: "Working translation · prototype",
    totalSessions: 36
  },

  tracks: [
    { id: "1", title: "How to Read This", subtitle: "No doctrine. Just the instrument." },
    { id: "2", title: "What the Teaching Claims", subtitle: "The frame, before the ethics." },
    { id: "3", title: "The Ethical Life", subtitle: "Relationships, not rules." },
    { id: "4", title: "The Mind", subtitle: "Attention, habit, and the second arrow." },
    { id: "5", title: "The Deep End", subtitle: "Not-self, conditionality, and the unknown." },
    { id: "6", title: "Living With Others", subtitle: "Speech, friendship, and the last words." }
  ],

  terms: {
    sutta: {
      pali: "sutta",
      ipa: "/ˈsʊtːə/",
      respelling: "SOOT-ta",
      literal: "thread; a discourse",
      here: "A recorded teaching. The image is of a thread running through beads — a discourse is a thread of argument you follow.",
      related: ["dhamma", "nikāya"]
    },
    ditthi: {
      pali: "diṭṭhi",
      ipa: "/ˈdɪtːʰi/",
      respelling: "DIT-thee",
      literal: "view, opinion, seeing",
      here: "Not a neutral word. A diṭṭhi is a position you are holding, and holding is the problem.",
      related: ["māna"]
    },
    dukkha: {
      pali: "dukkha",
      ipa: "/ˈdʊkːʰə/",
      respelling: "DOOK-ha",
      literal: "bad axle-hole; a wheel that grinds",
      here: "Unsatisfactoriness. The gap between what is and what you want, and the grinding that comes of it.",
      related: ["taṇhā", "vedanā"]
    },
    sila: {
      pali: "sīla",
      ipa: "/ˈsiːlə/",
      respelling: "SEE-la",
      literal: "habit, conduct, character",
      here: "Not a commandment. A training undertaken, which shapes the person who keeps it.",
      related: ["sammā-ājīva"]
    },
    upasaka: {
      pali: "upāsaka",
      ipa: "/ʊˈpɑːsəko/",
      respelling: "oo-PAH-sa-ko",
      literal: "one who sits near",
      here: "A lay follower. Someone who practises without ordaining — the audience for most of the householder suttas.",
      related: ["sīla"]
    },
    disa: {
      pali: "disā",
      ipa: "/ˈdɪsɑː/",
      respelling: "DEE-sah",
      literal: "direction, quarter",
      here: "The six quarters of the old Indian household ritual. The sutta keeps the word and changes the referent.",
      related: ["maṅgala"]
    },
    vedana: {
      pali: "vedanā",
      ipa: "/ʋeːdəˈnɑː/",
      respelling: "vay-da-NAH",
      literal: "feeling-tone",
      here: "The bare pleasant / unpleasant / neutral quality of an experience, before you decide what it means.",
      related: ["dukkha", "saññā"]
    },
    upadana: {
      pali: "upādāna",
      ipa: "/ʊˈpɑːdɑːnə/",
      respelling: "oo-PAH-da-na",
      literal: "fuel, grasping",
      here: "What keeps the fire going. The mind's habit of taking hold of an experience and feeding on it.",
      related: ["taṇhā", "vedanā"]
    }
  },

  sessions: [
    {
      id: "1.2",
      track: "1",
      order: 2,
      ref: "MN 63",
      paliTitle: "Cūḷamālukyaputta Sutta",
      title: "The Arrow",
      hook: "Why the Buddha refused to answer ten good questions.",
      oneIdea:
        "A sutta answers a question someone actually asked. Find the question and the text opens.",
      minutes: 11,
      context:
        "This is the session where you learn to look at the machinery. Notice the order: a place, a person, a question, a refusal, a simile, a claim. Almost every sutta in this path has that skeleton, and once you can see it you stop reading these texts as pronouncements and start reading them as conversations.",
      inferenceNote:
        "The Buddha does not win this argument. He changes the subject, deliberately, and then says why. That move recurs throughout the canon, and it is the one readers who came for settled answers find hardest to forgive.",
      terms: ["sutta", "ditthi", "dukkha"],
      anatomy: true,
      segments: [
        {
          uid: "mn63:1.1",
          en: "So I have heard. At one time the Buddha was staying near Sāvatthī, in Jeta's Grove, in Anāthapiṇḍika's park.",
          para: "Every sutta opens this way. It was heard, not revealed — a report of a conversation, with a time and a place."
        },
        {
          uid: "mn63:1.2",
          en: "Then the mendicant Māluṅkyaputta came to the Buddha, bowed, and sat down to one side. He said:",
          para: "A named person, in a named place, with a question. That is the shape of the thing you are holding."
        },
        {
          uid: "mn63:1.3",
          en: "\u201cSir, you have left these questions undeclared, set aside, refused. Is the world eternal, or not? Is it finite, or infinite? Are the soul and the body the same, or different? Does a realised person exist after death \u2014 or not, or both, or neither?\u201d",
          para: "Ten questions. Every one of them can be argued forever, and none of them can be settled by argument."
        },
        {
          uid: "mn63:1.4",
          en: "\u201cIf you will not answer me, I will give up the training and return to ordinary life.\u201d",
          para: "He is not curious. He is holding his practice hostage to an answer."
        },
        {
          uid: "mn63:1.5",
          en: "\u201cDid I ever say to you: come, Māluṅkyaputta, train with me and I will settle these things?\u201d",
          para: "The first move is not an answer. It is a question about the question."
        },
        {
          uid: "mn63:1.6",
          en: "\u201cSuppose a man were struck by an arrow thickly smeared with poison. His friends brought a surgeon. He said: I will not have this arrow removed until I know the name and clan of the man who shot me; whether he was tall or short; what kind of bow; what kind of string; what kind of shaft; what kind of feathers. He would die before any of it was known.\u201d",
          para: "The point is not that details are worthless. It is that some details cannot be had in time."
        },
        {
          uid: "mn63:1.7",
          en: "\u201cWhether the view that the world is eternal is true or not, there is still birth, aging, death, sorrow, lamentation, pain, sadness and distress. It is the ending of this, here and now, that I teach.\u201d",
          para: "The teaching is scoped to what can be ended, not to what can be settled.",
          marks: [
            { term: "ditthi", quote: "the view that the world is eternal" },
            { term: "dukkha", quote: "sadness and distress" }
          ]
        }
      ],
      reflection:
        "Māluṅkyaputta wanted the list settled before he would continue. What do you want settled before you begin?",
      practice:
        "Write down one question you are carrying that this path will not answer. Put it somewhere you will see it in a week."
    },

    {
      id: "3.2",
      track: "3",
      order: 2,
      ref: "DN 31",
      paliTitle: "Sigālovāda Sutta",
      title: "The Six Directions",
      hook: "A deathbed ritual, replaced with six relationships.",
      oneIdea:
        "Ethics is not a rule list; it is six relationships, each with duties running both ways.",
      minutes: 13,
      context:
        "Sigāla is performing a family ritual he inherited. The Buddha does not tell him it is superstition. He lets the ritual stand and changes what the six directions point at. What follows is one of the few places in the canon where obligations are spelled out in both directions \u2014 including what an employer owes a worker.",
      inferenceNote:
        "The reciprocity is the part that unsettles modern readers in both directions. It refuses the idea that virtue is something the powerful owe nobody, and it refuses the idea that it is only a private matter between you and your conscience.",
      terms: ["sila", "upasaka", "disa"],
      directions: [
        { dir: "East", who: "Parents", ex: ["they raised you", "you care for them"] },
        { dir: "South", who: "Teachers", ex: ["they teach", "you attend"] },
        { dir: "West", who: "Partner", ex: ["faith given", "faith kept"] },
        { dir: "North", who: "Friends", ex: ["you give and speak kindly", "the same"] },
        { dir: "Below", who: "Workers", ex: ["wages, care, rest", "work by ability"] },
        { dir: "Above", who: "Guides", ex: ["they point the way", "you support them"] }
      ],
      segments: [
        {
          uid: "dn31:1.1",
          en: "So I have heard. At one time the Buddha was staying near Rājagaha, in the Bamboo Grove. Now at that time Sigāla, the householder's son, had risen early and was bathing. With wet clothes and wet hair, he stood with joined palms, worshipping the six directions.",
          para: "A young man, barely dressed, performing a ritual in public. It is an ordinary morning in an ordinary household.",
          marks: [
            { term: "upasaka", quote: "householder's son" },
            { term: "disa", quote: "the six directions" }
          ]
        },
        {
          uid: "dn31:1.2",
          en: "\u201cWhy are you doing this, Sigāla?\u201d \u201cSir, my father, as he was dying, said to me: Son, worship the six directions. I am honouring what he asked.\u201d",
          para: "The ritual is inherited, not chosen. That matters for what comes next."
        },
        {
          uid: "dn31:1.3",
          en: "\u201cThat is not how a noble disciple worships the six directions. Listen, and I will show you the six directions of a noble disciple.\u201d",
          para: "He does not abolish the practice. He reinterprets it, which is a more interesting move."
        },
        {
          uid: "dn31:1.4",
          en: "\u201cParents are the east. They raised you, fed you, and showed you the world. You care for them, do what is theirs to have done, keep the family name, and make yourself worthy of what you inherit.\u201d",
          para: "Note the order: what they have already done comes before what you owe."
        },
        {
          uid: "dn31:1.5",
          en: "\u201cTeachers are the south. You rise to meet them, serve them, listen, and take the teaching seriously.\u201d",
          para: "Obligation here is mostly attention. The duty to a teacher is to actually learn."
        },
        {
          uid: "dn31:1.6",
          en: "\u201cA partner is the west. You respect them, do not disparage them, keep faith, hand over authority, and provide what is fitting.\u201d",
          para: "\u201cHand over authority\u201d is a startling phrase in a text this old. It is not a claim about equality; it is a claim about trust.",
          marks: [{ term: "sila", quote: "keep faith" }]
        },
        {
          uid: "dn31:1.7",
          en: "\u201cFriends are the north. You give, speak kindly, help, treat them as you would be treated, and are honest.\u201d",
          para: "Five duties, and four of them cost something. Only one is a feeling."
        },
        {
          uid: "dn31:1.8",
          en: "\u201cWorkers are the below. You assign work by ability, provide food and wages, care for them in sickness, share what is choice, and give time off.\u201d",
          para: "This is the passage to read twice. Wages, sick care, and rest are named as duties of the employer, not favours."
        },
        {
          uid: "dn31:1.9",
          en: "\u201cThose who guide you are the above. You are kind to them in deed, word and thought; you welcome them; you support them materially.\u201d",
          para: "The last direction is the only one that runs mostly upward. It is also the only one with no obvious return."
        }
      ],
      reflection:
        "Which of the six do you treat as a duty, and which as a gift? The distinction is probably not where you think it is.",
      practice:
        "Pick one direction. Write what each side owes the other. Then name the side you have been neglecting."
    },

    {
      id: "4.4",
      track: "4",
      order: 4,
      ref: "SN 36.6",
      paliTitle: "Sallatha Sutta",
      title: "Two Arrows",
      hook: "Pain is one arrow. The story about the pain is the second.",
      oneIdea:
        "Pain is one arrow. The resistance, the story, and the dread around it is the second, and it is optional.",
      minutes: 10,
      context:
        "This is the most immediately useful passage in the path, and the easiest to overstate. The sutta does not say pain is optional. It says something narrower and stranger: that a feeling and your reaction to the feeling are two events, and the second one can fail to occur.",
      inferenceNote:
        "The text does not tell you how to stop firing the second arrow, and it does not promise that you can stop it on demand. Read it as a description of two events that are usually fused, not as a technique with a success rate.",
      terms: ["vedana", "dukkha", "upadana"],
      segments: [
        {
          uid: "sn36.6:1.1",
          en: "Mendicants, when an ordinary person feels a painful feeling, they sorrow and grieve. They lament and weep, they beat their breast and become distraught.",
          para: "The list is not decoration. It is a description of what gets added to the sensation.",
          marks: [{ term: "vedana", quote: "painful feeling" }]
        },
        {
          uid: "sn36.6:1.2",
          en: "So they feel two feelings: a bodily one and a mental one.",
          para: "Two events, named separately. That separation is the whole teaching."
        },
        {
          uid: "sn36.6:1.3",
          en: "It is as if a man were struck by an arrow. Then a second arrow were shot into the same wound. He would feel the pain of two arrows.",
          para: "Not a bigger pain. A second wound, in the same place, self-inflicted.",
          marks: [{ term: "upadana", quote: "second arrow" }]
        },
        {
          uid: "sn36.6:1.4",
          en: "But a well-taught disciple, when feeling a painful feeling, does not sorrow or grieve or lament. They feel one feeling: the bodily one, not the mental one.",
          para: "The first arrow still lands. Nothing in the text removes it."
        },
        {
          uid: "sn36.6:1.5",
          en: "This, mendicants, is the difference between an ordinary person and one who has trained: the ordinary person feels two feelings, and the trained one feels one.",
          para: "The distinction is not between pain and no pain. It is between one event and two."
        }
      ],
      reflection:
        "What is the second arrow you shoot most often \u2014 the story, the blame, or the dread?",
      practice:
        "Three times today, when you notice discomfort, name arrow one (what happened) and arrow two (what you added). Say it without trying to fix it."
    }
  ]
};
