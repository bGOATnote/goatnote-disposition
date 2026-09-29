# The one-call demonstration

GOATnote Disposition's selected live surface is `/stripped`. A synthetic opening
message produces one of `SELF_CARE`, `ASYNC_PHYSICIAN` or `URGENT_ESCALATION` and
a short rationale.

```text
Browser: synthetic message and explicit submission
    ↓
Local Next.js API: request validation and loopback boundary
    ↓
Service: server credential and durable accounting
    ↓
Mastra workflow: one step, one native Anthropic request
    ↓
Protocol: parse and validate the returned disposition
    ↓
Browser: result and request/response trace
```

The entry points are `apps/evaluation/app/stripped/page.tsx`,
`apps/evaluation/components/stripped-workbench.tsx` and
`apps/evaluation/app/api/stripped/route.ts`. The handler delegates to
`src/stripped/service.ts`, `workflow.ts` and `protocol.ts`; `contract.ts`
defines the returned record.

The model receives the message, not physician or original CSV labels. Labels
belong to evaluation after generation. The selected workflow adds no retrieval,
judge, repair loop, queue or patient-message delivery tool. A short rationale
can still include advice; valid output structure is not proof of its quality.

The separate static case viewer reads embedded saved material. It makes no
provider calls and does not invoke the live workflow. Its presentation edits
are documented in [research provenance](RESEARCH_PROVENANCE.md).

Teaching questions include where to validate the output, how to preserve an
honest trace, how to define a failure endpoint, and what evidence would justify
adding another step. The software contract and clinical evaluation answer
different questions.
