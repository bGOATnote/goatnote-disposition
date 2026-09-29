# Research provenance and classroom edition

GOATnote Disposition is a focused sharing edition for educational discussion.
It includes the selected live demonstration and a static viewer of saved cases.
It does not include the complete historical study archive, full replay tooling
or earlier binary presentation packages.

## Original evidence

The original repository and research artifacts are preserved separately from
this edition. Original synthetic messages, physician-reference versions,
provider requests, raw responses, experiment outputs and recorded scorecards
remain the source evidence. This rebrand does not create new experimental runs,
relabel cases or establish improved performance.

The original evidence archive is maintained by the presenter. Any reproduction
claim must use its original files and recorded hashes, together with the
appropriate reference version and denominator. This smaller classroom project
should not be presented as a complete reproducibility bundle.

## Saved viewer derivative

The static viewer is a presentation derivative with GOATnote headings, logo,
navigation and styling. Its embedded clinical case data is unchanged from the
original saved viewer. This data contains no former branding and required no
clinical-text redaction or substitution.

The [classroom data](../data/classroom-review.json) and
[provenance record](../data/classroom-provenance.json) bind the extracted data to
its original source and preserved snapshot with hashes. Per-case JSON links
support classroom inspection. These projections do not replace the full original
requests, runtime artifacts, scorer code or reference history.

The new [architecture page](../publication/medgemma-case-review/roadmap.html)
explains the actual one-call demonstration. It replaces the older proposed
architecture graphic; it is not evidence that earlier proposals were executed.
The existing C22 discussion images remain separately disclosed and are not
scored model inputs.

GOATnote identifies the project brand. It does not identify the author of
external research, establish ownership of supplied material or create clinical
validation. Original evidence is not overwritten by the new presentation.

## Interpreting the results

The historical saved Fable result of 48/50 used a revised reference based on a
single physician's post-output reassessment of known synthetic cases. The
original score was 44/49; changing the reference was not a change in model
behavior. Identical-request repetitions later returned 45/50 and 46/50.

Agreement, output-schema validity, missed clinician review and missed urgent
routing are separate endpoints. None establishes treatment delivery or patient
outcomes. Independent clinical review and unseen-case evaluation remain separate
work. See [disclosures](../DISCLOSURES.md) and [third-party notices](../THIRD_PARTY_NOTICES.md).

## Build and verify the display

```bash
npm run saved:build
npm run saved:verify
```

The builder renders the classroom viewer and per-case JSON records from the
preserved projection. Verification checks its identity, each message hash,
displayed comparisons and generated-file hashes. Neither command calls a model,
changes a clinical reference or replays the original research experiment.
