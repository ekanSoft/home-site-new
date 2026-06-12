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
    <Dialog open={open} onClose={onClose} className="lg:hidden">
      <div className="fixed inset-0 z-50 bg-heading/20" aria-hidden="true" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 flex w-full flex-col overflow-y-auto bg-surface p-6 sm:max-w-sm sm:ring-1 sm:ring-border">
        <div className="flex items-center justify-between">
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
            className="-m-2.5 rounded-md p-2.5 text-heading"
          >
            <span className="sr-only">Close menu</span>
            <XIcon className="size-6" />
          </button>
        </div>

        <div className="mt-6 flex-1">
          <div className="-my-6 divide-y divide-border">
            <div className="space-y-2 py-6">
              {navItems.map((item) =>
                item.children ? (
                  <Disclosure key={item.label} as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-heading hover:bg-surface-soft">
                      {item.label}
                      <ChevronDownIcon className="size-5 flex-none text-muted transition-transform group-data-open:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={onClose}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-medium text-muted hover:bg-surface-soft hover:text-heading"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href ?? '/'}
                    onClick={onClose}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-heading hover:bg-surface-soft"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>

            <div className="py-6">
              <Link
                to={headerCta.href}
                onClick={onClose}
                className="block rounded-full bg-brand px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-dark"
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
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  )
}
