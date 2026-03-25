import { Container } from '@/components/Container'

const auditItems = [
  {
    title: 'VPAT-ready documentation',
    description:
      'Instant reports for procurement and legal—structured for how buyers and counsel actually review risk.',
  },
  {
    title: 'Severity grading',
    description: 'Issues ranked by legal risk and UX impact so you fix what matters first.',
  },
  {
    title: 'Exposure scoring',
    description: 'See exactly where your site is legally naked—not just a pass/fail badge.',
  },
  {
    title: 'User journey impact',
    description: 'See how your site performs for real users—not just a pass/fail badge.',
  },
]

const remediationItems = [
  {
    title: 'Source code fixes',
    description:
      'No widgets. We provide the actual code remediations at the root of your DOM and styles.',
  },
  {
    title: 'Continuous compliance',
    description: 'We catch new issues before they deploy, so audits are a loop—not a snapshot.',
  },
  {
    title: 'Developer-first',
    description: 'Clean, semantic code that improves SEO, LLM-friendliness, and performance—not bolt-on layers.',
  },
]

export function SolutionPillars() {
  return (
    <section id="solution" className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Audit + action
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            The full loop
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Deep assessment paired with remediation that holds up when legal and engineering both
            look under the hood.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm ring-1 ring-slate-900/5">
            <h3 className="font-display text-2xl font-semibold text-slate-900">The deep audit</h3>
            <ul className="mt-8 space-y-6">
              {auditItems.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-slate-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white p-8 shadow-sm ring-1 ring-blue-900/5">
            <h3 className="font-display text-2xl font-semibold text-slate-900">The remediation</h3>
            <ul className="mt-8 space-y-6">
              {remediationItems.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-slate-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
