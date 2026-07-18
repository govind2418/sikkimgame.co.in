import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageSchema } from '@/components/layout/PageSchema';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { relatedTo } from '@/lib/pages';
import { UsersIcon, TicketIcon, CoinsIcon } from '@/components/icons';
import { referEarnSteps, referEarnFaqs } from '@/lib/content/referEarn';
import { ScreenshotCard } from '@/components/ui/ScreenshotCard';
import agencyImg from '../../../public/images/screenshots/sikkim-game-agency-dashboard.png';
import rewardsImg from '../../../public/images/screenshots/sikkim-game-partner-rewards.png';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Refer & Earn 2026 | Invite Code Official Guide',
  description:
    'How Sikkim Game Refer & Earn works: finding your own referral code, sharing it, and when the reward is actually credited.',
  path: '/refer-earn',
  keywords: ['Sikkim Game Refer and Earn', 'Sikkim Game Referral Program'],
});

export default function ReferEarnPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Refer & Earn 2026 | Invite Code Official Guide"
        description="How Sikkim Game Refer & Earn works: finding your own referral code, sharing it, and when the reward is actually credited."
        path="/refer-earn"
        howToSteps={referEarnSteps}
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Refer & Earn', path: '/refer-earn' }]} />
      <PageHero
        eyebrow="Sikkim Game Refer & Earn"
        title="Sikkim Game Refer & Earn: share your code, earn a reward"
        intro="Your own Sikkim Game referral code, shared with friends, can unlock a reward when they join — here's the mechanic, not the marketing."
      />

      <Section>
        <SectionHeading eyebrow="The basics" title="How the referral program works" />
        <div className="grid gap-5 sm:grid-cols-3">
          <Card>
            <UsersIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Your own code</h3>
            <p className="mt-2 text-sm text-slate-300">
              Found under Profile or Invite Friends — different from any code you entered when
              you signed up.
            </p>
          </Card>
          <Card>
            <TicketIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Share it directly</h3>
            <p className="mt-2 text-sm text-slate-300">
              Send it to people you know rather than posting it publicly, where anyone could use
              it without your intent.
            </p>
          </Card>
          <Card>
            <CoinsIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Earn when they join</h3>
            <p className="mt-2 text-sm text-slate-300">
              Rewards are usually credited once a friend registers or completes a first action —
              terms vary by the live campaign.
            </p>
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton variant="primary" size="lg">
            Find My Referral Code
          </CtaButton>
          <CtaButton href="/invite-code" external={false} variant="secondary" size="lg">
            Entering Someone Else&apos;s Code?
          </CtaButton>
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Step by step" title="From sharing to earning" />
        <ol className="grid gap-4 sm:grid-cols-2">
          {referEarnSteps.map((step, index) => (
            <li key={step.title} className="flex gap-3 rounded-xl border border-white/10 bg-navy-800/50 p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-royal-500/20 text-xs font-bold text-neon-300">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{step.title}</p>
                <p className="mt-1 text-sm text-slate-300">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading eyebrow="Real screenshots" title="What the Agency dashboard and reward tiers actually look like" />
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <ScreenshotCard src={agencyImg} alt="Sikkim Game Agency referral dashboard" caption="Agency dashboard" />
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Your Agency dashboard is where the Refer & Earn numbers actually live —
              yesterday&apos;s commission total up top, then a split between Direct subordinates
              and Team subordinates, each tracking registrations, deposit counts and deposit
              amounts separately. The Invitation Link button sits front and center, ready to
              share the moment you want to start earning.
            </p>
          </div>
          <div>
            <ScreenshotCard src={rewardsImg} alt="Sikkim Game Partner Rewards bonus tier table" caption="Partner rewards table" />
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              The Partner Rewards table spells out exactly what a referral is worth: each of a
              friend&apos;s first three deposits unlocks its own bonus tier, scaling from a modest
              ₹10 on a small first deposit up to ₹500 once someone deposits ₹10,000 or more with
              matching turnover. One bonus per deposit — no stacking, no fine print beyond what is
              shown on the screen itself.
            </p>
          </div>
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Refer & Earn questions, answered" />
        <FaqAccordion items={referEarnFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('referEarn')} />

      <Section>
        <CtaBand
          title="Ready to share your code?"
          subtitle="Sign in to find your personal referral code and start inviting friends."
        />
      </Section>
    </>
  );
}
