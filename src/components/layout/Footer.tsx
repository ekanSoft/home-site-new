import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/site'
import { services } from '../../data/services'
import { Container } from '../common/Container'

const companyLinks = [
  { label: 'How we work', href: '/#how-we-work' },
  { label: 'Founder-led', href: '/#founder' },
  { label: 'Technologies', href: '/#technologies' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
]

const footerServices = services.slice(0, 6)

export function Footer() {
  const { social } = siteConfig

  return (
    <footer className="border-t border-border bg-surface-soft">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2.5"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-brand text-base font-bold text-white">
                e
              </span>
              <span className="text-lg font-semibold tracking-tight text-heading">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              Founder-led software consulting. We help businesses design, build,
              integrate, and scale web platforms, mobile apps, backend systems,
              AI workflows, and automation tools.
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
            >
              {siteConfig.contactEmail}
            </a>
          </div>

          <nav aria-label="Footer services">
            <h3 className="text-sm font-semibold text-heading">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="text-sm text-muted hover:text-brand"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer company">
            <h3 className="text-sm font-semibold text-heading">Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {(social?.linkedin || social?.github) && (
              <div className="mt-6 flex gap-4">
                {social.linkedin ? (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-muted hover:text-brand"
                  >
                    LinkedIn
                  </a>
                ) : null}
                {social.github ? (
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-muted hover:text-brand"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            )}
          </nav>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
