import { Container } from '@/components/Container'

const steps = [
  {
    number: 1,
    title: 'Intelligent Scan',
    description: 'Our AI-driven engine scans every page, component, and interactive element—comprehensively covering WCAG 2.2 standard—using heuristics, computer vision, and smart algorithms.',
  },
  {
    number: 2,
    title: 'Deep Behavior Analysis',
    description: 'We monitor dynamic application interactions continuously, integrating insights like Google Analytics to detect accessibility gaps in real user flows.',
  },
  {
    number: 3,
    title: 'Compliance Reporting',
    description: 'Generate ready-to-use Accessibility Conformance Reports (ACRs) aligned with VPAT standards for legal, audit, and stakeholder purposes.',
  },
  {
    number: 4,
    title: 'Automated Remediation',
    description: 'Our code agents apply fixes directly in your source code, guided by our audit findings, while accessibility experts review and refine every change.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Transparent steps from first crawl to evidence your counsel can file away.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-slate-200 bg-slate-50/80 p-6 pt-10 shadow-sm"
            >
              <div
                className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-md"
                aria-hidden
              >
                {step.number}
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
