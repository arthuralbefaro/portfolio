# CLAUDE.md

Personal portfolio. Next.js 15 App Router, React 19, TypeScript strict,
Tailwind 4, bilingual pt/en, deployed on Vercel.

## Non-negotiables

1. **Never invent a metric, date, credential, employer, client or URL.** Every
   claim on this site is checkable by a recruiter. If a fact is missing, omit the
   field and ask. Do not approximate, round up or infer from context.
2. **The CV is the source of truth.** `public/CV_Arthur_Albefaro_PT.pdf` decides
   facts *and* positioning: job titles, dates, role wording, stack. When the site
   and the CV disagree, the CV wins and the site changes.

   Positioning is not one string, it is an **eight-point cascade**. Change one,
   change all eight, or the site contradicts itself:

   | Point | Where | Renders as |
   | --- | --- | --- |
   | `profile.role` | `src/data/profile.ts`, `src/content/en/profile.ts` | hero role line, footer, JSON-LD `jobTitle` |
   | `siteConfig.role` | `src/lib/site.ts` | structured data |
   | `siteConfig.title` | `src/lib/site.ts` | pt `<title>`, SERP label |
   | `ui.meta.title` | `src/content/ui/en.ts` | en `<title>` (pt reads `siteConfig.title`) |
   | `profile.availability` | `src/data/profile.ts`, `src/content/en/profile.ts` | hero `focus` row, OG image top line |
   | `ui.hero.available` | `src/content/ui/pt.ts`, `src/content/ui/en.ts` | badge over the photo |
   | `ui.hero.mark` | `src/content/ui/pt.ts`, `src/content/ui/en.ts` | first line of the hero |
   | `ui.hero.workSuffix` | `src/content/ui/pt.ts`, `src/content/ui/en.ts` | hero `work` row |

   `siteConfig.description`, `ui.meta.description` and `ui.meta.keywords`
   restate the same positioning in prose; update them in the same pass.

   `profile.role` and `profile.availability` both render into the OG image
   (`src/app/[locale]/opengraph-image.tsx`), so check it after any change.
   Neither `profile.availability` nor any `ui.*` string is compared by
   `parity.test.ts`, so a locale left behind fails silently.
3. **No em dashes in rendered content.** `—` reads as machine-written and never
   appears in `src/data/**`, `src/content/**` or any string inside a component.
   Do not swap it for a hyphen or an en dash; rewrite the sentence. Two ideas
   become two sentences, an aside takes commas, an explanation takes a colon, a
   list with internal commas takes semicolons. The house separator for metadata
   is `·`. Code comments are exempt. Check with:

   ```bash
   grep -rn "—" src --include="*.ts" --include="*.tsx"
   ```

4. **Content is mirrored in two locales.** Editing one side breaks the build.
   See "Content architecture".
5. **Zero comments in code.** Names and structure carry the meaning. This applies
   to new code and to code you touch. Existing docblocks in `src/data/` and
   `src/types/` are legacy — remove them when you edit those files, do not add
   more.
6. **No completion claim without fresh evidence.** See "Verification gate".

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint 9 flat config |
| `npm run format` | Prettier write |
| `npm run format:check` | Prettier check — **this is what fails CI** |
| `npm test` | Vitest, 31 tests across 4 files |
| `npm run check:design` | Type and spacing scale guard |
| `npm run build` | Production build |

CI (`.github/workflows/ci.yml`) runs typecheck → lint → format:check → test →
build on every push. All five must pass. `format:check` is the most common
avoidable failure: run `npm run format` before committing.

## Verification gate

Before claiming anything works, and before every commit:

```bash
npm run typecheck && npm test && npm run build
```

Run them in the same message as the claim. Read the exit code and the full
output, not the last line. `npm test` must report **31 tests across 4 files**,
and `src/content/parity.test.ts` must be among them — a green run that skipped
it proves nothing.

If `parity.test.ts` fails you edited one locale and forgot the other. Fix the
missing file. Never relax the assertion, never skip the test.

Run `npm run format` last, then re-run `typecheck` if it touched anything.

## Content architecture

All site copy is typed data. Components only render it.

| Locale | Path |
| --- | --- |
| pt (default) | `src/data/*.ts` |
| en | `src/content/en/*.ts` |

Merged in `src/content/dictionary.ts`, typed by `src/types/index.ts`, consumed
via `getDictionary(locale)`. Files: `profile`, `experience`, `education`,
`skills`, `certifications`, `case-studies`, `navigation`, `technical-posts`.
UI chrome strings live separately in `src/content/ui/{pt,en}.ts`, typed by
`src/content/ui/types.ts`.

`src/data/socials.ts` is **not** mirrored — it is shared by both locales.

### Parity contract

`src/content/parity.test.ts` fails when locales drift. It pairs by key, not by
array position, with one exception: the case study check compares the two slug
arrays with `toEqual`, which **is** order sensitive, so reordering one locale
alone already fails.

| Collection | Pairing key |
| --- | --- |
| case studies | `slug` |
| certifications | `title` |
| education | `institution` |
| experiences | `company` |
| skill groups | `category` |
| nav items | `id` |
| technical posts, languages | length only |

A separate test asserts that professional case studies come before personal
ones, in both locales. That is not locale drift but a content invariant: the
home index groups by `status` and the order carries the hierarchy, so an
identical reorder in both files would pass every other check and still break
the page.

Profile is compared field by field on `name`, `email`, `phone` and `company`.
`resumeUrl` and `availability` are checked the other way round: they are
localized, so the tests assert they exist and, for `resumeUrl`, that the two
differ. `availability` drifted between locales for ten commits before anyone
noticed, which is why it has a test at all.

### Union keys stay in Portuguese

`SkillGroup.category` and `CaseStudy.status` are union types in
`src/types/index.ts` used as pairing keys. They stay Portuguese in the English
file too; the English string goes in the sibling field — `categoryLabel` and
`statusLabel`. Adding a new category or status means editing the union first or
`tsc` fails.

### Downstream

`src/lib/structured-data.ts` builds schema.org `Person` JSON-LD from this data:
skill items become `knowsAbout`, certifications become `hasCredential`, education
becomes `alumniOf`, `profile.role` becomes `jobTitle`. `profile.role` is also
duplicated in `siteConfig.role` and `siteConfig.title` (`src/lib/site.ts`) —
change one, change all three. Bump `contentLastModified` when content changes.

The CV is localized: `public/CV_Arthur_Albefaro_PT.pdf` and
`public/CV_Arthur_Albefaro_EN.pdf`, each referenced by its locale's
`profile.resumeUrl`. Because it is per locale, `parity.test.ts` asserts the two
URLs differ rather than match. Replacing a CV keeps its filename.

## Rendering

Server Components by default. Only five modules are client-side, and that is
deliberate: `header`, `language-switcher`, `contact-form`, `scroll-reveal`,
`use-scroll-spy`. Do not add
`"use client"` to a section component to solve a problem that has a server-side
answer.

`src/middleware.ts` redirects locale-less paths to `/{locale}` with a 308, using
a `NEXT_LOCALE` cookie then `accept-language`. Its matcher excludes `_next`,
`api` and anything with a file extension. `generateStaticParams` prerenders both
locales.

## Visual system

Single dark editorial palette, defined as CSS custom properties in
`src/app/globals.css` and exposed to Tailwind via `@theme inline`. Use the
tokens (`bg-background`, `text-muted-foreground`, `border-border`,
`bg-surface`) — never raw hex, never arbitrary values.

Constraints that define the look, all intentional:

- **No accent color.** Emphasis comes from `--emphasis` and inversion, not hue.
- **`--dim` is never used for text.** It is 2.74:1 on `--background` and fails
  WCAG AA. It is reserved for hairlines and decorative markers. The dimmest
  text token is `--muted-foreground`: 5.96:1 on `--background` and 5.66:1 on
  `--surface`, so it still passes under `hover:bg-surface/30`. A recessive
  label earns its recession from the mono face, 0.75rem size, uppercase and
  0.08em tracking — not from contrast.
- **No gradients, no glassmorphism, no shadows.** Hairline borders over boxed
  cards. `--radius` is 2px.
- **Three type roles only**: `font-display` (Space Grotesk) for headings,
  `font-mono` (JetBrains Mono) for technical metadata and marks, `font-sans`
  (Inter) for body.
- **Motion is minimal**: one `IntersectionObserver` reveal via `[data-reveal]`,
  CSS-driven and disabled under `prefers-reduced-motion`. No animation library.

The reveal only hides content when JavaScript is available, which an inline
script signals by adding `js` to `documentElement` before hydration. That runs
ahead of React, so the server HTML and the client DOM disagree on `<html
class>`; `suppressHydrationWarning` on `<html>` is what keeps that intentional
mismatch from being reported. The attribute is scoped to that one element and
does not mask real mismatches below it. A future alternative is to drop the
class entirely and gate the reveal on `@media (scripting: enabled)`, which
removes the inline script and the warning together, but it changes how the
reveal is expressed and should be a deliberate change, not a drive-by.

### Spacing scale

Ten steps. Every margin, padding, gap and space utility uses one of them, and
nothing else. The names are the stock Tailwind ones, so `mt-6` is still 24px:

| Step | px | Use |
| --- | --- | --- |
| `1` `2` `4` | 4, 8, 16 | inside a component |
| `6` `8` `12` | 24, 32, 48 | between components in a section |
| `16` | 64 | larger breathing room inside a long section |
| `24` | 96 | between sections |
| `32` `48` | 128, 192 | **section and page vertical rhythm only** — never inside a component |

`npm run check:design` enforces this and runs in CI. It covers rhythm (`m*`,
`p*`, `gap*`, `space*`) and the type scale; component dimensions (`size-*`,
`w-*`, `h-*`, `inset-*`, `top-*`) are deliberately free, since icon and control
sizes are optical decisions rather than rhythm.

The guard reads source text, so it cannot see a class that `cn()` drops at
runtime. `tailwind-merge` does not know the custom `--text-*` tokens on its own
and would treat `text-meta` as a colour, silently discarding either the size or
the colour whenever both appear in one `cn()` call. `src/lib/utils.ts` registers
the six names in the `font-size` group to prevent that; do not replace that
configured merge with the bare `twMerge`.

Steps `32` and `48` are allowed by role, not by filename: in the layout
primitives (`section.tsx`, `hero.tsx`) and in any App Router `page.tsx` or
`layout.tsx`, because those files open a page. Anywhere else they fail the
check.

This is enforced by a script rather than by locking `--spacing` in CSS. Setting
`--spacing: initial` does work, but it also drops every `space-y-*` utility
(even ones whose `--spacing-N` token exists, because `space-*` reads only the
dynamic variable), every zero utility such as `left-0` and `inset-y-0`, and all
component dimensions. A missing utility produces no build error, just collapsed
layout, so the CSS lock trades a loud failure for a silent one.

Layout primitives are `Section` and `SectionHeading` in
`src/components/section.tsx`. New sections use them rather than re-implementing
the container and heading rhythm.

`tech-stack.tsx` places skill groups on the section grid: each group spans four
of the nine content columns, odd ones starting at column 1 and even ones at
column 6, so the empty column between them separates the pair instead of a
vertical rule. An **even number of skill groups** keeps the two columns level.

## TypeScript

`strict` plus `noUncheckedIndexedAccess`, `noImplicitOverride`,
`noUnusedLocals`, `noUnusedParameters`. Indexing an array yields `T | undefined`
— narrow it, do not assert with `!`. Import alias is `@/*` → `./src/*`.

## Contact form

`src/components/sections/contact-form.tsx` posts to
`NEXT_PUBLIC_CONTACT_API_URL`. When the variable is absent it degrades to
WhatsApp and mailto links instead of breaking — preserve that fallback.
Validation is pure and unit-tested in `src/lib/validate-contact.ts`; keep the
logic there rather than inline in the component.

## Git

Conventional Commits, in English, small and focused — one concern per commit.

No mention of AI in commits, README, code or comments. No `Co-Authored-By`
trailers. Do not add any AI assistant as author or collaborator.