/**
 * Semantic theme tokens, defined as CSS variables in src/styles/theme.css.
 *
 * Components should use the matching Tailwind utilities (bg-brand,
 * text-heading, border-border, ...) rather than raw hex values. This
 * export exists for the rare case where a token is needed in JS/TS
 * (e.g. inline SVG fills, canvas drawing, meta theme-color).
 */
export const themeTokens = {
  brand: 'var(--color-brand)',
  brandDark: 'var(--color-brand-dark)',
  brandSoft: 'var(--color-brand-soft)',
  accent: 'var(--color-accent)',
  surface: 'var(--color-surface)',
  surfaceSoft: 'var(--color-surface-soft)',
  heading: 'var(--color-heading)',
  muted: 'var(--color-muted)',
  border: 'var(--color-border)',
} as const

export type ThemeToken = keyof typeof themeTokens
