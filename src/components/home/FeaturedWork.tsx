import { Link } from 'react-router-dom'
import { featuredProjectSlugs, projects } from '../../data/projects'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { ArrowRightIcon } from '../common/icons'
import { ProjectCard } from '../work/ProjectCard'

const featured = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project) => project !== undefined)

export function FeaturedWork() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Our Public Projects"
            title="A look at recent public projects."
            intro="Freelance and contract projects we are able to share publicly."
          />
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            View all work
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
