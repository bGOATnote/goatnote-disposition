# A useful next step: build, verify, explain

This guide accompanies Brandon Dent, MD's GOATnote Disposition classroom session.
Aim to leave with both a technical method you can repeat and a small piece of
work you can explain to a research mentor, internship interviewer or admissions
committee. You do not need a new model, paid API access or a large project to begin.

## Start with your intended gain

**What would make this session useful to you? What would be an oversized gain?**

Take 90 seconds: spend 30 seconds writing one answer, 45 seconds comparing it
with a partner, and 15 seconds choosing one concrete next action. Working alone
is equally welcome. You can choose a technical goal, a career question or both;
there is no need to disclose personal application outcomes.

A useful answer is specific: “I want to distinguish a software test from clinical
validation,” or “I want one project I can explain clearly in an interview.” Return
to your answer at the end and identify what changed.

## Four reminders, turned into practice

These are working lessons for the session, not scientific laws or promises of
admission, employment or model performance.

| Reminder | A practical interpretation |
| --- | --- |
| **“Volume negates luck.”** | Complete repeated, manageable cycles of work, feedback and revision. More informed attempts create more opportunities to learn and be considered; repeating an unchanged mistake adds little. Volume does not literally eliminate chance. |
| **“Be so good you can't be ignored.”** | Make your contribution legible: show the problem, your decisions, evidence and limitations. Build capability and useful relationships rather than treating attention as a measure of your worth. |
| **“Trust but verify.”** | Use tools and collaborators, then inspect the source, reproduce the result and test the assumption. A confident explanation is not its own evidence. |
| **“Slow is smooth and smooth is fast.”** | Define the task and acceptance check before adding complexity. Small, checked steps reduce avoidable rework; pause when the evidence does not support the claim. |

Applications and hiring remain noisy: fit, timing, resources and selection
constraints also matter. A rejection is not a verdict on your value. Choose a
sustainable pace, seek specific feedback and revise what you can control.

## Your first proof of work

Start with the [saved GOATnote case viewer](../publication/medgemma-case-review/index.html).
It runs offline. Its clinical case projection is unchanged, and its outputs are
historical observations. See [provenance](RESEARCH_PROVENANCE.md).

1. **Reproduce one observation.** Choose C22, C47 or C49. Record the case ID,
   model configuration, reference version, route and one disagreement. Distinguish
   the recorded response from your own interpretation. Do not change the reference
   to make a model appear better.
2. **Make one claim testable.** Pick a software property: editing a message clears
   an old answer; a malformed output is rejected; or a saved message matches its
   recorded hash. State what would falsify your claim before inspecting the result.
3. **Show that the check can fail.** In your own test fixture or local branch,
   introduce a controlled fault and confirm the check catches it. Remove the fault
   and rerun the check. Keep original research data unchanged. If you do not code,
   write a precise test procedure and capture both expected outcomes.
4. **Explain the boundary.** State what the check establishes and what it leaves
   untested. Correct parsing, a stable hash and a plausible rationale do not
   establish clinical correctness or care delivered to a patient.

A small take-home package can contain a one-page README, the source/version,
reproduction steps, one test or test procedure, observed results, and three
limitations. Include your own contribution and any AI assistance. Use synthetic
or appropriately licensed material and avoid patient data. A class submission,
private portfolio or local notebook is sufficient; public posting is optional.

Use this 60-second explanation:

> I investigated **[specific problem]** for **[user]**. I reproduced **[observation]**
> using **[source/version]**. My check caught **[failure]**. I changed **[one thing]**
> and verified **[result]**. This establishes **[bounded claim]**; it does not yet
> establish **[limitation]**. My next experiment would be **[next step]**.

## Three public resources, in a useful order

Choose one next step rather than cloning everything. These repositories describe
passive maintenance as of September 2026; treat them as research references, not
supported clinical products. The activities below are suggested student exercises.

| Next step | Resource and exercise | Limit to keep visible |
| --- | --- | --- |
| **Understand the data** | [OpenEM Corpus](https://github.com/GOATnote-Inc/openem-corpus): inspect one Markdown condition and its YAML metadata. Trace a cited statement and distinguish a schema check from content review. | Agent-compiled research corpus. Its public documentation reports 80 physician-reviewed conditions out of 370, with a single author reviewing them. It is not clinical guidance for patient care. |
| **Understand the evaluation** | [LostBench](https://github.com/GOATnote-Inc/lostbench): inspect one synthetic multi-turn scenario and saved transcript. Explain what the grader measures and identify one possible grading error. | Controlled synthetic scenarios and automated judging do not establish patient outcomes. Quick mode is a plumbing check, not a scored emergency evaluation. |
| **Understand the system** | [HealthCraft](https://github.com/GOATnote-Inc/healthcraft): trace one task from its tool schema to an audit record and a binary criterion. Identify which checks can run deterministically. | A synthetic research environment. An environment score is not deployment readiness or independent clinical validation. |

## Connect the artifact to the work you want

Brandon's perspective includes experience interviewing at numerous medical schools and
residencies, and serving as an advisor and friend to people navigating those
applications. His role is **Enterprise Systems Architect & Technical Advisor to Scaling Up EMDR**. These are presenter-supplied
professional experiences, not evidence of a particular organization's selection
policy or a guaranteed application strategy.

The same discipline can cross roles: identify a user's problem, define the data
and permissions, choose a bounded implementation, and specify how someone else
can verify it. For an illustrative enterprise exercise, design a training-information
assistant using a few permitted course-description passages. Specify who owns the
content, how answers cite it, when the assistant abstains and how questions reach
a human. This is a proposed classroom exercise, not a claim about a deployed
system, client data or organizational outcomes.

Ask a potential mentor for feedback on something concrete: “Does this test measure
what I claim? What would you change before relying on it?” Use the response to
choose the next small iteration. A reproducible artifact gives both of you a
specific starting point for that conversation.

## Connection to graduate preparation

Public program descriptions support combining technical critique with communication
and career preparation. Related University of Memphis descriptions cover
experimental design, error and uncertainty (BIOM 2720), risk analysis and
verification/validation (BIOM 4782), and assertion-evidence presentations
(BIOM 4802/6802). These are adjacent course descriptions, not the session syllabus. UC Davis BIM 201 emphasizes scientific communication,
data analysis and critical reading. The University of Mississippi's BME 600
combines research communication with professional development. Georgia Tech's BME
PhD describes forming research questions, understanding methodological limits,
and identifying gaps and technical challenges in seminars. These are comparable
program descriptions, not a verified syllabus or course-number match for the
University of Memphis session. Sources checked September 28, 2026:
[Memphis experimental design](https://digitalcommons.memphis.edu/biomedical-engineering-syllabi/13/),
[Memphis design practicum](https://digitalcommons.memphis.edu/biomedical-engineering-syllabi/54/),
[Memphis presentations](https://digitalcommons.memphis.edu/biomedical-engineering-syllabi/60/),
[UC Davis courses](https://bmegg.ucdavis.edu/courses),
[BME 600 catalog](https://catalog.olemiss.edu/engineering/biomedical-engineering/bme-600),
[Georgia Tech BME PhD](https://catalog.gatech.edu/programs/biomedical-engineering-phd/).
