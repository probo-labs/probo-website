import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'
import { DocumentationSearch } from '@/components/DocumentationSearch'
import documentation from '@/data/documentation.json'

export default function Docs3Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="fixed inset-0 top-[72px] flex overflow-hidden">
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
              {documentation.sections.map((section) => (
                <div key={section.id}>
                  <Link
                    href={section.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {section.title}
                  </Link>
                  {Array.isArray(section.subsections) && section.subsections.length > 0 && (
                    <div className="ml-4 mt-1 space-y-1">
                      {section.subsections.map((subsection) => (
                        <Link
                          key={subsection.id}
                          href={`${section.href}${subsection.anchor}`}
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
          <div className="mx-auto max-w-4xl">
            <DocumentationSearch />
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
