import type { Service, ServiceSlug } from '../types/site'

export const services: Service[] = [
  {
    slug: 'custom-business-applications',
    title: 'Custom Business Applications',
    shortTitle: 'Custom Applications',
    homeSummary:
      'Business portals, dashboards, internal tools and processes, marketplaces, operational platforms, and custom platforms built around your day-to-day workflow.',
    summary:
      "Custom software for workflows that off-the-shelf tools cannot handle well. We build web-based portals, dashboards, internal tools, and platforms for your team to actually work in. We replace disconnected tools and manual processes with a single platform built around your workflow, with role-based access so only the right people see the right things and reporting that shows what's happening across the business.",
    details: [
      'Business portals and operational platforms',
      'Internal processes and management tools',
      'Marketplaces, communities, and platforms for your customers',
      'Role-based access, permissions, and approval flows',
      'Reporting and analytics for business intelligence',
    ],
    icon: 'window',
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce Platforms',
    shortTitle: 'Websites & E-commerce',
    homeSummary:
      'Professional websites and online stores that bring in customers and let them access a clean brochure site to a full shop with products, checkout, and payments',
    summary:
      'Marketing sites and online stores that represent your brand well and stay easy to run. Designed to help customers understand your business, make enquiries, book, or buy online. From a fast brochure site to a full e-commerce store, we handle product catalogs, checkout, and payment processing. We als provide a content management setup so your team can update pages, products, inventory, and prices without a developer',
    details: [
      'Marketing and brochure websites',
      'Online stores and product catalogs',
      'Checkout and payment processing',
      'Content management dashboard so your team can run independently',
      'SEO, analytics, and performance optimization for marketing and sales',
    ],
    icon: 'cart',
  },
  {
    slug: 'backend-api-development',
    title: 'Backend Systems & API Development',
    shortTitle: 'Backend & APIs',
    homeSummary:
      'The behind-the-scenes systems that keeps your business logic, app, website, payments, notifications, data, admin panels, and business tools working together reliably.',
    summary:
      'The business logic and systems everything depends on. The part customers never see, but the engine powering every tool, app, and website. Reliable backend systems that power your website, mobile app, internal tools, payments, notifications, and integrations, data management and processing pipelines.',
    details: [
      'APIs for apps and business platforms',
      'Secure user accounts and admin panels',
      'Notifications, background jobs, queues, and data processing pipelines',
      'Payment, CRM, logistics, and third-party integrations',
      'Microservices and scalable architecture',
      'Data management and processing pipelines',
    ],
    icon: 'server',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortTitle: 'Mobile Apps',
    homeSummary:
      'Custom iOS, Android, and cross-platform mobile apps built according to your requirements, users, and business goals.',
    summary:
      "iOS and Android mobile applications for customers, staff, and field teams, built and connected directly to your backend systems. Whether it's a customer-facing app or a tool for people working on the move, the app stays in sync with the rest of your operation in real time.",
    details: [
      'Customer-facing mobile apps for your customers',
      'Staff and operations apps for your team',
      'Mobile-first business utilities connected to backend systems',
      'Real-time data sync and offline support',
      'Push notifications and in-app messaging',
      'Geolocation and location services',
      'Cross-platform app development for iOS and Android',
    ],
    icon: 'device',
  },
  {
    slug: 'ai-chatbots-voice-agents',
    title: 'AI Chatbots & Voice Agent Systems',
    shortTitle: 'AI Chatbots & Voice Agents',
    homeSummary:
      'AI assistants that answer customer questions, qualify enquiries, handle routine requests, and pass important conversations to your team.',
    summary:
      'AI assistants that support customers, qualify leads,  answering questions, qualifying leads, booking appointments, and resolving common requests at any hour. Built on production-grade LLMs with guardrails that keep responses accurate and on-brand, and clean handoff to your team, with full context, whenever a human is needed.',
    details: [
      'Support and sales chatbots for web, WhatsApp, and social',
      'Voice agents and call flows',
      'AI agents with business rules and guardrails',
      'Human handoff with conversation context',
    ],
    icon: 'chat',
  },
  {
    slug: 'ai-workflows-automation',
    title: 'AI Workflows & Automation',
    shortTitle: 'AI Workflows & Automation',
    homeSummary:
      'Automation for repetitive tasks like emails, documents, approvals, reporting, customer follow-ups, and internal admin work.',
    summary:
      'Automation that reduces repetitive manual work across admin, communication, documents, operations, and reporting. We connect your existing tools and apply AI to the steps in between; processing documents, sorting and drafting emails, updating records, and triggering the right next action automatically. Plus internal AI assistants that speed up everyday tasks',
    details: [
      'Business process automation across your existing tools',
      'Email, document, and admin workflows with AI-assisted sorting and drafting',
      'AI-assisted internal tools',
      'Automatic data entry, syncing, and record updates',
      'AI-assisted document processing',
      'AI-assisted admin tasks',
      'AI-assisted productivity agents for recurring business tasks',
    ],
    icon: 'sparkles',
  },
  {
    slug: 'data-dashboards-analytics',
    title: 'Data Dashboards & Analytics',
    shortTitle: 'Dashboards & Analytics',
    summary:
      "Clear visibility into what's happening across your business. We pull data from your different systems into one centralized location so you can see the big picture. Beyond just showing numbers, we help you spot trends, track performance, and understand what's driving results. And with forecasting, we can use your historical data to project what's likely to happen next so you can plan ahead with confidence making you proactive, rather than reactive.",
    details: [
      'Data pulled together from all your different sources',
      'Analysis of trends, patterns, and performance over time',
      'Forecasting and prediction of future trends',
      'Reporting and business-intelligence dashboards',
      'Data cleanup and visibility pipelines',
      'Live metrics and KPIs that track what matters most',
      'Insights and alerts that support better decisions',
    ],
    icon: 'chart',
  },
  {
    slug: 'payments-wallet-integrations',
    title: 'Payment, Wallet & Third-party Integrations',
    shortTitle: 'Payments & Integrations',
    summary:
      'Payment integrations that connect your business systems to payment services it needs. From integrating payment gateways and card processing to handling transactions, creating virtual accounts, managing wallets, and processing credit facilities. We build the money side of your product so it\'s accurate, secure, and reliable. We also set up payment webhooks and the behind-the-scenes connections that keep balances, payouts, and records in sync automatically.',
    details: [
      'Payment gateway integrations and card processing',
      'Payment and wallet management',
      'Wallet, virtual account, and transaction flows',
      'Credit facilities and credit processing',
      'Payment webhooks and behind-the-scenes connections',
      'Balance, payout, and record syncing',
      'Payment API integrations and reliability fixes',
    ],
    icon: 'card',
  },
  {
    slug: 'cloud-devops-consulting',
    title: 'Cloud, DevOps & Technical Consulting',
    shortTitle: 'Cloud & Consulting',
    homeSummary:
      'Help improving, stabilizing, reviewing, or launching software that already exists, especially when reliability or delivery has become a concern.',
    summary:
      'Senior engineering guidance to launch, scale, and keep your software running well. From architecture reviews and deployment planning to cloud infrastructure, monitoring, and performance, we help you make the right technical decisions — and step in to rescue and stabilize projects that have stalled or gone off track.',
    details: [
      'Architecture and code reviews',
      'Deployment planning and CI/CD setup',
      'Cloud infrastructure, monitoring, and reliability work',
      'Rescue projects for unstable or hard-to-maintain systems',
    ],
    icon: 'cloud',
  },
]

/** Services highlighted on the Home page preview section. */
export const featuredServiceSlugs = [
  'custom-business-applications',
  'ecommerce',
  'backend-api-development',
  'mobile-app-development',
  'ai-chatbots-voice-agents',
  'ai-workflows-automation',
  // 'cloud-devops-consulting',
] as const satisfies readonly ServiceSlug[]
