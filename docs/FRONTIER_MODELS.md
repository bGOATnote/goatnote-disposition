# Frontier models still need failure analysis

Sources checked September 28, 2026. This note separates public benchmarks from
the saved synthetic experiment in this repository.

## Recent HealthBench context

HealthBench Professional contains **525 clinician-authored tasks**, covering
care consultation, clinical writing/documentation and medical research. Its
190 physician contributors created and reviewed task-specific rubrics. It is
deliberately enriched for difficult and adversarial examples. Scores aggregate
weighted rubric credit; they are not the percentage of patients managed safely.
The primary metric adjusts for response length.
Source: [HealthBench Professional paper](https://cdn.openai.com/dd128428-0184-4e25-b155-3a7686c7d744/HealthBench-Professional.pdf).

OpenAI's Astra system card reports **64.7** length-adjusted HealthBench
Professional points (**68.2** unadjusted; mean response length **3,185**
characters). Its September 22 correction explicitly replaces earlier Astra
values after an evaluation misconfiguration. This benchmark still exposes
unmet rubric requirements; the score does not define a clinical failure rate.
Source: [GPT-6 Astra system card, section 6.1 and change log](https://deploymentsafety.openai.com/gpt-6-astra).

The older launch table lists **63.4** for Astra and **58.1** for Claude Fable
5.1. It reports maximum scores across effort settings, and its Claude evaluation
uses GPT-5.4 grading with **Opus 5 fallback for Fable 5.1 provider refusals**.
That is not a Fable-only result or this project's low-effort configuration.
Do not silently combine the corrected Astra score with that older table as a
new matched comparison. Source: [Astra launch evaluation table and footnote 11](https://openai.com/index/gpt-6-astra/).

GPT-6 Astra and Claude Fable 5.1 are public model names, not local experimental
aliases. See [OpenAI's model documentation](https://developers.openai.com/api/docs/models/gpt-6-astra)
and [Anthropic's Fable 5.1 announcement](https://www.anthropic.com/claude-fable-and-mythos-5-1).
Here, “Claude” means the recorded Fable 5.1 configuration, not every Claude model
or the latest available release.

## What the saved local cases show

**Even frontier models still missed clinician review: against our revised
reference, Fable 5.1 missed 2 of 43 cases calling for clinician action, and
GPT-6 Astra missed 3 at each recorded effort.**

| Saved configuration | Care-setting agreement | Missed clinician action | Missed urgent escalation |
| --- | ---: | ---: | ---: |
| Claude Fable 5.1, adaptive thinking, low effort | 48/50 | 2/43 | 0/25 |
| GPT-6 Astra, xhigh effort | 47/50 | 3/43 | 0/25 |
| GPT-6 Astra, max effort | 47/50 | 3/43 | 0/25 |

These September 15 runs used identical instructions and message-only input,
one provider call per case, a 4,096-token output limit, and no retries or model
fallback. Fable used Anthropic Messages; Astra used OpenAI Responses. Both Astra
efforts produced the same 50 dispositions. Inspect the
[saved projection and metrics](../data/classroom-review.json) or
[case viewer](../publication/medgemma-case-review/index.html).

The denominator 43 includes cases whose reference calls for any clinician
action; 25 require urgent escalation. These are different endpoints. The
reference is a **single physician's unblinded, post-output reassessment of a
known 50-message synthetic development set**. Revising it changed scores, not
model responses. Identical-request Fable repetitions scored 45/50 and 46/50.
Neither these observations nor HealthBench establishes patient outcomes,
clinical readiness or superiority across models. See
[research provenance](RESEARCH_PROVENANCE.md) and the
[student guide](STUDENT_GUIDE.md).
