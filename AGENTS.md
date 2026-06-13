# Agent Context

This is the preferred/current ekansoft codebase. The site has already been generated, and the active work is refinement: keep this implementation as the base, then selectively pull better visual/layout ideas from the older reference codebase.

## Project Overview

- Product: public marketing website for `ekansoft`, a founder-led software consulting business.
- PRD: `docs/ekansoft_final_prd.md`. Read it only for context unless the user explicitly asks for PRD implementation work.
- Current app URL while the user's dev server is running: `http://localhost:5176/`.
- Old/reference app URL while the user's dev server is running: `http://localhost:5175/`.
- Old/reference codebase path: `C:\Users\PC\Documents\source-codes\ekan-soft`.
- Do not modify the old/reference codebase. Inspect and copy ideas only.

## Reference Direction

The user prefers this current codebase overall, but wants refinements from the old/reference code where it is better. Past examples included the old navigation style, contact page spacing/copy, and footer layout.

The user also referenced AAJ Express and oakslab for visual tone:

- SiteS: `https://www.aajexpress.org/` and `https://www.oakslab.com/`
- Use it as inspiration for a more polished, rounded/geometric hero feel, especially typography and the idea of a friendly hero image on the right.
- Do not copy AAJ/oakslab content or branding.

The hero polygon background was inspired by Tailwind Plus Studio:

- Local reference path: `C:\Users\PC\Documents\source-codes\tailwind-plus-studio\studio-ts`
- The polygon pattern in the current hero is adapted from the Studio-style grid/pattern treatment.

## Current Visual Notes

- Hero font: Poppins is loaded for the hero headline only. The rest of the site keeps the existing body font stack.
- Hero image: `public/images/hero-software-consulting.png`.
- Hero tag: `Software Consulting`.
- In the hero headline, `software`, `businesses`, and `website` are highlighted with the same brand-dark color as the tag text.
- The current hero color treatment should stay as the current soft gradient/polygon version unless the user asks to test alternatives.

## Working Rules

- Keep changes scoped to the user's request.
- Preserve responsiveness.
- Prefer existing components, theme tokens, and Tailwind semantic classes.
- Avoid adding dependencies unless clearly necessary.
- Use theme variables/classes for reusable colors and styling decisions where practical.
- Run `pnpm.cmd lint` and `pnpm.cmd build` after frontend edits when feasible.
