import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { CheckIcon } from '../common/icons'

const models = [
  {
    label: 'Model 01',
    title: 'Project Delivery',
    description:
      'ekansoft owns a scoped project end-to-end — discovery, architecture, build, launch, and handover. You get a clear plan, honest timelines, and one accountable delivery partner.',
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
              className="flex flex-col rounded-3xl bg-surface p-8 shadow-sm ring-1 ring-border sm:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                {model.label}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-heading">{model.title}</h3>
              <p className="mt-4 leading-7 text-muted">{model.description}</p>
              <ul className="mt-6 space-y-3">
                {model.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-heading">
                    <CheckIcon className="mt-0.5 size-4 flex-none text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl bg-brand p-8 sm:p-10 lg:flex-row lg:items-center">
          <p className="max-w-2xl text-xl font-semibold text-white text-balance">
            If one of these sounds like the right model for your situation, let&apos;s
            talk about how we can help.
          </p>
          <Button
            to="/contact"
            variant="secondary"
            size="lg"
            className="flex-none bg-white ring-0 hover:bg-brand-soft"
          >
            Get in touch
          </Button>
        </div>
      </Container>
    </section>
  )
}
