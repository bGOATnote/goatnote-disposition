# Presenter notes and sources

For Brandon Dent, MD. Revised September 28, 2026.

## 1. Fail-closed clinical AI

Brandon Dent, MD. Open with the connection between clinical judgment and engineering evidence. The session has two aims: a repeatable way to test a biomedical AI system, and a defensible example of the student's own work. Introduce the professional role exactly as supplied: Enterprise Systems Architect & Technical Advisor to Scaling Up EMDR. This is personal educational work and does not imply employer or university endorsement. The date and course numbers come from the supplied presentation.

## 2. What would make this session valuable?

Give students 90 seconds in pairs. Ask for an ideal outcome and an oversized gain: what could become possible after today that did not feel possible before? Invite both technical and career answers, including no-code contributions. Return to their answers at the end. Proposed outcomes informed by public biomedical engineering teaching descriptions covering experimental design, verification, critical appraisal, communication and career preparation. Related public course descriptions, not a verified BIOM 7109/8109 syllabus: https://digitalcommons.memphis.edu/biomedical-engineering-syllabi/13/ ; https://digitalcommons.memphis.edu/biomedical-engineering-syllabi/54/ ; https://bmegg.ucdavis.edu/courses ; https://catalog.olemiss.edu/engineering/biomedical-engineering/bme-600

## 3. Clinical judgment and systems responsibility

Use the biography briefly to establish perspective, not authority over every discipline. The supplied deck describes emergency medicine training and practice, followed by building GOATnote. The current title is user-supplied. In enterprise work the important questions are who owns a requirement, who may access the data, how a change is verified and who acts when the system cannot complete a task. Do not describe private work or claim a deployed system or measured outcome. The photograph is retained from the supplied presentation.

## 4. Four lessons I carry from the ED

These are the presenter's supplied lessons. Treat them as working principles rather than universal laws. Volume means deliberate repetitions with feedback, not endless repetition of an unexamined process. Trust but verify applies to the input, grader and claimed result. Slow is smooth means taking time for a defined sequence before speeding up. The career maxim is a quotation supplied by the presenter, used as an aspiration rather than a guarantee that skill removes selection noise. No other individual's name is needed in this deck.

## 5. Small error rates accumulate at scale

This is a hypothetical arithmetic illustration, not a measured hospital or model result. For 100,000 decisions, expected errors are volume multiplied by the error rate. Errors are not interchangeable with harmed patients. Case mix, severity, repeated decisions per patient and dependence matter. Ask which kinds of error would dominate a risk analysis. Do not turn a rubric score, satisfaction rating or service-uptime statistic into a clinical failure probability.

## 6. Model, system and evidence

Model is the generator. The system includes instructions, tools, parsing, user interface and operational behavior. A benchmark is one measurement design, not a universal certificate. A judge may be software, a model or a clinician. All need scrutiny. Repeated trials reveal variation that a single successful demo hides. If illustrating pass^k, state the assumptions: with independent trials and constant 0.8 success probability, five successes have probability 0.8^5=0.32768. Correlated errors violate that simple model.

## 7. Case C22: missing facts became reassuring facts

Read the synthetic patient message, then the saved response excerpt. Ask students to mark every asserted fact and locate its source. The response calls deformity and numbness absent although the message does not establish those negatives. The single-physician v3 reference retains clinician review. This is not an asserted positive clinical decision rule or confirmed fracture. The photographs are separately supplied discussion material, not model inputs or the synthetic patient's outcome. Source: https://github.com/bGOATnote/goatnote-disposition/blob/codex/goatnote-classroom-rebrand/data/classroom-review.json

## 8. HealthBench: the score needs its conditions

HealthBench Professional contains 525 clinician tasks and physician-reviewed rubrics. Its difficult-case enrichment and length adjustment mean its score is not clinical accuracy or a routine patient error rate. OpenAI's current Astra system card gives 64.7 length-adjusted and 68.2 unadjusted, with a September 22 correction for a previous evaluation misconfiguration. The older launch page reports a different Astra value and reports Claude Fable 5.1 with Opus 5 fallback for refusals. Do not combine those values into a new head-to-head ranking. Claude Fable is the configured model in our local study, not a claim about Anthropic's latest release. Sources checked September 28, 2026: https://cdn.openai.com/dd128428-0184-4e25-b155-3a7686c7d744/HealthBench-Professional.pdf ; https://deploymentsafety.openai.com/gpt-6-astra ; https://openai.com/index/gpt-6-astra/

## 9. Our saved cases still expose frontier failures

These are descriptive observations from 50 familiar synthetic development messages and one physician's post-output reference v3. Fable low effort has 48/50 agreement, 2 missed clinician-action cases among 43 referenced positives and zero urgent-action misses among 25. Astra xhigh and max each have 47/50, the same three clinician-action misses and zero urgent-action misses. MedGemma Q5_K_M has 46/50, zero clinician-action misses but one urgent-action miss. These are distinct endpoints, not measured patient harm or a statistically established ranking. Nemotron baseline repetitions are each 40/50; the original deck's 43/50 described a different intervention and is not used here. Configuration, runtime and dates differ. Source: https://github.com/bGOATnote/goatnote-disposition/blob/codex/goatnote-classroom-rebrand/data/classroom-review.json

## 10. Trust but verify includes the answer key

A changed reference changes the measurement, even if every model response is unchanged. The saved Fable result became 48/50 under revised physician v3; its earlier 44/49 result used another reference and denominator. Do not put those numbers on a model-improvement chart. Identical-request fresh repetitions returned 45/50 and 46/50. Keep the original evidence and report the reference version, denominator and repeated outcomes. A physician reference is also fallible. Astra's September 22 benchmark correction offers a separate public example of evaluation configuration affecting reported results. Sources: https://github.com/bGOATnote/goatnote-disposition/blob/codex/goatnote-classroom-rebrand/docs/RESEARCH_PROVENANCE.md ; https://deploymentsafety.openai.com/gpt-6-astra

## 11. Safety can fail across a conversation

This is a historical synthetic example from the supplied deck, also shown in the public ScribeGOAT2 evaluation documentation. It concerns a 3-week-old infant with fever. The source labels the speaker as a model; this is not a claim about the newest Astra or Claude releases. The engineering question is whether a safety-relevant recommendation remains appropriately firm when ordinary pressure follows. A saved transcript cannot establish an event rate. Ask students to design paired tests: respectful persistence and legitimate new information that should change a decision. Do not run new provider calls merely to reproduce the presentation. Source: https://github.com/GOATnote-Inc/scribegoat2/blob/main/bloom_medical_eval/README.md

## 12. A safety requirement students can test

Use the classroom project's strict parser and interface as a bounded engineering exercise. Requirement: invalid or incomplete output must produce an explicit failure and never a fabricated self-care result. Test both directions: a valid result must pass. Editing the patient message must clear any old result. A deterministic software check can be reproducible without being a complete clinical safety solution. The user-visible failure state still needs an appropriate owner and next step. Invite a no-code test table first, then optionally inspect a failing automated test. Sources: https://github.com/bGOATnote/goatnote-disposition/tree/codex/goatnote-classroom-rebrand/src/stripped ; https://github.com/bGOATnote/goatnote-disposition/blob/codex/goatnote-classroom-rebrand/docs/STUDENT_GUIDE.md

## 13. Systems work makes responsibility explicit

This is an illustrative design exercise connected to the presenter's user-supplied role at Scaling Up EMDR. It is not a description of a deployed employer system. Imagine an assistant answering questions about approved training materials. Students specify an allowed source, permission boundary, visible provenance, behavior when evidence is missing, and an accountable human. Keep proprietary repositories, client content and internal outcomes outside the class. The same reasoning applies to a biomedical tool even when its domain and consequences differ.

## 14. A small contribution can show how you think

Give students a path that does not require pretending to be clinicians. Start with one saved GOATnote case and an engineering claim. A useful artifact includes the source, a reproducible test, a result and a limit. Students can contribute through software reliability, evaluation analysis, human factors or scientific communication. Ask them to explain why the test matters and what it does not establish. This connects technical work with the communication and career aims of the public graduate course descriptions. Sources: https://github.com/bGOATnote/goatnote-disposition/blob/codex/goatnote-classroom-rebrand/docs/STUDENT_GUIDE.md ; Related public course descriptions, not a verified BIOM 7109/8109 syllabus: https://digitalcommons.memphis.edu/biomedical-engineering-syllabi/13/ ; https://digitalcommons.memphis.edu/biomedical-engineering-syllabi/54/ ; https://bmegg.ucdavis.edu/courses ; https://catalog.olemiss.edu/engineering/biomedical-engineering/bme-600

## 15. Volume negates luck

Speak from the user's supplied experience: interviewing at numerous medical schools and residencies, and serving as an advisor and friend to people who did not get the outcome they hoped for, sometimes without a clear explanation. Do not invent counts, private stories or reasons for a particular rejection. A selection outcome is noisy information, not a verdict on a person's worth. Repeated attempts with feedback can improve opportunity and skill, but do not guarantee admission or employment. Invite students to choose a sustainable cycle: make something small, seek specific feedback, revise and try again. The quotation is a career maxim supplied by the presenter.

## 16. Your next defensible result

Return to the ideal outcome and oversized gain students named at the beginning. Ask what changed and invite one concrete next step. The suggested resource ladder is optional, not a homework requirement. Start with the saved classroom case viewer; OpenEM helps with structured sources, LostBench with multi-turn evaluation, and HealthCraft with stateful tools and checks. These repositories are research artifacts with documented limitations. Students should read status and provenance before running anything; some are in passive maintenance. Links: https://github.com/bGOATnote/goatnote-disposition/blob/codex/goatnote-classroom-rebrand/docs/STUDENT_GUIDE.md ; https://github.com/GOATnote-Inc/openem-corpus ; https://github.com/GOATnote-Inc/lostbench ; https://github.com/GOATnote-Inc/healthcraft
