import { Link } from 'react-router-dom'
import { featuredServiceSlugs, services } from '../../data/services'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { ArrowRightIcon, ServiceIcon } from '../common/icons'

const featured = featuredServiceSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service) => service !== undefined)

export function ServicesPreview() {
  return (
    <section className="bg-surface-soft pt-24 pb-10 sm:pt-32 sm:pb-12">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="What we do"
            title="Software delivery across the systems your business depends on"
            intro="From public websites to business logic APIs, automation, mobile tools, and AI agents, ekansoft focuses on software that fits the operation behind it"
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            All services
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services#${service.slug}`}
              className={`group rounded-3xl bg-surface p-8 shadow-sm ring-1 ring-border transition hover:shadow-md hover:ring-brand/30 ${
                index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <ServiceIcon name={service.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-heading group-hover:text-brand">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{service.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Learn more
                <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
