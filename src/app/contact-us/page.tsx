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
import { ShieldIcon } from '@/components/icons';
import { contactFaqs } from '@/lib/content/contact';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Sikkim Game 2026 | Support & Guide Hub',
  description:
    'Reach sikkimgame.co.in for content questions or corrections. For account and payment issues, use official in-app support instead.',
  path: '/contact-us',
  keywords: ['Contact Sikkim Game'],
});

export default function ContactPage() {
  return (
    <>
      <PageSchema
        title="Contact Sikkim Game 2026 | Support & Guide Hub"
        description="Reach sikkimgame.co.in for content questions or corrections. For account and payment issues, use official in-app support instead."
        path="/contact-us"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact-us' }]} />
      <PageHero
        eyebrow="Contact Sikkim Game"
        title="Get in touch about our Sikkim Game guides"
        intro="Spotted an outdated Sikkim Game guide or a broken link? Tell us below."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <h3 className="text-base font-semibold text-white">Email us</h3>
            <p className="mt-2 text-sm text-slate-300">
              For content corrections, suggestions, or general questions about this site.
            </p>
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="mt-4 inline-block text-sm font-semibold text-neon-400 hover:text-neon-300"
            >
              {SITE.contactEmail}
            </a>
          </Card>
          <Card glass>
            <ShieldIcon className="h-7 w-7 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Account or payment issue?</h3>
            <p className="mt-2 text-sm text-slate-300">
              We can&apos;t access or resolve account, deposit or withdrawal issues. Use the official
              app&apos;s in-app support for those.
            </p>
            <CtaButton variant="secondary" className="mt-4">
              Go to Official App
            </CtaButton>
          </Card>
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Contact — frequently asked questions" />
        <FaqAccordion items={contactFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('contact')} />

      <Section>
        <CtaBand />
      </Section>
    </>
  );
}
