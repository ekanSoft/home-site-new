import type { FounderExperienceItem } from '../types/site'

/**
 * Founder background only. These items describe previous staff/contract
 * engineering experience and must never be presented as ekansoft client
 * work or appear in the Work page portfolio.
 */
export const founderExperience: FounderExperienceItem[] = [
  {
    companyOrDomain: 'Banking & fintech systems',
    industry: 'banking',
    summary:
      'Engineering experience on banking and fintech platforms, including wallet and payment workflows, transaction systems, and partner integrations.',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    disclosure: 'employment-or-staff-role',
  },
  {
    companyOrDomain: 'Logistics & dispatch platforms',
    industry: 'logistics',
    summary:
      'Worked on logistics systems involving dispatch flows, rider assignment, order tracking, and operational tooling at scale.',
    technologies: ['NestJS', 'RabbitMQ', 'MongoDB', 'Docker'],
    disclosure: 'employment-or-staff-role',
  },
  {
    companyOrDomain: 'AI chatbot & voice agent systems',
    industry: 'ai',
    summary:
      'Built LLM-powered chatbot and voice agent systems, including call flows, agent orchestration, and human handoff workflows.',
    technologies: ['OpenAI', 'Anthropic', 'Twilio', '11Labs'],
    disclosure: 'contract-role',
  },
  {
    companyOrDomain: 'E-commerce & business websites',
    industry: 'ecommerce',
    summary:
      'Delivered public freelance and contract projects for small businesses, from online stores to brochure websites.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    disclosure: 'public-freelance-project',
  },
]

export const founderDisclosureLabels: Record<FounderExperienceItem['disclosure'], string> = {
  'employment-or-staff-role': 'Staff role experience',
  'contract-role': 'Contract experience',
  'public-freelance-project': 'Freelance projects',
}

/** Safe positioning statement used in the founder section. */
export const founderStatement =
  'ekansoft is led by a software engineer with experience building and contributing to fintech, logistics, banking, AI, and e-commerce systems across staff, contract, and freelance engagements.'
