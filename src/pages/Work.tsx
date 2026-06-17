import { usePageTitle } from '../hooks/usePageTitle'
import { projects } from '../data/projects'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { ProjectCard } from '../components/work/ProjectCard'

export default function Work() {
  usePageTitle('Selected Work | ekansoft')

  return (
    <>
      <section className="relative overflow-hidden bg-heading text-white">
        <Container className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
              Selected work
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl">
              Freelance, Contract &amp; Professional Projects.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Selected projects from freelance engagements, contract roles, and employment that we’re able to share publicly.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#e8f1f7] py-20 sm:py-24">
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
