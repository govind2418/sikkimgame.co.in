import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
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

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Refer & Earn — Share Your Code, Earn Rewards',
  description:
    'How Sikkim Game Refer & Earn works: finding your own referral code, sharing it, and when the reward is actually credited.',
  path: '/refer-earn',
  keywords: ['Sikkim Game Refer and Earn', 'Sikkim Game Referral Program'],
});

export default function ReferEarnPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Refer & Earn', path: '/refer-earn' }]} />
      <PageHero
        eyebrow="Refer & Earn"
        title="Refer & Earn: share your code, earn a reward"
        intro="Your own referral code, shared with friends, can unlock a reward when they join — here's the mechanic, not the marketing."
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

      <Section id="faq">
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
