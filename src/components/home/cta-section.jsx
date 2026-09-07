import Link from 'next/link'

import MagneticButton from '@/components/ui/magnetic-button'

const DONATE_URL = 'https://secure.anedot.com/coos-county-republican-party-/donate'

const DONATE_TIERS = [
  { amount: 25, label: '$25' },
  { amount: 50, label: '$50' },
  { amount: 100, label: '$100' },
  { amount: 300, label: '$300' },
]

const CtaSection = () => {
  return (
    <section id="donate" className="bg-ochre-500 text-paper relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex items-center overflow-hidden h-32 md:h-44 lg:h-56"
      >
        <span className="font-display font-black text-[140px] md:text-[220px] lg:text-[280px] leading-[0.88] tracking-[-0.04em] text-paper/[.08] whitespace-nowrap -translate-x-10 translate-y-1 md:translate-y-2 lg:translate-y-3">
          COOS COUNTY FIRST
        </span>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-28 lg:px-16 lg:py-32 grid grid-cols-1 gap-12 tablet:grid-cols-12">
        <div className="tablet:col-span-8">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-paper/90">
            05 · Join In
          </span>
          <h2 className="mt-8 font-display font-black leading-[0.96] tracking-[-0.025em] text-[clamp(2.5rem,7vw,6.5rem)]">
            The time is{' '}
            <em className="font-italic not-italic text-ochre-400">now</em>.
          </h2>
          <p className="mt-8 max-w-[58ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-paper/90">
            Join the Coos County Republicans movement by donating, volunteering, joining our
            mailing and events list, and showing up at HQ in Coos Bay.
          </p>

          <div className="mt-14">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/80 block mb-4">
              Chip in
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[520px]">
              {DONATE_TIERS.map((tier) => (
                <a
                  key={tier.amount}
                  href={`${DONATE_URL}?amount=${tier.amount}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center rounded-[4px] border border-ink-700 bg-ink-900 px-4 py-6 transition-colors hover:border-ochre-400 hover:bg-ink-800"
                >
                  <span className="font-display text-2xl font-extrabold text-paper tracking-[-0.01em] group-hover:text-ochre-400">
                    {tier.label}
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-4">
              <MagneticButton href={DONATE_URL} variant="ghost-light" size="lg" external>
                Custom amount
              </MagneticButton>
            </div>
          </div>
        </div>

        <aside
          id="contact"
          className="tablet:col-span-4 tablet:col-start-9 rounded-[28px] bg-ink-900 p-8 lg:p-10 border border-ink-700 flex flex-col gap-6 h-fit tablet:mt-20"
        >
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
            Mailing Address
          </span>
          <p className="font-display text-xl font-semibold leading-snug text-paper">
            Coos County Republicans
            <br />
            PO Box 914
            <br />
            Coos Bay, OR 97420
          </p>
          <hr className="border-t border-ink-700" />
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
              Contact
            </span>
            <Link
              href="mailto:party@coos.gop"
              className="font-mono text-sm text-paper underline decoration-ochre-400/70 underline-offset-4 hover:text-ochre-400"
            >
              party@coos.gop
            </Link>
          </div>
          <hr className="border-t border-ink-700" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
            State PAC Disclosure
          </span>
          <p className="font-mono text-[11px] leading-[1.65] text-paper/80">
            Paid for by the Coos County Republican Central Committee, Oregon PAC #300. Not
            authorized by any candidate or candidate&apos;s committee.
          </p>
        </aside>
      </div>
    </section>
  )
}

export default CtaSection
