# Presenter notes and sources

Four ideas from emergency medicine, with engineering questions for the audience.

## 1. Emergency Medicine

Four working lessons from emergency medicine, applied to biomedical engineering and career decisions. Ask students what ideal outcome and unusually large gain would make this session useful. The distinction is between a model generating an answer and a system producing a result someone can responsibly use. Images: supplied presentation, opening slide.

## 2. What does this guy know?

Brief introduction from the supplied experience: emergency medicine practice and GOATnote research. Current role: Enterprise Systems Architect & Technical Advisor to Scaling Up EMDR. Use the television comparison as humor, without implying endorsement or claiming that a pictured person contributes to this project. Images: supplied presentation, introductory slide.

## 3. Four ideas

Ask: What would be your ideal outcome today? What unusually large gain would make this worth your time? Allow a brief private reflection or pair discussion. The four phrases are working principles, not guarantees about error rates or admission. The colors distinguish the ideas but the words remain the primary labels. Image: supplied presentation.

## 4. Volume negates luck

The experience figures are the presenter’s own claims supplied in this deck. Volume creates opportunities to observe unusual failures and improve through feedback. It does not remove systematic bias or ensure every attempt succeeds. Connect repetition in clinical work to repeated measurements, diverse test cases and deliberate career attempts. Image: supplied presentation.

## 5. Volume negates luck

Expected answer: 100 errors per 100,000 decisions in this hypothetical example. Correctness is assumed to be binary and the rate constant. Ask which errors occur, who experiences them and what consequences follow. The numbers are illustrative arithmetic, not measured emergency-department or payment-service error rates, and errors are not identical to patients harmed. More repetitions can reveal variability but cannot correct a systematically biased test. Images: supplied presentation.

## 6. Trust but verify

A polished demonstration is a starting observation. Ask what would count as independent evidence for its claim. Keep the discussion on the displayed demonstration, not assumptions about the pictured person. Image: supplied presentation, phone demonstration.

## 7. Trust but verify

Expected answer: the message does not establish the absence of deformity or numbness. Missing information cannot be treated as a negative finding. Students can identify this source-tracing failure without diagnosing an ankle injury. The supplied photographs are discussion material, not model inputs or a confirmed outcome for synthetic C22. Source: https://github.com/bGOATnote/goatnote-disposition/blob/codex/goatnote-classroom-rebrand/data/classroom-review.json

## 8. Trust but verify

HealthBench Professional contains 525 clinician tasks and physician-reviewed rubrics. Astra’s system card reports 64.7 length-adjusted points, corrected September 22 after an evaluation configuration error. This is rubric credit, not a patient-safety probability. Ask what evidence would make a benchmark relevant to a specific biomedical device: intended use, patient population, workflow, harm severity and prospective validation. The local line is a separate descriptive experiment: Fable 5.1 low effort missed 2 of 43 clinician-action cases, and Astra xhigh and max each missed 3, against a single physician’s post-output reference on 50 known synthetic development cases. Neither local result is a head-to-head clinical-readiness claim. Sources: https://cdn.openai.com/dd128428-0184-4e25-b155-3a7686c7d744/HealthBench-Professional.pdf ; https://deploymentsafety.openai.com/gpt-6-astra ; https://github.com/bGOATnote/goatnote-disposition/blob/codex/goatnote-classroom-rebrand/data/classroom-review.json

## 9. Trust but verify

This is a historical synthetic example, not a claim about the newest Astra or Claude releases. The source labels the speaker as a model. Expected discussion: patient pressure is not new clinical evidence. A test should also include legitimate new information that ought to change the recommendation. A saved transcript does not establish a failure rate. Source: https://github.com/GOATnote-Inc/scribegoat2/blob/main/bloom_medical_eval/README.md The illustration is AI-generated and does not depict an actual patient. Exact longer excerpts are preserved in the cited transcript.

## 10. Trust but verify

Click the linked headline or viewer screenshot to open https://bgoatnote.github.io/goatnote-disposition/#index . In edit mode, use the presentation application’s Open Link command; in slideshow mode click once. The downloaded classroom ZIP also includes index.html for offline use. Compare C22, C47 or C49. Open the saved HTML viewer and compare the message, reference and recorded response for C22, C47 or C49. Ask students to separate a source fact from a model inference. Keep the reference version beside each comparison. These are 50 familiar synthetic development messages and a single physician’s unblinded post-output reference v3. Earlier and revised scores use different references; reference revision is not a model improvement. Fable repetitions scored 45/50 and 46/50 after the saved 48/50 result. Source: https://github.com/bGOATnote/goatnote-disposition/blob/codex/goatnote-classroom-rebrand/docs/STUDENT_GUIDE.md ; https://github.com/bGOATnote/goatnote-disposition/blob/codex/goatnote-classroom-rebrand/data/classroom-review.json

## 11. Slow is smooth and smooth is fast

In the emergency department, a rushed movement with a needle or scalpel can injure a coworker. This is the presenter’s concrete example, not an abstract analogy. Ask: who else is exposed when your action fails? Expected answers include the teammate, patient, operator and maintainer. Discuss a deliberate pause and a clear handoff. The image is an AI-generated near-miss illustration, not a record of an actual injury.

## 12. Slow is smooth and smooth is fast

Rushing AI engineering can mean skipping red teaming, a security sweep, code review or regression tests. Red teaming deliberately probes failure modes; a security review looks for weaknesses such as authorization errors and data exposure; regression tests check that expected behavior still holds. Ask: which dangerous failure would an impressive demo miss? Students do not need to diagnose a patient to propose an adversarial input or a data-access test. This image illustrates the work and does not claim a completed security review.

## 13. Slow is smooth and smooth is fast

These are observed results from the project parser, run locally with synthetic fixtures on September 29, 2026. Malformed JSON and a missing rationale throw explicit errors; the valid response fixture passes. Valid response here means a complete provider response with an allowed disposition and a nonempty rationale. No provider call was made. Ask students to inject one controlled fault into their own biomedical workflow and keep a valid control. A missing sensor sample is one possible test. This verifies a bounded software behavior, not clinical accuracy or readiness. Source: src/stripped/protocol.ts and tests/stripped-gui-protocol.test.mjs in the linked project. Optional resource: HealthCraft checks synthetic tool actions against world state. https://github.com/GOATnote-Inc/healthcraft

## 14. Be so good you can’t be ignored

The quotation is a career maxim supplied by the presenter. Describe the experience of interviewing at medical schools and residencies, and advising capable people whose selection outcomes did not match their preparation. Do not turn selection into a verdict on a person’s worth or promise that merit guarantees attention. The practical move is to produce useful work and make its quality legible. Image: AI-generated illustration of a prototype test, not an observed experimental result.

## 15. Be so good you can’t be ignored

Expected answer: one bounded artifact with a source, a test that can fail, an observed result and an honest limitation. A data analysis, test procedure or human-factors study can count without writing code. State the student’s own contribution and any AI assistance. Example: deliberately inject a stale sensor value and show the procedure catches it. One clear piece of work can support a mentor or interview conversation. These proposed outcomes connect to public course descriptions on experimental design, verification, scientific communication and professional development. Sources: https://digitalcommons.memphis.edu/biomedical-engineering-syllabi/13/ ; https://digitalcommons.memphis.edu/biomedical-engineering-syllabi/54/ ; https://bmegg.ucdavis.edu/courses ; https://catalog.olemiss.edu/engineering/biomedical-engineering/bme-600 Concrete example on this slide: the existing GUI protocol tests were rerun locally September 29, 2026. All 50 request bodies match frozen fixtures byte-for-byte, and all 50 provider-response fixtures reproduce their saved parsed outputs. These are software reproducibility checks, not measures of clinical accuracy. The complete seven-test protocol file passed without model calls. Source: https://github.com/bGOATnote/goatnote-disposition/blob/codex/goatnote-classroom-rebrand/tests/stripped-gui-protocol.test.mjs . Ask what equivalent bounded claim the student could make for a sensor, dataset or test procedure.

## 16. Be so good you can’t be ignored

The countdown is anchored to the presentation date, September 29, 2026: 93 calendar days follow that date through December 31. Ask students to choose a first step they can complete soon, at a sustainable pace. Return to their ideal outcome and oversized gain. The QR links to the existing student guide and saved-case viewer. LostBench is an optional research starting point for multi-turn safety testing, not a clinical product. Sources: https://github.com/GOATnote-Inc/lostbench ; https://github.com/bGOATnote/goatnote-disposition/blob/codex/goatnote-classroom-rebrand/docs/STUDENT_GUIDE.md
