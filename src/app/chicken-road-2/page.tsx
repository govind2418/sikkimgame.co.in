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
import { ShieldIcon, PercentIcon } from '@/components/icons';
import { chickenRoadDifficulties, chickenRoadFaqs } from '@/lib/content/chickenRoad';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Chicken Road 2 2026 | Lanes & Multiplier Guide',
  description:
    'Sikkim Game Chicken Road 2 explained: how difficulty levels, lanes and the multiplier work, and what the 97.03% RTP means.',
  path: '/chicken-road-2',
  keywords: ['Sikkim Game Chicken Road 2', 'Sikkim Chicken Road RTP'],
});

export default function ChickenRoad2Page() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Chicken Road 2 2026 | Lanes & Multiplier Guide"
        description="Sikkim Game Chicken Road 2 explained: how difficulty levels, lanes and the multiplier work, and what the 97.03% RTP means."
        path="/chicken-road-2"
      />
      <Breadcrumb
        items={[{ name: 'Home', path: '/' }, { name: 'Chicken Road 2', path: '/chicken-road-2' }]}
      />
      <PageHero
        eyebrow="Sikkim Game Chicken Road 2"
        title="Chicken Road 2: cross lanes, grow the multiplier, cash out in time"
        intro="Pick a difficulty, cross lanes one at a time, and cash out before the chicken fails one. Real RTP: 97.03%."
      />

      <Section>
        <SectionHeading eyebrow="Format" title="How one round works" />
        <div className="space-y-4 text-sm leading-relaxed text-slate-300">
          <p>
            You choose a difficulty level before the round starts, then a chicken moves forward
            one lane at a time. Every lane crossed successfully bumps the multiplier up a step.
            You can cash out after any successful lane to bank the current multiplier against your
            stake — or push forward for a bigger one. If the chicken fails a lane, the round ends
            immediately and the stake is lost, with no partial refund.
          </p>
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Difficulty vs. risk" title="Four typical difficulty levels" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {chickenRoadDifficulties.map((d) => (
            <Card key={d.level}>
              <h3 className="text-lg font-semibold text-white">{d.level}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{d.body}</p>
            </Card>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-slate-400">
          Exact step sizes and failure odds are set by the platform and shown live in-app — treat
          this as a typical structure for this game format, not an exact quote.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="The numbers" title="What 97.03% RTP means here" />
        <Card glass className="max-w-3xl">
          <PercentIcon className="h-8 w-8 text-neon-400" />
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Averaged across a large number of rounds and difficulty picks, about 97.03% of money
            wagered on Chicken Road 2 is returned to players collectively. It does not predict any
            single round, and it does not change based on which difficulty you personally choose.
          </p>
        </Card>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Play responsibly" title="Decide your stopping point before you start" />
        <Card glass className="max-w-3xl">
          <ShieldIcon className="h-8 w-8 text-neon-400" />
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Higher difficulty settings fail more often, early — chasing a big multiplier on
            Extreme after a loss is exactly how a budget disappears fast. Pick a difficulty and a
            cash-out target before you start, and treat every round as independent of the last.
          </p>
          <CtaButton href="/responsible-gaming" external={false} variant="secondary" size="md" className="mt-4">
            Responsible Gaming Guide
          </CtaButton>
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Chicken Road 2 questions, answered" />
        <FaqAccordion items={chickenRoadFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('chickenRoad')} />

      <Section>
        <CtaBand
          title="Ready to pick a difficulty?"
          subtitle="Sign in or create an account on the official app to see the live Chicken Road 2 table."
        />
      </Section>
    </>
  );
}
