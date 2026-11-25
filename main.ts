import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryText = "revert: rolled back to the version before the bug, which contains the bug from before the bug";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entryText, "utf8");
