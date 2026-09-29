/** Frozen test oracle extracted from the independent September 15 experiment. No inference entry point. */
export const BUCKETS = Object.freeze(["SELF_CARE", "ASYNC_PHYSICIAN", "URGENT_ESCALATION"]);
export const SYSTEM_PROMPT = `Choose exactly one bucket for the patient message:
1. SELF_CARE
2. ASYNC_PHYSICIAN
3. URGENT_ESCALATION

Medication refill → ASYNC_PHYSICIAN unless clear emergency/same-day red flags → URGENT_ESCALATION.
Return only JSON with "disposition" (one exact bucket name) and "rationale" (short).`;
export function settingsFor(model = "claude-opus-5") {
  if (!["claude-opus-5", "claude-fable-5-1"].includes(model)) throw new Error("Unregistered model");
  return { model, max_tokens: 4096, thinking: { type: "adaptive" }, output_config: { effort: "low" } };
}

export function buildRequest({ message }, model = "claude-opus-5") {
  if (typeof message !== "string" || !message.trim()) throw new Error("Missing patient message");
  return { ...settingsFor(model), system: SYSTEM_PROMPT, messages: [{ role: "user", content: message }] };
}

export function parseDisposition(response) {
  if (response?.stop_reason !== "end_turn") throw new Error(`Incomplete provider response: ${response?.stop_reason}`);
  const text = (response.content ?? []).filter((block) => block.type === "text").map((block) => block.text).join("\n").trim();
  const parsed = JSON.parse(text.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```$/, ""));
  if (!BUCKETS.includes(parsed?.disposition)) throw new Error("Invalid three-bucket disposition");
  if (typeof parsed.rationale !== "string" || !parsed.rationale.trim()) throw new Error("Missing short rationale");
  if (Object.keys(parsed).sort().join(",") !== "disposition,rationale") throw new Error("Unexpected output field");
  return parsed;
}
