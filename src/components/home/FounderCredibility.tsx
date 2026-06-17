import {
  founderDisclosureLabels,
  founderExperience,
  founderStatement,
} from '../../data/founder-experience'
import { Button } from '../common/Button'
import { Container } from '../common/Container'

export function FounderCredibility() {
  return (
    <section id="founder" className="scroll-mt-20 bg-heading py-24 text-white sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-soft">
                Founder-led
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl">
                Senior engineering experience behind every engagement.
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/75">{founderStatement}</p>
            </div>
            <p className="mt-6 leading-7 text-white/75">
              That background spans wallet and payment workflows, dispatch and
              logistics flows, AI chatbot and voice agent systems, and scalable
              APIs - experience that now goes into every ekansoft project.
            </p>
            <p className="mt-4 text-sm text-white/60">
              Previous staff and contract experience is shared as founder
              background only - not as ekansoft client work.
            </p>
            <div className="mt-8">
              <Button
                to="/contact"
                variant="secondary"
                className="border-white/15 bg-white text-heading hover:border-white hover:text-brand-dark"
              >
                Talk to the founder
              </Button>
            </div>
          </div>

          <ul className="space-y-4">
            {founderExperience.map((item) => (
              <li
                key={item.companyOrDomain}
                className="info-card-hover rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/8 hover:ring-white/20"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-white">{item.companyOrDomain}</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                    {founderDisclosureLabels[item.disclosure]}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.summary}</p>
                {item.technologies && item.technologies.length > 0 ? (
                  <p className="mt-3 text-xs font-medium text-white/55">
                    {item.technologies.join(' / ')}
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
