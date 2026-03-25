import Image from 'next/image'

import { Container } from '@/components/Container'
import section508 from '@/images/compliance/508.jpeg'
import adaBadge from '@/images/compliance/ada.avif'
import eaaBadge from '@/images/compliance/eaa.webp'
import wcag22 from '@/images/compliance/wcag-22.png'

const badges = [
  { src: wcag22, alt: 'WCAG 2.2 — Web Content Accessibility Guidelines' },
  { src: adaBadge, alt: 'ADA — Americans with Disabilities Act' },
  { src: eaaBadge, alt: 'EAA (2025) — European Accessibility Act' },
  { src: section508, alt: 'Section 508 — US federal accessibility standard' },
]

export function ComplianceSection() {
  return (
    <section id="compliance" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Built for how compliance actually works
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.alt}
              className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-6 shadow-sm"
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                className="h-auto w-full max-h-20 max-w-[220px] object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border-2 border-slate-900 bg-slate-900 px-6 py-10 text-center text-white sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            Our pledge
          </p>
          <p className="mt-4 font-display text-2xl font-semibold leading-snug sm:text-3xl">
            We never use overlays. We fix your actual source code so your site stays fast, SEO-friendly, LLM-friendly,
            and truly accessible to everyone.
          </p>
        </div>
      </Container>
    </section>
  )
}
