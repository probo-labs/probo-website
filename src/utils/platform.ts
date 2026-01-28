/**
 * Detects the user's operating system platform
 * Returns 'Windows', 'macOS', 'Linux', or 'Unknown'
 *
 * User-agent is checked first because it can be overridden (e.g. Chrome DevTools),
 * while navigator.platform is not. When testing with a Linux UA on macOS,
 * platform stays "MacIntel" and would incorrectly yield macOS otherwise.
 */
export function detectPlatform(): string {
  if (typeof window === 'undefined') {
    return 'Unknown'
  }

  const userAgent = window.navigator.userAgent.toLowerCase()
  const platform = window.navigator.platform.toLowerCase()

  // Prefer userAgent (overridable) over platform (not overridable in DevTools)
  if (userAgent.includes('windows')) {
    return 'Windows'
  }
  if (userAgent.includes('linux') && !userAgent.includes('android')) {
    return 'Linux'
  }
  if (userAgent.includes('macintosh') || userAgent.includes('mac os x')) {
    return 'macOS'
  }

  // Fallback to platform when userAgent doesn't indicate OS
  if (platform.includes('win')) {
    return 'Windows'
  }
  if (platform.includes('linux')) {
    return 'Linux'
  }
  if (platform.includes('mac')) {
    return 'macOS'
  }

  return 'Unknown'
}

