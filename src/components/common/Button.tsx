import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand text-white shadow-sm hover:bg-brand-dark focus-visible:outline-brand',
  secondary:
    'border border-border bg-white text-heading shadow-sm hover:border-brand hover:text-brand-dark focus-visible:outline-brand',
  ghost: 'text-brand hover:text-brand-dark focus-visible:outline-brand',
}

const sizeClasses: Record<Size, string> = {
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base',
}

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  /** Internal route — renders a react-router Link. */
  to?: string
  /** External URL — renders an anchor. */
  href?: string
  target?: '_blank'
  rel?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  target,
  rel,
  type = 'button',
  onClick,
}: ButtonProps) {
  const cls = [
    'font-display inline-flex items-center justify-center gap-2 rounded-full font-semibold transition',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ')

  if (to !== undefined) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href !== undefined) {
    return (
      <a href={href} target={target} rel={rel} className={cls} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
