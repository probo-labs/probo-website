'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Small delay to ensure content is rendered
      const timeoutId = setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
      return () => clearTimeout(timeoutId)
    }
  }, [pathname])

  return null
}
