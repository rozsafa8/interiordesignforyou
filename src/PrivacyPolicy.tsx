import { Link } from 'react-router'

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--cream)] px-6 py-12 text-[var(--ink)]">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/"
          className="mb-10 inline-block text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition hover:text-[var(--ink)]"
        >
          ← Back
        </Link>

        <h1 className="mb-2 text-3xl font-semibold">Privacy Policy</h1>
        <p className="mb-12 text-sm text-[var(--muted)]">Design by Veronika — Last updated: July 2026</p>

        <div className="space-y-8 text-sm text-[var(--muted)] [&_a:hover]:text-[var(--ink)] [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mb-2 [&_h2]:text-xs [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:tracking-[0.15em] [&_h2]:text-[var(--ink)] [&_p]:leading-relaxed">
          <section>
            <h2>Who we are</h2>
            <p>
              This website is operated by Design by Veronika, a boutique interior design studio based
              in Dubai, UAE. Contact:{' '}
              <a href="mailto:hello@interiordesignforyou.com">hello@interiordesignforyou.com</a>
            </p>
          </section>

          <section>
            <h2>What data we collect</h2>
            <p>
              We do not operate contact forms or user accounts. If you give consent via the cookie
              banner, we collect:
            </p>
            <ul className="mt-2 space-y-1 pl-4">
              {[
                'Page visits and button interactions (e.g. WhatsApp, email clicks)',
                'Browser type, device type, and general location (country/city)',
                'Error logs and performance traces',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--olive)]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              No names, email addresses, or payment details are collected through this site.
            </p>
          </section>

          <section>
            <h2>Legal basis</h2>
            <p>
              Analytics are processed on the basis of your consent (Art. 6(1)(a) GDPR). You can
              withdraw consent at any time by clearing your browser&rsquo;s local storage for this
              site.
            </p>
          </section>

          <section>
            <h2>Third-party services</h2>
            <p>
              <strong className="font-semibold text-[var(--ink)]">Sentry</strong> (Functional
              Software, Inc.) — used for error tracking and usage analytics. Data is processed on
              servers in Germany (EU).{' '}
              <a href="https://sentry.io/privacy/" target="_blank" rel="noreferrer">
                Sentry privacy policy
              </a>
            </p>
            <p className="mt-3">
              <strong className="font-semibold text-[var(--ink)]">Google Fonts</strong> — fonts are
              loaded from Google&rsquo;s CDN, which involves a request to Google&rsquo;s servers.{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                Google privacy policy
              </a>
            </p>
          </section>

          <section>
            <h2>Data retention</h2>
            <p>
              Sentry retains analytics data for 90 days. Your consent preference is stored in your
              browser&rsquo;s local storage and is not transmitted to our servers.
            </p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>
              Under GDPR you have the right to access, correct, or delete your data, and to object
              to or restrict its processing. To exercise these rights, email{' '}
              <a href="mailto:hello@interiordesignforyou.com">hello@interiordesignforyou.com</a>.
              You also have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-[var(--stroke)] pt-8 text-xs text-[var(--muted)]">
          Design by Veronika — Dubai, UAE
        </div>
      </div>
    </div>
  )
}
