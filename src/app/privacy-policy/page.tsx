import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageSchema } from '@/components/layout/PageSchema';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { relatedTo } from '@/lib/pages';
import { privacyFaqs, privacySections } from '@/lib/content/privacy';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Privacy Policy 2026',
  description:
    'How sikkimgame.co.in handles visitor data: what we collect, cookie use, and how outbound links to the official platform are treated.',
  path: '/privacy-policy',
  keywords: ['Sikkim Game Privacy Policy'],
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Privacy Policy 2026"
        description="How sikkimgame.co.in handles visitor data: what we collect, cookie use, and how outbound links to the official Sikkim Game platform are treated."
        path="/privacy-policy"
      />
      <Breadcrumb
        items={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }]}
      />
      <PageHero
        eyebrow="Legal"
        title="Sikkim Game Privacy Policy"
        intro="How this Sikkim Game guide site handles visitor information. This page does not cover the official Sikkim Game operator's own app or platform."
      />

      <Section>
        <div className="max-w-3xl space-y-8">
          {privacySections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{section.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Privacy Policy — frequently asked questions" />
        <FaqAccordion items={privacyFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('privacyPolicy')} />
    </>
  );
}
