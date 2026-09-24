# GOATnote Disposition: classroom demonstration

For Brandon Dent, MD's bioengineering class discussion at the University of
Memphis with Professor William Duffy. This is an independent educational project;
the class context does not imply faculty or university endorsement.

## Open the saved demonstration

Open the [case viewer](../publication/medgemma-case-review/index.html) in a browser.
It contains 50 synthetic messages, reference labels and saved model responses.
It needs no API key, account or running server. These are historical outputs
in a clearly labeled display derivative. The clinical case data is unchanged;
these are not new model calls.

## Suggested teaching sequence

1. **State the contract.** One synthetic opening message enters; one of three
   routes and a short rationale comes out. A route does not itself deliver care.
2. **Inspect C22.** Compare the message, physician reference and saved decisions.
   Ask what the evaluation measured and what a label cannot establish.
3. **Compare C47 and C49.** Separate missed clinician review from missed urgent
   routing. Resolving one kind of error can introduce another.
4. **Discuss reproducibility.** The historical Fable result was 48/50 after a
   post-output reference revision. Identical-request repetitions returned 45/50
   and 46/50. The reference version and denominator belong beside the number.
5. **Inspect the live architecture.** The selected application makes one provider
   call through a typed workflow. More components are a hypothesis to test,
   not evidence of better clinical performance.
6. **Design the next study.** Discuss unseen cases, independent clinical review,
   error severity, subgroup coverage, care timing and completed follow-up.

## Optional live demonstration

Follow [GUI access](GUI_ACCESS.md) to prepare the local server. Use only a supplied
synthetic message. Each **Get disposition** submission makes one provider call
and records its request and response locally. Expand **Request & response trace**
to inspect what was sent and returned. Edit the message to demonstrate that the
old answer clears; a new submission is independent.

If provider access is unavailable, continue with saved cases and identify them
as saved evidence. The [architecture](ARCHITECTURE.md),
[provenance](RESEARCH_PROVENANCE.md) and [disclosures](../DISCLOSURES.md)
provide context for questions.
