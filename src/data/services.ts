import type { Service } from '../types/site'

export const services: Service[] = [
  {
    slug: 'custom-web-applications',
    title: 'Custom Web Applications',
    shortTitle: 'Web Applications',
    summary:
      'Business portals, dashboards, internal tools, booking systems, marketplaces, and operational platforms built around how your business actually works.',
    details: [
      'Business portals and operational platforms',
      'Internal tools and admin dashboards',
      'Booking systems and marketplaces',
      'Role-based access and workflows',
    ],
    icon: 'window',
  },
  {
    slug: 'business-websites-ecommerce',
    title: 'Business Websites & E-commerce Platforms',
    shortTitle: 'Websites & E-commerce',
    summary:
      'Responsive marketing websites, brochure sites, online stores, product catalogs, checkout flows, and the integrations that keep them running.',
    details: [
      'Marketing and brochure websites',
      'Online stores and product catalogs',
      'Checkout flows and payment setup',
      'CMS and third-party integrations',
    ],
    icon: 'cart',
  },
  {
    slug: 'backend-api-development',
    title: 'Backend Systems & API Development',
    shortTitle: 'Backend & APIs',
    summary:
      'Scalable APIs, microservices, authentication, admin panels, queues, notifications, and third-party integrations engineered for reliability.',
    details: [
      'REST and event-driven APIs',
      'Microservices and queues',
      'Authentication and admin panels',
      'Notifications and integrations',
    ],
    icon: 'server',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortTitle: 'Mobile Apps',
    summary:
      'Customer apps, staff apps, rider and dispatch apps, and mobile-first business tools that connect cleanly to your backend.',
    details: [
      'Customer-facing mobile apps',
      'Staff and operations apps',
      'Rider and dispatch tools',
      'Mobile-first business utilities',
    ],
    icon: 'device',
  },
  {
    slug: 'ai-chatbots-voice-agents',
    title: 'AI Chatbots & Voice Agent Systems',
    shortTitle: 'AI Chatbots & Voice Agents',
    summary:
      'Customer support bots, sales assistants, voice agents, call flows, LLM-powered agents, and human handoff workflows that actually resolve requests.',
    details: [
      'Customer support and sales chatbots',
      'Voice agents and call flows',
      'LLM-powered agents with guardrails',
      'Human handoff workflows',
    ],
    icon: 'chat',
  },
  {
    slug: 'ai-workflows-automation',
    title: 'AI Workflows & Automation',
    shortTitle: 'AI Workflows & Automation',
    summary:
      'Business process automation, AI-assisted internal tools, document and email workflows, and productivity agents that remove repetitive work.',
    details: [
      'Business process automation',
      'AI-assisted internal tools',
      'Document and email workflows',
      'Productivity agents',
    ],
    icon: 'sparkles',
  },
  {
    slug: 'data-dashboards-analytics',
    title: 'Data Dashboards & Analytics',
    shortTitle: 'Dashboards & Analytics',
    summary:
      'Reporting dashboards, business intelligence screens, operational metrics, charts, and the data visibility your team needs to make decisions.',
    details: [
      'Reporting and BI dashboards',
      'Operational metrics and charts',
      'Data pipelines for visibility',
      'Export and alerting tools',
    ],
    icon: 'chart',
  },
  {
    slug: 'payments-wallet-integrations',
    title: 'Payment, Wallet & Third-party Integrations',
    shortTitle: 'Payments & Integrations',
    summary:
      'Payment gateways, wallets, card issuing partners, logistics APIs, CRMs, notification providers, and custom partner API integrations.',
    details: [
      'Payment gateway integrations',
      'Wallet and card issuing flows',
      'Logistics and CRM APIs',
      'Custom partner API work',
    ],
    icon: 'card',
  },
  {
    slug: 'cloud-devops-consulting',
    title: 'Cloud, DevOps & Technical Consulting',
    shortTitle: 'Cloud & Consulting',
    summary:
      'Architecture reviews, deployment planning, Docker, CI/CD, Redis, queues, cloud infrastructure, monitoring, and rescue projects.',
    details: [
      'Architecture and code reviews',
      'Docker, CI/CD, and deployments',
      'Cloud infrastructure and monitoring',
      'Rescue and stabilization projects',
    ],
    icon: 'cloud',
  },
]

/** Services highlighted on the Home page preview section. */
export const featuredServiceSlugs = [
  'custom-web-applications',
  'business-websites-ecommerce',
  'backend-api-development',
  'ai-chatbots-voice-agents',
  'ai-workflows-automation',
  'cloud-devops-consulting',
] as const
