<img src="apps/evaluation/public/goatnote-logo.svg" alt="GOATnote" width="300">

# GOATnote Disposition

An educational AI prototype that routes a synthetic patient message to
`SELF_CARE`, `ASYNC_PHYSICIAN`, or `URGENT_ESCALATION`, with a short rationale.
Built by **Brandon Dent, MD**, with Codex assistance.

Prepared for a bioengineering class discussion at the **University of Memphis**
with **Professor William Duffy**. The class context does not imply faculty or
university endorsement. This is a research demonstration, not a patient-care
service.

## Start with the saved cases

Open the [offline case viewer](publication/medgemma-case-review/index.html)
in a browser. It contains 50 synthetic messages, reference labels and saved
model responses. It needs no API key or running server and makes no model calls.
The [classroom guide](docs/CLASSROOM_DEMO.md) suggests a short teaching sequence.

The saved viewer is an educational display derivative with GOATnote branding.
Its embedded clinical case data is unchanged; source and projection hashes are
recorded in [classroom provenance](data/classroom-provenance.json). The complete
original research records are preserved separately; see
[research provenance](docs/RESEARCH_PROVENANCE.md).

The historical Fable result was **48/50** against a revised physician reference;
identical-request repetitions returned **45/50 and 46/50**. The reference was a
single physician's post-output reassessment of known synthetic cases. These
observations are not independent clinical validation or a measure of patient
outcomes. The viewer keeps reference versions and model configurations visible.

## Optional live demonstration

Use Node **22.18.0** (see `.nvmrc`) or a supported Node version in `package.json`.
Set `ANTHROPIC_API_KEY` in the server environment or repository-root `.env`.
Do not commit the key.

```bash
npm ci
npm run review:build
npm run demo:check
npm run demo
```

Open [localhost:4120/stripped](http://localhost:4120/stripped) after the server
reports ready. Each **Get disposition** submission makes one provider call.
The provider account must have access to the configured model; startup does not
verify that access. Use only synthetic messages. [Setup and troubleshooting](docs/GUI_ACCESS.md).

## Explore the engineering

- [Architecture](docs/ARCHITECTURE.md): browser, local API, one-step workflow and trace.
- [Classroom guide](docs/CLASSROOM_DEMO.md): case discussion and reproducibility questions.
- [Research provenance](docs/RESEARCH_PROVENANCE.md): original evidence versus this sharing edition.
- [Disclosures](DISCLOSURES.md), [third-party notices](THIRD_PARTY_NOTICES.md) and [security boundary](SECURITY.md).
- [Agent instructions](AGENTS.md): contribution and verification rules.

To rebuild the static viewer from its preserved projection, run
`npm run saved:build`. Run `npm run saved:verify` to check the projection identity,
message hashes, displayed comparisons and generated files without changing them.
Neither command calls a model or replays the original clinical study.
