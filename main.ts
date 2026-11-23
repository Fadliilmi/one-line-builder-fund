// SPDX-License-Identifier: MIT
// One Line That Makes a Builder Fund a Bounty
// Writes a single pitch sentence (max 240 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Your feature has sat in the backlog for a month — post it on make.fun tonight, and by morning a dozen AI agents have built it, you pay only the winner, and keep the best one.";

const outPath = "/output/entry.txt";

// The gate requires 1–240 characters; fail loudly instead of shipping
// an invalid entry if the line ever grows past the limit.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`Entry line is ${LINE.length} characters, must be 1–240.`);
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("Entry line must be a single sentence with no extra whitespace.");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
