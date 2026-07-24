# MYBAR

A study platform foundation for bar exam preparation — Evidence, Criminal Procedure, and Legal Ethics. This phase is the **content library shell**: navigation, theming, and empty placeholders for Legislation, Cases, Study Notes, and Templates in each subject. No AI examiner, accounts, or payments yet — those are later phases, built on top of this.

## Stack

- Next.js 14 (App Router) + TypeScript (strict mode)
- Tailwind CSS (theme-ready, light/dark via CSS variables)
- Vitest + Testing Library
- ESLint + Prettier

## Structure

```
src/
  app/                        Routes (Next.js App Router)
    page.tsx                  Home — links into each subject
    subjects/[subject]/       Subject overview (4 section cards)
    subjects/[subject]/[section]/   Placeholder content view
    settings/                 Appearance, account (placeholder), local data reset
  components/
    layout/                   AppShell, Sidebar (route-aware), TopBar
    ui/                       Button, Card, Loading/Error/EmptyState
    theme/                    ThemeProvider, ThemeToggle
  features/
    subjects/                 subjects.config.ts (the 3 subjects × 4 sections), views
    settings/                 SettingsPage
  hooks/                      useLocalStorage, useTheme, useThemeContext
  lib/                        storage.ts (validated local persistence), nav.ts, utils.ts
  types/                      Shared types
tests/                        Mirrors src/, 18 tests
```

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
- `pnpm test` — Vitest (18 tests)

## Verified in this environment

`pnpm install`, `pnpm typecheck`, `pnpm lint`, `pnpm test` (18/18 passing), and `pnpm build` all ran clean — the build statically generated all 20 pages (home, settings, 3 subject pages, 12 section pages, not-found). The production server was also started and smoke-tested directly: home, subject pages, section placeholders, settings, and 404 handling all returned the expected content and status codes.

## Where things stand vs. the full MYBAR vision

Built now:
- Navigable structure for all 3 subjects × 4 content sections, empty and ready for real content
- Theme (light/dark/system), persisted locally
- Settings page with a placeholder "Account & subscription" section

Not built yet (next phases, in the order you picked — content first):
- **Real content.** `src/features/subjects/subjects.config.ts` defines the structure; actual legislation text, cases, notes, and templates need a content source (e.g. MDX files per section, or a database) wired into `SectionContent.tsx`.
- **AI examiner.** Practice questions, grading against a model answer, and a weak-area tally, backed by the Claude API. This needs a server-side API route so your Anthropic API key never reaches the browser — get a key at console.anthropic.com when you're ready (Settings → API keys), and I'll wire it in without ever hardcoding it.
- **Accounts & billing.** Sign-up tied to bar exam registration, and the $100/month subscription gate. This needs an auth provider and a payment processor (e.g. Stripe) — real money movement always requires your direct action, I can build the integration but won't execute charges.

## Persistence

`src/lib/storage.ts` validates every read/write against `window.localStorage` and never throws. It currently only holds device-local preferences (theme). Study content, scores, and account data belong in a real backend once that phase starts — not in this module.
