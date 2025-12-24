'use client'

import Image from 'next/image'

import { Button } from '@/components/Button'
import { DownloadButton } from '@/components/DownloadButton'
import { Container } from '@/components/Container'
import heroBackground from '@/images/background-blueish.png'

const HERO_VIDEO_URL =
  'https://www.youtube.com/embed/qTVGrhmRow8?autoplay=1&mute=1&controls=1&loop=1&playlist=qTVGrhmRow8&modestbranding=1&rel=0'

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
            <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-lg font-medium text-blue-500">
              Introducing&nbsp;<strong>Probium</strong>
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              AI Automation that Lives within your Browser
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Capture real customer journeys intuitively in your browser and turn them into resilient, reusable automation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <DownloadButton color="slate" className="bg-slate-900 text-white hover:bg-slate-800" />
              <Button
                href="https://youtu.be/13WLhM_T0iU"
                variant="outline"
                color="slate"
              >
                Watch demo
              </Button>
            </div>
            <p className="mt-12 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Trusted by Developers, Product Owners and QA teams shipping daily
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
          </div>
        </div>
      </Container>
    </section>
  )
}
