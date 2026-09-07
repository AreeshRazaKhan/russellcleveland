import Image from "next/image";

import SiteFooter from "@/components/home/site-footer";
import SiteHeader from "@/components/site-header";
import MagneticButton from "@/components/ui/magnetic-button";

const SECTIONS = [
  {
    eyebrow: "01 · Crisis",
    title: "A county under pressure",
    body: "Coos County families are squeezed by Salem mandates, federal land lockouts, and an Oregon tax structure that punishes work. Mills have closed. Boats stay tied up. Jobs that supported entire towns for generations have moved or vanished. We organized because the alternative is watching the county slip further every cycle.",
    accent: "ochre",
  },
  {
    eyebrow: "02 · Roots",
    title: "Built by timber, fishing, and family.",
    body: "Coos County was settled and shaped by working people. Loggers, mill hands, fishermen, ranchers, tradespeople, and small-business owners. The values that built this county are the same values that drive this committee. Hard work, faith, family, neighbors first, and government that knows its limits.",
    accent: "sage",
  },
  {
    eyebrow: "03 · Service",
    title: "Built by volunteers, not professionals.",
    body: "Coos County Republicans is run by volunteers. Precinct committee persons, officers, and active members donate hours, miles, and money to keep the committee operating and the headquarters open. No one here makes a living off Republican politics in Coos County. We do this work because it matters, not because it pays.",
    accent: "ink",
  },
  {
    eyebrow: "04 · Why",
    title: "Why local?",
    body: "Coos County Republicans organizes at the county level because that is where families feel policy first. School boards decide what your children learn. County commissioners decide land use, sheriff funding, and tax levies. State legislators decide PERS, regulations, and election law. Local elections are won and lost by dozens of votes, and most cycles, no one is doing the basic ground work to win them. We do that work. We recruit candidates, train volunteers, register voters, and run the long game between elections so Coos County is never an afterthought again.",
    accent: "ochre",
  },
];

export const metadata = {
  title: "About Coos County Republicans · From Coos County, for Coos County",
  description:
    "The grassroots Republican community of Coos County, Oregon. All-volunteer. Local. Organized to elect principled conservatives at every level of government.",
};

const AboutPage = () => {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-ink-900 text-moonlight relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-10 px-6 py-16 md:px-12 md:py-28 tablet:grid-cols-12 lg:px-16 lg:py-28">
            <div className="tablet:col-span-7 flex flex-col justify-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
                About · Coos County · 2026
              </span>
              <h1 className="mt-8 font-display font-black leading-[0.92] tracking-[-0.03em] text-[clamp(2.5rem,7vw,6rem)]">
                From Coos County,{" "}
                <em className="font-italic not-italic text-ochre-400">
                  for
                  <br /> Coos County
                </em>
                .
              </h1>
              <p className="mt-10 max-w-[60ch] font-display text-xl md:text-2xl font-normal leading-[1.35] text-moonlight/85">
                Coos County Republicans is the grassroots Republican community
                of Coos County, Oregon. We are an all-volunteer body of
                neighbors, business owners, veterans, parents, ranchers,
                fishermen, and tradespeople committed to electing principled
                conservatives at every level of government across our county and
                state.
              </p>
            </div>

            <div className="relative tablet:col-span-5 tablet:flex tablet:items-end max-w-[460px] tablet:max-w-none">
              <div className="arch-mask relative w-full aspect-[4/5] overflow-hidden bg-ink-700">
                <Image
                  src="/coos-gop-hero-about.webp"
                  alt="Coos County, Oregon"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"
                />
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
                      Coos Bay
                    </span>
                    <span className="mt-2 block font-display text-3xl font-black leading-tight text-moonlight tracking-[-0.02em]">
                      Coos Republicans
                    </span>
                    <span className="mt-1 font-italic italic text-moonlight/75">
                      Republican Central Committee · Oregon PAC #300
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 tablet:-top-2 tablet:-right-4 z-10">
                <span className="paper-stamp">Coos County GOP · &apos;26</span>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-paper">
          {SECTIONS.map((section, i) => {
            const bg = i % 2 === 0 ? "bg-paper" : "bg-paper-2";
            const reversed = i % 2 === 1;
            const eyebrowColor =
              section.accent === "ochre"
                ? "text-ochre-600"
                : section.accent === "sage"
                  ? "text-sage-dark"
                  : "text-brass";
            return (
              <section
                key={section.title}
                className={`${bg} text-ink-900 border-b border-bone-200`}
              >
                <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
                  <span
                    className={`block font-mono text-xs font-semibold uppercase tracking-[0.22em] ${eyebrowColor}`}
                  >
                    {section.eyebrow}
                  </span>
                  <div className="mt-10 grid grid-cols-1 gap-10 tablet:grid-cols-12">
                    <aside
                      className={`tablet:col-span-4 ${reversed ? "tablet:order-2" : ""} tablet:sticky tablet:top-32 tablet:self-start`}
                    >
                      <h2 className="font-display font-extrabold leading-[1.02] tracking-[-0.025em] text-[clamp(1.75rem,4vw,3.25rem)]">
                        {section.title}
                      </h2>
                    </aside>
                    <div
                      className={`tablet:col-span-8 ${reversed ? "tablet:order-1" : ""}`}
                    >
                      <p className="font-display text-lg md:text-[22px] font-normal leading-[1.55] text-ash max-w-[68ch]">
                        {section.body}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          <section className="bg-ink-900 text-moonlight relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center overflow-hidden"
            >
              <span className="font-display font-black text-[220px] md:text-[360px] leading-none tracking-[-0.04em] text-ochre-500/[.08] whitespace-nowrap -translate-x-10">
                TAKE BACK
              </span>
            </div>
            <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
              <div className="max-w-[100ch]">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
                  05 · The pledge
                </span>
                <h2 className="mt-8 font-display font-black leading-[0.96] tracking-[-0.025em] text-[clamp(2.75rem,7vw,6rem)]">
                  Take back{' '}
                  <em className="font-italic not-italic text-ochre-400 whitespace-nowrap">
                    Coos County
                  </em>
                  .
                </h2>
                <p className="mt-10 font-display text-xl md:text-2xl font-normal leading-[1.35] text-moonlight/85 max-w-[54ch]">
                  Coos County Republicans is the best path forward for this
                  county because we are local, accountable, all-volunteer, and
                  unwilling to back down.
                </p>
                <div className="mt-12 flex flex-wrap gap-4">
                  <MagneticButton
                    href="/get-involved"
                    variant="ochre"
                    size="lg"
                  >
                    Join the fight
                  </MagneticButton>
                  <MagneticButton
                    href="https://secure.anedot.com/coos-county-republican-party-/donate"
                    variant="rust"
                    size="lg"
                    external
                  >
                    Chip in
                  </MagneticButton>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default AboutPage;
