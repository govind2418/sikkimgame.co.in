import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { relatedTo } from '@/lib/pages';
import { PercentIcon, ShieldIcon } from '@/components/icons';
import { giftCodeFaqs } from '@/lib/content/giftCode';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Gift Code — Redeem It the Right Way',
  description:
    'How Sikkim Game gift codes work, exactly where to redeem them, and the warning signs of a fake code offer.',
  path: '/gift-code',
  keywords: ['Sikkim Game Gift Code', 'Sikkim Game Redeem Code'],
});

const redeemSteps = [
  'Sign in to the official app.',
  'Open the Rewards, Promotions, or Redeem Code section.',
  'Type the code exactly as shared — capitalisation and spacing matter.',
  'Confirm, then check your balance or rewards tab for the credit.',
];

export default function GiftCodePage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Gift Code', path: '/gift-code' }]} />
      <PageHero
        eyebrow="Gift Codes"
        title="Redeeming a Sikkim Game gift code, step by step"
        intro="Four quick steps to claim a reward code — plus how to tell a real one from a scam attempt."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Redemption" title="How to redeem your code" />
            <ol className="space-y-4">
              {redeemSteps.map((step, index) => (
                <li key={step} className="flex gap-3 rounded-xl border border-white/10 bg-navy-800/50 p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-royal-500/20 text-xs font-bold text-neon-300">
                    {index + 1}
                  </span>
                  <p className="text-sm text-slate-300">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton variant="primary" size="lg">
                <PercentIcon className="h-4 w-4" /> Open App &amp; Redeem
              </CtaButton>
              <CtaButton href="/bonus" external={false} variant="secondary" size="lg">
                See All Bonus Types
              </CtaButton>
            </div>
          </div>
          <Card glass className="h-fit">
            <ShieldIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Signs of a fake code offer</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Asked to pay a fee to &quot;unlock&quot; the code.</li>
              <li>• Asked for your password or OTP to &quot;confirm&quot; it.</li>
              <li>• Guarantees a huge win tied to one code.</li>
              <li>• Sent through an unsolicited SMS or DM.</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Gift code questions, answered" />
        <FaqAccordion items={giftCodeFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('giftCode')} />

      <Section>
        <CtaBand
          title="Got a code to redeem?"
          subtitle="Sign in to the official app and claim it from the rewards section."
        />
      </Section>
    </>
  );
}
