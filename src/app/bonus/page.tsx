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
import { PercentIcon, TicketIcon, ShieldIcon } from '@/components/icons';
import { bonusTypes, bonusFaqs } from '@/lib/content/bonus';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Bonus 2026 | Invite Code & Gift Code Guide',
  description:
    'A plain overview of Sikkim Game bonuses: welcome offers, referral rewards, gift codes and promotional credits, plus how to spot a bonus scam.',
  path: '/bonus',
  keywords: ['Sikkim Game Bonus', 'Sikkim Game Bonus Code'],
});

export default function BonusPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Bonus 2026 | Invite Code & Gift Code Guide"
        description="A plain overview of Sikkim Game bonuses: welcome offers, referral rewards, gift codes and promotional credits, plus how to spot a bonus scam."
        path="/bonus"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Bonus', path: '/bonus' }]} />
      <PageHero
        eyebrow="Bonus Guide"
        title="Every Sikkim Game bonus type, in one place"
        intro="Welcome offers, referrals, redeem codes and promos all use different mechanics. Here is how each one actually works."
      />

      <Section>
        <SectionHeading eyebrow="Reward types" title="The four bonus categories" />
        <div className="grid gap-5 sm:grid-cols-2">
          {bonusTypes.map((item) => (
            <Card key={item.title}>
              <PercentIcon className="h-8 w-8 text-neon-400" />
              <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={SITE.registerUrl} variant="primary" size="lg">
            Check Current Offers
          </CtaButton>
          <CtaButton href="/invite-code" external={false} variant="secondary" size="lg">
            <TicketIcon className="h-4 w-4" /> Invite Code Guide
          </CtaButton>
          <CtaButton href="/game-gift-code" external={false} variant="ghost" size="lg">
            Gift Code Guide
          </CtaButton>
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Read the fine print" title="Before you count on a bonus" />
        <Card glass className="max-w-3xl">
          <ShieldIcon className="h-8 w-8 text-neon-400" />
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Bonus credit often carries wagering conditions before any resulting winnings can be
            withdrawn, and most offers expire after a set window. Read the terms shown at the
            moment you receive a bonus rather than assuming it works the same as a friend&apos;s offer
            from months ago.
          </p>
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Bonus questions, answered" />
        <FaqAccordion items={bonusFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('bonus')} />

      <Section>
        <CtaBand
          title="Ready to check today's bonuses?"
          subtitle="Sign in or create an account to see what's currently active."
        />
      </Section>
    </>
  );
}
