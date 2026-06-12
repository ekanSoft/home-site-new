import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { ArrowRightIcon } from '../common/icons'

const credibilityPoints = [
  'Founder-led, senior engineering',
  'Web, mobile, backend & AI systems',
  'Honest scoping and reliable delivery',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-brand-soft/70 via-surface-soft to-surface"
      />
      <Container className="py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-sm font-medium text-brand-dark">
            Software consulting, founder-led
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-heading text-balance sm:text-6xl">
            We build reliable software for businesses that need more than just a
            website.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            ekansoft helps businesses design, build, integrate, and scale web
            platforms, mobile apps, backend systems, AI workflows, and
            automation tools.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button to="/contact" size="lg">
              Start a project
            </Button>
            <Button to="/work" variant="secondary" size="lg">
              View our work
              <ArrowRightIcon className="size-4" />
            </Button>
          </div>
        </div>

        {/* Credibility / positioning strip */}
        <dl className="mt-20 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
          {credibilityPoints.map((point, index) => (
            <div key={point} className="flex items-start gap-3">
              <dt className="text-sm font-semibold text-brand">
                {String(index + 1).padStart(2, '0')}
              </dt>
              <dd className="text-sm font-medium leading-6 text-heading">{point}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
