import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { GiftIcon, ShieldIcon } from '@/components/icons';
import { giftCodeFaqs } from '@/lib/content/giftCode';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Gift Code — How to Redeem Bonus Codes',
  description:
    'Learn how Sikkim Game gift codes work, where to redeem them in the app, and how to tell a real code from a scam.',
  path: '/gift-code',
  keywords: ['Sikkim Game Gift Code', 'Sikkim Game Redeem Code'],
});

const redeemSteps = [
  'Open the official Sikkim Game app and log in to your account.',
  'Navigate to the Rewards, Promotions, or Redeem Code section.',
  'Enter the gift code exactly as shared, with correct capitalisation and no spaces.',
  'Confirm the redemption and check your balance or rewards tab for the bonus.',
];

export default function GiftCodePage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Gift Code', path: '/gift-code' }]} />
      <PageHero
        eyebrow="Sikkim Game Gift Code"
        title="Sikkim Game Gift Code: How to Redeem It Correctly"
        intro="Gift codes unlock bonus rewards when redeemed correctly. Here's how the redemption process works and how to avoid fake code scams."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Redemption steps" title="How to redeem a gift code" />
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
                <GiftIcon className="h-4 w-4" /> Open App &amp; Redeem
              </CtaButton>
              <CtaButton href="/invite-code" external={false} variant="secondary" size="lg">
                Invite Code Guide
              </CtaButton>
            </div>
          </div>
          <Card glass className="h-fit">
            <ShieldIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Spotting a fake gift code offer</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Asked to pay a fee to &quot;activate&quot; the code — always a red flag.</li>
              <li>• Asked for your password or OTP to &quot;verify&quot; the code — never legitimate.</li>
              <li>• Promises of guaranteed huge winnings tied to a single code.</li>
              <li>• Links sent through random SMS or social media DMs.</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Sikkim Game Gift Code — Frequently Asked Questions" />
        <FaqAccordion items={giftCodeFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Got a gift code to redeem?"
          subtitle="Log in to the official app and redeem it from the rewards section."
        />
      </Section>
    </>
  );
}
