import { usePageTitle } from '../hooks/usePageTitle'
import { services } from '../data/services'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { CheckIcon } from '../components/common/icons'
import { ServiceCard } from '../components/services/ServiceCard'

const aiHighlights = [
  {
    title: 'Customer support & sales bots',
    description:
      'Chatbots that answer common questions, collect useful details, qualify leads, and reduce repetitive support work.',
  },
  {
    title: 'Voice agents & call flows',
    description:
      'Voice systems for booking, routing, follow-ups, and routine calls, with escalation when a person needs to step in.',
  },
  {
    title: 'AI agents with guardrails',
    description:
      'AI assistants built with clear limits, structured outputs, business rules, and safe fallback paths.',
  },
  {
    title: 'Human handoff workflows',
    description:
      'Escalation flows that give your team the conversation history and context needed to take over smoothly.',
  },
]

const capabilities = [
  'Architecture planning and system reviews',
  'API design and integration planning',
  'Secure accounts, roles, and admin workflows',
  'Payments, notifications, CRM, and logistics integrations',
  'Cloud deployment, monitoring, and release setup',
  'Stabilization and improvement of existing systems',
]

export default function Services() {
  usePageTitle('Services | ekansoft Software Consulting')

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-brand-soft/60 to-surface"
        />
        <Container className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Services
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading text-balance sm:text-5xl">
              What you can hire ekansoft to build.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Practical software services for businesses that need better
              websites, internal tools, apps, integrations, automation, AI
              systems, or technical support for existing platforms.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-soft py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* AI Chatbots & Voice Agents highlight */}
      <section className="py-24 sm:py-32">
        <Container>
          <div id="ai-spotlight" className="rounded-3xl bg-brand-dark p-8 sm:p-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Spotlight
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl">
                AI Chatbots &amp; Voice Agent Systems
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-soft">
                AI systems can now handle real customer conversations, but they
                still need clear business rules, reliable handoff paths, and
                careful implementation.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {aiHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
                >
                  <h3 className="font-semibold text-white">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-soft">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button
                to="/contact"
                variant="secondary"
                className="bg-white ring-0 hover:bg-brand-soft"
              >
                Discuss an AI project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Technical capability */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeader
              eyebrow="Technical capability"
              title="Engineering depth behind the business outcome."
              intro="Behind every service is the technical work needed to make the software reliable, maintainable, secure, and ready for real users."
            />
            <div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-3 rounded-xl bg-surface-soft p-4 text-sm font-medium text-heading"
                  >
                    <CheckIcon className="mt-0.5 size-4 flex-none text-accent" />
                    {capability}
                  </li>
                ))}
              </ul>
              {/* <p className="mt-6 text-sm leading-6 text-muted">
                Working across {technologies.slice(0, 8).join(', ')}, and more.
              </p> */}
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-surface-soft py-20">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-heading text-balance">
            Not sure which service fits? Describe the problem and we will suggest
            the right approach.
          </h2>
          <div className="mt-8">
            <Button to="/contact" size="lg">
              Get in touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
