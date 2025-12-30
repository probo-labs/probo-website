import Link from 'next/link'
import { Logo } from '@/components/Logo'

const navigation = [
  {
    title: 'Introduction and Overview',
    href: '/docs2',
  },
  {
    title: 'Installation Guide',
    href: '/docs2/installation',
  },
  {
    title: 'Authentication',
    href: '/docs2/authentication',
  },
  {
    title: 'Main Usage Scenarios',
    href: '/docs2/usage-scenarios',
    subsections: [
      { title: 'Scenario Recording', href: '/docs2/usage-scenarios#recording' },
      { title: 'Scenario Replay', href: '/docs2/usage-scenarios#replay' },
      { title: 'Scenario Fortification', href: '/docs2/usage-scenarios#fortification' },
    ],
  },
  {
    title: 'Scenario Step Types',
    href: '/docs2/step-types',
    subsections: [
      { title: 'Interaction Mode', href: '/docs2/step-types#interact' },
      { title: 'Assertions', href: '/docs2/step-types#assert' },
      { title: 'Waiting Mechanisms', href: '/docs2/step-types#wait-for' },
      { title: 'Hover Actions', href: '/docs2/step-types#hover' },
      { title: 'Data Extraction', href: '/docs2/step-types#extract' },
      { title: 'Email OTP', href: '/docs2/step-types#email-otp' },
      { title: 'TOTP', href: '/docs2/step-types#totp' },
      { title: 'Ask AI', href: '/docs2/step-types#ask-ai' },
      { title: 'Custom Scripts', href: '/docs2/step-types#scripts' },
    ],
  },
  {
    title: 'Debugging',
    href: '/docs2/debugging',
  },
  {
    title: 'Scenario Editing',
    href: '/docs2/editing',
  },
  {
    title: 'Parameter Management',
    href: '/docs2/parameters',
    subsections: [
      { title: 'Parameters Table', href: '/docs2/parameters#table' },
      { title: 'Editing and Binding', href: '/docs2/parameters#editing' },
      { title: 'Parameter Sets', href: '/docs2/parameters#sets' },
      { title: 'Secret Parameters', href: '/docs2/parameters#secrets' },
    ],
  },
  {
    title: 'Executable Code',
    href: '/docs2/executable-code',
  },
  {
    title: 'Collaboration',
    href: '/docs2/collaboration',
    subsections: [
      { title: 'Projects and Sharing', href: '/docs2/collaboration#sharing' },
      { title: 'Scenario Locking', href: '/docs2/collaboration#locking' },
    ],
  },
]

export default function Docs2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 flex-shrink-0 border-r border-slate-200 bg-white overflow-y-auto">
        <div className="p-6">
          <Link href="/" className="inline-flex mb-8">
            <Logo imageClassName="h-7 w-auto" />
          </Link>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Documentation
          </h2>
          <nav className="space-y-1">
            {navigation.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </Link>
                {item.subsections && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.subsections.map((subsection) => (
                      <Link
                        key={subsection.href}
                        href={subsection.href}
                        className="block rounded-lg px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                      >
                        {subsection.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8 lg:p-12 bg-white">
        <div className="mx-auto max-w-4xl">{children}</div>
      </main>
    </div>
  )
}
