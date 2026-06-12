import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { siteConfig } from '../../config/site'
import { headerCta, navItems } from '../../data/nav'
import { ChevronDownIcon, MenuIcon } from '../common/icons'
import { Button } from '../common/Button'
import { MobileNav } from './MobileNav'

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
      <span className="flex size-8 items-center justify-center rounded-lg bg-brand text-base font-bold text-white">
        e
      </span>
      <span className="text-lg font-semibold tracking-tight text-heading">
        {siteConfig.name}
      </span>
    </Link>
  )
}

/** Base pathname a dropdown's children live under, used for active state. */
function dropdownBasePath(hrefs: string[]) {
  const first = hrefs[0] ?? '/'
  return first.split('#')[0] || '/'
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Brand />
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-heading"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          {navItems.map((item) =>
            item.children ? (
              <Popover key={item.label} className="relative">
                {(() => {
                  const basePath = dropdownBasePath(item.children.map((c) => c.href))
                  const isActive = location.pathname === basePath
                  return (
                    <PopoverButton
                      className={`flex items-center gap-x-1 text-sm/6 font-semibold outline-none transition-colors hover:text-brand focus-visible:text-brand ${
                        isActive ? 'text-brand' : 'text-heading'
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon className="size-4 flex-none text-muted" />
                    </PopoverButton>
                  )
                })()}

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-3 w-80 -translate-x-1/2 overflow-hidden rounded-2xl bg-surface shadow-lg ring-1 ring-border transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="p-2">
                    {item.children.map((child) => (
                      <CloseButton
                        as={Link}
                        key={child.href}
                        to={child.href}
                        className="group block rounded-xl p-3 transition-colors hover:bg-surface-soft"
                      >
                        <p className="text-sm font-semibold text-heading group-hover:text-brand">
                          {child.label}
                        </p>
                        {child.description ? (
                          <p className="mt-0.5 text-sm text-muted">{child.description}</p>
                        ) : null}
                      </CloseButton>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
            ) : (
              <NavLink
                key={item.label}
                to={item.href ?? '/'}
                className={({ isActive }) =>
                  `text-sm/6 font-semibold transition-colors hover:text-brand ${
                    isActive ? 'text-brand' : 'text-heading'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button to={headerCta.href}>{headerCta.label}</Button>
        </div>
      </nav>

      <MobileNav open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
