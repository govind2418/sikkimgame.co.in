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
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Invite Code — What It Does & Where It Goes',
  description:
    'What a Sikkim Game invite code actually does, where to enter it at sign-up, and how to spot a fake one.',
  path: '/invite-code',
  keywords: ['Sikkim Game Invite Code', 'Sikkim Game Referral Code'],
});

export default function InviteCodePage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Invite Code', path: '/invite-code' }]} />
      <PageHero
        eyebrow="Invite Code"
        title="Invite codes, explained without the jargon"
        intro="A short code, one field on the sign-up form, and a possible welcome bonus. Here's the full picture."
      />

      <Section>
        <SectionHeading eyebrow="The basics" title="How the invite system works" />
        <div className="grid gap-5 sm:grid-cols-3">
          <Card>
            <TicketIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">What it links</h3>
            <p className="mt-2 text-sm text-slate-300">
              It ties your new account to whoever shared the code, and may unlock a bonus for
              either side depending on the live promotion.
            </p>
          </Card>
          <Card>
            <UsersIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Where it goes</h3>
            <p className="mt-2 text-sm text-slate-300">
              Look for an Invite Code or Referral Code field on the sign-up screen — paste it
              exactly, no stray spaces.
            </p>
          </Card>
          <Card>
            <ShieldIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Staying safe</h3>
            <p className="mt-2 text-sm text-slate-300">
              A real invite code is always free to use. Anyone charging a fee or asking for an OTP
              isn&apos;t legitimate.
            </p>
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={SITE.registerUrl} variant="primary" size="lg">
            Sign Up With a Code
          </CtaButton>
          <CtaButton href="/gift-code" external={false} variant="secondary" size="lg">
            Looking for Gift Codes Instead?
          </CtaButton>
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Good to know" title="Invite code vs. gift code" />
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          People mix these up constantly since both are short strings typed into the app. An
          invite code is entered once, at sign-up, and tracks a referral. A gift code is redeemed
          afterward from a rewards menu to claim one specific bonus. See our{' '}
          <CtaButton href="/gift-code" external={false} variant="ghost" size="md" className="px-0" showArrow={false}>
            Gift Code guide
          </CtaButton>{' '}
          for that side of things, or our{' '}
          <CtaButton href="/bonus" external={false} variant="ghost" size="md" className="px-0" showArrow={false}>
            Bonus overview
          </CtaButton>{' '}
          for the bigger picture.
        </p>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Invite code questions, answered" />
        <FaqAccordion items={inviteCodeFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Have a code ready?"
          subtitle="Sign up now and enter it during registration to check for a bonus."
        />
      </Section>
    </>
  );
}
