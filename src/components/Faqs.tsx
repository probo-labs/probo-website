import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What browsers does ProboLabs.ai support?',
      answer:
        'We replay journeys across Chromium, WebKit, and Firefox today, with Microsoft Edge support coming soon. All run in parallel without extra configuration.',
    },
    {
      question: 'Do we need to write code to maintain tests?',
      answer:
        'Nope. Our recorder captures the actions you take and the self-healing engine keeps selectors and waits stable. Engineering can still drop down to code when it helps.',
    },
    {
      question: 'Can we integrate with our CI pipeline?',
      answer:
        'Yes. ProboLabs.ai plugs into GitHub Actions, CircleCI, GitLab, and custom runners with a lightweight CLI. We also provide a fully managed cloud orchestrator.',
    },
  ],
  [
    {
      question: 'How secure is our test data?',
      answer:
        'Secrets stay encrypted at rest and in transit. Enterprise plans add SSO, granular RBAC, and private networking options like VPC peering.',
    },
    {
      question: 'What happens when the UI changes?',
      answer:
        'The self-healing engine replays journeys using semantic context, accessibility attributes, and visual cues. We flag any changes we cannot resolve so you can triage instantly.',
    },
    {
      question: 'Can non-engineers contribute tests?',
      answer:
        'Absolutely. Product, design, and support teams can record flows in the browser and leave comments. Engineers can review diffs before merging into CI.',
    },
  ],
  [
    {
      question: 'How quickly can we get started?',
      answer:
        'Teams usually capture their first production journey in under an hour. ProboLabs.ai includes onboarding sessions and best-practice templates with every plan.',
    },
    {
      question: 'Do you offer on-prem or private cloud?',
      answer:
        'Enterprise plans support VPC deployments and fully air-gapped runners. Talk to our team to design the right architecture for your security needs.',
    },
    {
      question: 'Where can I talk to a human?',
      answer:
        'Email hello@probolabs.ai or join a live product tour. Our QA specialists respond within one business day for every plan.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-600">
            If you can’t find the answer you need, reach us at hello@probolabs.ai and we’ll connect you with a QA specialist.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-600">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
