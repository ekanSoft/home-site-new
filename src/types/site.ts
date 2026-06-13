export type ServiceSlug =
  | 'custom-business-applications'
  | 'ecommerce'
  | 'backend-api-development'
  | 'mobile-app-development'
  | 'ai-chatbots-voice-agents'
  | 'ai-workflows-automation'
  | 'data-dashboards-analytics'
  | 'payments-wallet-integrations'
  | 'cloud-devops-consulting'

export type Service = {
  slug: ServiceSlug
  title: string
  shortTitle: string
  homeSummary?: string
  summary: string
  details: string[]
  icon: ServiceIconName
}

export type ServiceIconName =
  | 'window'
  | 'cart'
  | 'server'
  | 'device'
  | 'chat'
  | 'sparkles'
  | 'chart'
  | 'card'
  | 'cloud'

export type ProjectCategory =
  | 'ecommerce-website'
  | 'brochure-website'
  | 'web-platform'
  | 'business-website'

export type ProjectSource = 'freelance-contract' | 'employment-experience'

export type WorkProject = {
  title: string
  slug: string
  category: ProjectCategory
  summary: string
  image: string
  href: string
  source: Extract<ProjectSource, 'freelance-contract'>
  tags?: string[]
  year?: string
}

export type FounderExperienceItem = {
  companyOrDomain: string
  industry: 'fintech' | 'banking' | 'logistics' | 'ai' | 'ecommerce' | 'enterprise'
  summary: string
  technologies?: string[]
  disclosure: 'employment-or-staff-role' | 'contract-role' | 'public-freelance-project'
}

export type ContactProjectType =
  | 'website-or-ecommerce'
  | 'custom-web-app'
  | 'mobile-app'
  | 'backend-api'
  | 'ai-chatbot-or-voice-agent'
  | 'automation-or-integration'
  | 'data-dashboard'
  | 'technical-consulting'
  | 'not-sure-yet'

export type ContactFormValues = {
  name: string
  email: string
  company?: string
  phone?: string
  projectType: ContactProjectType
  message: string
  consultationInterest?: boolean
  website?: string // honeypot, should remain empty when implemented later
}

export type SiteConfig = {
  name: string
  url: string
  contactEmail: string
  consultationUrl?: string
  social?: {
    linkedin?: string
    github?: string
    x?: string
  }
}

export type NavLeaf = {
  label: string
  href: string
  description?: string
  serviceSlug?: ServiceSlug
}

export type NavItem = {
  label: string
  href?: string
  children?: NavLeaf[]
}

export type ProcessStep = {
  number: string
  title: string
  summary: string
}
