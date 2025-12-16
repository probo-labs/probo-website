/**
 * Detects the user's operating system platform
 * Returns 'Windows', 'macOS', 'Linux', or 'Unknown'
 */
export function detectPlatform(): string {
  if (typeof window === 'undefined') {
    return 'Unknown'
  }

  const userAgent = window.navigator.userAgent.toLowerCase()
  const platform = window.navigator.platform.toLowerCase()

  if (platform.includes('win') || userAgent.includes('windows')) {
    return 'Windows'
  }

  if (platform.includes('mac') || userAgent.includes('macintosh') || userAgent.includes('mac os x')) {
    return 'macOS'
  }

  if (platform.includes('linux') || userAgent.includes('linux')) {
    return 'Linux'
  }

  // Fallback for other platforms
  return 'Unknown'
}

