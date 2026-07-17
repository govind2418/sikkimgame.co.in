import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageSchema } from '@/components/layout/PageSchema';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { relatedTo } from '@/lib/pages';
import { termsFaqs, termsSections } from '@/lib/content/terms';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Terms & Conditions 2026',
  description:
    'Terms and Conditions for using sikkimgame.co.in, an independent Sikkim Game information and referral resource.',
  path: '/terms',
  keywords: ['Sikkim Game Terms and Conditions'],
});

export default function TermsPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Terms & Conditions 2026"
        description="Terms and Conditions for using sikkimgame.co.in, an independent Sikkim Game information and referral resource."
        path="/terms"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Terms', path: '/terms' }]} />
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        intro="Please read before using sikkimgame.co.in. These terms apply only to this website, not the official Sikkim Game operator's platform."
      />

      <Section>
        <div className="max-w-3xl space-y-8">
          {termsSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{section.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Terms & Conditions — frequently asked questions" />
        <FaqAccordion items={termsFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('terms')} />
    </>
  );
}
