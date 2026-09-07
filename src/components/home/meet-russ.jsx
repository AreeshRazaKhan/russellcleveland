import Image from 'next/image'

const BIO_FACTS = [
  { label: 'Mission', value: 'Local Republican Organizing' },
  { label: 'Reach', value: 'Local to Federal' },
  { label: 'Focus', value: 'Liberty · Safety · Stewardship' },
  { label: 'Based', value: 'Coos Bay, Oregon' },
]

const MeetCommittee = () => {
  return (
    <section
      id="meet-committee"
      className="bg-paper text-ink-900 px-6 py-16 md:px-12 md:py-16 lg:px-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-12 tablet:grid-cols-12 tablet:gap-16">
        <div className="relative tablet:col-span-5 tablet:order-2 max-w-[460px] tablet:max-w-none">
          <div className="arch-mask relative w-full aspect-[4/5] overflow-hidden bg-ink-900">
            <Image
              src="/coos-gop-meet-committee.webp"
              alt="Archival Coos Bay harbor and timber heritage"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover grayscale"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 mix-blend-multiply"
              style={{
                background:
                  'linear-gradient(135deg, rgba(24,24,32,0.85), rgba(136,32,40,0.45))',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, rgba(192,152,40,0.06) 0 10px, transparent 10px 20px)',
              }}
            />
            <div className="absolute inset-0 flex items-end p-8 z-10">
              <div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                  Archival · Duotone
                </span>
                <span className="mt-2 block font-display text-2xl font-black leading-tight text-moonlight tracking-[-0.015em]">
                  Coos County Heritage
                </span>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full border-[1.5px] border-ochre-500/25 z-10"
            />
          </div>

          <div className="absolute -top-2 -left-2 tablet:-top-4 tablet:-left-6">
            <span className="paper-stamp">Republican Committee</span>
          </div>
        </div>

        <div className="tablet:col-span-7 tablet:order-1 flex flex-col justify-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            03 · The Committee
          </span>
          <h2 className="mt-8 font-display font-black leading-[0.98] tracking-[-0.025em] text-[clamp(2.2rem,6vw,5rem)]">
            From Coos County,{' '}
            <em className="font-italic not-italic text-ochre-600">for Coos County</em>.
          </h2>

          <p className="mt-8 max-w-[60ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-ash">
            Coos County Republicans is the grassroots arm of the Coos County Republican
            community. We are an all-volunteer body of neighbors, business owners, veterans,
            parents, ranchers, fishermen, and tradespeople committed to electing principled
            conservatives at every level of government in Oregon.
          </p>

          <p className="mt-6 max-w-[60ch] text-base md:text-lg leading-[1.65] text-stone-600">
            We work the long game between elections. Voter registration drives, candidate
            recruitment, precinct organizing, candidate forums, and grassroots fundraising all
            funnel toward one mission: keeping Coos County in conservative hands.
          </p>

          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 tablet:grid-cols-2 gap-x-10 gap-y-6 max-w-[58ch] border-t border-bone-200 pt-8">
            {BIO_FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1">
                <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
                  {fact.label}
                </dt>
                <dd className="font-display text-lg font-semibold leading-tight text-ink-900 tracking-[-0.01em]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default MeetCommittee
