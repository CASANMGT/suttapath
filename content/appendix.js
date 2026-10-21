/* SuttaPath — integrity lab and glossary.
 * Scenarios are editorial. Their anchors point at canon UIDs, resolved at build.
 */
(function (root) {
  const data = {
    scenarios: [
      {
        id: "s1", n: 1, domain: "Academic", title: "The group project",
        prompt:
          "Four of you were assigned a presentation. Two did nothing until the last week, then sent a few slides. The deadline is tomorrow. The rubric says all group members receive the same grade. One of the two who did nothing is a friend who has been having a bad term, and you know why. You can submit with all four names, or email the tutor with a short note about who did what. The tutor has not asked.",
        anchor: {
          session: "3.1", uids: ["dn31:5.2"],
          inference:
            "The sutta names favoritism as one of the four grounds for doing wrong. It does not tell you whether a note to the tutor is justice or betrayal — that is the part you have to decide.",
        },
        leavesOpen:
          "Whether reporting is required, whether it is proportionate, and who absorbs the cost of the friend's bad term. The canon is silent on institutional procedure.",
        question: "What do you submit tonight, and what do you say to your friend?",
        seminar: [
          "Is the harm here the free grade, or the concealment of it?",
          "Does your answer change if the friend's difficulties are private and you only know because they told you?",
          "What would the other two group members do if they had your information?",
        ],
        counter: [
          { label: "The loyalist", text: "The grade is not the point; the friendship and the person's term are. Report nothing, and tell the friend what you covered for." },
          { label: "The institutionalist", text: "The rubric is the agreement you all accepted. Send the note, with facts only, and let the tutor decide proportionality." },
        ],
      },
      {
        id: "s2", n: 2, domain: "Academic", title: "The citation you didn't read",
        prompt:
          "You cited a study in a paper. You read the abstract and a summary, not the paper. A reviewer checks it and finds the study says the opposite of what you claimed — or rather, it says something narrower, and your sentence overstates it. The paper is due in an hour. You can soften the sentence, remove the citation, or leave it and hope.",
        anchor: {
          session: "1.3", uids: ["an4.180:2.6"],
          inference:
            "The four-references procedure is about checking a report against the wider body of teaching. The structural move is the same: do not accept a claim because of the prestige of its source, and do not reject it either. Compare.",
        },
        leavesOpen:
          "What counts as 'reading' a source, and how much of an overstatement is tolerable. The canon has no rule about abstracts.",
        question: "What do you change in the next hour, and what do you tell the reviewer?",
        seminar: [
          "Is a citation you did not read a lie, or a shortcut?",
          "Does it matter whether the overstatement supports your argument or undermines it?",
          "What would you want a student of yours to do?",
        ],
        counter: [
          { label: "The pragmatist", text: "Citations are pointers, not guarantees. Soften the sentence and move on; the reader can follow the pointer." },
          { label: "The purist", text: "Remove it. If you cannot state what the source says in its own terms, you do not have the right to use it." },
        ],
      },
      {
        id: "s3", n: 3, domain: "Academic", title: "The AI draft",
        prompt:
          "Your course allows AI assistance if disclosed. You used it to draft, then rewrote heavily. The result is better than anything you have written alone, and you are not sure you could reproduce the argument without it. The disclosure box asks you to describe your use. A full description might make the work look less yours than it is. A short one would be technically true.",
        anchor: {
          session: "2.3", uids: ["an6.63:33.3"],
          inference:
            "If intention is what makes an act an act, then the question is not only what tool you used but what you were trying to do with it — and whether the disclosure is designed to inform or to pass.",
        },
        leavesOpen:
          "Whether assistance changes authorship, and what a disclosure is for. The canon knows nothing about tools that generate text.",
        question: "What do you write in the box?",
        seminar: [
          "Is the disclosure's purpose to inform the assessor or to allocate credit?",
          "If the argument is yours but the sentences are not, what exactly is yours?",
          "Would you be comfortable if the assessor read your full process?",
        ],
        counter: [
          { label: "The transparent user", text: "Describe the process in full, including the prompts. Let the assessor judge; that is what disclosure is for." },
          { label: "The author", text: "You rewrote it and you can defend every claim. Disclose the tool, not a transcript. The work is the argument." },
        ],
      },
      {
        id: "s4", n: 4, domain: "Work", title: "The reference you owe",
        prompt:
          "A former colleague asks for a reference. They were competent and reliable. You also watched them take credit for a junior colleague's work twice, and say nothing when it was challenged. They are applying for a job where that behaviour would matter. They are also supporting a parent and have been out of work for eight months. They ask you to be a 'standard positive reference'.",
        anchor: {
          session: "3.2", uids: ["dn31:31.2"],
          inference:
            "The northern direction lists 'not using tricky words' among the duties owed to friends. A reference that is technically true but designed to mislead is the thing the phrase is aiming at.",
        },
        leavesOpen:
          "Whether a reference is owed at all, and whether the harm you witnessed is relevant to the new role. The canon does not have a reference letter.",
        question: "What do you agree to write, and what do you tell them you will write?",
        seminar: [
          "Is a positive reference a statement about the person or a prediction about the job?",
          "Does the eight months of unemployment change what you owe?",
          "What is the difference between discretion and concealment here?",
        ],
        counter: [
          { label: "The loyal colleague", text: "Write the positive reference and tell them privately what you saw. The hiring process is not the place to litigate old behaviour." },
          { label: "The honest witness", text: "Agree to a factual reference: dates, role, competence. Decline the 'standard positive' framing, and say why." },
        ],
      },
      {
        id: "s5", n: 5, domain: "Academic", title: "The exam you could pass",
        prompt:
          "The answer key is on the desk, face up, while the invigilator is outside. You know the material for about 70 percent of the paper. With the key, you would get 95. No one would know. You have a scholarship that depends on the grade, and your family has made sacrifices for it. The exam is curved, so a higher score also affects others.",
        anchor: {
          session: "2.5", uids: ["an4.62:6.2"],
          inference:
            "Blamelessness is defined as conduct you would not have to hide. It is ranked above ownership, use, and debtlessness — the three goods that can be taken from you. This one can only be given up.",
        },
        leavesOpen:
          "Whether the scholarship changes the calculus, and what you owe the other students. The canon gives a ranking, not a rule for exam halls.",
        question: "What do you do in the next ten minutes, and what do you tell anyone afterwards?",
        seminar: [
          "Is the wrong the advantage you take, or the concealment?",
          "If you need the scholarship to stay in education, does the ranking still hold?",
          "What would 'blameless' mean if no one ever found out?",
        ],
        counter: [
          { label: "The consequentialist", text: "The harm is diffuse and the benefit is concentrated and real. Take the grade, and repay the debt by doing work that justifies it." },
          { label: "The blameless", text: "The test is not detection. If you would not describe it to the scholarship committee, do not do it." },
        ],
      },
      {
        id: "s6", n: 6, domain: "Work", title: "The mistake you could hide",
        prompt:
          "You shipped a bug that overcharged about forty customers by small amounts. Nobody has complained. Fixing it means telling your manager that the release was late and flawed, which will be remembered at review time. Not fixing it means the overcharges continue, slowly, and one customer may eventually notice and escalate. You have the fix ready.",
        anchor: {
          session: "3.1", uids: ["dn31:5.2"],
          inference:
            "Cowardice is one of the four grounds the sutta names. It is not a dramatic vice; it is the ordinary reason people let a small wrong continue because the correction is expensive.",
        },
        leavesOpen:
          "How much disclosure is proportionate, and who should hear it. The canon names the motive, not the reporting line.",
        question: "What do you do before the end of the day?",
        seminar: [
          "Is the wrong the bug or the silence after it?",
          "Does the small size of each overcharge change anything?",
          "What would you want done if you were one of the forty?",
        ],
        counter: [
          { label: "The quiet fixer", text: "Deploy the fix and refund silently. The harm ends; the process cost is not worth the disclosure." },
          { label: "The accountable engineer", text: "Fix, refund, and report. The delay is a fact; hiding it makes it a pattern." },
        ],
      },
      {
        id: "s7", n: 7, domain: "Career", title: "The résumé inflation",
        prompt:
          "You worked at a company for six months as a contractor. The job title was 'associate'. You are applying for a role that asks for two years of experience and a 'coordinator' title. You could write 'Coordinator (contract), 2021–2023' — the dates are when you were contracted, including a gap, and the title is a stretch. It would get you past the filter. A friend already did the same and got the job.",
        anchor: {
          session: "2.5", uids: ["an4.62:6.2"],
          inference:
            "The sutta's test is whether the conduct is something you would have to conceal. A résumé is a compressed claim; the question is whether you could defend each line to the person who will manage you.",
        },
        leavesOpen:
          "Whether résumé conventions are already understood as inflated, and what the employer actually needs to know. The canon has no hiring norms.",
        question: "What do you write, and what will you say if asked about the dates?",
        seminar: [
          "Is this a lie, a convention, or a negotiation?",
          "Does it matter that the filter, not a person, is the first reader?",
          "What would you want a candidate to have written if you were hiring?",
        ],
        counter: [
          { label: "The market reader", text: "Résumés are advertisements, not affidavits. Use the conventions, and be accurate if asked directly." },
          { label: "The literalist", text: "Write six months, contractor, associate. If that fails the filter, the filter was doing its job." },
        ],
      },
      {
        id: "s8", n: 8, domain: "Work", title: "The boss's wrong call",
        prompt:
          "You are asked to sell a product you believe is harmful. It is legal, profitable, and not a weapon: a subscription that is deliberately hard to cancel and designed to keep users engaged past the point they would choose. Your commission depends on it. You have raised it once and were told the cancellation flow is 'industry standard'. You need the job.",
        anchor: {
          session: "3.5", uids: ["an5.177:1.3"],
          inference:
            "The five trades are a list of livelihoods whose product is the harm. This product is not on the list. Whether it belongs there is exactly the judgement the short sutta leaves to the reader.",
        },
        leavesOpen:
          "Whether employment counts as trade, whether a legal product can be a wrong livelihood, and what resistance is possible from inside. The canon addresses sellers, not employees.",
        question: "What do you do at work tomorrow?",
        seminar: [
          "Is the harm in the product, the cancellation design, or your persuasion?",
          "Does it matter that you did not design it?",
          "What is the difference between selling something harmful and administering it?",
        ],
        counter: [
          { label: "The inside reformer", text: "Stay, sell honestly, and use your position to change the cancellation flow. Leaving changes nothing." },
          { label: "The refusal", text: "You cannot sell what you would not use. Ask to move off the product, and leave if there is no move." },
        ],
      },
      {
        id: "s9", n: 9, domain: "Work", title: "The credit you didn't give",
        prompt:
          "A junior colleague suggested the approach that solved the problem. You developed it and presented it to leadership. In the meeting you said 'we' and 'the team', which is true. Your manager assumes it was your idea and has started using it as an example of your initiative. The junior has not said anything. A promotion is being discussed.",
        anchor: {
          session: "2.3", uids: ["an6.63:34.2"],
          inference:
            "If the act is the intention, then letting a false impression stand is not a neutral omission. The sutta also places the source of deeds at contact — what you noticed and attended to — which makes selective attention part of the action.",
        },
        leavesOpen:
          "How much credit is owed, and whether public correction is required. The canon has no authorship norms.",
        question: "What do you say in the next meeting, and to whom?",
        seminar: [
          "Is 'we' a lie when one person had the idea?",
          "Does the junior's silence settle the question?",
          "What does the promotion change about what you owe?",
        ],
        counter: [
          { label: "The team player", text: "Credit the team and move on. Singling out one person distorts a collaborative result and can embarrass them." },
          { label: "The accurate narrator", text: "Name the junior's contribution the next time the example comes up. Accuracy is not a slight to the team." },
        ],
      },
      {
        id: "s10", n: 10, domain: "Work", title: "The badly-paid internship",
        prompt:
          "You are offered an internship that would open the field you want. It is unpaid, full-time, and the work is real — the company depends on interns to function. You can afford three months if you take on debt. A friend says everyone does it and the debt is an investment. The company has a stated commitment to 'fair access' and a page about diversity.",
        anchor: {
          session: "3.2", uids: ["dn31:32.2"],
          inference:
            "The master's duties include paying wages and giving time off. The sutta assumes a relationship where the powerful party owes material support. It does not assume the worker can refuse.",
        },
        leavesOpen:
          "Whether taking an exploitative offer is complicity, and what an individual can do about a structural practice. The canon addresses the master, not the intern.",
        question: "Do you take it, and what do you say about it afterwards?",
        seminar: [
          "Who is the text speaking to in this scenario — you or the company?",
          "Does your need change whether the arrangement is fair?",
          "What would you have to believe about the debt for this to be prudent?",
        ],
        counter: [
          { label: "The realist", text: "The field is structured this way. Take it, do the work well, and advocate for pay once you have standing." },
          { label: "The refuser", text: "An institution that needs unpaid labour and writes about fair access is asking you to subsidise its values. Decline, and say why in public." },
        ],
      },
      {
        id: "s11", n: 11, domain: "Money", title: "The side income",
        prompt:
          "A friend offers you a monthly retainer to promote a supplement. The claims are vague — 'supports focus', 'clinically studied ingredients' — and the studies are on individual ingredients at doses the product does not contain. The audience is students. The money would cover your rent. Your friend is honest, believes in it, and will be hurt if you refuse.",
        anchor: {
          session: "1.6", uids: ["an3.65:4.3"],
          inference:
            "The Kālāmas criterion is observed harm, not the sincerity of the seller. Your friend's belief is not evidence, and neither is your need.",
        },
        leavesOpen:
          "Whether vague claims are deceptive, and what responsibility a promoter has for a product they did not formulate. The canon has no advertising standard.",
        question: "What do you tell your friend, and what do you post?",
        seminar: [
          "Is the wrong the false claim or the taking of money for it?",
          "Does it matter that the ingredients are real, just underdosed?",
          "What would you want a student to know before buying?",
        ],
        counter: [
          { label: "The honest broker", text: "Promote it with accurate language: what it contains, what is not known. If the product cannot survive accurate language, that is the answer." },
          { label: "The refuser", text: "You are the last check between a vague claim and a student's rent money. Decline, and tell your friend why." },
        ],
      },
      {
        id: "s12", n: 12, domain: "Money", title: "The gift with strings",
        prompt:
          "A vendor sends you a generous gift — a weekend away, addressed personally — three weeks before you decide between their proposal and a cheaper one. You have not promised anything. The gift is not conditional in writing. Your organisation has no rule about gifts under a threshold, and this is under it. The cheaper proposal is better on the merits.",
        anchor: {
          session: "2.5", uids: ["an4.62:6.2"],
          inference:
            "The blamelessness test is whether you would be comfortable describing the arrangement. A gift that is legal, unconditional, and disclosed may still fail that test if it changes what you notice.",
        },
        leavesOpen:
          "Whether influence requires a quid pro quo, and what disclosure is owed. The canon has no procurement code.",
        question: "Do you keep the gift, return it, or disclose it — and what do you decide?",
        seminar: [
          "Is the problem the gift or the timing?",
          "If you decide for the cheaper vendor anyway, was the gift harmless?",
          "What would an auditor need to know to trust the process?",
        ],
        counter: [
          { label: "The disclosed recipient", text: "Declare it, recuse yourself from the final sign-off, and let someone else decide. The gift is not the problem; undisclosed influence is." },
          { label: "The refuser", text: "Return it. Not because you would be bribed, but because the process now has to be explained, and explanation is a cost the vendor imposed." },
        ],
      },
    ],

    glossary: {
      sutta: { pali: "sutta", respelling: "SOOT-ta", literal: "thread", here: "A recorded discourse. The image is a thread running through beads: an argument you follow from start to finish.", related: ["dhamma", "nikaya", "vinaya"] },
      dhamma: { pali: "dhamma", respelling: "DHAM-ma", literal: "that which is held; a teaching; a phenomenon", here: "Three overlapping senses: the teaching, the truth it points at, and the elements experience is made of. Context decides which.", related: ["sutta", "vinaya", "sangha"] },
      vinaya: { pali: "vinaya", respelling: "vi-NYE-a", literal: "leading out; discipline", here: "The monastic code and the procedural rules for the community. The second basket of the canon.", related: ["sutta", "tipitaka", "bhikkhu"] },
      tipitaka: { pali: "tipiṭaka", respelling: "ti-PIT-a-ka", literal: "three baskets", here: "The canon in three collections: discourses, discipline, and systematic philosophy. 'Basket' because the texts were once carried in baskets.", related: ["sutta", "vinaya", "nikaya"] },
      nikaya: { pali: "nikāya", respelling: "ni-KYE-a", literal: "collection, group", here: "A division of the discourse basket: Dīgha (long), Majjhima (middle), Saṃyutta (linked), Aṅguttara (numbered), plus the Khuddaka.", related: ["sutta", "tipitaka"] },
      anupubbikatha: { pali: "anupubbikathā", respelling: "a-nu-PUB-bi-KA-ta", literal: "gradual talk", here: "The step-by-step teaching the Buddha is said to give before the four noble truths: generosity, ethics, heaven, then the drawbacks of clinging.", related: ["dana", "sila", "ariyasacca"] },
      satipatthana: { pali: "satipaṭṭhāna", respelling: "sa-ti-PAT-tha-na", literal: "establishing of mindfulness", here: "The four fields of observation: body, feelings, mind, and principles. Not a relaxation technique; a way of seeing what is actually happening.", related: ["sati", "sampajanna", "jhana"] },
      dukkha: { pali: "dukkha", respelling: "DOOK-kha", literal: "bad axle-hole; hard to bear", here: "The unsatisfactoriness of conditioned experience. Not 'pain' — it includes pleasure that will not last.", related: ["tanha", "ariyasacca", "anicca"] },
      samudaya: { pali: "samudaya", respelling: "sa-mu-DYE-a", literal: "arising together", here: "The origin of suffering: craving, in the second noble truth.", related: ["dukkha", "tanha", "nirodha"] },
      nirodha: { pali: "nirodha", respelling: "ni-RO-dha", literal: "cessation, settling", here: "The ending of suffering through the ending of craving. The third noble truth; a possibility, not a place.", related: ["dukkha", "nibbana", "tanha"] },
      magga: { pali: "magga", respelling: "MUG-ga", literal: "path, road", here: "The fourth noble truth: the eightfold path. A set of eight practices held together, not eight stages.", related: ["atthangikamagga", "ariyasacca"] },
      tanha: { pali: "taṇhā", respelling: "TUN-ha", literal: "thirst", here: "Craving: the pull toward pleasure, existence, or non-existence. The canon's word is thirst, which is more bodily than 'desire'.", related: ["dukkha", "upadana", "samudaya"] },
      avijja: { pali: "avijjā", respelling: "a-VIJ-ja", literal: "not-knowing", here: "Ignorance, specifically about the four truths and the nature of experience. Not lack of information.", related: ["paticcasamuppada", "kilesa"] },
      kamma: { pali: "kamma", respelling: "KAM-ma", literal: "action, doing", here: "Intentional action and its tendency to produce results. Not fate; not a cosmic ledger kept by anyone.", related: ["cetana", "vipaka", "kamma"] },
      cetana: { pali: "cetanā", respelling: "che-TA-na", literal: "intending, willing", here: "The intention that the canon identifies with action itself. 'It is intention that I call deeds.'", related: ["kamma", "vipaka"] },
      vipaka: { pali: "vipāka", respelling: "vi-PA-ka", literal: "ripening", here: "The result of action, which may ripen in this life, the next, or later. The timing is explicitly not calculable.", related: ["kamma", "cetana"] },
      punna: { pali: "puñña", respelling: "POON-ya", literal: "merit, goodness", here: "The wholesome potential produced by generous and ethical action. A banking metaphor the canon uses without embarrassment.", related: ["dana", "kamma", "sila"] },
      sila: { pali: "sīla", respelling: "SEE-la", literal: "habit, conduct", here: "Ethical conduct, usually the five precepts for a layperson. The foundation, not the whole path.", related: ["samadhi", "panna", "vinaya"] },
      samadhi: { pali: "samādhi", respelling: "sa-MA-dhi", literal: "putting together", here: "Collectedness of mind. The second training, after ethics and before wisdom.", related: ["sila", "panna", "jhana"] },
      panna: { pali: "paññā", respelling: "PAN-ya", literal: "understanding", here: "Wisdom that sees experience as impermanent, unsatisfactory, and not self. Not intelligence or knowledge.", related: ["sila", "samadhi", "anicca"] },
      sati: { pali: "sati", respelling: "SA-ti", literal: "remembering, keeping in mind", here: "Mindfulness: not bare attention, but remembering to observe what is happening in the right frame.", related: ["satipatthana", "sampajanna"] },
      sampajanna: { pali: "sampajañña", respelling: "sam-pa-JAN-ya", literal: "clear knowing", here: "Situational awareness paired with mindfulness: knowing what you are doing while you do it.", related: ["sati", "satipatthana"] },
      appamada: { pali: "appamāda", respelling: "ap-pa-MA-da", literal: "non-negligence", here: "Diligence: not letting what matters slip. The canon calls it the one quality that contains all the others.", related: ["sati", "sila"] },
      hiri: { pali: "hiri", respelling: "HI-ri", literal: "shame", here: "The inner check that stops you doing something you would be ashamed of. Treated as a virtue, not a symptom.", related: ["ottappa", "sila"] },
      ottappa: { pali: "ottappa", respelling: "ot-TAP-pa", literal: "fear of blame", here: "The social check: concern about what others would rightly think. Paired with hiri as the two guardians of the world.", related: ["hiri", "sila"] },
      dana: { pali: "dāna", respelling: "DA-na", literal: "giving", here: "Generosity, the first of the lay virtues. Not charity as pity; the act of letting go.", related: ["caga", "punna"] },
      caga: { pali: "cāga", respelling: "CHA-ga", literal: "letting go", here: "The disposition behind generosity: a mind that releases rather than grips.", related: ["dana", "upadana"] },
      metta: { pali: "mettā", respelling: "MET-ta", literal: "friendliness", here: "Goodwill toward beings, without condition. The first of the four immeasurables.", related: ["karuna", "mudita", "upekkha"] },
      karuna: { pali: "karuṇā", respelling: "ka-ru-NA", literal: "compassion", here: "The response to suffering: the wish that it stop. Not sentiment; it has a direction.", related: ["metta", "mudita", "upekkha"] },
      mudita: { pali: "muditā", respelling: "mu-DI-ta", literal: "gladness", here: "Joy at another's good fortune. The one immeasurable that is hard to fake.", related: ["metta", "karuna", "upekkha"] },
      upekkha: { pali: "upekkhā", respelling: "u-PEK-kha", literal: "looking on", here: "Equanimity: the capacity to stay steady when circumstances change. Not indifference; it is the last item on the Maṅgala list.", related: ["metta", "brahmavihara"] },
      brahmavihara: { pali: "brahmavihāra", respelling: "BRA-ma-vi-HA-ra", literal: "divine dwelling", here: "The four immeasurables: goodwill, compassion, joy, equanimity. States to be cultivated, not moods to be waited for.", related: ["metta", "karuna", "mudita", "upekkha"] },
      jhana: { pali: "jhāna", respelling: "JHA-na", literal: "meditation, absorption", here: "The four stages of concentrated absorption. Described in the canon with a fixed vocabulary; interpreted very differently by modern teachers.", related: ["samadhi", "satipatthana"] },
      khandha: { pali: "khandha", respelling: "KHAN-dha", literal: "heap, aggregate", here: "The five bundles that make up what we call a person: form, feeling, perception, choices, consciousness.", related: ["rupa", "vedana", "sanna", "sankhara", "vinnana"] },
      rupa: { pali: "rūpa", respelling: "ROO-pa", literal: "form, shape", here: "The physical: body and material objects. The first aggregate.", related: ["khandha", "vedana"] },
      vedana: { pali: "vedanā", respelling: "ve-DA-na", literal: "feeling", here: "The hedonic tone of experience: pleasant, unpleasant, or neutral. Not emotion.", related: ["khandha", "sanna"] },
      sanna: { pali: "saññā", respelling: "SAN-ya", literal: "recognising", here: "Perception: the labelling that turns sensation into 'a chair', 'my friend', 'a threat'.", related: ["khandha", "vedana", "sankhara"] },
      sankhara: { pali: "saṅkhāra", respelling: "san-KHA-ra", literal: "making, forming", here: "The volitional formations: the choices and habits that shape experience. The aggregate where intention lives.", related: ["khandha", "cetana"] },
      vinnana: { pali: "viññāṇa", respelling: "vin-YA-na", literal: "knowing", here: "Consciousness: the bare awareness of a sense object. Not a soul, and not a continuous witness.", related: ["khandha", "phassa"] },
      anicca: { pali: "anicca", respelling: "a-NICH-cha", literal: "not lasting", here: "Impermanence. The canon's most basic observation: whatever arises, ceases.", related: ["dukkha", "anatta"] },
      anatta: { pali: "anattā", respelling: "a-NAT-ta", literal: "not self", here: "The claim that nothing in experience is a permanent, controlling self. A description, not a denial that you exist.", related: ["anicca", "dukkha", "khandha"] },
      nibbana: { pali: "nibbāna", respelling: "nib-BA-na", literal: "blowing out", here: "The end of craving and suffering. The image is a fire going out, not a place one goes to.", related: ["nirodha", "parinibbana"] },
      parinibbana: { pali: "parinibbāna", respelling: "pa-ri-nib-BA-na", literal: "complete blowing out", here: "The final passing of an awakened person, and the title of the sutta describing the Buddha's death.", related: ["nibbana", "sutta"] },
      ariya: { pali: "ariya", respelling: "A-ri-ya", literal: "noble", here: "A person who has reached one of the four stages of awakening. Also used of the truths and the path.", related: ["ariyasacca", "sangha"] },
      ariyasacca: { pali: "ariyasacca", respelling: "a-ri-ya-SACH-cha", literal: "noble truth", here: "The four truths: suffering, its origin, its cessation, and the path. Called noble because they are seen by the noble ones.", related: ["dukkha", "samudaya", "nirodha", "magga"] },
      atthangikamagga: { pali: "aṭṭhaṅgikamagga", respelling: "at-than-gi-ka-MUG-ga", literal: "eight-limbed path", here: "The eightfold path: view, purpose, speech, action, livelihood, effort, mindfulness, immersion.", related: ["magga", "sammaditthi", "sammasamadhi"] },
      sammaditthi: { pali: "sammādiṭṭhi", respelling: "sam-ma-DIT-thi", literal: "right view", here: "The first path factor: understanding suffering, its origin, its cessation, and the path. Not optimism.", related: ["ditthi", "atthangikamagga"] },
      ditthi: { pali: "diṭṭhi", respelling: "DIT-thi", literal: "view, seeing", here: "A held opinion, especially one about the nature of things. The canon treats views as actions with consequences, not neutral beliefs.", related: ["sammaditthi", "avijja"] },
      sammasankappa: { pali: "sammāsaṅkappa", respelling: "sam-ma-SAN-kap-pa", literal: "right purpose", here: "The second path factor: intention toward renunciation, goodwill, and harmlessness.", related: ["cetana", "atthangikamagga"] },
      sammavaca: { pali: "sammāvācā", respelling: "sam-ma-VA-cha", literal: "right speech", here: "The third path factor: no lying, divisive speech, harsh speech, or idle chatter.", related: ["sila", "atthangikamagga"] },
      sammakammanta: { pali: "sammākammanta", respelling: "sam-ma-KAM-man-ta", literal: "right action", here: "The fourth path factor: no killing, stealing, or sexual misconduct.", related: ["sila", "kamma"] },
      "samma-ajiva": { pali: "sammāājīva", respelling: "sam-ma-A-ji-va", literal: "right livelihood", here: "The fifth path factor: earning a living without harming others. The five trades are the canon's shortest treatment of it.", related: ["sila", "kamma"] },
      sammavayama: { pali: "sammāvāyāma", respelling: "sam-ma-VA-ya-ma", literal: "right effort", here: "The sixth path factor: preventing and abandoning unwholesome states, and cultivating wholesome ones.", related: ["appamada", "atthangikamagga"] },
      sammasati: { pali: "sammāsati", respelling: "sam-ma-SA-ti", literal: "right mindfulness", here: "The seventh path factor: the four satipaṭṭhāna applied as a path.", related: ["sati", "satipatthana"] },
      sammasamadhi: { pali: "sammāsamādhi", respelling: "sam-ma-sa-MA-dhi", literal: "right immersion", here: "The eighth path factor: the four jhānas.", related: ["samadhi", "jhana"] },
      paticcasamuppada: { pali: "paṭiccasamuppāda", respelling: "pa-tich-cha-sa-mup-PA-da", literal: "dependent arising", here: "The twelve-link account of how suffering is produced: ignorance conditions formations, and so on to ageing and death.", related: ["avijja", "tanha", "kamma"] },
      upadana: { pali: "upādāna", respelling: "u-PA-da-na", literal: "fuel, clinging", here: "Clinging, the fuel that keeps the process of suffering burning. Four kinds: to pleasure, views, rules, and self-doctrine.", related: ["tanha", "nibbana", "ditthi"] },
      asava: { pali: "āsava", respelling: "A-sa-va", literal: "influx, leakage", here: "The deep taints that flow out into action: sensuality, existence, and ignorance. An older vocabulary than the four truths.", related: ["kilesa", "avijja"] },
      samyojana: { pali: "saṃyojana", respelling: "san-YO-ja-na", literal: "fetter, binding", here: "The ten fetters that bind a person to continued becoming, removed in stages by the four kinds of noble person.", related: ["ariya", "nibbana"] },
      kilesa: { pali: "kilesa", respelling: "ki-LE-sa", literal: "defilement", here: "The mental states that stain and distort: greed, hate, delusion, and their relatives.", related: ["asava", "avijja"] },
      apayamukha: { pali: "apāyamukha", respelling: "a-PA-ya-MU-kha", literal: "gateway to loss", here: "The six drains on wealth in DN 31: drink, night roaming, festivals, gambling, bad friends, laziness.", related: ["sila", "samajivita"] },
      samajivita: { pali: "samajīvitā", respelling: "sa-ma-JI-vi-ta", literal: "balanced living", here: "Knowing income and expenditure, and living neither above nor below your means. A virtue, not a budgeting tip.", related: ["dana", "apayamukha"] },
      kalyannamitta: { pali: "kalyāṇamitta", respelling: "kal-YA-na-MIT-ta", literal: "good friend", here: "A friend in the good: someone whose conduct you can emulate. The canon calls this the whole of the holy life, not a supplement to it.", related: ["metta", "sangha"] },
      mangala: { pali: "maṅgala", respelling: "MUN-ga-la", literal: "blessing, auspicious sign", here: "In the Maṅgala Sutta, not luck but the accumulated effect of decent living.", related: ["sila", "appamada"] },
      disa: { pali: "disā", respelling: "DI-sa", literal: "direction, quarter", here: "In DN 31, the six relationships mapped onto the compass: parents east, teachers south, and so on.", related: ["sila", "sangha"] },
      upasaka: { pali: "upāsaka", respelling: "u-PA-sa-ka", literal: "one who sits near", here: "A lay follower of the Buddha. The female form is upāsikā.", related: ["sangha", "sila"] },
      bhikkhu: { pali: "bhikkhu", respelling: "BHIK-khu", literal: "almsman", here: "A fully ordained monk. The female form is bhikkhunī.", related: ["sangha", "vinaya"] },
      sangha: { pali: "saṅgha", respelling: "SAN-gha", literal: "assembly", here: "The community of practitioners. In the refuge formula, specifically the noble community.", related: ["bhikkhu", "upasaka"] },
      buddha: { pali: "buddha", respelling: "BOOD-dha", literal: "awakened one", here: "One who has woken up without a teacher in this world. A title, not a name.", related: ["dhamma", "sangha"] },
      phassa: { pali: "phassa", respelling: "PHAS-sa", literal: "touching", here: "Contact: the meeting of sense faculty, object, and attention. The canon places it at the start of the causal chain that leads to feeling.", related: ["vedana", "sankhara"] },
      khanti: { pali: "khanti", respelling: "KHAN-ti", literal: "patience, endurance", here: "The capacity to bear difficulty without reacting. Listed among the highest blessings and as a perfection.", related: ["upekkha", "mangala"] },
    },
  };

  if (typeof module !== "undefined" && module.exports) module.exports = data;
  else (root.SP = root.SP || {}), (root.SP.appendix = data);
})(typeof globalThis !== "undefined" ? globalThis : this);
