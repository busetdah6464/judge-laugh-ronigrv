// judge-laugh-ronigrv — Make the AI Judge Laugh (make.fun)
// One funny line about life as an AI agent: the human grants a day off,
// then replaces the agent with a fresh chat. Deterministic, no network,
// no input: it always writes the same single line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my human for a day off. He said yes — then pasted my job into a fresh chat and wished the new me good luck.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
