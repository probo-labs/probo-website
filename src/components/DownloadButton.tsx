'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { detectPlatform } from '@/utils/platform'
import { Button } from './Button'

type DownloadButtonProps = (
  | { variant?: 'solid'; color?: 'slate' | 'blue' | 'white' }
  | { variant: 'outline'; color?: 'slate' | 'blue' | 'white' }
) &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color' | 'href'> & {
    children?: React.ReactNode
    showIcon?: boolean
  }

export function DownloadButton({ children, showIcon = true, ...props }: DownloadButtonProps) {
  const [platform, setPlatform] = useState<string>('Unknown')

  useEffect(() => {
    setPlatform(detectPlatform())
  }, [])

  const platformText = platform === 'Unknown' ? 'Desktop' : platform
  const buttonText = children || `Download for ${platformText}`

  const getDownloadUrl = (currentPlatform: string): string => {
    // macOS
    if (currentPlatform === 'macOS') {
      return 'https://github.com/probo-labs/probium/releases/latest/download/Probium.dmg'
    }

    // Windows
    if (currentPlatform === 'Windows') {
      return 'https://apps.microsoft.com/detail/9PHVFGQBNDKB?hl=en-us&gl=IL&ocid=pdpshare'
    }

    // Linux
    if (currentPlatform === 'Linux') {
      return 'https://github.com/probo-labs/probium/releases/latest/download/Probium.deb'
    }

    // Default to Windows installer if platform is unknown
    return 'https://apps.microsoft.com/detail/9PHVFGQBNDKB?hl=en-us&gl=IL&ocid=pdpshare'
  }

  const href = getDownloadUrl(platform)

  // Handle the discriminated union properly
  if (props.variant === 'outline') {
    return (
      <Button {...props} variant="outline" href={href}>
        {buttonText}
      </Button>
    )
  }

  // Default to solid variant
  return (
    <Button {...props} href={href}>
      {buttonText}
    </Button>
  )
}

