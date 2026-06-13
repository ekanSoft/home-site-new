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
- Functionality over cleverness.
- Prefer simple, maintainable implementations.
- Keep changes minimal and aligned with the existing style.
- If requirements are ambiguous, ask a clarifying question first and wait for confirmation before implementing.
- If a user prompt is framed as a question, do not implement; ALWAYS provide clarity and wait for explicit go-ahead. (IMPORTANT!!)

## Agent conduct
- Verify assumptions before executing commands; call out uncertainties first.
- Only ask for clarification when the request is ambiguous, destructive, or risky.
- Summarize intent before multi-step changes so the user can redirect early.
- When citing documentation, quote exact lines and cite the source.
- If the user's prompt is framed as a question or is exploratory/ambiguous, do not implement code; ALWAYS first clarify question to user or intent and wait for confirmation before implementing (IMPORTANT!!)
- Do not run migrations. `npm run start:dev` does not run migrations; the user will verify work before migration. (IMPORTANT!!)
- Use Superpowers only when it improves the task, especially for planning multi-step changes, debugging unclear issues, reviewing code, or verifying implementation before completion.
- Do not use Superpowers for small/simple edits unless explicitly requested.
- When using Superpowers, keep the implementation simple, avoid over-engineering, avoid unnecessary helper functions/abstractions, avoid excessive defensive runtime validation unless required, and follow the existing codebase style.

## Required skills to apply:

- frontend-design for the overall production-grade UI direction, visual hierarchy, spacing, typography, responsive layout, and polished consulting-site feel.
- build-web-apps:frontend-app-builder for building the static Vite + React + TypeScript + Tailwind public website pages, reusable components etc
- build-web-apps:react-best-practices for clean React architecture, component structure, routing, state where needed, data files, maintainability, and TypeScript correctness.
- build-web-apps:frontend-testing-debugging for checking the completed UI, catching layout issues, console errors, broken routes, responsive regressions, and interaction problems.
- browser:control-in-app-browser to open and inspect the local frontend in the browser, and to visually compare the implementation against the provided screenshots and reference links.