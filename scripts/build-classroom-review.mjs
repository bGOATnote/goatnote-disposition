/** Build or verify the offline classroom display. Never calls a model. */
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = path => readFileSync(resolve(root, path), "utf8");
const hash = value => createHash("sha256").update(value).digest("hex");
const source = read("data/classroom-review.json").replace(/\n$/, "");
const provenance = JSON.parse(read("data/classroom-provenance.json"));
assert.equal(hash(source), provenance.caseProjectionSHA256, "Saved classroom projection changed");
const data = JSON.parse(source);
assert.equal(data.inferenceEnabled, false);
assert.equal(data.independentClinicalValidation, false);
assert.deepEqual(data.cases.map(row => row.id), Array.from({ length: 50 }, (_, i) => `C${String(i + 1).padStart(2, "0")}`));
for (const row of data.cases) {
  assert.equal(hash(row.message), row.inputSHA256, `${row.id}: message changed`);
  for (const model of Object.keys(data.metrics)) {
    const result = row[model];
    assert.equal(result.agrees, row.physician.acceptedBuckets.includes(result.disposition), `${row.id}/${model}: comparison mismatch`);
  }
}
for (const [model, metric] of Object.entries(data.metrics)) {
  assert.equal(metric.denominator, data.cases.length);
  assert.equal(metric.agree, data.cases.filter(row => row[model].agrees).length);
  assert.equal(metric.failedOutputs, data.cases.filter(row => row[model].disposition === null).length);
}

let html = read("assets/classroom-review.template.html")
  .replace("__CLASSROOM_DATA__", () => source)
  .replace("__GOATNOTE_LOGO__", () => read("apps/evaluation/public/goatnote-logo.svg").replace(/<\?xml[^>]*>\s*/, ""));
for (const [tag, directive] of [["script", "script-src"], ["style", "style-src"]]) {
  const match = html.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
  assert.ok(match, `Missing inline ${tag}`);
  const digest = createHash("sha256").update(match[1]).digest("base64");
  html = html.replace(new RegExp(`${directive} 'sha256-[^']+'`), `${directive} 'sha256-${digest}'`);
}
assert.ok(!html.includes("__CLASSROOM_DATA__") && !html.includes("__GOATNOTE_LOGO__"));

const outputs = {
  "index.html": html,
  "README.md": read("assets/classroom-review.README.md"),
  "roadmap.html": read("assets/classroom-architecture.html"),
  "cases.json": source + "\n",
  "patient_messages.csv": read("data/patient_messages.csv"),
  ...Object.fromEntries(data.cases.map(row => [`records/${row.id}.json`, JSON.stringify(row, null, 2) + "\n"])),
};
outputs["manifest.json"] = JSON.stringify({
  ...provenance,
  verification: "Saved projection identity, message hashes, displayed comparisons and output-file hashes. Original raw-record replay is outside this edition.",
  artifacts: Object.fromEntries(Object.entries(outputs).map(([path, bytes]) => [path, { sha256: hash(bytes), bytes: Buffer.byteLength(bytes) }])),
}, null, 2) + "\n";
const verify = process.argv.includes("--verify");
assert.ok(process.argv.length === 2 || (process.argv.length === 3 && verify), "Usage: node scripts/build-classroom-review.mjs [--verify]");
for (const [path, bytes] of Object.entries(outputs)) {
  const target = resolve(root, "publication/medgemma-case-review", path);
  if (verify) assert.equal(readFileSync(target, "utf8"), bytes, `Rebuild classroom artifact: ${path}`);
  else { mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, bytes); }
}
console.log(`${verify ? "Verified" : "Built"} GOATnote classroom review: 50 unchanged cases, 7 saved configurations, ${Object.keys(outputs).length} artifacts; no model calls.`);
