import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const avatars = [
  avatarImage1,
  avatarImage2,
  avatarImage3,
  avatarImage4,
  avatarImage5,
]

const testimonials = [
  [
    {
      title: '“Regression anxiety is gone.”',
      body: '“ProboLabs.ai keeps our smoke suite reliable even when the UI shifts. Releases that used to take a day of manual QA now ship before lunch.”',
      author: 'Priya Shen, Director of QA at Voyage',
    },
    {
      title: '“Shipping together again.”',
      body: '“ProboLabs.ai gave product, QA, and engineering one shared source of truth. We comment on the same runs and unblock releases in minutes.”',
      author: 'Julian Fields, VP Engineering at Brightwave',
    },
  ],
  [
    {
      title: '“Our tests self-heal faster than we code.”',
      body: '“When selectors break, ProboLabs.ai fixes them automatically and tells us why. We focus on new coverage instead of triaging flaky runs.”',
      author: 'Mina Ko, Staff QA Engineer at Northbeam',
    },
    {
      title: '“Confidence across browsers.”',
      body: '“We record once and replay across Chrome, Safari, and Firefox as part of CI. Customers stopped finding bugs before we do.”',
      author: 'Chris Leung, Head of Product Quality at Tandem',
    },
  ],
  [
    {
      title: '“Stakeholders finally trust automation.”',
      body: '“Dashboards make it obvious what’s ready for release. Leadership now checks ProboLabs.ai before every launch.”',
      author: 'Amelia Ramos, QA Lead at Harbor',
    },
    {
      title: '“The team loves recording tests.”',
      body: '“Designers, PMs, and support can capture flows without code. ProboLabs.ai translates them into reliable automated suites.”',
      author: 'Marcus Delgado, Engineering Manager at Alloy',
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={56} height={40} viewBox="0 0 109 80" {...props}>
      <path
        fill="currentColor"
        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"
      />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            QA leaders trust ProboLabs.ai.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-600">
            From startups to enterprises, teams rely on ProboLabs.ai to keep automation reliable and releases on schedule.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => {
                  const avatar =
                    avatars[(columnIndex * column.length + testimonialIndex) % avatars.length]

                  return (
                    <li key={testimonialIndex}>
                      <figure className="relative rounded-2xl bg-white p-6 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5">
                        <QuoteIcon className="absolute left-1/2 top-6 h-10 w-16 -translate-x-1/2 -translate-y-3 text-blue-200 opacity-40" />
                        <blockquote className="relative">
                          <p className="text-lg leading-7 text-slate-700">
                            {testimonial.body}
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">
                              {testimonial.author}
                            </div>
                            <p className="text-sm text-slate-500">{testimonial.title}</p>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-100">
                            <Image
                              className="h-14 w-14 object-cover"
                              src={avatar}
                              alt=""
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
