import { ChevronDownIcon } from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

const topics: { name: string; useCases: string[] }[] = [
  {
    name: 'Onboarding',
    useCases: ['download and install the app', 'signup'],
  },
  {
    name: 'Basic Record and Replay',
    useCases: [
      'record a basic scenario and replay it',
      'OTP wizard: email OTP',
      'OTP wizard: authenticator app',
    ],
  },
  {
    name: 'Parameters',
    useCases: [
      'change scenario parameters',
      'add a parameter set',
      'choose which parameter set to replay',
    ],
  },
  {
    name: 'Editing',
    useCases: ['using breakpoints to dynamically edit your scenario'],
  },
  {
    name: 'Advanced Steps',
    useCases: [
      'add assertions',
      'extract page elements and use them in other steps',
      'navigate to url',
      'wait for long events',
      'hover over page elements',
      'add JS code',
    ],
  },
  {
    name: 'AI',
    useCases: [
      'use AskAI for extraction and assertions',
      'Fortify a test',
      'set the used LLM engine',
      'auto regeneration of scenarios using AI',
    ],
  },
  {
    name: 'Collaboration',
    useCases: [
      'share scenarios between users',
      'loading scenarios',
      'releasing a locked scenario',
    ],
  },
  {
    name: 'Subscription',
    useCases: [
      'view current credits balance',
      'upgrade user subscription',
    ],
  },
  {
    name: 'Settings',
    useCases: ['advanced settings'],
  },
  {
    name: 'Secrets',
    useCases: ['working with passwords and other secrets'],
  },
  {
    name: 'Code',
    useCases: ['generating playwright code', 'CI/CD integration'],
  },
  {
    name: 'Sequences',
    useCases: ['generating a new sequence', 'working with sequences'],
  },
  {
    name: 'Test Suites',
    useCases: ['creating a test suite', 'running a test suite'],
  },
]

export default function HowToPage() {
  return (
    <main className="py-20 sm:py-32">
      <Container>
        <div>
          <Logo className="inline-flex" imageClassName="h-8 w-auto sm:h-9" />
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            How To
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Browse step-by-step use cases for Probium. Expand a section, then open
            the specific topic you want to learn more about.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {topics.map((topic) => (
            <details
              key={topic.name}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm open:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-slate-900">
                <span>{topic.name}</span>
                <ChevronDownIcon
                  className="ml-4 h-5 w-5 text-slate-400 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>

              <div className="mt-4 space-y-3">
                {topic.useCases.map((useCase) => (
                  <details
                    key={useCase}
                    className="group/usecase rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-slate-900">
                      <span>{useCase}</span>
                      <ChevronDownIcon
                        className="ml-4 h-4 w-4 text-slate-400 transition-transform group-open/usecase:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="mt-3 text-sm text-slate-600">
                      Learn how to {useCase} in Probium.
                    </p>
                  </details>
                ))}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </main>
  )
}


