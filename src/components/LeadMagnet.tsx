'use client'

import { useCallback, useId, useState } from 'react'

import { Container } from '@/components/Container'

const inputClassName =
  'block w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 sm:text-sm'

function isProbablyValidUrl(value: string) {
  try {
    const u = new URL(value.includes('://') ? value : `https://${value}`)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

function isProbablyValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function LeadMagnet() {
  const urlId = useId()
  const emailId = useId()
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = useCallback(async () => {
    setError(null)
    setSuccess(null)
    const url = websiteUrl.trim()
    const email = workEmail.trim()
    if (!url || !isProbablyValidUrl(url)) {
      setError('Enter a valid website URL (e.g. https://example.com).')
      return
    }
    if (!email || !isProbablyValidEmail(email)) {
      setError('Enter a valid work email.')
      return
    }

    try {
      setIsSubmitting(true)
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          websiteUrl: url,
          workEmail: email,
        }),
      })

      const data = (await response.json()) as {
        ok?: boolean
        error?: string
      }

      if (!response.ok || !data.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      setWebsiteUrl('')
      setWorkEmail('')
      setSuccess('Thanks. Your exposure report request has been sent.')
    } catch {
      setError('Unable to submit right now. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }, [websiteUrl, workEmail])

  return (
    <section id="lead" className="bg-slate-950 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            Is your site a legal liability? Let&apos;s find out.
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Drop your URL below. We&apos;ll send you a 1-page Exposure Report and a 15-minute
            strategy call to discuss the fixes. No strings, just data.
          </p>
        </div>

        <form
          className="mx-auto mt-12 max-w-xl"
          onSubmit={(e) => {
            e.preventDefault()
            submit()
          }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor={urlId} className="mb-2 block text-left text-sm font-medium text-slate-300">
                Website URL
              </label>
              <input
                id={urlId}
                name="websiteUrl"
                type="url"
                autoComplete="url"
                placeholder="https://example.com"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className={inputClassName}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor={emailId}
                className="mb-2 block text-left text-sm font-medium text-slate-300"
              >
                Work email
              </label>
              <input
                id={emailId}
                name="workEmail"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                className={inputClassName}
              />
            </div>
          </div>
          {error ? (
            <p className="mt-4 text-center text-sm text-red-300" role="alert">
              {error}
            </p>
          ) : null}
          {success ? (
            <p className="mt-4 text-center text-sm text-emerald-300" role="status">
              {success}
            </p>
          ) : null}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-8 py-2.5 text-base font-semibold text-slate-900 shadow-sm ring-2 ring-white/25 transition-colors [color-scheme:light] hover:bg-sky-100 hover:text-slate-900 hover:ring-sky-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 active:bg-sky-200 active:text-slate-900"
            >
              {isSubmitting ? 'Sending...' : 'Send My Exposure Report'}
            </button>
          </div>
        </form>
      </Container>
    </section>
  )
}
