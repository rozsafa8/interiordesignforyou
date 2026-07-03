import { useState } from 'react'
import { Link } from 'react-router'
import { getConsent, setConsent } from './consent'
import { grantAnalyticsConsent } from './telemetry'

export function CookieBanner() {
  const [visible, setVisible] = useState(() => getConsent() === null)

  if (!visible) return null

  const handleAccept = () => {
    setConsent('accepted')
    grantAnalyticsConsent()
    setVisible(false)
  }

  const handleDecline = () => {
    setConsent('declined')
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl rounded-[24px] border border-[var(--stroke)] bg-white/95 px-6 py-5 shadow-soft backdrop-blur-sm"
    >
      <p className="text-sm text-[var(--muted)]">
        This site uses analytics to understand visitor behaviour and improve performance.{' '}
        <Link
          to="/privacy"
          className="underline underline-offset-2 hover:text-[var(--ink)]"
        >
          Learn more
        </Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          onClick={handleAccept}
          className="rounded-full bg-[var(--ink)] px-5 py-2 text-sm font-medium text-white transition hover:opacity-80"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="rounded-full border border-[var(--stroke)] px-5 py-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--ink)]"
        >
          Decline
        </button>
      </div>
    </div>
  )
}
