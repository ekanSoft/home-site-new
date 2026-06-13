import type { NavItem } from '../types/site'

export const navItems: NavItem[] = [
  {
    label: 'Company',
    children: [
      {
        label: 'How we work',
        href: '/#how-we-work',
        description: 'Two delivery models, one standard of work.',
      },
      {
        label: 'Founder-led',
        href: '/#founder',
        description: 'Senior engineering experience behind every project.',
      },
      {
        label: 'Technologies',
        href: '/#technologies',
        description: 'The stack we build and ship with.',
      },
    ],
  },
  {
    label: 'Services',
    children: [
      {
        label: 'Web Applications',
        href: '/services#custom-business-applications',
        description: 'Portals, dashboards, internal tools, and platforms.',
        serviceSlug: 'custom-business-applications',
      },
      {
        label: 'E-commerce & Business Websites',
        href: '/services#ecommerce',
        description: 'Stores, catalogs, and marketing websites that convert.',
        serviceSlug: 'ecommerce',
      },
      {
        label: 'Backend & APIs',
        href: '/services#backend-api-development',
        description: 'Scalable APIs, integrations, and system architecture.',
        serviceSlug: 'backend-api-development',
      },
      {
        label: 'AI Chatbots & Voice Agents',
        href: '/services#ai-chatbots-voice-agents',
        description: 'Support bots, sales assistants, and voice call flows.',
        serviceSlug: 'ai-chatbots-voice-agents',
      },
      {
        label: 'Automation & Integrations',
        href: '/services#ai-workflows-automation',
        description: 'AI workflows and business process automation.',
        serviceSlug: 'ai-workflows-automation',
      },
    ],
  },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
]

export const headerCta = { label: 'Get in touch', href: '/contact' }
