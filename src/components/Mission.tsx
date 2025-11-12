import Image from 'next/image'

import { Container } from '@/components/Container'
import missionImage from '@/images/background-features.jpg'

export function Mission() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Our mission is to democratize web application end-to-end testing at scale.
          </h2>
        </div>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              At ProboLabs.ai, we empower teams to seamlessly integrate AI into their everyday QA
              workflows—without abandoning their existing frameworks or methodologies.
            </p>
            <p>
              Our tools are designed to boost the productivity of all relevant functions by enhancing,
              not replacing, the technology they already rely on.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -translate-y-6 translate-x-6 rounded-3xl bg-gradient-to-br from-blue-200/40 via-purple-200/40 to-transparent blur-3xl" />
            <Image
              src={missionImage}
              alt="Illustration of ProboLabs.ai automation"
              className="relative rounded-xl shadow-xl ring-1 ring-slate-900/10"
              priority
            />
          </div>
        </div>
        <p className="mt-16 text-center text-base italic text-slate-500">
          “Professionals who embrace AI will replace those who don’t.”
        </p>
      </Container>
    </section>
  )
}
