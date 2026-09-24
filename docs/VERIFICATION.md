# Classroom edition verification

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
