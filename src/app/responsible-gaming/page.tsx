import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageSchema } from '@/components/layout/PageSchema';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { relatedTo } from '@/lib/pages';
import { AlertTriangleIcon, ShieldIcon } from '@/components/icons';
import {
  responsibleGamingChecks,
  responsibleGamingWarningSigns,
  responsibleGamingFaqs,
} from '@/lib/content/responsibleGaming';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Responsible Gaming 2026 | Limits & Warning Signs',
  description:
    'Practical responsible gaming guidance for Sikkim Game players: budget and time limits, warning signs to watch for, and what to do if play stops feeling like entertainment.',
  path: '/responsible-gaming',
  keywords: ['Sikkim Game Responsible Gaming'],
});

export default function ResponsibleGamingPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Responsible Gaming 2026 | Limits & Warning Signs"
        description="Practical responsible gaming guidance for Sikkim Game players: budget and time limits, warning signs to watch for, and what to do if play stops feeling like entertainment."
        path="/responsible-gaming"
      />
      <Breadcrumb
        items={[{ name: 'Home', path: '/' }, { name: 'Responsible Gaming', path: '/responsible-gaming' }]}
      />
      <PageHero
        eyebrow="Responsible Gaming"
        title="Playing Sikkim Game responsibly"
        intro="Wingo, Colour Prediction and every other format on the official platform are chance-based, real-money products — not a skill game and not an income plan. Here is how to keep it entertainment, not a problem."
      />

      <Section>
        <SectionHeading eyebrow="Before you play" title="Three checks worth doing every time" />
        <div className="grid gap-5 sm:grid-cols-3">
          {responsibleGamingChecks.map((item) => (
            <Card key={item.title}>
              <ShieldIcon className="h-8 w-8 text-neon-400" />
              <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Know the signs" title="Warning signs worth taking seriously" />
        <Card glass className="max-w-3xl">
          <AlertTriangleIcon className="h-8 w-8 text-neon-400" />
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300">
            {responsibleGamingWarningSigns.map((sign) => (
              <li key={sign}>• {sign}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Noticing even one of these regularly is worth acting on early — before it turns into
            a bigger financial or personal problem. Most official platforms offer some form of
            deposit limit, cooling-off period, or self-exclusion in account settings; use it.
            Talking to someone you trust, or a local counselling service, helps too — you do not
            have to handle it alone.
          </p>
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Responsible gaming questions, answered" />
        <FaqAccordion items={responsibleGamingFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('responsibleGaming')} />
    </>
  );
}
