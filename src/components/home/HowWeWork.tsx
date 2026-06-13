import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { ArrowRightIcon, CheckIcon } from '../common/icons'

const models = [
  {
    label: 'Model 01',
    title: 'Project Delivery',
    description:
      'ekansoft owns a scoped project end-to-end — discovery, architecture, build, launch, and handover. You get a clear plan, honest timelines, and one accountable delivery partner.',
    footer: 'Useful when you need a clear delivery owner, not a loose list of tasks.',
    points: [
      'Full ownership from scoping to launch',
      'Clear milestones and regular demos',
      'Architecture and technology decisions handled',
    ],
  },
  {
    label: 'Model 02',
    title: 'Embedded Engineering Support',
    description:
      'ekansoft joins your existing team to provide senior engineering support — contributing code, reviewing architecture, and raising the bar without long ramp-up time.',
    footer: 'Senior contribution without pretending to be a large agency.',
    points: [
      'Senior engineering inside your team',
      'Code, reviews, and architectural guidance',
      'Flexible engagement as your needs change',
    ],
  },
]

export function HowWeWork() {
  return (
    <section id="how-we-work" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="How we work"
          title="Two ways to work with us. One standard of delivery."
          intro="Whether ekansoft owns a delivery stream end-to-end or supports your existing team, the goal is the same: clear decisions, senior engineering, and reliable delivery."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {models.map((model) => (
            <article
              key={model.label}
              className="info-card-hover flex flex-col rounded-3xl bg-surface p-6 shadow-sm ring-1 ring-border hover:ring-brand/30 sm:p-8"
            >
              <div className="rounded-xl bg-heading px-4 py-3 text-center text-sm font-semibold text-white">
                {model.label} &middot; {model.title}
              </div>
              <p className="mt-6 leading-7 text-muted">{model.description}</p>
              <ul className="mt-6 mb-8 space-y-3">
                {model.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-heading">
                    <CheckIcon className="mt-0.5 size-4 flex-none text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-auto border-t border-border pt-5 text-sm font-semibold italic text-heading">
                {model.footer}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-heading px-6 py-10 text-center text-white shadow-[0_18px_48px_rgba(15,23,42,0.10)] sm:px-10">
          <h3 className="mx-auto max-w-3xl text-2xl font-semibold leading-8 text-balance">
            If one of these sounds like the right model for your situation, let&apos;s
            talk about how we can help.
          </h3>
          <div className="mt-7">
            <Button to="/contact" variant="secondary" className="bg-white">
              Get in touch
              <ArrowRightIcon className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
