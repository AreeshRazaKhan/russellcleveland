import Link from 'next/link'

import GetInvolvedSignup from '@/components/get-involved/get-involved-signup'
import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'
import MagneticButton from '@/components/ui/magnetic-button'

const WAYS_TO_HELP = [
  {
    title: 'Donate',
    body: 'Every dollar comes from a person with a name. Locally raised, locally spent, on Coos County races and ground game.',
    accent: 'rust',
    href: 'https://secure.anedot.com/coos-county-republican-party-/donate',
    cta: 'Donate',
  },
  {
    title: 'Volunteer',
    body: 'Help us reach voters in every precinct. Sign up with the form above to join the field team and trainings.',
    accent: 'ochre',
    href: '#signup',
    cta: 'Sign up',
  },
  {
    title: 'Join the mailing & events list',
    body: 'Get event notifications, committee updates, candidate forums, and early invites delivered to your inbox.',
    accent: 'sage',
    href: '#signup',
    cta: 'Subscribe',
  },
  {
    title: 'View the event calendar',
    body: 'See where the committee will be next, weekly meetings at HQ, candidate forums, GOTV drives, and county events.',
    accent: 'ink',
    href: 'https://calendar.google.com/calendar/u/0?cid=Y29vc2NvdW50eXJlcHVibGljYW5z',
    cta: 'View calendar',
  },
]

const DONOR_RULES = [
  'You are a United States citizen or a lawfully admitted permanent resident of the United States, commonly known as a green card holder.',
  'The contribution is made from your own personal funds and is not being provided by another person, company, organization, or any other entity.',
  'You are at least 18 years old.',
  'You are not a federal contractor.',
  'You are not using corporate, business, foreign national, or other restricted funds.',
  'If you are an American citizen living abroad, you are making this contribution while physically located in the United States and from your own personal funds.',
]

const ACCENT_MAP = {
  ochre: 'before:bg-ochre-500',
  sage: 'before:bg-sage',
  ink: 'before:bg-ink-900',
  rust: 'before:bg-rust',
}

export const metadata = {
  title: 'Get Involved · Coos County Republicans',
  description:
    'Donate, volunteer, host an event, or join the mailing list. Help take back Coos County, Oregon.',
}

const GetInvolvedPage = () => {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-ink-900 text-moonlight relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center overflow-hidden"
          >
            <span className="font-display font-black text-[220px] md:text-[360px] leading-none tracking-[-0.04em] text-ochre-500/[.07] whitespace-nowrap -translate-x-6">
              THE TIME IS NOW
            </span>
          </div>
          <div className="relative mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-16 md:px-12 md:py-28 tablet:grid-cols-12 lg:px-16 lg:py-28">
            <div className="tablet:col-span-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
                Join the fight
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.9] tracking-[-0.03em] text-[clamp(3rem,9vw,7.5rem)]">
                The time is{' '}
                <em className="font-italic not-italic text-ochre-400">now</em>.
              </h1>
              <p className="mt-10 max-w-[54ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-moonlight/85">
                Join Coos County Republicans by donating, volunteering, joining our mailing and
                events list, or showing up to HQ in Coos Bay. Coos County won&rsquo;t take
                itself back.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-paper text-ink-900 border-b border-bone-200">
          <div id="signup" className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-16 md:px-12 md:py-20 tablet:grid-cols-12 lg:px-16">
            <div className="tablet:col-span-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                Sign up
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(2rem,5vw,3.75rem)]">
                Tell us how you want to{' '}
                <em className="font-italic not-italic text-ochre-600">help</em>.
              </h2>
              <p className="mt-6 max-w-[42ch] text-base md:text-lg leading-[1.65] text-stone-600">
                Join our list and tell us how you&rsquo;d like to pitch in. We&rsquo;ll connect
                you with the right team.
              </p>
            </div>

            <GetInvolvedSignup />
          </div>
        </section>

        <section className="bg-paper-2 text-ink-900 border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24 lg:px-16">
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                Four ways to help
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(2rem,5vw,3.75rem)]">
                Donate. Volunteer. Join.{' '}
                <em className="font-italic not-italic text-ochre-600">Show up.</em>
              </h2>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              {WAYS_TO_HELP.map((way) => (
                <article
                  key={way.title}
                  className={`relative bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 flex flex-col gap-4 before:content-[''] before:absolute before:top-0 before:left-0 before:h-[3px] before:w-12 ${ACCENT_MAP[way.accent]}`}
                >
                  <h3 className="font-display text-2xl md:text-[28px] font-extrabold leading-[1.1] tracking-[-0.015em] text-ink-900">
                    {way.title}
                  </h3>
                  <p className="text-base leading-[1.65] text-stone-600 max-w-[42ch]">
                    {way.body}
                  </p>
                  <Link
                    href={way.href}
                    {...(way.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="mt-auto inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900 hover:text-ochre-600 w-fit"
                  >
                    {way.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper text-ink-900">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-16 md:px-12 md:py-20 tablet:grid-cols-12 lg:px-16">
            <div className="tablet:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                Donor disclosure
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                By sending a contribution,{' '}
                <em className="font-italic not-italic text-ochre-600">you confirm that</em>:
              </h2>
            </div>
            <ol className="tablet:col-span-8 flex flex-col divide-y divide-bone-200 border-y border-bone-200">
              {DONOR_RULES.map((rule, i) => (
                <li key={rule} className="py-5 flex items-start gap-6">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-600 w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base md:text-lg leading-[1.65] text-stone-600 max-w-[72ch]">
                    {rule}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-ink-900 text-moonlight">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-16 flex flex-col tablet:flex-row tablet:items-center tablet:justify-between gap-8">
            <p className="font-display text-2xl md:text-[32px] font-extrabold leading-[1.15] max-w-[34ch] tracking-[-0.015em]">
              Already in?{' '}
              <em className="font-italic not-italic text-ochre-400">Chip in a dollar.</em>
            </p>
            <div className="flex flex-wrap gap-4">
              <MagneticButton
                href="https://secure.anedot.com/coos-county-republican-party-/donate"
                variant="rust"
                size="lg"
                external
              >
                Donate
              </MagneticButton>
              <MagneticButton href="/events" variant="ghost-light" size="lg">
                See events
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default GetInvolvedPage
