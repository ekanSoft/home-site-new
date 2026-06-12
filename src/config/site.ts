import type { SiteConfig } from '../types/site'

const env = import.meta.env

/**
 * Central public site configuration. Anywhere the contact email,
 * consultation link, or site name appears in the UI it must come
 * from this object — never hardcode these values in components.
 */
export const siteConfig: SiteConfig = {
  name: env.VITE_SITE_NAME || 'ekansoft',
  url: env.VITE_SITE_URL || 'https://ekansoft.com',
  contactEmail: env.VITE_CONTACT_EMAIL || 'hello@ekansoft.com',
  consultationUrl: env.VITE_CONSULTATION_URL || '',
  social: {
    linkedin: env.VITE_LINKEDIN_URL || '',
    github: env.VITE_GITHUB_URL || '',
  },
}
