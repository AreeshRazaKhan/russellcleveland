'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    q: 'What is Coos County Republicans?',
    a: 'We are the grassroots Republican community in Coos County, Oregon, organized to recruit and support conservative candidates at every level of government. We operate alongside the Coos County Republican Central Committee (Oregon PAC #300) and the broader Republican Party of Oregon. We are an all-volunteer body of precinct activists, officers, and engaged neighbors who run candidate trainings, voter registration drives, weekly community events at our Coos Bay headquarters, and the local ground game that wins elections. We focus on city, county, and state races first, because that is where Coos County families feel the most direct impact of policy. We also support federal Republican candidates and issue campaigns in Coos County.',
  },
  {
    q: 'Are you a candidate, a party, or a PAC?',
    a: 'We are a community of conservative neighbors organized to elect Republicans. The funding entity behind this site is the Coos County Republican Central Committee, registered as Oregon PAC #300 with the Secretary of State. We support a broad slate of Republican candidates for elections at the city, county, state, and federal level. The elephant is our mascot because we represent the Republican Party in Coos County, not any one person. We do make endorsements through committee process when a candidate stands out, and those endorsements are published openly on this site.',
  },
  {
    q: 'How do I get involved as a volunteer?',
    a: 'Start by filling out the Get Involved form on this site. Tell us where you live, how you want to help, and how much time you have. We need door knockers, phone bankers, poll watchers, candidate trainers, event hosts, social media volunteers, and people who can simply show up to a Saturday Coffee & Chat. Every precinct in Coos County needs a precinct committee person, and most are open. If you are willing to commit to a precinct, that is one of the highest-impact volunteer roles in local Republican politics. A team member will reach out within forty-eight hours.',
  },
  {
    q: 'Where is your headquarters and when can I drop in?',
    a: 'Our headquarters is 93677 Newport Lane in Coos Bay, Oregon. The two standing weekly events are open to anyone, no RSVP needed. Coffee & Chat with a Conservative runs every Saturday morning from eight to eleven, with free coffee and great conversations. Wednesday Pizza & Drinks runs from seven to nine in the evening, with snacks and the same easy format. Both events are designed for first-timers. Walk in, introduce yourself, meet local conservatives, ask anything, and learn about candidates and issues currently in front of the county.',
  },
  {
    q: 'What is your position on PERS reform?',
    a: 'PERS, the Oregon Public Employees Retirement System, is the single largest unfunded liability dragging down state and local budgets. We back candidates who support real PERS reform: shifting new hires to a defined-contribution structure, capping pension-spiking practices, and ending the political games that protect the system from honest accounting. We are not anti-public-employee. Teachers, deputies, and road crews deserve the retirement they were promised. The current trajectory does not deliver that. It delivers fiscal collapse and tax hikes, both of which hit Coos County working families the hardest. Reform is the responsible path. Refusing to act is not.',
  },
  {
    q: 'What about property tax relief?',
    a: 'Coos County homeowners are watching their assessed values, levies, and special districts climb every year while wages stay flat. We support candidates who oppose new property tax measures, who push for stricter limits on local levy growth, and who insist that any new spending be paid for by cutting somewhere else first. We also support a hard look at exemptions and abatements that have quietly grown over the years without voter approval. Property taxes should fund the core services families actually use, schools, public safety, roads, and libraries, not bloated administrative overhead and unfunded mandates from Salem.',
  },
  {
    q: 'Why do you back the sheriff so strongly?',
    a: 'In Oregon, the elected sheriff is the highest law enforcement authority inside the county. That is constitutional, and we treat it that way. The Coos County Sheriff knows this county, lives here, and answers directly to the voters every four years. State and federal agencies do not. When Salem or Washington tries to override local enforcement priorities, the sheriff has both the authority and the duty to push back. We support candidates and ballot measures that protect sheriff funding, deputize county-level decision-making, and keep enforcement priorities accountable to Coos County voters first, not activist groups three counties away.',
  },
  {
    q: 'End catch-and-release? What does that mean here?',
    a: 'It means stopping the practice of arresting an offender, booking them, and releasing them within hours back into the same community where the crime happened. Catch and release exists for a few reasons: jail capacity limits, district attorney charging decisions, and statewide reforms that reduced consequences for property and drug crimes. Each of those is fixable. We support candidates who fund jail capacity, who back district attorneys willing to file charges, and who repeal the statewide measures that have made Oregon a national outlier on accountability. Repeat offenders should face escalating consequences, full stop. Victims and neighborhoods deserve that much.',
  },
  {
    q: 'What about timber and federal lands?',
    a: 'Coos County was built on timber, and roughly half the county is federally owned. That federal land is mostly locked up, contributing little to local jobs, county revenue, or sustainable forest health. We support active stewardship, sustained-yield timber harvests, salvage logging after fires, and returning as much federal land as legally possible to local control. We oppose new wilderness designations imposed without local consent. Healthy working forests are not the enemy of clean water, fish, or wildlife. They are the strategy. The status quo of locked-up, overstocked, fire-prone federal land helps no one, and it has gutted Coos County over the past three decades.',
  },
  {
    q: 'Where do you stand on dam breaching?',
    a: 'We oppose dam breaching on the Columbia and Snake River systems. The lower Snake dams provide irrigation, navigation, recreation, and clean hydroelectric power that the entire Pacific Northwest depends on. Removing them would not save salmon. It would devastate inland farmers, raise electricity rates for working families, and shift freight onto trucks and rail at enormous cost. The science around salmon recovery points to hatcheries, predator control, and ocean conditions, not dam removal. We support candidates who will hold the line against breaching and who will defend the working-river economy that Coos County and the rest of the region rely on.',
  },
  {
    q: 'Parental rights in education, what does that look like?',
    a: 'It looks like parents knowing what is being taught, who is teaching it, and what materials are in the classroom and library. It looks like notification before any social, medical, or psychological intervention involving their child. It looks like opt-out rights on curriculum that conflicts with family values. We support school board candidates who publish curricula openly, who hold transparent meetings, and who treat parents as partners rather than obstacles. Where school boards refuse, we help recruit, fund, and elect candidates who will. Parental rights are not optional. They are the foundation of every healthy community, and Coos County families deserve that foundation back.',
  },
  {
    q: 'Do you support school choice?',
    a: 'Yes. Every Coos County family deserves a real choice in how their kids are educated. That includes traditional public schools, public charter schools, private schools, religious schools, microschools, and homeschool. We support open enrollment within and across districts, education savings accounts that let funding follow the student, and protection of homeschool families from regulatory overreach. School choice is not anti-public-school. Strong choice options force every school, public and private, to compete on quality and outcomes. The families that benefit most from choice are working-class and rural, the families Coos County has the most of, and they deserve the same options wealthier families have always had.',
  },
  {
    q: 'What does election integrity mean to you?',
    a: 'It means every legal vote counts and every illegal vote is caught before it does. We support paper ballots that can be hand-counted and audited, in-person same-day voting as an option, proof of citizenship before voter registration, rigorous signature verification, clean voter rolls, transparent chain of custody, and trained observers from both parties at every step. Oregon’s all-mail system has the largest attack surface of any voting system in the country. Other states secure their mail-in process with safeguards Oregon currently lacks. We push at the county clerk level for what can be done now, and at the state level for what requires legislation. Trust in elections is earned, not demanded.',
  },
  {
    q: 'Where can I see your endorsements?',
    a: 'Endorsements are published on this site as the committee votes them. Current endorsements include Richard "Rick" Coleman and Brandi Martindale for Coos County Commissioner. Endorsements are made by committee process, not by any single officer. Candidates who want to be considered should reach out through the contact form. We also recommend voters do their own research, attend candidate forums, and vote the full ballot all the way down. Local races, school board, soil and water conservation, port commissions, are often decided by margins of dozens of votes, and they shape Coos County more directly than the headlines from Washington or Salem ever will.',
  },
  {
    q: 'How is Coos County Republicans funded?',
    a: 'We are funded by individual contributions from Coos County and Oregon Republicans who believe in this work. Every dollar comes from a person with a name. Funding flows through the Coos County Republican Central Committee (Oregon PAC #300) and through Friends of Coos County Republicans, both reported publicly through the Oregon Secretary of State. Those reports are available to anyone who wants to see them. Donations stay local, funding voter registration, candidate training, materials, events, signs, mailers, and the basic operating costs of running a volunteer committee that has to compete with much better-funded opposition every cycle.',
  },
  {
    q: 'I am registered non-affiliated. Can I be involved?',
    a: 'Yes, with one limit. Oregon allows non-affiliated and Independent voters to participate in committee events, donate, volunteer, attend meetings, and engage in any way short of voting in the closed Republican primary or holding a precinct committee position. Both of those require Republican Party registration, which is a free change of voter registration available through the Secretary of State. Many Coos County voters who consider themselves conservative or constitutionalist are registered as non-affiliated out of habit. If your values line up with this committee’s platform, registering Republican gives you a vote in the primary that actually shapes who appears on the November ballot.',
  },
  {
    q: 'How do I run for local office in Coos County?',
    a: 'Start with the Coos County Elections Office for filing requirements, deadlines, and forms specific to your race. Then talk to us. We run candidate trainings on filing, fundraising, voter contact, paperwork compliance, and election law basics. We connect first-time candidates with experienced campaign volunteers, vendors, and counsel. Even if you do not seek formal committee endorsement, the practical help is available to any Republican running a clean campaign in Coos County. The earlier you start, the better. Most successful local campaigns begin laying groundwork twelve to eighteen months before the filing deadline, not three weeks before. Reach out through the contact form.',
  },
  {
    q: 'What is a precinct committee person and should I be one?',
    a: 'A precinct committee person, or PCP, is the lowest-level elected official in the Republican Party. Each Oregon precinct gets PCPs based on registered Republican count. PCPs vote on committee leadership, resolutions, and party business. They are the official Republican voice for their neighborhood. Most precincts in Coos County have open PCP seats. The job is mostly showing up to monthly meetings, knowing your neighbors, and being a reliable contact for new Republicans in your precinct. The filing fee is nominal and the term is two years. If you have ever wanted a real seat at the table in local Republican politics, this is it. Contact us and we will walk you through it.',
  },
  {
    q: 'What is coming up next?',
    a: 'Saturday Coffee & Chat at HQ, Wednesday Pizza & Drinks, candidate trainings, voter registration drives at the Coos County Fair, precinct organizing in every corner of the county, candidate forums ahead of every primary and general election, and an aggressive push toward 2026 races. Subscribe to the events calendar to see specific dates and locations. Sign up for our mailing list for advance notice on volunteer opportunities, candidate forums, and county-wide events. The path back is built one neighbor at a time. Show up, bring a friend, and we will put you to work. Coos County is worth fighting for.',
  },
]

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ochre-500"
      >
        <span className="font-display text-lg md:text-xl font-semibold leading-[1.3] text-moonlight">
          {q}
        </span>
        <span
          aria-hidden="true"
          className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-out ${
            open
              ? 'rotate-45 border-ochre-500 text-ochre-400'
              : 'border-moonlight/30 text-moonlight/80'
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1.5V10.5M1.5 6H10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows,opacity] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          gridTemplateRows: open ? '1fr' : '0fr',
          opacity: open ? 1 : 0,
        }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pb-8 pr-12">
            <p className="w-full text-base md:text-[17px] leading-[1.7] text-moonlight/80">
              {a}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg-ink-900 text-moonlight px-6 py-16 md:px-12 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 gap-12 tablet:grid-cols-12 tablet:gap-16">
        <header className="tablet:col-span-5 tablet:sticky tablet:top-32 tablet:self-start">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ochre-400">
            07 · On the record
          </span>
          <h2 className="mt-10 font-display text-[clamp(2.2rem,6vw,5rem)] font-black leading-[0.96] tracking-[-0.025em] text-moonlight">
            Frequently asked{' '}
            <em className="font-italic not-italic text-ochre-400">questions</em>.
          </h2>
          <p className="mt-8 max-w-[44ch] font-display text-lg md:text-xl font-normal leading-[1.4] text-moonlight/80">
            Straight answers, no hedging. Where Coos County Republicans stands on the issues
            neighbors actually ask about most.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <span className="h-[2px] w-16 bg-ochre-500" aria-hidden="true" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ochre-400">
              {FAQ_ITEMS.length} answers
            </span>
          </div>
        </header>

        <div className="tablet:col-span-7">
          <ul className="divide-y divide-moonlight/15 border-y border-moonlight/15">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FAQ
