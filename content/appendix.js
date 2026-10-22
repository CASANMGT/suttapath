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
      {
        id: "s13", n: 13, domain: "Money", title: "The loan to a friend",
        prompt:
          "A close friend asks to borrow three months' worth of your savings to cover a deposit. They have always paid you back before, in small amounts. They will not sign anything, and asking would damage the friendship. You may need that money yourself within the year — you have no other buffer. They are asking today, and they are already embarrassed.",
        anchor: {
          session: "3.4",
          uids: ["an8.54:5.2", "dn31:31.1", "dn31:31.2"],
          inference:
            "The canon treats friends as a direction with duties on both sides: giving is one, but so is protecting what you have. Balanced finances are a duty to yourself before they are a favour to anyone else.",
        },
        leavesOpen:
          "Whether generosity requires lending, whether a verbal loan is a duty, and who bears the risk of an unwritten agreement. The canon has no contract law.",
        question: "Do you lend, lend less, or decline — and what do you say?",
        seminar: [
          "Is refusing a loan a failure of the friendship, or a condition of it?",
          "What changes if the friend would be hurt but not in danger?",
          "Which is worse: the money lost, or the friendship conducted as a transaction?",
        ],
        counter: [
          { label: "The lender with limits", text: "Lend only what you can lose without resenting it, and say the number plainly. Generosity that ruins you is not generosity; it is a debt you will collect later in resentment." },
          { label: "The friend first", text: "Lend what is asked, without terms, and treat it as a gift you may get back. A friendship that survives only by keeping accounts has already become a business." },
        ],
      },
      {
        id: "s14", n: 14, domain: "Career", title: "The good job you'd hate",
        prompt:
          "You are offered a secure, well-paid job in an industry you find pointless, at a company you would not defend at dinner. It would take you out of debt and let you support family. The work is legal, and no one is harmed in any way you can name. A second offer, less secure and a third less money, is work you believe in. You have a month to decide, and the secure offer will not wait.",
        anchor: {
          session: "5.5",
          uids: ["sn45.8:7.1", "sn45.8:7.2", "sn45.8:7.3", "an8.54:2.1", "an8.54:2.2", "an8.54:2.3"],
          inference:
            "Right livelihood is defined as giving up wrong livelihood, not as finding work you love. But the canon also insists that welfare in this life is real, and that initiative and balance are part of it. The two claims are held together, not ranked by the text.",
        },
        leavesOpen:
          "Whether work that is merely pointless counts as wrong livelihood, and whether a good salary can outweigh dullness. The canon names five forbidden trades, not a theory of meaningful work.",
        question: "Which offer do you take — and what do you tell yourself about why?",
        seminar: [
          "Is 'I would hate it' a moral reason, or only a preference?",
          "If the work harms no one, what exactly is wrong with it?",
          "What would you need to be able to say about your job at dinner?",
        ],
        counter: [
          { label: "The provider", text: "Take the secure job. Debt and insecurity are real harms to real people, and the canon counts ordinary welfare as a good. Meaning is not a duty you can pay rent with." },
          { label: "The conscientious worker", text: "Take the poorer job. Right livelihood is not only about the five forbidden trades; it is about what your days are made of. A life spent on pointless work is a quiet form of the harm the precepts exist to prevent." },
        ],
      },
      {
        id: "s15", n: 15, domain: "Speech", title: "The rumour that's probably true",
        prompt:
          "You hear, from two sources you trust, that a colleague has been falsifying safety reports. The sources are credible but not certain, and one has a grudge. Sharing it would get the reports checked before the next inspection; it would also end the colleague's career if it is wrong, and the rumour would follow them either way. Your manager asks you, privately, whether there is anything you should tell them.",
        anchor: {
          session: "6.1",
          uids: ["mn58:8.1", "mn58:8.2", "mn58:8.3", "dhp1:1", "dhp1:2"],
          inference:
            "The speech test is not 'is it true' but true, beneficial, and timely together. A rumour that may be true fails the first test precisely when certainty is missing, and the harm of spreading it is the second.",
        },
        leavesOpen:
          "Whether protective disclosure requires certainty, and what duty you owe to a colleague you suspect. The canon has a test for speech, not an investigation procedure.",
        question: "What do you tell your manager — and what do you tell the colleague?",
        seminar: [
          "Is 'probably true' enough when someone else's livelihood is at stake?",
          "Does the answer change if the safety risk is to other people rather than to property?",
          "What would you want done if the rumour were about you?",
        ],
        counter: [
          { label: "The protective reporter", text: "Report the facts and name the uncertainty: two credible sources, one with a grudge, no proof. Say exactly what you know and what you do not. Silence in the face of a safety risk is also a choice with victims." },
          { label: "The careful holder", text: "Say nothing until you can verify. An unverified rumour told to a manager is not disclosure; it is laundering gossip through authority, and the colleague has no way to answer it." },
        ],
      },
      {
        id: "s16", n: 16, domain: "Relationships", title: "The friend who's bad for you",
        prompt:
          "Your closest friend since school is loyal, funny, and reliably there — and steadily making your life worse. They mock your attempts to change, borrow money they do not repay, and get defensive whenever you set a limit. You have known them for fifteen years, and they were there when no one else was. They are now asking you to lend them a deposit for a flat.",
        anchor: {
          session: "6.2",
          uids: ["dn31:31.1", "dn31:31.2", "sn45.2:2.2", "sn45.2:2.3"],
          inference:
            "Friendship in DN 31 is a set of reciprocal duties, not a feeling. AN 45.2 says the company you keep is the whole of the path, which makes a friendship's direction a serious question rather than a sentimental one.",
        },
        leavesOpen:
          "Whether loyalty to a long friendship outweighs the canon's blunt teaching on bad friends, and what you owe someone who was once good for you. The canon names the duties; it does not time them out.",
        question: "Do you lend the deposit, keep the friendship without lending, or end it?",
        seminar: [
          "Is withdrawing support a betrayal or a duty to yourself?",
          "What exactly makes this friend 'bad for you' — their conduct, or your conduct around them?",
          "What would you owe them if they were your sibling?",
        ],
        counter: [
          { label: "The loyal friend", text: "Keep the friendship and refuse the money. Fifteen years of presence is not cancelled by a bad patch, and the duties of friendship include honesty, not exit. Tell them plainly what the limits are and stay." },
          { label: "The honest exit", text: "End it, or let it fade. The canon treats bad friends as a drain on the path, not a cross to carry. Staying teaches both of you that the behaviour has no cost, and that is not kindness." },
        ],
      },
      {
        id: "s17", n: 17, domain: "Speech", title: "The thing you said when angry",
        prompt:
          "In an argument you said something true and cruel about a friend's marriage, in front of two other people. It landed, and it was accurate. They have not spoken to you since. You want to apologise, but the honest version of the apology admits the sentence was true — and they have not asked for an explanation. The silence has now lasted three weeks.",
        anchor: {
          session: "6.3",
          uids: ["mn21:20.1", "mn21:20.2", "mn21:20.3", "mn58:8.2"],
          inference:
            "The saw standard is about the mind under provocation, not about the truth of what was said. A true sentence can still fail the test of timing and gentleness, and an apology that defends the content is a second injury.",
        },
        leavesOpen:
          "Whether an apology owes the truth about the content, and what repair looks like when the harm was accurate. The canon names the standard for speech; it does not give a procedure for apology.",
        question: "What do you say in the apology — and what do you leave out?",
        seminar: [
          "Can an apology be honest if it does not admit the sentence was true?",
          "Does the audience change the harm, or only the embarrassment?",
          "What would 'no bad words' have required of you in the argument?",
        ],
        counter: [
          { label: "The unqualified apology", text: "Apologise for the act, not the content: for the timing, the audience, and the cruelty. Do not relitigate the truth. Repair is about the relationship now, not about who was right then." },
          { label: "The honest account", text: "Apologise and say the hard part too: it was true, and saying it that way was wrong. An apology that hides the content asks them to forgive a sentence you still stand behind, which is not repair." },
        ],
      },
      {
        id: "s18", n: 18, domain: "Relationships", title: "The explanation you owe",
        prompt:
          "A friendship ended badly two years ago — you left without explaining why. You have since moved cities and built a life that does not include them. They have asked, twice, for a conversation. You know the reason would hurt them and would also be partly about your own shame. Silence has become the easier kindness, and you are not sure it is kindness.",
        anchor: {
          session: "6.1",
          uids: ["mn58:8.1", "mn58:8.2", "mn58:8.3", "sn3.8:4.4"],
          inference:
            "Truth, benefit, and timing are a test of speech, not of disclosure. MN 58 also says the Realized One speaks with sympathy for sentient beings — which cuts against both brutal honesty and evasive silence.",
        },
        leavesOpen:
          "Whether an explanation is owed after a relationship ends, and whether the other person's need to know outweighs the harm of telling. The canon has no procedure for closure.",
        question: "Do you have the conversation, send a letter, or keep the silence?",
        seminar: [
          "Is silence a kindness here, or avoidance with a kind face?",
          "Who benefits from the explanation — them, you, or neither?",
          "What does 'timely' mean two years later?",
        ],
        counter: [
          { label: "The honest conversation", text: "Have it. They have asked twice, which makes the information theirs to hear, and an unexplained ending is a wound that keeps reopening. Say it gently, take responsibility for your part, and do not ask to be forgiven." },
          { label: "The protective silence", text: "Do not reopen it. An explanation two years late serves your conscience more than their life, and some truths are not beneficial just because they are true. Decline clearly and kindly, and let them go." },
        ],
      },
      {
        id: "s19", n: 19, domain: "Relationships", title: "The parent you're caring for",
        prompt:
          "Your parent can no longer live alone. You are the only child nearby, and the practical choice is to move them in — which would mean giving up the job you have built, or the relationship you are in, or both. The other option is a care home they have said they would hate. They are frightened, and they are not being unreasonable about the fear.",
        anchor: {
          session: "6.5",
          uids: ["dn31:28.1", "dn31:28.2", "an5.57:1.6"],
          inference:
            "DN 31 names supporting parents as a duty, but it assumes a household economy where that duty was structurally possible. AN 5.57's recollection of separation is not a solution; it is a way of seeing the situation without the fantasy that a perfect option exists.",
        },
        leavesOpen:
          "What filial duty requires when it collides with your own life, and whether a care home can satisfy it. The canon's assumption of a different economy is real and does not translate cleanly.",
        question: "What do you actually do — and what do you tell yourself it means about you?",
        seminar: [
          "Is this a duty with a fixed content, or a duty to do your best under constraint?",
          "What does the parent owe you, if anything?",
          "Does the answer change if the parent was cruel to you?",
        ],
        counter: [
          { label: "The dutiful child", text: "Move them in and absorb the cost. The duty named in DN 31 is not conditional on convenience, and a care home chosen for your career is a decision you will have to defend to yourself for years." },
          { label: "The sustainable carer", text: "Choose the care home. A carer who loses their livelihood and relationship is not more loving, only more depleted, and the duty to support parents does not require self-erasure. Visit often and stay honest." },
        ],
      },
      {
        id: "s20", n: 20, domain: "Relationships", title: "The colleague everyone avoids",
        prompt:
          "One colleague is awkward, repetitive, and slightly inappropriate in ways that are hard to name. The team has quietly excluded them from lunches, chat threads, and the good projects. You have gone along with it because the cost of objecting is social, and because you find them difficult too. They have just been assigned to your project for six months.",
        anchor: {
          session: "6.4",
          uids: ["sn3.8:4.3", "sn3.8:4.4", "sn45.2:2.2"],
          inference:
            "The analogical argument cuts both ways: they hold themselves as dear as you hold yourself, and you would not want to be managed by avoidance. Good friendship as the whole of the path raises the standard for what you owe a colleague you did not choose.",
        },
        leavesOpen:
          "Whether collegial kindness requires inclusion, and how to hold goodwill toward someone whose behaviour is genuinely difficult. The canon has no workplace policy.",
        question: "What do you change about your own conduct — and what do you ask of the team?",
        seminar: [
          "Is exclusion here harm, or simply the absence of friendship?",
          "What do you owe someone whose behaviour you also need to address?",
          "Would you accept this treatment for yourself if you were the awkward one?",
        ],
        counter: [
          { label: "The includer", text: "Include them deliberately and without commentary: lunches, the thread, one real conversation. You do not have to like them, and the analogical argument does not require affection — only that you not treat them as a non-person." },
          { label: "The honest boundary-setter", text: "Inclusion without feedback is not kindness. Say plainly what the inappropriate behaviour is and what would change it, then include them on the same terms as everyone else. Goodwill and standards are not opposites." },
        ],
      },
      {
        id: "s21", n: 21, domain: "Habit", title: "The phone at 2am",
        prompt:
          "It is 2am. You are scrolling, and you know it costs you tomorrow: the meeting, the gym, the mood you will bring home. There is no deadline and nothing to find. You have decided to stop at midnight four times this month, and four times you have not. The phone is in your hand now, and the decision is not really a decision any more.",
        anchor: {
          session: "4.2",
          uids: ["mn20:5.1", "mn20:5.2", "an6.55:7.1"],
          inference:
            "MN 20 treats a stuck thought as something to be managed by technique, not defeated by resolve: look away if substitution fails. AN 6.55 adds that too much effort produces restlessness — which is why a rule at 2am fails where a design change at 9pm might work.",
        },
        leavesOpen:
          "Whether discipline is a matter of willpower or of environment, and how much of the habit is choice at all. The canon gives techniques for thoughts, not a theory of addiction.",
        question: "What do you do at 2am — and what do you change before 9pm?",
        seminar: [
          "Is this a failure of will, or a failure of design?",
          "Which of MN 20's five techniques would actually work here?",
          "What would you tell a friend in the same loop?",
        ],
        counter: [
          { label: "The designer", text: "Stop trying to win at 2am. Change the environment: charger outside the bedroom, a paper book, an alarm. The sutta's own logic is technique before willpower, and the cheapest technique is not having the phone in reach." },
          { label: "The strict rule-keeper", text: "Set a hard rule and hold it, even when it feels impossible. Design only moves the decision earlier; someone still has to choose. Treating the habit as purely environmental is how people avoid the one honest commitment." },
        ],
      },
      {
        id: "s22", n: 22, domain: "Habit", title: "The deadline and the shortcut",
        prompt:
          "A report is due in six hours. One section is not done, and the data you need is not available. A colleague's earlier draft contains a number that would fit, but it was from a different year and you cannot verify it. No one will check before publication. The number is plausible, and the report is for a decision that will be made next week.",
        anchor: {
          session: "4.3",
          uids: ["sn3.17:4.1", "sn3.17:4.2", "mn61:9.1", "mn61:9.2"],
          inference:
            "The mirror check asks before, during, and after whether an action leads to harm. Time pressure does not suspend the check; it compresses it. Diligence in SN 3.17 is not busyness but not letting things slip, which is the opposite of the shortcut.",
        },
        leavesOpen:
          "Whether an unverifiable but plausible number is a lie or an estimate, and what disclosure would make it honest. The canon has a check for harm; it has no publishing standard.",
        question: "Do you use the number, flag it, or leave the section blank — and what do you write?",
        seminar: [
          "Is the harm the wrong number or the hidden uncertainty?",
          "What would the after-the-fact check require you to do next week?",
          "Would you sign your name to the paragraph?",
        ],
        counter: [
          { label: "The transparent estimator", text: "Use the number and label it: 'unverified estimate from a prior-year draft; to be confirmed.' That is honest, useful, and it puts the uncertainty where the reader can see it. Blank sections hide the problem instead." },
          { label: "The refuser", text: "Leave it blank and say why in the cover note. A plausible number from the wrong year is exactly the kind of contamination that survives into decisions. Better an incomplete report than a fluent falsehood." },
        ],
      },
      {
        id: "s23", n: 23, domain: "Habit", title: "The drink you don't want",
        prompt:
          "You have stopped drinking, for reasons you do not want to explain to a table of colleagues. It is the third round, and the glass is in front of you. Refusing will be noticed, and someone will make it a thing — either a joke or a question. Accepting would be easier, and one drink would probably not matter to anyone but you.",
        anchor: {
          session: "2.5",
          uids: ["dn31:3.1", "an4.62:6.2"],
          inference:
            "The canon treats intoxicants as a drain on wealth and a corruption of conduct, and AN 4.62 ranks blamelessness above the other goods. The social cost of refusing is real, but it is not the kind of cost the ranking protects.",
        },
        leavesOpen:
          "Whether a single drink is a breach, and how much explanation you owe to people who are not owed anything. The canon names the precept; it does not script the table.",
        question: "Do you take it, refuse it plainly, or refuse with an explanation — and which explanation?",
        seminar: [
          "Is the pressure the drink, or the requirement to justify yourself?",
          "What do you owe the table, if anything?",
          "Does it change if the colleague pressing you is your manager?",
        ],
        counter: [
          { label: "The plain refuser", text: "Say no, once, without a story: 'Not for me, thanks.' Explanations invite negotiation, and you do not owe anyone your reasons. The discomfort lasts a minute; the precedent lasts longer." },
          { label: "The social accommodator", text: "Take the glass, hold it, and do not drink. Or accept and leave it full. The precept is about intoxication, not about a glass in your hand, and making a scene about your virtue is its own kind of self-regard." },
        ],
      },
      {
        id: "s24", n: 24, domain: "Habit", title: "The comparison spiral",
        prompt:
          "You open the app and see that a former classmate has a job you wanted, a body you used to have, and a life that looks easier than yours. You know the feed is edited. You also know the feeling is not going away: you are behind, and the evidence is on the screen. You have been scrolling for forty minutes, and you feel worse than when you started.",
        anchor: {
          session: "4.4",
          uids: ["dhp1:1", "dhp1:2", "sn36.6:1.8", "sn36.6:1.9"],
          inference:
            "The two-arrows analysis separates the first feeling (the sting of comparison) from the second (the story that you are behind, and the scrolling that follows). Dhp 1-2 makes the mind's direction causal, which is why the story matters more than the feed.",
        },
        leavesOpen:
          "Whether ambition and comparison can be separated, and whether the sting is information or only a habit. The canon names the second arrow; it does not abolish the first.",
        question: "What do you do with the next ten minutes — and what do you tell yourself about the feeling?",
        seminar: [
          "Which part is the first arrow, and which is the story you added?",
          "Is the comparison ever useful? When?",
          "What would you need to believe for the feed to lose its authority?",
        ],
        counter: [
          { label: "The deconstructor", text: "Name the mechanism: curated feed, selected sample, second arrow. Put the phone down and do one concrete thing toward your own goal. The feeling is a manufactured comparison, and treating it as evidence is the error." },
          { label: "The listener", text: "Take the sting seriously. It is telling you something about what you actually want, and dismissing it as a second arrow is a way of avoiding a real ambition. Sit with it, then decide — but do not scroll." },
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
      vitakka: { pali: "vitakka", respelling: "vi-TAK-ka", literal: "thinking, applying the mind", here: "The initial movement of attention toward an object — the mind turning to something and beginning to work on it. In MN 19 it is the unit that gets sorted into two classes.", related: ["sati", "samadhi", "vicara"] },
      vicara: { pali: "vicāra", respelling: "vi-CHA-ra", literal: "examining, keeping the mind connected", here: "The sustained part of thought: attention staying with an object and turning it over. Paired with vitakka as the two factors of ordinary thinking.", related: ["vitakka", "samadhi"] },
      anapanasati: { pali: "ānāpānassati", respelling: "a-na-PA-na-SSA-ti", literal: "mindfulness of breathing", here: "Attention to the in-breath and out-breath as a trainable object. Presented in MN 118 as an ordinary skill of noticing, not a special state.", related: ["sati", "samadhi", "satipatthana"] },
      upekkha: { pali: "upekkhā", respelling: "u-PEK-kha", literal: "looking on; equanimity", here: "The steady middle: neither pushing away nor grabbing. Not indifference — it is what remains when reactivity has quieted.", related: ["khanti", "metta", "jhana"] },
      passaddhi: { pali: "passaddhi", respelling: "pas-SAD-dhi", literal: "calming, tranquility", here: "The settling of body and mind that follows right effort. In MN 19 the Buddha stops thinking not for doctrine but so the mind will not be stressed.", related: ["samadhi", "viriya", "jhana"] },
      viriya: { pali: "viriya", respelling: "vi-RI-ya", literal: "energy, effort", here: "The effort that keeps a practice going. In AN 6.55 it is a tension to be tuned, not a quantity to be maximised: too much becomes restlessness, too little becomes laziness.", related: ["passaddhi", "samadhi", "appamada"] },
      atta: { pali: "attā", respelling: "AT-ta", literal: "self, soul", here: "The permanent controller the not-self teaching denies. It is not the conventional person, which is why 'there is no self' is a misleading translation of anattā.", related: ["anatta", "khandha", "mana"] },
      vaca: { pali: "vācā", respelling: "VA-cha", literal: "speech", here: "The verbal act. Right speech is defined by four refusals rather than by a tone of voice.", related: ["sammavaca", "sacca", "sila"] },
      sammajiva: { pali: "sammājīva", respelling: "sam-MA-JI-va", literal: "right livelihood", here: "Earning a living by giving up wrong livelihood. The canon names five forbidden trades and leaves the rest to judgement.", related: ["samajivita", "sila", "kamma"] },
      maranasati: { pali: "maraṇasati", respelling: "ma-ra-NA-sa-ti", literal: "recollection of death", here: "Remembering that death is certain and its time unknown. A clarity practice about carelessness, not a meditation on gloom.", related: ["anicca", "appamada", "samvega"] },
      samatha: { pali: "samatha", respelling: "SA-ma-tha", literal: "calm, settling", here: "The tranquilising wing of practice, paired with insight. Its purpose is a mind steady enough to see, not a pleasant state to collect.", related: ["vipassana", "samadhi", "passaddhi"] },
      vipassana: { pali: "vipassanā", respelling: "vi-PAS-sa-na", literal: "seeing clearly", here: "Insight into impermanence, suffering, and not-self as they appear in experience. Not a retreat brand and not a technique in itself.", related: ["samatha", "anicca", "anatta"] },
      kusala: { pali: "kusala", respelling: "KU-sa-la", literal: "skillful", here: "Whatever leads to welfare and reduces harm. The canon's basic evaluative word, and a better fit than 'good'.", related: ["akusala", "sila", "punna"] },
      akusala: { pali: "akusala", respelling: "a-KU-sa-la", literal: "unskillful", here: "Whatever leads to harm, whether or not it feels bad at the time. The pair kusala/akusala is about consequences, not rules.", related: ["kusala", "kilesa", "dukkha"] },
      lobha: { pali: "lobha", respelling: "LO-bha", literal: "greed", here: "The pulling-toward: wanting to have, keep, or repeat. One of the three unwholesome roots.", related: ["dosa", "moha", "tanha"] },
      dosa: { pali: "dosa", respelling: "DO-sa", literal: "hate, aversion", here: "The pushing-away: the wish that something would stop or disappear. Paired with greed and delusion.", related: ["lobha", "moha", "byapada"] },
      moha: { pali: "moha", respelling: "MO-ha", literal: "delusion", here: "Not seeing experience as it is — impermanent, unsatisfactory, not-self. The root that makes the other two possible.", related: ["avijja", "lobha", "dosa"] },
      mana: { pali: "māna", respelling: "MA-na", literal: "conceit", here: "Measuring yourself against others: better, equal, or worse. Subtler than arrogance, and the last fetter the path removes.", related: ["atta", "asava", "ditthi"] },
      vicikiccha: { pali: "vicikicchā", respelling: "vi-chi-KICH-cha", literal: "doubt", here: "A hindrance when it paralyses. Not the same as honest questioning, which the canon encourages — see the Kālāmas.", related: ["nivarana", "ditthi", "saddha"] },
      uddhacca: { pali: "uddhacca", respelling: "ud-DHACH-cha", literal: "restlessness", here: "Agitation that will not let the mind settle. Paired with sloth and torpor as a single hindrance.", related: ["nivarana", "thinamiddha", "passaddhi"] },
      thinamiddha: { pali: "thīnamiddha", respelling: "THI-na-MID-dha", literal: "sloth and torpor", here: "Heaviness and dullness of mind and body. The other half of the third hindrance, and the reason 'just sit longer' is bad advice.", related: ["nivarana", "uddhacca", "viriya"] },
      kamacchanda: { pali: "kāmacchanda", respelling: "KA-ma-chanda", literal: "sensual desire", here: "Wanting pleasant sense experience. The first hindrance, and the one most easily mistaken for enthusiasm.", related: ["nivarana", "lobha", "tanha"] },
      byapada: { pali: "byāpāda", respelling: "bya-PA-da", literal: "ill will", here: "The wish to harm or to see someone fail. The second hindrance; the direct opposite of mettā.", related: ["nivarana", "dosa", "metta"] },
      nivarana: { pali: "nīvaraṇa", respelling: "ni-VA-ra-na", literal: "hindrance, covering", here: "The five states that obstruct concentration: sensual desire, ill will, sloth and torpor, restlessness, and doubt.", related: ["kamacchanda", "byapada", "vicikiccha"] },
      bojjhanga: { pali: "bojjhaṅga", respelling: "bod-JHAN-ga", literal: "awakening factor", here: "Seven qualities that lead to awakening: mindfulness, investigation, energy, rapture, tranquility, concentration, and equanimity.", related: ["sati", "viriya", "upekkha"] },
      sotapanna: { pali: "sotāpanna", respelling: "so-TA-pan-na", literal: "stream-enterer", here: "One who has entered the path and cannot fall back. First of the four stages of awakening.", related: ["sakadagami", "anagami", "arahant"] },
      sakadagami: { pali: "sakadāgāmi", respelling: "sa-ka-DA-ga-mi", literal: "once-returner", here: "The second stage: at most one more return to this human realm.", related: ["sotapanna", "anagami", "arahant"] },
      anagami: { pali: "anāgāmi", respelling: "a-NA-ga-mi", literal: "non-returner", here: "The third stage: no return to the sensual realm. The path's stages are described as fetters removed, not as experiences had.", related: ["sotapanna", "sakadagami", "arahant"] },
      arahant: { pali: "arahant", respelling: "a-ra-HANT", literal: "worthy one", here: "The fourth stage: finished, with nothing further to do. The canon's term for a fully awakened person.", related: ["sotapanna", "nibbana", "asava"] },
      bhavana: { pali: "bhāvanā", respelling: "BHA-va-na", literal: "cultivation, bringing into being", here: "The word usually translated 'meditation'. It is closer to developing a capacity than to relaxing.", related: ["samatha", "vipassana", "sati"] },
      sacca: { pali: "sacca", respelling: "SACH-cha", literal: "truth", here: "Both the fact and the act of telling it. The four truths are called noble because they are seen, not because they are propositions to believe.", related: ["ariyasacca", "vaca", "ditthi"] },
      ayatana: { pali: "āyatana", respelling: "a-YA-ta-na", literal: "sense field", here: "The six internal and six external bases of experience: eye and sights, ear and sounds, and so on through mind and ideas.", related: ["dhatu", "phassa", "vedana"] },
      dhatu: { pali: "dhātu", respelling: "DHA-tu", literal: "element", here: "The constituents the canon analyses experience into: earth, water, fire, air, space, and consciousness.", related: ["ayatana", "khandha", "rupa"] },
      bhava: { pali: "bhava", respelling: "BHA-va", literal: "existence, becoming", here: "Being a certain kind of being. The tenth link of dependent origination, and the object of the third kind of craving.", related: ["jati", "paticcasamuppada", "tanha"] },
      jati: { pali: "jāti", respelling: "JA-ti", literal: "birth", here: "The arising of a new existence. The eleventh link, immediately followed by ageing and death.", related: ["bhava", "paticcasamuppada", "dukkha"] },
      bodhi: { pali: "bodhi", respelling: "BO-dhi", literal: "awakening", here: "From the same root as buddha: waking up. The goal is described as knowing and seeing, not as a feeling.", related: ["buddha", "nibbana", "bojjhanga"] },
      abhidhamma: { pali: "abhidhamma", respelling: "a-bhi-DHAM-ma", literal: "about the teaching", here: "The third basket: systematic philosophy and psychology. This path deliberately excludes most of it.", related: ["tipitaka", "dhamma", "khandha"] },
      gatha: { pali: "gāthā", respelling: "GA-tha", literal: "verse", here: "A metrical unit. Many prose suttas end with a verse summary, which is often the part people remember.", related: ["sutta", "dhamma", "sacca"] },
      indriya: { pali: "indriya", respelling: "in-DRI-ya", literal: "faculty", here: "A governing capacity: faith, energy, mindfulness, concentration, and wisdom. They are to be balanced, not maximised one at a time.", related: ["saddha", "viriya", "samadhi"] },
      samvega: { pali: "saṃvega", respelling: "sam-VE-ga", literal: "urgency, shock", here: "The seriousness that comes from seeing how things are. Not panic; the mood that makes practice matter.", related: ["maranasati", "appamada", "anicca"] },
      saddha: { pali: "saddhā", respelling: "SAD-dha", literal: "faith, confidence", here: "Trust based on something seen or tested, not credulity. The canon pairs it with wisdom rather than opposing them.", related: ["indriya", "vicikiccha", "buddha"] },
      paccaya: { pali: "paccaya", respelling: "pach-CHA-ya", literal: "condition", here: "What something depends on. The technical term in dependent origination: each link is a requirement for the next.", related: ["paticcasamuppada", "avijja", "bhava"] },
      asankhata: { pali: "asaṅkhata", respelling: "a-san-KHA-ta", literal: "unconditioned", here: "The not-made. A synonym for nibbāna in the sense Ud 8.3 uses: freedom from what is produced and conditioned.", related: ["nibbana", "sankhara", "nirodha"] },
      alobha: { pali: "alobha", respelling: "a-LO-bha", literal: "non-greed", here: "The absence of pulling-toward: generosity and letting go as a root, not a mood.", related: ["lobha", "dana", "caga"] },
      adosa: { pali: "adosa", respelling: "a-DO-sa", literal: "non-hate", here: "The absence of pushing-away: the root of kindness and patience.", related: ["dosa", "metta", "khanti"] },
      amoha: { pali: "amoha", respelling: "a-MO-ha", literal: "non-delusion", here: "The absence of confusion: the root of wisdom, and the positive name for what replaces ignorance.", related: ["moha", "panna", "avijja"] },
      vimutti: { pali: "vimutti", respelling: "vi-MUT-ti", literal: "freedom, release", here: "The goal stated as an outcome rather than a place. The canon's most common word for what the path produces.", related: ["nibbana", "nirodha", "arahant"] },
      samvara: { pali: "saṃvara", respelling: "sam-VA-ra", literal: "restraint", here: "Guarding the senses: not suppression, but not letting attention wander into what feeds the unwholesome.", related: ["sila", "sati", "indriya"] },
      yoniso: { pali: "yoniso", respelling: "YO-ni-so", literal: "from the womb; wisely", here: "As in yoniso manasikāra: attention that goes to the root of a matter. The canon's term for useful curiosity.", related: ["ayoniso", "sati", "panna"] },
      ayoniso: { pali: "ayoniso", respelling: "a-YO-ni-so", literal: "unwisely", here: "Attention that stays on the surface and feeds the hindrances. Not stupidity; a habit of looking in the wrong place.", related: ["yoniso", "nivarana", "moha"] },
    },
  };

  if (typeof module !== "undefined" && module.exports) module.exports = data;
  else (root.SP = root.SP || {}), (root.SP.appendix = data);
})(typeof globalThis !== "undefined" ? globalThis : this);
