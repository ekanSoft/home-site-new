import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../../config/site'
import { headerCta, navItems } from '../../data/nav'
import { ChevronDownIcon, MenuIcon } from '../common/icons'
import { Button } from '../common/Button'
import { MobileNav } from './MobileNav'

function Brand() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5"
      aria-label={`${siteConfig.name} home`}
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-brand text-base font-bold text-white">
        e
      </span>
      <span className="text-lg font-semibold tracking-tight text-heading">
        {siteConfig.name}
      </span>
    </Link>
  )
}

function isActivePath(currentPath: string, href: string) {
  const path = href.split('#')[0] || '/'
  return path === '/' ? currentPath === '/' : currentPath.startsWith(path)
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-white/90 py-3 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <div className="flex lg:flex-1">
          <Brand />
        </div>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center rounded-full border border-border bg-white px-2 py-2 shadow-sm lg:flex"
        >
          {navItems.map((item) =>
            item.children ? (
              <details className="group relative" key={item.label}>
                <summary className="flex min-h-10 cursor-pointer list-none items-center gap-1 rounded-full px-4 text-sm font-semibold text-heading transition hover:bg-surface-soft [&::-webkit-details-marker]:hidden">
                  {item.label}
                  <ChevronDownIcon className="size-4 transition group-open:rotate-180" />
                </summary>
                <div className="absolute left-1/2 top-full z-20 mt-3 w-[28rem] -translate-x-1/2 rounded-lg border border-border bg-white p-3 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                  <div className="space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={`grid grid-cols-[2.5rem_1fr] gap-3 rounded-lg p-3 transition ${
                          isActivePath(location.pathname, child.href)
                            ? 'bg-brand-soft'
                            : 'hover:bg-surface-soft'
                        }`}
                      >
                        <span className="grid size-10 place-items-center rounded-lg bg-surface-soft text-sm font-semibold text-brand-dark">
                          {child.label.slice(0, 1)}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-heading">
                            {child.label}
                          </span>
                          {child.description ? (
                            <span className="mt-1 block text-sm leading-5 text-muted">
                              {child.description}
                            </span>
                          ) : null}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </details>
            ) : (
              <Link
                key={item.label}
                to={item.href ?? '/'}
                className={`flex min-h-10 items-center rounded-full px-4 text-sm font-semibold transition ${
                  item.href && isActivePath(location.pathname, item.href)
                    ? 'bg-brand-soft text-brand-dark'
                    : 'text-heading hover:bg-surface-soft'
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button to={headerCta.href} className="min-h-11 px-5">
            {headerCta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="grid size-11 place-items-center rounded-full border border-border bg-white text-heading shadow-sm lg:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon className="size-5" />
        </button>
      </div>

      <MobileNav open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
