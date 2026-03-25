import { Container } from '@/components/Container'

export function ProblemSection() {
  return (
    <section id="problem" className="bg-slate-100 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            The 1% gap is where the lawsuits happen<sup>*</sup>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Most tools give you a &quot;checkbox&quot; score that doesn&apos;t stop a demand letter.
            Overlays hide the problem; we fix the source. We bridge the gap between automated
            scanning and manual expertise.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            <sup>*</sup> &gt;4000 digital accessibility lawsuits in 2025 in the US alone.
          </p>
        </div>
      </Container>
    </section>
  )
}
