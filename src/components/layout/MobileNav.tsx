import { Link } from 'react-router-dom'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { siteConfig } from '../../config/site'
import { headerCta, navItems } from '../../data/nav'
import { ChevronDownIcon, XIcon } from '../common/icons'

type MobileNavProps = {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <Dialog open={open} onClose={onClose} className="font-display lg:hidden">
      <div className="fixed inset-0 z-50 bg-heading/35 backdrop-blur-sm" aria-hidden="true" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col overflow-y-auto bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Link
            to="/"
            onClick={onClose}
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
          <button
            type="button"
            onClick={onClose}
            className="grid size-10 place-items-center rounded-full border border-border text-heading"
          >
            <span className="sr-only">Close menu</span>
            <XIcon className="size-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <div className="space-y-2">
            {navItems.map((item) =>
              item.children ? (
                <Disclosure
                  key={item.label}
                  as="div"
                  className="group rounded-lg border border-border bg-surface-soft"
                >
                  <DisclosureButton className="flex min-h-12 w-full items-center justify-between px-4 text-sm font-semibold text-heading">
                    {item.label}
                    <ChevronDownIcon className="size-4 flex-none text-muted transition-transform group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="space-y-1 border-t border-border bg-white p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={onClose}
                        className="block rounded-lg px-3 py-3 text-sm text-muted transition hover:bg-surface-soft hover:text-heading"
                      >
                        <span className="block font-semibold text-heading">{child.label}</span>
                        {child.description ? (
                          <span className="mt-1 block leading-5">{child.description}</span>
                        ) : null}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              ) : (
                <Link
                  key={item.label}
                  to={item.href ?? '/'}
                  onClick={onClose}
                  className="flex min-h-12 items-center rounded-lg px-4 text-sm font-semibold text-heading transition hover:bg-surface-soft"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </nav>

        <div className="border-t border-border p-5">
          <Link
            to={headerCta.href}
            onClick={onClose}
            className="block rounded-full bg-brand px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
          >
            {headerCta.label}
          </Link>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="mt-3 block text-center text-sm font-medium text-muted hover:text-brand"
          >
            {siteConfig.contactEmail}
          </a>
        </div>
      </DialogPanel>
    </Dialog>
  )
}
