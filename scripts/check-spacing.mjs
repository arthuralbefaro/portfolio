import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const SCALE = new Set([0, 1, 2, 4, 6, 8, 12, 16, 24, 32, 48]);
const SECTION_ONLY = new Set([32, 48]);
const RHYTHM =
  "m|mx|my|mt|mr|mb|ml|p|px|py|pt|pr|pb|pl|gap|gap-x|gap-y|space-x|space-y";
const PATTERN = new RegExp(`(?<![\\w-])-?(${RHYTHM})-(\\d+(?:\\.\\d+)?)(?![\\w.-])`, "g");
const SECTION_FILES = new Set(["section.tsx", "hero.tsx"]);

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory()
      ? walk(full)
      : full.endsWith(".tsx")
        ? [full]
        : [];
  });
}

const violations = [];

for (const file of walk("src")) {
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, index) => {
    for (const match of line.matchAll(PATTERN)) {
      const [text, utility, raw] = match;
      const value = Number(raw);
      if (!SCALE.has(value)) {
        violations.push({ file, line: index + 1, text, reason: "off the scale" });
        continue;
      }
      if (SECTION_ONLY.has(value) && !SECTION_FILES.has(file.split(/[\\/]/).pop())) {
        violations.push({
          file,
          line: index + 1,
          text,
          reason: `${utility}-${raw} is section rhythm only`,
        });
      }
    }
  });
}

if (violations.length > 0) {
  console.error(`spacing scale: ${violations.length} violation(s)\n`);
  for (const { file, line, text, reason } of violations) {
    console.error(`  ${file}:${line}  ${text}  (${reason})`);
  }
  console.error(
    "\nallowed steps: 0 1 2 4 6 8 12 16 24 32 48" +
      "\n  1 2 4    inside a component" +
      "\n  6 8 12   between components in a section" +
      "\n  16       larger breathing room inside a long section" +
      "\n  24       between sections" +
      "\n  32 48    section and page vertical rhythm only",
  );
  process.exit(1);
}

console.log("spacing scale: clean");
