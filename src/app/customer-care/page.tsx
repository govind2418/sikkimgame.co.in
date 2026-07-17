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
import { HeadsetIcon, FileTextIcon, ShieldIcon } from '@/components/icons';
import { customerCareFaqs } from '@/lib/content/customerCare';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Customer Care 2026 | Support & Withdrawal Guide',
  description:
    'How to reach official Sikkim Game customer care for account, deposit or withdrawal issues, and what sikkimgame.co.in can and cannot help with.',
  path: '/customer-care',
  keywords: ['Sikkim Game Customer Care', 'Sikkim Game Support'],
});

export default function CustomerCarePage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Customer Care 2026 | Support & Withdrawal Guide"
        description="How to reach official Sikkim Game customer care for account, deposit or withdrawal issues, and what sikkimgame.co.in can and cannot help with."
        path="/customer-care"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Customer Care', path: '/customer-care' }]} />
      <PageHero
        eyebrow="Customer Care"
        title="Getting help from official Sikkim Game customer care"
        intro="For Sikkim Game account, deposit or withdrawal issues, official in-app support is the only place that can actually help. Here's how to reach Sikkim Game support and what to have ready."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-3">
          <Card>
            <HeadsetIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">In-app support</h3>
            <p className="mt-2 text-sm text-slate-300">
              Look for Support, Help, or Live Chat under your profile menu inside the official
              app — that&apos;s the operator&apos;s own channel.
            </p>
          </Card>
          <Card>
            <FileTextIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">What to have ready</h3>
            <p className="mt-2 text-sm text-slate-300">
              Your registered mobile number, roughly when the issue happened, and a transaction
              ID or screenshot if money is involved.
            </p>
          </Card>
          <Card>
            <ShieldIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">What we can&apos;t do</h3>
            <p className="mt-2 text-sm text-slate-300">
              sikkimgame.co.in is independent and has no access to accounts or funds. Our own{' '}
              <CtaButton href="/contact-us" external={false} variant="ghost" size="md" className="px-0" showArrow={false}>
                Contact page
              </CtaButton>{' '}
              is for site content only.
            </p>
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton variant="primary" size="lg">
            Open Official Support
          </CtaButton>
          <CtaButton href="/withdrawal" external={false} variant="secondary" size="lg">
            Withdrawal Issue?
          </CtaButton>
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Customer care questions, answered" />
        <FaqAccordion items={customerCareFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('customerCare')} />

      <Section>
        <CtaBand />
      </Section>
    </>
  );
}
