import Image from 'next/image'

import { Container } from '@/components/Container'
import missionImage from '@/images/background-collaboration.png'

export function Mission() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Our mission is to democratize web application automation at scale.
          </h2>
        </div>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Whether you are a developer, product owner or QA engineer, you can easily automate your workflows with Probium.
              Moreoever, different team members can collaborate on the same automation tasks with ease.
              Start with no code, add code if needed.
            </p>
            <p>
              Probium harnesses the power of AI to create robust and resilient automation as well as perform complex functional checks.
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
      </Container>
    </section>
  )
}
