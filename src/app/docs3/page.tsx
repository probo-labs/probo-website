import { MarkdownContent } from '@/components/MarkdownContent'
import documentation from '@/data/documentation.json'

export default function Docs3IntroPage() {
  const introSection = documentation.sections.find(s => s.id === 'introduction')

  if (!introSection) {
    return <div>Section not found</div>
  }

  return (
    <div className="space-y-6">
      <MarkdownContent content={introSection.content} />
      {Array.isArray(introSection.subsections) && introSection.subsections.map((subsection) => (
        <div key={subsection.id} id={subsection.id} className="scroll-mt-6">
          <MarkdownContent content={subsection.content} />
        </div>
      ))}
    </div>
  )
}
