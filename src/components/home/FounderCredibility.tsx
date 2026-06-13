import {
  founderDisclosureLabels,
  founderExperience,
  founderStatement,
} from '../../data/founder-experience'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'

export function FounderCredibility() {
  return (
    <section id="founder" className="scroll-mt-20 bg-surface-soft py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Founder-led"
              title="Senior engineering experience behind every engagement."
              intro={founderStatement}
            />
            <p className="mt-6 leading-7 text-muted">
              That background spans wallet and payment workflows, dispatch and
              logistics flows, AI chatbot and voice agent systems, and scalable
              APIs — experience that now goes into every ekansoft project.
            </p>
            <p className="mt-4 text-sm text-muted">
              Previous staff and contract experience is shared as founder
              background only — not as ekansoft client work.
            </p>
            <div className="mt-8">
              <Button to="/contact">Talk to the founder</Button>
            </div>
          </div>

          <ul className="space-y-4">
            {founderExperience.map((item) => (
              <li
                key={item.companyOrDomain}
                className="info-card-hover rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border hover:ring-brand/30"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-heading">{item.companyOrDomain}</h3>
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">
                    {founderDisclosureLabels[item.disclosure]}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">{item.summary}</p>
                {item.technologies && item.technologies.length > 0 ? (
                  <p className="mt-3 text-xs font-medium text-muted">
                    {item.technologies.join(' · ')}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
