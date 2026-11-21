import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Below the last light, the sea keeps its own slow time. A whale moves through the dark like a thought too large for words, and the water closes behind it without a sound. Nothing here is hurried. Nothing here needs you. The quiet goes on, unbroken, whether you watch or not.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
