'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import documentation from '@/data/documentation.json'

type SearchResult = {
  title: string
  href: string
  snippet: string
}

export function DocumentationSearch() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return []

    const searchQuery = query.toLowerCase()
    const matches: SearchResult[] = []

    // Search through all sections and subsections
    documentation.sections.forEach((section) => {
      // Search in section content
      if (section.content.toLowerCase().includes(searchQuery)) {
        matches.push({
          title: section.title,
          href: section.href,
          snippet: getSnippet(section.content, searchQuery),
        })
      }

      // Search in subsections
      if (Array.isArray(section.subsections)) {
        section.subsections.forEach((subsection) => {
          if (subsection.content.toLowerCase().includes(searchQuery)) {
            matches.push({
              title: subsection.title,
              href: `${section.href}${subsection.anchor}`,
              snippet: getSnippet(subsection.content, searchQuery),
            })
          }
        })
      }
    })

    return matches.slice(0, 5)
  }, [query])

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search documentation..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />

      {results.length > 0 && (
        <div className="mt-4 border border-slate-200 rounded-lg bg-white shadow-sm">
          {results.map((result, index) => (
            <Link
              key={index}
              href={result.href}
              onClick={() => setQuery('')}
              className="block px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0"
            >
              <div className="font-medium text-blue-600 hover:text-blue-700">
                {result.title}
              </div>
              <div className="text-sm text-slate-600 mt-1 line-clamp-2">
                {result.snippet}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function getSnippet(content: string, query: string): string {
  const lowerContent = content.toLowerCase()
  const lowerQuery = query.toLowerCase()
  const index = lowerContent.indexOf(lowerQuery)

  if (index === -1) return content.slice(0, 150) + '...'

  const start = Math.max(0, index - 60)
  const end = Math.min(content.length, index + query.length + 90)

  let snippet = content.slice(start, end)
  if (start > 0) snippet = '...' + snippet
  if (end < content.length) snippet = snippet + '...'

  return snippet
}
