import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { TicketIcon, ShieldIcon, UsersIcon } from '@/components/icons';
import { inviteCodeFaqs } from '@/lib/content/inviteCode';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Invite Code — How It Works & Where to Enter It',
  description:
    'Understand how the Sikkim Game invite code works, where to enter it during registration, and how to spot a genuine code versus a scam.',
  path: '/invite-code',
  keywords: ['Sikkim Game Invite Code', 'Sikkim Game Referral Code'],
});

export default function InviteCodePage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Invite Code', path: '/invite-code' }]} />
      <PageHero
        eyebrow="Sikkim Game Invite Code"
        title="Sikkim Game Invite Code: What It Is & How to Use It"
        intro="Invite codes connect new accounts to an existing player or promotion. Here's exactly how they work, where to enter one, and how to avoid invite code scams."
      />

      <Section>
        <SectionHeading eyebrow="How it works" title="Understanding the invite code system" />
        <div className="grid gap-5 sm:grid-cols-3">
          <Card>
            <TicketIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">What it does</h3>
            <p className="mt-2 text-sm text-slate-300">
              An invite code links your new account to the person or campaign that shared it,
              which may unlock a welcome bonus depending on current promotions.
            </p>
          </Card>
          <Card>
            <UsersIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Where to enter it</h3>
            <p className="mt-2 text-sm text-slate-300">
              Look for an &quot;Invite Code&quot; or &quot;Referral Code&quot; field on the registration screen and
              paste the code exactly as shared, without extra spaces.
            </p>
          </Card>
          <Card>
            <ShieldIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Staying safe</h3>
            <p className="mt-2 text-sm text-slate-300">
              A genuine invite code never requires payment to use. Ignore anyone who asks you to
              pay a fee or share OTPs to &quot;activate&quot; a code.
            </p>
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href="/register" external={false} variant="primary" size="lg">
            Register &amp; Add Invite Code
          </CtaButton>
          <CtaButton href="/gift-code" external={false} variant="secondary" size="lg">
            Looking for Gift Codes?
          </CtaButton>
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Good to know" title="Invite code vs. gift code" />
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          It is easy to confuse invite codes with gift codes since both are short text strings
          entered inside the app. An invite code is tied to registration and referral tracking,
          while a gift code is typically redeemed afterward from a rewards or promotions section
          to claim a specific bonus. See our{' '}
          <CtaButton href="/gift-code" external={false} variant="ghost" size="md" className="px-0" showArrow={false}>
            Gift Code guide
          </CtaButton>{' '}
          for that process.
        </p>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Sikkim Game Invite Code — Frequently Asked Questions" />
        <FaqAccordion items={inviteCodeFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Have an invite code ready?"
          subtitle="Register now and enter it during sign-up to check for available bonuses."
        />
      </Section>
    </>
  );
}
