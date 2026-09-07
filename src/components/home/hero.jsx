import Image from 'next/image'

import SiteHeader from '@/components/site-header'
import MagneticButton from '@/components/ui/magnetic-button'

const DONATE_URL = 'https://secure.anedot.com/coos-county-republican-party-/donate'

const Hero = () => {
  return (
    <section className="hero-gradient text-moonlight relative overflow-hidden tablet:min-h-screen tablet:flex tablet:flex-col tablet:justify-center">
      <SiteHeader />

      <div className="relative w-full mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 pt-6 pb-16 md:gap-12 md:px-12 md:py-10 tablet:grid-cols-12 tablet:gap-14 lg:px-16 lg:gap-16 lg:py-14">
        <div className="tablet:col-span-7 relative flex flex-col justify-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
            Coos County First
          </span>

          <h1 className="mt-6 font-display font-black leading-[0.92] tracking-[-0.025em] text-[clamp(2.25rem,5.5vw,5rem)]">
            Conservative Values,{' '}
            <em className="font-italic not-italic text-ochre-400">Coos County First</em>.
          </h1>

          <p className="mt-6 max-w-[54ch] font-display text-[16px] md:text-[18px] font-normal leading-[1.45] tracking-[-0.01em] text-moonlight/90">
            Coos County Republicans is a grassroots community of neighbors, business owners,
            parents, and patriots organizing across Coos County, Oregon to elect principled
            Republicans at every level of government.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <MagneticButton href="/get-involved" variant="ochre" size="md">
              Join the fight
            </MagneticButton>
            <MagneticButton href={DONATE_URL} variant="ghost-light" size="md" external>
              Donate
            </MagneticButton>
          </div>

          <p className="mt-6 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-moonlight/70">
            Paid for by Coos County Republican Central Committee{' '}
            <span className="text-ochre-400">·</span> Oregon PAC #300
          </p>
        </div>

        <div className="relative mt-2 tablet:mt-0 tablet:col-span-5 tablet:flex tablet:items-center">
          <div className="arch-mask relative w-full max-w-[380px] tablet:max-w-none tablet:ml-auto tablet:w-[82%] aspect-[4/5] bg-ink-700 overflow-hidden ring-1 ring-moonlight/10">
            <Image
              src="/coos-gop-hero-home.webp"
              alt="Coos County, Oregon — Republican community"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"
            />
            <div className="absolute inset-0 flex items-end p-8 tablet:p-10">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                  Coos Bay, Oregon
                </span>
                <span className="mt-3 font-display text-3xl tablet:text-4xl font-black leading-tight text-moonlight tracking-[-0.02em]">
                  Coos Republicans
                </span>
                <span className="mt-1 font-italic italic text-moonlight/80">
                  Republican Central Committee · PAC #300
                </span>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -top-10 -right-10 h-48 w-48 rounded-full border-[1.5px] border-ochre-500/30 z-10"
            />
          </div>

          <div className="absolute top-4 right-4 tablet:-top-2 tablet:-right-6 z-10">
            <span className="paper-stamp">Coos County GOP · &apos;26</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
