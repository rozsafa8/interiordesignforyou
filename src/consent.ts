const CONSENT_KEY = 'analytics_consent'

export type ConsentState = 'accepted' | 'declined' | null

export const getConsent = (): ConsentState => {
  try {
    const val = localStorage.getItem(CONSENT_KEY)
    if (val === 'accepted' || val === 'declined') return val
    return null
  } catch {
    return null
  }
}

export const setConsent = (value: 'accepted' | 'declined'): void => {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    // ignore
  }
}
