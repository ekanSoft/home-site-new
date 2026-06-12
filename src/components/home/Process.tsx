import { processSteps } from '../../data/process'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'

export function Process() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Process"
          title="A clear path from idea to running software."
          intro="Every project follows the same dependable rhythm, so you always know where things stand."
          align="center"
          className="mx-auto"
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border"
            >
              <p className="text-sm font-bold text-brand">{step.number}</p>
              <h3 className="mt-3 text-lg font-semibold text-heading">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.summary}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
