import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import a11yReport from '@/images/compliance/a11y_report.png'

function BeforeAfterVisual() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 -translate-x-4 translate-y-4 rounded-3xl bg-gradient-to-br from-amber-200/40 via-red-200/30 to-transparent blur-2xl"
        aria-hidden
      />
      <div className="relative">
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-950 shadow-xl ring-1 ring-slate-900/20">
          <div className="border-b border-slate-900/40 bg-slate-900/40 px-3 py-2 text-xs font-medium text-slate-200">
            Compliance Score Preview
          </div>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={a11yReport}
              alt="Digital accessibility audit report preview"
              fill
              className="object-contain p-3"
            />
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-slate-500">
        Compliance report preview—evidence your accessibility work can stand up in review.
      </p>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/60 to-transparent"
        aria-hidden
      />
      <Container id="hero" className="relative pt-28 pb-16 lg:pt-36">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="text-left">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Automated scans pass. Real users fail.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Accessibility is not a page problem. It&apos;s a flow problem.
            Get deep AI-driven WCAG 2.2 audits based on real user flows and automated code remediation
              with a human-in-the-loop.
            </p>
            <div className="mt-10">
              <Button href="/#lead" color="slate" className="px-6 py-2.5 text-base">
                Get a Free Gap Analysis
              </Button>
            </div>
          </div>
          <BeforeAfterVisual />
        </div>
      </Container>
    </section>
  )
}
