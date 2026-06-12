import { usePageTitle } from '../hooks/usePageTitle'
import { siteConfig } from '../config/site'
import { Container } from '../components/common/Container'
import { CalendarIcon, EnvelopeIcon } from '../components/common/icons'
import { ContactForm } from '../components/contact/ContactForm'

export default function Contact() {
  usePageTitle('Contact ekansoft')

  const consultationUrl = siteConfig.consultationUrl ?? ''
  const hasRealConsultationUrl =
    Boolean(consultationUrl) && !consultationUrl.includes('your-link')

  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-96 bg-brand-soft opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-5 lg:gap-16 xl:gap-20">
          <div className="lg:col-span-2">
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-normal text-heading text-balance sm:text-5xl lg:text-6xl">
              Connect about the software you need to build.
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-9 text-muted">
              Tell us what you&apos;re trying to build or fix. We&apos;ll reply with an
              honest take on scope, approach, and next steps. No pressure, no jargon.
            </p>

            <div className="mt-12 space-y-9">
              <div className="flex gap-5">
                <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-brand-soft text-brand">
                  <EnvelopeIcon className="size-5" />
                </span>
                <div>
                  <h2 className="text-base font-semibold text-heading">Email us directly</h2>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="mt-1 inline-flex text-base font-semibold text-brand transition hover:text-brand-dark"
                  >
                    {siteConfig.contactEmail}
                  </a>
                  <p className="mt-1 text-base leading-7 text-muted">
                    We usually reply within one business day.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-brand-soft text-brand">
                  <CalendarIcon className="size-5" />
                </span>
                <div>
                  <h2 className="text-base font-semibold text-heading">
                    Book a free consultation
                  </h2>
                  <p className="mt-1 text-base leading-7 text-muted">
                    Prefer to talk it through? Grab a slot that suits you.
                  </p>
                  {hasRealConsultationUrl ? (
                    <a
                      href={consultationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex rounded-full bg-brand-soft px-4 py-1 text-sm font-semibold text-brand-dark transition hover:bg-brand hover:text-white"
                    >
                      Book a consultation
                    </a>
                  ) : (
                    <p className="mt-3 inline-flex rounded-full bg-brand-soft px-4 py-1 text-sm font-semibold text-brand-dark">
                      Booking link coming soon
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
