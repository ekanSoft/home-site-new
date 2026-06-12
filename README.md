# Ekan Soft

React, Vite, TypeScript, and Tailwind CSS starter app.

## Scripts

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm preview
```

## Tailwind

This project uses Tailwind CSS 4 through the official Vite plugin:

- `@tailwindcss/vite` is registered in `vite.config.ts`
- `src/index.css` uses `@import "tailwindcss";`

That avoids the older Tailwind 3 setup that used a generated Tailwind config plus the PostCSS plugin.
