import { technologies } from '../../data/tech'
import { Container } from '../common/Container'

function MarqueeRow() {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden="true">
      {technologies.map((tech) => (
        <li
          key={tech}
          className="mx-3 flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-heading"
        >
          <span className="size-1.5 rounded-full bg-accent" />
          {tech}
        </li>
      ))}
    </ul>
  )
}

export function TechnologyMarquee() {
  return (
    <section id="technologies" className="scroll-mt-20 border-y border-border bg-surface-soft py-16">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
          Technologies &amp; capabilities
        </p>
        <h2 className="mx-auto mt-3 max-w-xl text-center text-2xl font-semibold tracking-tight text-heading">
          The tools we use to design, build, and ship.
        </h2>
      </Container>

      <div className="relative mt-10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-soft to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-soft to-transparent"
        />
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <MarqueeRow />
          <MarqueeRow />
        </div>
        {/* Accessible, non-animated list for screen readers */}
        <ul className="sr-only">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
