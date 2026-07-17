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
import { UserPlusIcon, TicketIcon } from '@/components/icons';
import { registerFaqs, registerSteps } from '@/lib/content/register';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Register 2026 | Login & Download Official Guide',
  description:
    'Quick Sikkim Game sign-up overview: what you need, how invite codes fit in, and what to check before you register.',
  path: '/register',
  keywords: ['Sikkim Game Register', 'Sikkim Game Sign Up'],
});

export default function RegisterPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Register 2026 | Login & Download Official Guide"
        description="Quick Sikkim Game sign-up overview: what you need, how invite codes fit in, and what to check before you register."
        path="/register"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Register', path: '/register' }]} />
      <PageHero
        eyebrow="Sign Up"
        title="Create your Sikkim Game account in under a minute"
        intro="A short overview of what the Sikkim Game sign-up form asks for. Want every screen walked through in detail? See our full How to Register on Sikkim Game guide."
      />

      <Section>
        <SectionHeading eyebrow="At a glance" title="What sign-up involves" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {registerSteps.map((step, index) => (
            <Card key={step.title}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-royal-500/20 text-sm font-bold text-neon-300">
                  {index + 1}
                </span>
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{step.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={SITE.registerUrl} variant="primary" size="lg">
            <UserPlusIcon className="h-4 w-4" /> Create Account
          </CtaButton>
          <CtaButton href="/how-to-register" external={false} variant="secondary" size="lg">
            Full Step-by-Step Guide
          </CtaButton>
          <CtaButton href="/invite-code" external={false} variant="ghost" size="lg">
            <TicketIcon className="h-4 w-4" /> Have an invite code?
          </CtaButton>
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Before you tap register" title="Two quick checks" />
        <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-slate-300">
          <p>
            Confirm your phone can receive SMS OTPs, and make sure you&apos;re on the official domain
            reached through our{' '}
            <CtaButton href="/how-to-download" external={false} variant="ghost" size="md" className="px-0" showArrow={false}>
              How to Download
            </CtaButton>{' '}
            page before typing in anything personal.
          </p>
          <p>
            You need to be 18 or older, and it&apos;s on you to confirm real-money gaming is allowed
            where you live. This site never processes sign-ups, payments, or withdrawals — that
            all happens on the official operator&apos;s own platform.
          </p>
        </div>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Sign-up questions, answered" />
        <FaqAccordion items={registerFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('register')} />

      <Section>
        <CtaBand
          title="Set up your account today"
          subtitle="Sign-up takes under a minute on the official platform."
        />
      </Section>
    </>
  );
}
