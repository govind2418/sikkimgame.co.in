import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { UserPlusIcon, TicketIcon } from '@/components/icons';
import { registerFaqs, registerSteps } from '@/lib/content/register';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Register — Create Your Account in Minutes',
  description:
    'Step-by-step Sikkim Game registration guide: what details you need, how invite codes work, and how to sign up safely on the official platform.',
  path: '/register',
  keywords: ['Sikkim Game Register', 'Sikkim Game Sign Up', 'Sikkim Game New Account'],
});

export default function RegisterPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Register', path: '/register' }]} />
      <PageHero
        eyebrow="Sikkim Game Register"
        title="Sikkim Game Register: Create Your Account the Right Way"
        intro="New to Sikkim Game? This guide covers exactly what information you need, how the sign-up flow works, and how to use an invite code if you have one."
      />

      <Section>
        <SectionHeading eyebrow="Step-by-step" title="How to register on Sikkim Game" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
          <CtaButton variant="primary" size="lg">
            <UserPlusIcon className="h-4 w-4" /> Register Now
          </CtaButton>
          <CtaButton href="/invite-code" external={false} variant="secondary" size="lg">
            <TicketIcon className="h-4 w-4" /> Have an Invite Code?
          </CtaButton>
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Before you sign up" title="What to check before registering" />
        <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-slate-300">
          <p>
            Registration on Sikkim Game is designed to be quick, but a little preparation helps
            avoid delays. Make sure your phone can receive SMS OTPs, and double-check you are on
            the official domain linked from our <CtaButton href="/download" external={false} variant="ghost" size="md" className="px-0" showArrow={false}>Download page</CtaButton> before
            entering any personal details.
          </p>
          <p>
            You should be at least 18 years old to create an account, and you are responsible for
            confirming that real-money gaming is permitted in your state before you register or
            add funds. This site does not process registrations, payments, or withdrawals — all
            of that happens on the official operator&apos;s platform.
          </p>
        </div>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Sikkim Game Register — Frequently Asked Questions" />
        <FaqAccordion items={registerFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Create your Sikkim Game account today"
          subtitle="Registration takes less than a minute on the official platform."
        />
      </Section>
    </>
  );
}
