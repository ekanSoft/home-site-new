import { siteConfig } from '../../config/site'
import { Button } from '../common/Button'
import { Container } from '../common/Container'

export function FinalCta() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-dark px-8 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand opacity-40 blur-3xl"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl">
              Have a project in mind? Let&apos;s figure out the right way to build it.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-brand-soft">
              Tell us what you&apos;re trying to achieve and we&apos;ll respond with an
              honest take on scope, approach, and next steps.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/contact"
                size="lg"
                variant="secondary"
                className="bg-white ring-0 hover:bg-brand-soft"
              >
                Start a project
              </Button>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-base font-semibold text-white hover:text-brand-soft"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
