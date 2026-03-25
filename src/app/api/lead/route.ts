import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY

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

export async function POST(request: Request) {
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON payload.' },
      { status: 400 },
    )
  }

  const websiteUrl =
    typeof payload === 'object' &&
    payload !== null &&
    'websiteUrl' in payload &&
    typeof payload.websiteUrl === 'string'
      ? payload.websiteUrl.trim()
      : ''

  const workEmail =
    typeof payload === 'object' &&
    payload !== null &&
    'workEmail' in payload &&
    typeof payload.workEmail === 'string'
      ? payload.workEmail.trim()
      : ''

  if (!websiteUrl || !isProbablyValidUrl(websiteUrl)) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid website URL.' },
      { status: 400 },
    )
  }

  if (!workEmail || !isProbablyValidEmail(workEmail)) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid work email.' },
      { status: 400 },
    )
  }

  if (!resendApiKey) {
    return NextResponse.json(
      {
        ok: false,
        error:
          'Email service is not configured. Set RESEND_API_KEY in server environment variables.',
      },
      { status: 503 },
    )
  }

  const resend = new Resend(resendApiKey)
  // In Resend test mode, delivery is limited to your own account email.
  const to = process.env.LEAD_EMAIL_TO ?? 'support@probolabs.ai'
  const from = process.env.LEAD_EMAIL_FROM ?? 'Probo Website<support@probolabs.ai>'
  const submittedAt = new Date().toISOString()

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject: 'Exposure report request',
      text: [
        'Please send the 1-page Exposure Report and schedule a 15-minute strategy call.',
        '',
        `Website: ${websiteUrl}`,
        `Work email: ${workEmail}`,
        `Submitted at: ${submittedAt}`,
        `Source page: ${request.headers.get('origin') ?? 'unknown'}`,
      ].join('\n'),
    })

    if (error) {
      console.error('Resend send failed', {
        message: error.message,
        name: error.name,
      })
      if (error.message?.toLowerCase().includes('only send testing emails')) {
        return NextResponse.json(
          {
            ok: false,
            error:
              'Resend is in testing mode. Verify a sending domain and use a from-address on that domain, or keep LEAD_EMAIL_TO set to your own Resend account email.',
          },
          { status: 403 },
        )
      }
      return NextResponse.json(
        {
          ok: false,
          error:
            error.message ||
            'Failed to send email. Check RESEND_API_KEY and LEAD_EMAIL_FROM settings.',
        },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    console.error('Lead endpoint unexpected error', err)
    return NextResponse.json(
      { ok: false, error: 'Failed to send email. Please try again.' },
      { status: 500 },
    )
  }
}
