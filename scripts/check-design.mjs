import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const SCALE = new Set([0, 1, 2, 4, 6, 8, 12, 16, 24, 32, 48]);
const SECTION_ONLY = new Set([32, 48]);
const RHYTHM =
  "m|mx|my|mt|mr|mb|ml|p|px|py|pt|pr|pb|pl|gap|gap-x|gap-y|space-x|space-y";
const PATTERN = new RegExp(`(?<![\\w-])-?(${RHYTHM})-(\\d+(?:\\.\\d+)?)(?![\\w.-])`, "g");

const LAYOUT_PRIMITIVES = new Set([
  "src/components/section.tsx",
  "src/components/sections/hero.tsx",
]);
const ROUTE_ENTRY = /^src\/app\/.*\/(page|layout)\.tsx$/;

const isPageLayout = (file) => {
  const path = file.split(/[\\/]/).join("/");
  return LAYOUT_PRIMITIVES.has(path) || ROUTE_ENTRY.test(path);
};

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

const TYPE_SCALE = new Set([
  "display",
  "title",
  "subtitle",
  "lead",
  "body",
  "meta",
]);
const TYPE_PATTERN = /(?<![\w-])text-(\[[^\]]+\]|[a-z0-9]+(?:xl)?)(?![\w.-])/g;
const TYPE_IGNORE = new Set([
  "left",
  "right",
  "center",
  "justify",
  "start",
  "end",
  "balance",
  "pretty",
  "nowrap",
  "wrap",
  "ellipsis",
  "clip",
]);
const isColorToken = (value) =>
  /^(foreground|background|muted|dim|emphasis|invert|surface|border|ring)/.test(
    value,
  );

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
      if (SECTION_ONLY.has(value) && !isPageLayout(file)) {
        violations.push({
          file,
          line: index + 1,
          text,
          reason: `${utility}-${raw} is section rhythm only`,
        });
      }
    }

    for (const match of line.matchAll(TYPE_PATTERN)) {
      const [text, value] = match;
      if (
        TYPE_SCALE.has(value) ||
        TYPE_IGNORE.has(value) ||
        isColorToken(value)
      ) {
        continue;
      }
      violations.push({ file, line: index + 1, text, reason: "off the type scale" });
    }
  });
}

if (violations.length > 0) {
  console.error(`design scale: ${violations.length} violation(s)\n`);
  for (const { file, line, text, reason } of violations) {
    console.error(`  ${file}:${line}  ${text}  (${reason})`);
  }
  console.error(
    "\ntype steps: display title subtitle lead body meta" +
      "\nspacing steps: 0 1 2 4 6 8 12 16 24 32 48" +
      "\n  1 2 4    inside a component" +
      "\n  6 8 12   between components in a section" +
      "\n  16       larger breathing room inside a long section" +
      "\n  24       between sections" +
      "\n  32 48    section and page vertical rhythm only",
  );
  process.exit(1);
}

console.log("design scale: clean");
