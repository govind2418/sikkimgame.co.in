import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { termsFaqs, termsSections } from '@/lib/content/terms';

export const metadata: Metadata = buildMetadata({
  title: 'Terms & Conditions',
  description:
    'Read the Terms & Conditions for using sikkimgame.in.net, an independent Sikkim Game information and affiliate resource.',
  path: '/terms',
  keywords: ['Sikkim Game Terms and Conditions'],
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Terms', path: '/terms' }]} />
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        intro="Please read these terms carefully before using sikkimgame.in.net. They apply only to this website, not the official Sikkim Game operator's platform."
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
        <SectionHeading eyebrow="FAQs" title="Terms & Conditions — Frequently Asked Questions" />
        <FaqAccordion items={termsFaqs} />
      </Section>
    </>
  );
}
