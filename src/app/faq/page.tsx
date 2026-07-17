import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageSchema } from '@/components/layout/PageSchema';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { relatedTo } from '@/lib/pages';
import { faqGroups } from '@/lib/content/faq';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game FAQ 2026 | Login, Register & Bonus Questions',
  description:
    'Every common Sikkim Game question grouped by topic: accounts, bonuses and codes, game modes, and safety and legality.',
  path: '/faq',
  keywords: ['Sikkim Game FAQ', 'Sikkim Game Questions'],
});

export default function FaqPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game FAQ 2026 | Login, Register & Bonus Questions"
        description="Every common Sikkim Game question grouped by topic: accounts, bonuses and codes, game modes, and safety and legality."
        path="/faq"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]} />
      <PageHero
        eyebrow="Sikkim Game FAQ"
        title="Every Sikkim Game question we get, grouped by topic"
        intro="Can't find what you need about Sikkim Game here? The Contact page reaches us directly for anything we have missed."
      />

      {faqGroups.map((group, index) => (
        <Section
          key={group.category}
          id={index === 0 ? 'faq' : undefined}
          className={index % 2 === 1 ? 'border-t border-white/5 bg-navy-900/40' : undefined}
        >
          <SectionHeading eyebrow="Topic" title={group.category} />
          <FaqAccordion items={group.items} />
        </Section>
      ))}

      <RelatedLinks keys={relatedTo('faq')} />

      <Section>
        <CtaBand />
      </Section>
    </>
  );
}
