import Image from 'next/image'

import { Container } from '@/components/Container'
import developerImage from '@/images/screenshots/developer.png'
import productImage from '@/images/screenshots/product.png'
import qaImage from '@/images/screenshots/qa.png'

export function Mission() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Our mission is to democratize web application automation at scale.
          </h2>
        </div>
        <div className="mt-12 space-y-12">
          {/* Row 1: Developer */}
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative">
              <div className="absolute inset-0 -translate-y-6 translate-x-6 rounded-3xl bg-gradient-to-br from-blue-200/40 via-purple-200/40 to-transparent blur-3xl" />
              <Image
                src={developerImage}
                alt="Developer automation workflow"
                className="relative rounded-xl shadow-xl ring-1 ring-slate-900/10"
              />
            </div>
            <div className="text-lg leading-8 text-slate-600">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
                Developers
              </h3>
              <p>
                With Probium, you can automate new feature testing. 
                Start small by automating a single flow and rerun it until it passes. 
                Scale up the number of flows and integrate into CI/CD for best ROI.
                No more confusing reproduction instructions in your JIRA tickets, simply ask the originator to share a Probium flow with you.
              </p>
            </div>
          </div>

          {/* Row 2: Product */}
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="text-lg leading-8 text-slate-600">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
                Product Owners
              </h3>
              <p>
                Define and validate user journeys without writing a single line of code. 
                Probium empowers product teams to test scenarios, validate workflows, and ensure features meet user expectations before deployment.
                Never worry about your release quality again.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -translate-y-6 translate-x-6 rounded-3xl bg-gradient-to-br from-blue-200/40 via-purple-200/40 to-transparent blur-3xl" />
              <Image
                src={productImage}
                alt="Product owner automation tools"
                className="relative rounded-xl shadow-xl ring-1 ring-slate-900/10"
              />
            </div>
          </div>

          {/* Row 3: QA */}
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative">
              <div className="absolute inset-0 -translate-y-6 translate-x-6 rounded-3xl bg-gradient-to-br from-blue-200/40 via-purple-200/40 to-transparent blur-3xl" />
              <Image
                src={qaImage}
                alt="QA engineer testing automation"
                className="relative rounded-xl shadow-xl ring-1 ring-slate-900/10"
              />
            </div>
            <div className="text-lg leading-8 text-slate-600">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
                QA
              </h3>
              <p>
                QA engineers can create comprehensive test suites without writing a single line of code, however, adding custom code to your tests is straightforward. 
                Leverage Probium&apos;s AI-powered assertions for complex validation scenarios. 
                Focus on increasing coverage and not on writing and maintaining flaky tests.
                Stop doing manual testing, let Probium do the heavy lifting.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
