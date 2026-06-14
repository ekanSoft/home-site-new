import type { ReactNode } from 'react'

type SectionHeaderProps = {
  action?: ReactNode
  eyebrow?: string
  title: ReactNode
  intro?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  action,
  eyebrow,
  title,
  intro,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-heading text-balance sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-lg leading-8 text-muted">{intro}</p> : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  )
}
