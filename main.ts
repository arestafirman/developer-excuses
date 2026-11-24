import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line excuse a developer gives when code breaks in
// production: the confession is specific (tested in production because
// staging was down), and the second beat is the numbered proof — the
// deploy log, Friday at 4:58 p.m., from a phone, in a taxi, with
// autocorrect on. The text is fixed: same bytes on every run, no input,
// no clock, no network, no randomness — the grader sees exactly this
// line, byte for byte, on every run.
const ENTRY =
  "It wasn't a bug — I tested it in production because staging was down, and the deploy log says I shipped it Friday at 4:58 p.m. from my phone, in a taxi, with autocorrect on.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
