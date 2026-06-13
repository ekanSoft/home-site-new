import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/site'
import { services } from '../../data/services'
import { ArrowRightIcon } from '../common/icons'

const footerServices = services.slice(0, 6)

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[var(--color-heading)] text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2.5"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-white text-base font-bold text-heading">
                e
              </span>
              <span className="text-lg font-semibold tracking-tight">{siteConfig.name}</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
              Founder-led software consulting for web platforms, mobile apps,
              backend systems, AI workflows, automation, and practical technical
              delivery.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="font-display inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[color:var(--color-border)] bg-white px-5 text-sm font-semibold text-[var(--color-heading)] shadow-sm transition hover:border-[color:var(--color-brand)] hover:text-[var(--color-brand-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]"
              >
                <span>Get in touch</span>
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase text-white/75">
              Services
            </h2>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              {footerServices.map((service) => (
                <Link
                  className="transition hover:text-white"
                  to={`/services#${service.slug}`}
                  key={service.slug}
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase text-white/75">
              Contact
            </h2>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <a
                className="transition hover:text-white"
                href={`mailto:${siteConfig.contactEmail}`}
              >
                {siteConfig.contactEmail}
              </a>
              <a
                className="transition hover:text-white"
                href={siteConfig.consultationUrl || '/contact'}
                rel={siteConfig.consultationUrl ? 'noreferrer' : undefined}
                target={siteConfig.consultationUrl ? '_blank' : undefined}
              >
                Book a consultation
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Static public UI. No form submission or backend integration wired.</p>
        </div>
      </div>
    </footer>
  )
}
