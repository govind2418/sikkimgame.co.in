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
import { PercentIcon, ZapIcon } from '@/components/icons';
import { goalFaqs } from '@/lib/content/goal';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Goal 2026 | Multiplier Game RTP Guide',
  description:
    'Sikkim Game Goal explained: it is the same rising-multiplier crash mechanic as Aviator, football-themed, with a 96.08% RTP.',
  path: '/goal',
  keywords: ['Sikkim Game Goal', 'Sikkim Goal RTP'],
});

export default function GoalPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Goal 2026 | Multiplier Game RTP Guide"
        description="Sikkim Game Goal explained: it is the same rising-multiplier crash mechanic as Aviator, football-themed, with a 96.08% RTP."
        path="/goal"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Goal', path: '/goal' }]} />
      <PageHero
        eyebrow="Sikkim Game Goal"
        title="Sikkim Game Goal: Aviator's mechanic, football theme"
        intro="Not a football match simulator — a rising-multiplier crash game with football visuals. Real RTP: 96.08%."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          <Card>
            <ZapIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Same crash mechanic as Aviator</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              A multiplier climbs from 1.00x the moment the round starts. Cash out any time to
              bank it against your stake — miss the window before it randomly crashes and the
              stake is lost. Football-themed visuals sit on top of the identical mechanic used by
              Aviator, Cricket and Vortex.
            </p>
            <CtaButton href="/aviator" external={false} variant="ghost" size="md" className="mt-3 px-0">
              Read the full mechanic breakdown on our Aviator guide
            </CtaButton>
          </Card>
          <Card glass>
            <PercentIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">96.08% RTP</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Averaged across a large number of rounds, about 96.08% of money wagered on Goal
              returns to players collectively — the lowest RTP among the crash-style games
              currently on this platform, though the gap to the others is small.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Goal questions, answered" />
        <FaqAccordion items={goalFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('goal')} />

      <Section>
        <CtaBand
          title="Ready to try a round?"
          subtitle="Sign in or create an account on the official app to see the live Goal table."
        />
      </Section>
    </>
  );
}
