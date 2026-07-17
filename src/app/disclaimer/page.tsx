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
import { AlertTriangleIcon } from '@/components/icons';
import { disclaimerSections, disclaimerFaqs } from '@/lib/content/disclaimer';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Disclaimer 2026',
  description:
    'The full sikkimgame.co.in disclaimer: independence from the operator and the Government of Sikkim, financial risk, and affiliate relationships.',
  path: '/disclaimer',
  keywords: ['Sikkim Game Disclaimer'],
});

export default function DisclaimerPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Disclaimer 2026"
        description="The full sikkimgame.co.in disclaimer: independence from the Sikkim Game operator and the Government of Sikkim, financial risk, and affiliate relationships."
        path="/disclaimer"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Disclaimer', path: '/disclaimer' }]} />
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        intro="Please read this in full before treating anything on this site as advice about the official platform."
      />

      <Section>
        <div className="max-w-3xl space-y-8">
          {disclaimerSections.map((section) => (
            <div key={section.title} className="flex gap-4">
              <AlertTriangleIcon className="mt-1 h-6 w-6 shrink-0 text-neon-400" />
              <div>
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{section.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Disclaimer — frequently asked questions" />
        <FaqAccordion items={disclaimerFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('disclaimer')} />
    </>
  );
}
