# MYBAR

A study platform for bar exam preparation — Evidence, Criminal Procedure, and Legal Ethics.

## Structure

Each subject is organized by **topic** (e.g. Evidence → Hearsay), and each topic has four sections:

- **Law** — the relevant Evidence Act provisions, extracted section by section
- **Cases** — case-based examples and leading authorities
- **Study Notes** — full explanatory notes, worked examples, and exam technique
- **Templates** — answer templates for exam questions

Each subject also has a **Legislation** page with the full Act as a downloadable PDF reference.

Currently built: **Evidence → Hearsay**, fully populated from your uploaded material (ss 59, 60, 61, 62, 65, 66, 66A, 67, 68, 69, 75 of the Evidence Act 2008 (Vic); your case examples; your full study notes; your two exam templates). Criminal Procedure and Legal Ethics have no topics yet — add them the same way.

## Stack

- Next.js 14 (App Router) + TypeScript (strict mode)
- Tailwind CSS + `@tailwindcss/typography` (for readable long-form legal text)
- `react-markdown` (renders content stored as markdown)
- Vitest + Testing Library

## Adding another topic (e.g. Admissions)

1. Add the topic to `src/features/subjects/subjects.config.ts` under `TOPICS.evidence`.
2. Create `src/content/evidence/admissions/{law,cases,notes,templates}.ts`, each exporting a `ContentDoc[]` (see the `hearsay` folder for the pattern).
3. Register it in `src/content/index.ts`.

No routes or components need to change — the topic/section pages are generic and read from this content index.

## Getting started

```
pnpm install
pnpm dev        # http://localhost:3000
```

## Scripts

- `pnpm dev` — dev server
- `pnpm build` — production build (also typechecks and lints)
- `pnpm start` — run the production build
- `pnpm typecheck` / `pnpm lint` / `pnpm format` / `pnpm format:check`
- `pnpm test` — Vitest (27 tests)

## Verified in this environment

`pnpm install`, `pnpm typecheck`, `pnpm lint`, `pnpm test` (27/27 passing), and `pnpm build` all ran clean — the build statically generated all 16 pages, including the four populated Hearsay content pages. The production server was also started directly and every route was checked by request: the Evidence subject page, the Hearsay topic page (showing entry counts), all four Hearsay sections (confirmed real legislative text, case names, notes headings, and template content are present), the Legislation page and its PDF download (200 OK), the empty-topics state for Criminal Procedure, and a 404 for a non-existent topic.

## What's not built yet

- **More topics.** Only Hearsay exists. Admissions and the rest of Evidence, plus all of Criminal Procedure and Legal Ethics, follow the same pattern above.
- **AI examiner.** Practice questions graded against a model answer, with a weak-area tally — needs a server-side API route calling Claude, so your API key never reaches the browser.
- **Accounts & billing.** Sign-up and the $100/month subscription gate.

## Persistence

`src/lib/storage.ts` validates every read/write against `window.localStorage` and never throws. It currently only holds device-local preferences (theme). Study content lives in `src/content` as code, not local storage — that's deliberate, since it needs to be the same for every user, not per-device.
