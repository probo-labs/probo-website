import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What browsers does Probium support?',
      answer:
        'We replay journeys across Chromium, WebKit, Firefox and Microsoft Edge.',
    },
    {
      question: 'Do we need to write code to maintain tests?',
      answer:
        'Nope. Our recorder captures the actions you take and the test regeneration engine keeps up with app changes.',
    },
    {
      question: 'What is the difference between Probium and other automation tools?',
      answer:
        'Probium provides an intuitive UI/UX with the browser taking center stage. You record tests once and Probium keeps them running as your UI changes, taking care of locators and event synchronization. Tests run locally on your machine, not in the cloud. You get Playwright code which is yours to keep even if you decide to switch to a different tool.',
    },
  ],
  [
    {
      question: 'How secure is our test data?',
      answer:
        'Secrets (e.g. passwords, OTP keys) are stored locally on your machine and never sent to our servers. We offer a redaction feature to mask sensitive (PIIA) data in html and screenshots. Our enterprise plans support single-tenant deployments.',
    },
    {
      question: 'What happens when the UI changes?',
      answer:
        'The regeneration engine replays journeys using semantic context, accessibility attributes, and visual cues. We flag any changes we cannot resolve so you can triage instantly.',
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
        'Teams usually capture their first production journey in minutes. We provide documentation and video tutorials to help you get started.',
    },
    {
      question: 'Do you offer on-prem or private cloud?',
      answer:
        'Enterprise plans support single-tenant deployments. Talk to our team to design the right architecture for your security needs.',
    },
    {
      question: 'Where can I talk to a human?',
      answer: (
        <>
          Email{' '}
          <a
            href="mailto:support@probolabs.ai"
            className="text-blue-600 hover:text-blue-500 underline"
          >
            support@probolabs.ai
          </a>{' '}
          or join our{' '}
          <Link
            href="https://discord.gg/m2gX5AG9TJ"
            className="text-blue-600 hover:text-blue-500 underline"
          >
            Discord channel
          </Link>
          .
        </>
      ),
    },
    {
      question: 'Can we integrate with our CI/CD pipeline?',
      answer:
        'Yes. Probium plugs into any CI/CD pipeline, including GitHub Actions, GitLab, Jenkins and BitBucket.',
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
          <p className="mt-4 text-lg tracking-tight text-slate-600 whitespace-nowrap">
            If you can’t find the answer you need, reach us at{' '}
            <a
              href="mailto:support@probolabs.ai"
              className="text-blue-600 hover:text-blue-500 underline"
            >
              support@probolabs.ai
            </a>{' '}
            and we’ll get back to you within one business day.
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
                    <div className="mt-4 text-sm text-slate-600">{faq.answer}</div>
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
