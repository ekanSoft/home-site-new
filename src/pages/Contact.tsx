import { usePageTitle } from '../hooks/usePageTitle'
import { siteConfig } from '../config/site'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { CalendarIcon, EnvelopeIcon } from '../components/common/icons'
import { ContactForm } from '../components/contact/ContactForm'

export default function Contact() {
  usePageTitle('Contact ekansoft')

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-brand-soft/60 to-surface"
      />
      <Container className="py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading text-balance sm:text-5xl">
              Let&apos;s talk about your project.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Tell us what you&apos;re trying to build or fix. We&apos;ll reply with an
              honest take on scope, approach, and next steps — no pressure, no
              jargon.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex size-11 flex-none items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <EnvelopeIcon className="size-5" />
                </span>
                <div>
                  <h2 className="text-sm font-semibold text-heading">Email us directly</h2>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="mt-1 block text-sm font-semibold text-brand hover:text-brand-dark"
                  >
                    {siteConfig.contactEmail}
                  </a>
                  <p className="mt-1 text-sm text-muted">
                    We usually reply within one business day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex size-11 flex-none items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <CalendarIcon className="size-5" />
                </span>
                <div>
                  <h2 className="text-sm font-semibold text-heading">
                    Book a free consultation
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    Prefer to talk it through? Grab a slot that suits you.
                  </p>
                  {siteConfig.consultationUrl ? (
                    <Button
                      href={siteConfig.consultationUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="secondary"
                      className="mt-3"
                    >
                      Book a consultation
                    </Button>
                  ) : (
                    <p className="mt-3 inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">
                      Booking link coming soon
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-surface-soft p-6 ring-1 ring-border sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
