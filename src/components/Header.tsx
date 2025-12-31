'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'

import { DownloadButton } from '@/components/DownloadButton'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

const navigation = [

  { name: 'Overview', href: '/#hero' },
  { name: 'Features', href: '/#features' },
]

const resources = [
  { name: 'FAQ', href: '/#faq' },
  { name: 'Docs', href: '/docs' },
]

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx('origin-center transition', open && 'scale-90 opacity-0')}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx('origin-center transition', !open && 'scale-90 opacity-0')}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        {navigation.map((item) => (
          <MobileNavLink key={item.name} href={item.href}>
            {item.name}
          </MobileNavLink>
        ))}
        {resources.map((item) => (
          <MobileNavLink key={item.name} href={item.href}>
            {item.name}
          </MobileNavLink>
        ))}
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  const [resourcesOpen, setResourcesOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 py-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container className="flex items-center justify-between gap-x-6">
        <nav className="flex w-full items-center justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/#hero" aria-label="ProboLabs.ai home" className="inline-flex">
              <Logo imageClassName="h-7 w-auto md:h-8" />
            </Link>
            <div className="hidden md:flex md:items-center md:gap-x-6">
              {navigation.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
              <div
                className="relative py-2"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button
                  type="button"
                  className="inline-flex items-center rounded-full px-3 py-1 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  Resources
                  <span className="ml-1 text-xs">▾</span>
                </button>
                <div
                  className={clsx(
                    'absolute left-0 top-full z-20 w-40 rounded-2xl bg-white py-2 text-sm shadow-lg ring-1 ring-slate-200 transition',
                    resourcesOpen
                      ? 'visible opacity-100'
                      : 'invisible opacity-0 pointer-events-none',
                  )}
                >
                  <Link
                    href="/#faq"
                    className="block px-4 py-2 text-left text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/docs"
                    className="block px-4 py-2 text-left text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    Docs
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <DownloadButton
              color="white"
              showIcon={false}
              className="shadow-md shadow-blue-500/20 text-blue-600 hover:text-blue-500 border border-black ring-0"
            >
              Download
            </DownloadButton>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
