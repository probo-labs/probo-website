import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DocumentationSearch } from '@/components/DocumentationSearch'
import documentation from '@/data/generated-documentation.json'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="pt-[72px]">
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-72 flex-shrink-0 border-r border-slate-200 bg-white sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto">
            <div className="p-6">
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
          <main className="flex-1 p-8 lg:p-12 bg-white min-h-screen">
            <div className="mx-auto max-w-4xl">
              <DocumentationSearch />
              {children}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
