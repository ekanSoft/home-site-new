import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { ArrowRightIcon } from '../common/icons'

const models = [
  {
    label: 'Model 01',
    title: 'Project Delivery',
    heading: 'We handle a scoped project end-to-end',
    body:
      'ekansoft can take a defined project from discovery through launch, covering the practical decisions around interface, backend, integrations, deployment, and handover.',
    footer: 'Useful when you need a clear delivery owner, not a loose list of tasks.',
  },
  {
    label: 'Model 02',
    title: 'Embedded Engineering Support',
    heading: 'We strengthen your existing team',
    body:
      'ekansoft can work alongside your product or engineering team to provide senior implementation support, architecture direction, integration help, or delivery momentum.',
    footer: 'Useful when your team needs experienced engineering support.',
  },
]

export function HowWeWork() {
  return (
    <section id="how-we-work" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-brand-dark">How we work</p>
          <h2 className="mt-8 text-3xl font-semibold leading-[1.08] text-heading sm:text-4xl lg:text-5xl">
            Two ways to work with us. One standard of delivery.
          </h2>
          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
            Whether ekansoft owns a delivery stream end-to-end or supports your
            existing team, the goal is the same: clear decisions, senior
            engineering, and reliable delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {models.map((model) => (
            <article
              key={model.label}
              className="info-card-hover flex flex-col rounded-3xl bg-surface p-6 shadow-sm ring-1 ring-border hover:ring-brand/30 sm:p-8"
            >
              <div className="rounded-xl bg-heading px-4 py-3 text-center text-sm font-semibold text-white">
                {model.title}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-heading">
                {model.heading}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted">{model.body}</p>
              <p className="mt-6 border-t border-border pt-4 text-sm font-semibold italic text-heading">
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
