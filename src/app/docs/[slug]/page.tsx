import { notFound } from 'next/navigation'
import { MarkdownContent } from '@/components/MarkdownContent'
import documentation from '@/data/generated-documentation.json'

export async function generateStaticParams() {
  return documentation.sections
    .filter(section => section.id !== 'introduction')
    .map((section) => ({
      slug: section.id,
    }))
}

export default async function DocsSectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const section = documentation.sections.find(s => s.id === slug)

  if (!section) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <MarkdownContent content={section.content} />

      {section.subsections && section.subsections.length > 0 && (
        <div className="space-y-8">
          {section.subsections.map((subsection) => (
            <section key={subsection.id} id={subsection.id} className="scroll-mt-6">
              <MarkdownContent content={subsection.content} />
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
