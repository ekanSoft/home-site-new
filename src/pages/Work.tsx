import { usePageTitle } from '../hooks/usePageTitle'
import { projects } from '../data/projects'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { ProjectCard } from '../components/work/ProjectCard'

export default function Work() {
  usePageTitle('Selected Work | ekansoft')

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-brand-soft/60 to-surface"
        />
        <Container className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Selected work
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading text-balance sm:text-5xl">
              Public freelance &amp; contract projects.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              A selection of projects we&apos;re able to share publicly. Screenshots
              and live links are being added as assets are collected.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-soft py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-heading text-balance">
            Want something like this for your business?
          </h2>
          <div className="mt-8">
            <Button to="/contact" size="lg">
              Start a project
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
