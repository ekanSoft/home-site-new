import type { WorkProject } from '../../types/site'
import { projectCategoryLabels } from '../../data/projects'
import { ExternalLinkIcon } from '../common/icons'

/** Branded placeholder used until real project screenshots are collected. */
function ProjectPlaceholder({ title }: { title: string }) {
  const initials = title
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')

  return (
    <div className="flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-brand-soft via-surface-soft to-brand-soft">
      <span className="flex size-16 items-center justify-center rounded-2xl bg-brand/10 text-xl font-bold text-brand">
        {initials}
      </span>
    </div>
  )
}

function CardBody({ project }: { project: WorkProject }) {
  const hasLink = project.href.length > 0

  return (
    <>
      <div className="overflow-hidden rounded-t-3xl">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of the ${project.title} website`}
            className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <ProjectPlaceholder title={project.title} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand">
          {projectCategoryLabels[project.category]}
        </p>
        <h3 className="mt-2 flex items-center gap-2 text-lg font-semibold text-heading group-hover:text-brand">
          {project.title}
          {hasLink ? <ExternalLinkIcon className="size-4 text-muted" /> : null}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{project.summary}</p>
        {project.tags && project.tags.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-surface-soft px-3 py-1 text-xs font-medium text-muted ring-1 ring-border"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
        {!hasLink ? (
          <p className="mt-4 inline-flex w-fit items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">
            Link pending
          </p>
        ) : null}
      </div>
    </>
  )
}

export function ProjectCard({ project }: { project: WorkProject }) {
  const cardClasses =
    'info-card-hover group flex flex-col overflow-hidden rounded-3xl bg-surface shadow-sm ring-1 ring-border hover:ring-brand/30'

  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noreferrer" className={cardClasses}>
        <CardBody project={project} />
      </a>
    )
  }

  return (
    <article className={cardClasses}>
      <CardBody project={project} />
    </article>
  )
}
