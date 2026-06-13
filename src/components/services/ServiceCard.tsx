import type { Service } from '../../types/site'
import { CheckIcon, ServiceIcon } from '../common/icons'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      id={service.slug}
      className="info-card-hover scroll-mt-24 rounded-3xl bg-surface p-8 shadow-sm ring-1 ring-border hover:ring-brand/30"
    >
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
        <ServiceIcon name={service.icon} className="size-6" />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-heading">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{service.summary}</p>
      <ul className="mt-5 space-y-2.5">
        {service.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2.5 text-sm text-heading">
            <CheckIcon className="mt-0.5 size-4 flex-none text-accent" />
            {detail}
          </li>
        ))}
      </ul>
    </article>
  )
}
