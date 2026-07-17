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
import { cricketFaqs } from '@/lib/content/cricket';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Cricket 2026 | Multiplier Game RTP Guide',
  description:
    'Sikkim Game Cricket explained: it is the same rising-multiplier crash mechanic as Aviator, cricket-themed, with a 97.49% RTP.',
  path: '/cricket',
  keywords: ['Sikkim Game Cricket', 'Sikkim Cricket RTP'],
});

export default function CricketPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Cricket 2026 | Multiplier Game RTP Guide"
        description="Sikkim Game Cricket explained: it is the same rising-multiplier crash mechanic as Aviator, cricket-themed, with a 97.49% RTP."
        path="/cricket"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Cricket', path: '/cricket' }]} />
      <PageHero
        eyebrow="Sikkim Game Cricket"
        title="Sikkim Game Cricket: Aviator's mechanic, cricket theme"
        intro="Not a match simulator — a rising-multiplier crash game with cricket visuals. Real RTP: 97.49%."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          <Card>
            <ZapIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Same crash mechanic as Aviator</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              A multiplier climbs from 1.00x the moment the round starts. Cash out any time to
              bank it against your stake — miss the window before it randomly crashes and the
              stake is lost. Cricket-themed visuals sit on top of the identical mechanic used by
              Aviator, Goal and Vortex.
            </p>
            <CtaButton href="/aviator" external={false} variant="ghost" size="md" className="mt-3 px-0">
              Read the full mechanic breakdown on our Aviator guide
            </CtaButton>
          </Card>
          <Card glass>
            <PercentIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">97.49% RTP</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Averaged across a large number of rounds, about 97.49% of money wagered on Cricket
              returns to players collectively — the highest RTP among the crash-style games
              currently on this platform, though the gap to Aviator (96.55%) or Vortex (96.79%) is
              small.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Cricket questions, answered" />
        <FaqAccordion items={cricketFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('cricket')} />

      <Section>
        <CtaBand
          title="Ready to try a round?"
          subtitle="Sign in or create an account on the official app to see the live Cricket table."
        />
      </Section>
    </>
  );
}
