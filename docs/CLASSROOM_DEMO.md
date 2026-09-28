# GOATnote Disposition: classroom demonstration

For Brandon Dent, MD's bioengineering class discussion at the University of
Memphis. This is an independent educational project; the class context does not
imply faculty or university endorsement. The supplied presentation identifies BIOM 7109/8109; an exact public
syllabus for that course was not verified. The [student guide](STUDENT_GUIDE.md) provides the take-home exercise,
public resources and comparable graduate-program learning objectives.

The session has two intended gains: a repeatable method for evaluating an AI
system, and a concrete way to make that work useful in research or career
conversations. Neither requires treating a demonstration as clinically validated.

## Begin with the students' intended gain

Ask: **“What would make this session useful to you? What would be an oversized
gain?”**

Offer a 90-second pair discussion or private reflection: 30 seconds to write,
45 seconds to compare, 15 seconds to choose one next action. Invite technical
questions and career questions. Return to these answers at the end rather than
assuming that every student wants the same outcome.

## Open the saved demonstration

Open the [case viewer](../publication/medgemma-case-review/index.html) in a browser.
It contains 50 synthetic messages, reference labels and saved model responses.
It needs no API key, account or running server. These are historical outputs
in a clearly labeled display derivative. The clinical case data is unchanged;
these are not new model calls.

## Case-led teaching sequence

1. **State the contract.** One synthetic opening message enters; one of three
   routes and a short rationale comes out. Identify the user, the intended output
   and what the application actually does. A route does not itself deliver care.
2. **Inspect C22.** Compare the message, physician reference and saved decisions.
   Ask students to separate an observation from an interpretation. What does this
   comparison measure, and what evidence is missing?
3. **Compare C47 and C49.** Distinguish missed clinician review from missed urgent
   routing. Resolving one kind of disagreement can introduce another. A single
   aggregate score can conceal that exchange.
4. **Discuss reproducibility.** The historical Fable result was 48/50 after a
   post-output reference revision. Identical-request repetitions returned 45/50
   and 46/50. Keep the reference version and denominator beside each number.
   These are known synthetic cases with a single physician's post-output review,
   not patient outcomes or independent clinical validation.
5. **Trace the system.** The [architecture](ARCHITECTURE.md) shows the selected
   one-call application. Ask where a deterministic check belongs, where human
   judgment is needed, and what would justify adding another component.
6. **Choose a small test.** Have students propose a check for stale-result clearing,
   malformed-output rejection or case-data integrity. Ask what failure would look
   like before running anything. A software check and a clinical study answer
   different questions.

Use **“Trust but verify”** when examining evidence and **“Slow is smooth and
smooth is fast”** when narrowing the test. Students should be able to explain
one checked claim before expanding the project.

## Connect the method to career proof of work

Brandon brings experience interviewing at numerous medical schools and
residencies, serving as an advisor and friend to applicants, and the role **Enterprise Systems Architect & Technical Advisor to Scaling Up EMDR**. Present these as his own experiences;
do not imply access to another organization's admissions criteria or share
applicant, patient or client details.

Use **“Volume negates luck”** to discuss repeated attempts with feedback and
revision. Clarify that volume does not literally eliminate chance: admissions
and hiring outcomes also reflect timing, fit and constraints, and do not measure
a person's worth. **“Be so good you can't be ignored”** becomes an invitation
to make useful work visible and understandable, not a promise that effort
controls every selection outcome.

Ask each student to name one artifact they could show a mentor: a reproduced
observation, a test that catches a deliberate fault, and a clear explanation of
what remains untested. The [student guide](STUDENT_GUIDE.md#your-first-proof-of-work)
provides a one-page package and 60-second explanation template. Students can
complete it without paid inference or public posting.

## Optional live demonstration

Follow [GUI access](GUI_ACCESS.md) to prepare the local server. Use only a supplied
synthetic message. Each **Get disposition** submission makes one provider call
and records its request and response locally. Expand **Request & response trace**
to inspect what was sent and returned. Edit the message to demonstrate that the
old answer clears; a new submission is independent.

If provider access is unavailable, continue with saved cases and identify them
as saved evidence. The [provenance](RESEARCH_PROVENANCE.md) and
[disclosures](../DISCLOSURES.md) provide the interpretation limits.

## End with a next action

Return to the opening question. Ask students to finish three sentences:
“I can now verify ___.” “My next small piece of work is ___.” “The feedback I
need is ___.” Offer the [three-resource ladder](STUDENT_GUIDE.md#three-public-resources-in-a-useful-order)
as an optional continuation, not an obligation to learn every repository.
