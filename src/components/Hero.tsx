'use client'

import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import heroBackground from '@/images/background-faqs.jpg'

const HERO_VIDEO_URL =
  'https://www.youtube.com/embed/13WLhM_T0iU?autoplay=1&mute=1&controls=0&loop=1&playlist=13WLhM_T0iU&modestbranding=1&rel=0'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src={heroBackground}
        alt=""
        width={1558}
        height={946}
        priority
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/80 via-white/40 to-transparent"
        aria-hidden="true"
      />
      <Container id="hero" className="relative pt-28 pb-16 lg:pt-36">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="text-left">
            <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-500">
              AI-powered QA automation
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Record. Replay. Automate.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Generate robust web application tests with AI in seconds. ProboLabs.ai captures real customer journeys and turns them into resilient, reusable automation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#call-to-action" color="blue">
                Start free trial
              </Button>
              <Button
                href="https://youtu.be/13WLhM_T0iU"
                variant="outline"
                color="slate"
              >
                Watch demo
              </Button>
            </div>
            <p className="mt-12 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Trusted by QA teams shipping weekly
            </p>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 -translate-x-6 translate-y-6 rounded-3xl bg-gradient-to-br from-indigo-50 via-purple-50 to-white blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-900/10">
              <div className="relative aspect-[16/9] w-full">
                <iframe
                  src={HERO_VIDEO_URL}
                  title="ProboLabs.ai product demo"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Real capture of ProboLabs.ai Recorder in action
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
