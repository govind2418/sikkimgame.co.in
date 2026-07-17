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
import { CoinsIcon, ShieldIcon } from '@/components/icons';
import { withdrawalSteps, withdrawalFaqs } from '@/lib/content/withdrawal';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Withdrawal 2026 | Bonus & Customer Care Guide',
  description:
    'A plain overview of how Sikkim Game withdrawals work: where to request one, typical processing time, and how to avoid withdrawal scams.',
  path: '/withdrawal',
  keywords: ['Sikkim Game Withdrawal', 'Sikkim Game Cashout'],
});

export default function WithdrawalPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Withdrawal 2026 | Bonus & Customer Care Guide"
        description="A plain overview of how Sikkim Game withdrawals work: where to request one, typical processing time, and how to avoid withdrawal scams."
        path="/withdrawal"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Withdrawal', path: '/withdrawal' }]} />
      <PageHero
        eyebrow="Withdrawal"
        title="How a Sikkim Game withdrawal typically works"
        intro="Every Sikkim Game withdrawal happens on the official platform, not here — this is a plain overview of the process, the usual holds, and what to check first."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Cashing out" title="The usual withdrawal flow" />
            <ol className="space-y-4">
              {withdrawalSteps.map((step, index) => (
                <li key={step.title} className="flex gap-3 rounded-xl border border-white/10 bg-navy-800/50 p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-royal-500/20 text-xs font-bold text-neon-300">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton variant="primary" size="lg">
                <CoinsIcon className="h-4 w-4" /> Open Wallet
              </CtaButton>
              <CtaButton href="/bonus" external={false} variant="secondary" size="lg">
                Check Bonus Terms First
              </CtaButton>
            </div>
          </div>
          <Card glass className="h-fit">
            <ShieldIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Before you request one</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Payout name matches your registered account name.</li>
              <li>• Any active bonus wagering condition is already cleared.</li>
              <li>• You&apos;re above the platform&apos;s current minimum amount.</li>
              <li>• No third party ever needs a fee to &quot;release&quot; funds.</li>
            </ul>
            <CtaButton href="/customer-care" external={false} variant="ghost" size="md" className="mt-4 px-0">
              Stuck? See Customer Care
            </CtaButton>
          </Card>
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Withdrawal questions, answered" />
        <FaqAccordion items={withdrawalFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('withdrawal')} />

      <Section>
        <CtaBand
          title="Ready to check your balance?"
          subtitle="Sign in to review your wallet and request a withdrawal from the official app."
        />
      </Section>
    </>
  );
}
