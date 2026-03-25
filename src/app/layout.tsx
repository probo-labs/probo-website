import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s — ProboLabs.ai',
    default:
      'ProboLabs.ai — WCAG 2.2 audits, remediation & VPAT-ready documentation',
  },
  description:
    'Deep WCAG 2.2 audits and automated code remediation that holds up in legal review—no overlays, source-level fixes, and continuous compliance.',
  icons: {
    icon: '/favicon.ico',
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full scroll-smooth bg-white antialiased', inter.variable)}
    >
      <body className="flex h-full flex-col bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WZ5ZMSTERV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WZ5ZMSTERV');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
