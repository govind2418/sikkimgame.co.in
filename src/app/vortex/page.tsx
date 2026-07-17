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
import { vortexFaqs } from '@/lib/content/vortex';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Vortex 2026 | Multiplier Game RTP Guide',
  description:
    'Sikkim Game Vortex explained: it is the same rising-multiplier crash mechanic as Aviator, vortex-themed, with a 96.79% RTP.',
  path: '/vortex',
  keywords: ['Sikkim Game Vortex', 'Sikkim Vortex RTP'],
});

export default function VortexPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Vortex 2026 | Multiplier Game RTP Guide"
        description="Sikkim Game Vortex explained: it is the same rising-multiplier crash mechanic as Aviator, vortex-themed, with a 96.79% RTP."
        path="/vortex"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Vortex', path: '/vortex' }]} />
      <PageHero
        eyebrow="Sikkim Game Vortex"
        title="Sikkim Game Vortex: Aviator's mechanic, vortex visual"
        intro="A rising-multiplier crash game wrapped in a spinning vortex theme instead of a plane. Real RTP: 96.79%."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          <Card>
            <ZapIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Same crash mechanic as Aviator</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              A multiplier climbs from 1.00x the moment the round starts. Cash out any time to
              bank it against your stake — miss the window before it randomly crashes and the
              stake is lost. The spinning vortex visual sits on top of the identical mechanic used
              by Aviator, Cricket and Goal.
            </p>
            <CtaButton href="/aviator" external={false} variant="ghost" size="md" className="mt-3 px-0">
              Read the full mechanic breakdown on our Aviator guide
            </CtaButton>
          </Card>
          <Card glass>
            <PercentIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">96.79% RTP</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Averaged across a large number of rounds, about 96.79% of money wagered on Vortex
              returns to players collectively — close to Chicken Road 2 (97.03%) and Aviator
              (96.55%), since all three share the same underlying crash-game structure.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Vortex questions, answered" />
        <FaqAccordion items={vortexFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('vortex')} />

      <Section>
        <CtaBand
          title="Ready to try a round?"
          subtitle="Sign in or create an account on the official app to see the live Vortex table."
        />
      </Section>
    </>
  );
}
