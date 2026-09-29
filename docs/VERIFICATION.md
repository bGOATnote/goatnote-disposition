# Classroom edition verification

## Numbered presentation and functional HTML revision

The 16-slide presentation uses Montserrat, four idea colors, visible 1/16–16/16
numbering, and a meaningful image, chart, table or QR on every slide. The cover
logo is a transparent PNG, avoiding SVG fallback boxes in importing applications.
The slow-is-smooth section uses a concrete sharps hazard, pre-release engineering
checks and an illustrated sensor-disconnect exercise. Personal-name and course labels remain absent.

Every slide was rendered and visually reviewed after package, geometry and font
validation. The workload table and benchmark chart remain editable. Slides 13 and 15 use illustrations instead of tables. Slide 10 has
actual OOXML hyperlinks on its headline and screenshot. Slide 16 links its QR and caption directly to public C22. Native application link
interaction was not verified because the application check stalled.

The portable HTML version was separately checked in Chrome: both slide-10 links
open the bundled index, browser Back returns to slide 10, all 16 slides navigate,
and all 50 cases show five recorded responses. No browser warnings or errors.
It uses local files and requires no inference or network fetch for the case data.
The public viewer still serves the existing main branch until the classroom PR
is merged, because the github-pages environment permits only main.

The closing QR was regenerated with a quiet zone and decoded from the exported
slide PNG to the exact public C22 URL. At phone width, the destination opens
without login and shows the message, references and readable saved responses.
The index exposes all 50 cases with no horizontal overflow or browser errors.
This is the currently published viewer, which retains its old branding pending
publication of the classroom PR. The offline HTML caption/QR click opens bundled
C22 instead. Other than slides 13, 15 and 16, final slide PNGs are byte-identical
to the previously reviewed deck.

The seven existing protocol tests passed, including 50 byte-identical request
bodies, 50 parsed fixture replays and malformed-response rejection. Additional
controlled fixtures rejected malformed JSON and a missing rationale and accepted
a valid response. These are software checks, not clinical accuracy measures.
Clinical projection files and frozen research records were unchanged.

## September 28, 2026 — classroom attribution and evidence note

Updated the public introduction, live footer and saved-viewer attribution to
name Brandon only, with the supplied professional title and student-guide
links. Added the sourced frontier-model note without changing recorded model
settings, messages, labels, rationales or clinical fixtures.

Using Node 24.19.0, `npm run lint`, `npm run typecheck`, `npm test` (30 tests),
`npm run review:build`, `npm run saved:build`, `npm run saved:verify` and
`git diff --check` passed. The two launcher socket tests required loopback
permission; they passed with that permission. Saved verification confirmed
50 unchanged cases, seven saved configurations and 56 generated artifacts.
Only index, edition notes, architecture and their generated manifest changed
in the publication folder; the case projection, per-case records and CSV did not.

Chrome checks of the rebuilt keyless production page and static viewer confirmed
the GOATnote logos, updated footer, expanded About text, exact professional
title, student/evidence links and architecture attribution. There were no
browser warning or error logs on the live page or saved index. No submissions
or model calls were made. The temporary production preview was stopped after
inspection. The source-name scan found no retired brand or individual audience
name in tracked text outside the separately maintained presentation artifacts.

The final 16-slide teaching deck was checked for package integrity and layout,
imported again, rendered and visually inspected. Editable tables and cited
speaker notes are included. A text/OOXML scan found no retired brand or
individual audience names in the current edition. Markdown links resolve in
their published locations; viewer-template links are relative to the generated
publication folder. The source deck and research projection remain unchanged.

## September 24, 2026 — initial classroom edition

Verified September 24, 2026 using Node 24.19.0. No new provider calls were made.

- Clean dependency installation completed from the lockfile.
- All 30 selected offline tests passed: 20 runtime/launcher/protocol tests and
  10 application/handler tests.
- `npm run lint`, `npm run typecheck` and the production build passed.
- `npm run saved:verify` checked 50 unchanged case projections, seven saved
  configurations and 56 generated artifacts. Original historical replay is a
  separate archive operation, not a claim of this check.
- The classroom source inventory was scanned for retired branding and private
  environment files. No branding matches or private environment files were found;
  ordinary clinical words such as “counseling” remain intact.

## Browser checks

The production page was served locally. A separate temporary loopback proxy
injected synthetic responses through the real request handler; it made zero
model calls. Runs `mock-ui-001` and `mock-ui-002` completed consecutive submissions;
`mock-ui-003` produced a simulated failure and `mock-ui-004` verified recovery.
Selection, result/trace display, edit clearing and mobile layout passed. These
checks establish interface behavior, not live provider access, model latency or
clinical correctness. The mock proxy was stopped after verification.

The saved viewer passed case-index and C22/C47/C49 navigation, search/filter
preservation, browser Back, presentation mode and image loading. The Astra/Fable
filter returned C07, C19 and C47. The architecture page and live demo rendered at
desktop and 390-pixel mobile widths. No browser console errors were observed.

The official GOATnote logo geometry is retained; only SVG trailing whitespace
was normalized. Source and packaged hashes are recorded in
[brand provenance](../apps/evaluation/public/BRAND_ASSETS.md).

## Scope

The sharing edition contains the selected demonstration and saved inspection
materials. The full original checkout and evidence snapshot are retained
separately. Historical Git revisions retain their original content. This work
does not rewrite historical evidence or establish deployment readiness.
