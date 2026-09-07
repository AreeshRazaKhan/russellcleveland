import Link from 'next/link'

import ContactForm from '@/components/contact/contact-form'
import SiteFooter from '@/components/home/site-footer'
import SiteHeader from '@/components/site-header'

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/cooscountyconservatives', label: 'Facebook' },
  { href: 'https://www.youtube.com/@CitizenCouncil', label: 'YouTube' },
  { href: 'https://x.com/RobTaylorReport', label: 'X' },
]

export const metadata = {
  title: 'Contact · Coos County Republicans',
  description:
    'Get in touch with Coos County Republicans. Email party@coos.gop, call +1 541-982-6793, or visit HQ at 93677 Newport Ln, Coos Bay, OR 97420.',
}

const ContactPage = () => {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-paper text-ink-900 border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-16 md:px-12 md:py-28 tablet:grid-cols-12 lg:px-16 lg:py-28">
            <div className="tablet:col-span-7">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                Contact
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.94] tracking-[-0.03em] text-[clamp(2.5rem,7vw,5.5rem)]">
                Drop a line.{' '}
                <em className="font-italic not-italic text-ochre-600">We answer.</em>
              </h1>
              <p className="mt-10 max-w-[52ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-ash">
                Questions, candidate filings, press requests, event hosting, or just saying
                hello. Email us at the addresses below or use the form.
              </p>
            </div>
            <aside className="tablet:col-span-5 tablet:col-start-8">
              <div className="bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 relative before:content-[''] before:absolute before:top-0 before:left-10 before:right-10 before:h-[3px] before:bg-ochre-500">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                  Direct
                </span>
                <dl className="mt-6 flex flex-col gap-6">
                  <div>
                    <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                      General
                    </dt>
                    <dd className="mt-2">
                      <a
                        href="mailto:party@coos.gop"
                        className="font-display text-xl font-semibold text-ink-900 underline decoration-ochre-500/60 underline-offset-4 hover:text-ochre-600 break-all"
                      >
                        party@coos.gop
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                      Press
                    </dt>
                    <dd className="mt-2">
                      <a
                        href="mailto:press@coos.gop"
                        className="font-display text-xl font-semibold text-ink-900 underline decoration-ochre-500/60 underline-offset-4 hover:text-ochre-600 break-all"
                      >
                        press@coos.gop
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                      Phone
                    </dt>
                    <dd className="mt-2">
                      <a
                        href="tel:+15419826793"
                        className="font-display text-xl font-semibold text-ink-900 hover:text-ochre-600"
                      >
                        +1 541-982-6793
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                      Mailing address
                    </dt>
                    <dd className="mt-2 font-display text-lg font-semibold text-ink-900 leading-snug">
                      Coos County Republicans
                      <br />
                      PO Box 914
                      <br />
                      Coos Bay, OR 97420
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                      Visit us
                    </dt>
                    <dd className="mt-2 font-display text-lg font-semibold text-ink-900 leading-snug">
                      93677 Newport Ln
                      <br />
                      Coos Bay, OR 97420
                      <br />
                      <span className="font-italic italic font-normal text-stone-600">
                        events by calendar
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-paper-2 text-ink-900 border-b border-bone-200">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-16 md:px-12 md:py-24 tablet:grid-cols-12 lg:px-16">
            <div className="tablet:col-span-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                Send a message
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(2rem,5vw,3.75rem)]">
                Tell us what&rsquo;s on your{' '}
                <em className="font-italic not-italic text-ochre-600">mind</em>.
              </h2>
              <p className="mt-6 max-w-[42ch] text-base md:text-lg leading-[1.65] text-stone-600">
                Press requests, event hosting, candidate filings, story tips, or policy
                questions. Use the form, or email us directly. We answer everything we can
                across Coos County.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>

        <section className="bg-paper text-ink-900">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-16 md:px-12 md:py-20 tablet:grid-cols-12 lg:px-16">
            <div className="tablet:col-span-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                Social
              </span>
              <h2 className="mt-6 font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3rem)]">
                Follow{' '}
                <em className="font-italic not-italic text-ochre-600">along online</em>.
              </h2>
            </div>
            <ul className="tablet:col-span-7 tablet:self-end grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    className="group flex items-center justify-between rounded-[4px] border border-bone-200 bg-white px-5 py-4 transition-colors hover:border-ochre-500"
                  >
                    <span className="font-display text-base font-semibold text-ink-900">
                      {social.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-stone-400 group-hover:text-ochre-600"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default ContactPage
