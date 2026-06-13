import { usePageTitle } from '../hooks/usePageTitle'
import { services } from '../data/services'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { ArrowRightIcon, CheckIcon } from '../components/common/icons'
import { ServiceCard } from '../components/services/ServiceCard'

const aiSpotlightSummary =
  'Customer support bots, sales assistants, voice agents, call flows, LLM-powered agents, and human handoff workflows.'

const aiSpotlightOutcomes = [
  'Support chatbots',
  'Voice call flows',
  'Human handoff workflows',
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
  const aiService = services.find(
    (service) => service.slug === 'ai-chatbots-voice-agents',
  )

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

      {aiService ? (
        <section
          id="ai-spotlight"
          className="bg-heading py-20 text-white sm:py-24"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Spotlight
                </p>
                <p className="mt-4 text-sm font-semibold text-brand-soft">
                  AI chatbots &amp; voice agents
                </p>
                <h2 className="mt-6 text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-5xl">
                  AI systems that connect to the real workflow behind the conversation.
                </h2>
                <p className="mt-6 text-base leading-7 text-white/75 sm:text-lg">
                  The useful part is not just a chat window. It is the routing,
                  context, escalation, integrations, transcripts, permissions, and
                  reporting that make the assistant safe for customers and teams.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-semibold">{aiService.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/75">
                  {aiSpotlightSummary}
                </p>
                <div className="mt-6 grid gap-3">
                  {aiSpotlightOutcomes.map((outcome) => (
                    <div
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
                      key={outcome}
                    >
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {/* Technical capability */}
      <section className="pt-20 pb-24 sm:pt-24 sm:pb-32">
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
                    className="info-card-hover flex items-start gap-3 rounded-xl bg-surface-soft p-4 text-sm font-medium text-heading"
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
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="rounded-lg border border-border bg-white px-6 py-10 text-center shadow-sm sm:px-10">
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight text-heading">
              Not sure which service fits?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
              Bring the business problem first. The exact shape can be scoped
              after the constraints, users, timeline, and existing systems are clear.
            </p>
            <div className="mt-7">
              <Button to="/contact" className="min-h-11 px-5">
                <span>Start the conversation</span>
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
