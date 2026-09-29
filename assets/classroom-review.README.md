# GOATnote Disposition — saved case viewer

Open [index.html](index.html) in a browser. This self-contained viewer displays
50 synthetic messages, physician and original CSV labels, and saved model
responses. It needs no API key, account or running server and makes no model
calls. Keep this folder together when sharing it.

Prepared for Brandon Dent, MD's bioengineering class discussion at the
University of Memphis. Brandon's role is Enterprise Systems Architect &
Technical Advisor to Scaling Up EMDR. This is an independent
educational project; no faculty or university endorsement is claimed.
The repository includes a [student guide](https://github.com/bGOATnote/goatnote-disposition/blob/main/docs/STUDENT_GUIDE.md)
and [frontier-model evidence note](https://github.com/bGOATnote/goatnote-disposition/blob/main/docs/FRONTIER_MODELS.md).

## Navigate

- Select a case from the index, or search and filter first.
- Use **Case index**, **Escape** or **/** to return to the index. Search, filters
  and the selected Nemotron repetition are preserved.
- Use **Left/Right arrow** keys or Previous/Next to move through matching cases.
- Use **Presentation view** to enlarge the selected message and response cards.
- Browser Back/Forward restores index and case navigation.
- **How it works** opens the [one-call architecture](roadmap.html).
- **Live demo** opens `localhost:4120/stripped` on the viewing computer. It
  requires the separate local application and provider access; it is not part
  of offline saved-case review.

Start a classroom discussion with **C22 → C47 → C49**. Compare missed clinician
review with missed urgent routing, and distinguish model errors from reference
revisions. Valid output structure and agreement do not establish clinical safety.

## Data and provenance

The [saved case projection](cases.json) is unchanged from the original viewer's
embedded clinical data. Full messages and saved rationales are preserved.
GOATnote branding, navigation and presentation are new. The [manifest](manifest.json)
records the source snapshot, projection identity and generated-file hashes.
Individual case records are available from each card's **Record details**, for
example [C22](records/C22.json). The [original CSV](patient_messages.csv) keeps
its separate discussion labels.

These projections are not the full original experimental archive. Original
provider requests, raw responses, runtime artifacts and complete replay tooling
are preserved separately by the presenter. Historical source paths inside a
record are provenance references, not promises that those raw files are bundled.
Do not describe this folder as a complete independent reproduction of the study.

The historical Fable result was 48/50 against a single physician's post-output
revision of a known synthetic reference. Identical-request repetitions returned
45/50 and 46/50. Model configurations, reference versions and denominators must
remain visible when citing the numbers. No patient outcomes or independent
clinical validation are represented here.

The C22 images are presenter-supplied discussion material added after evaluation;
they are not scored inputs or verified images of C22. Metadata removal does not
establish ownership or subject consent. Media and exercise-data redistribution
permissions have not been independently verified. Dependency and source licenses
remain with their respective owners; this document grants no reuse license.
