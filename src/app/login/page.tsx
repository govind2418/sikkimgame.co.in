import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { LoginIcon, ShieldIcon } from '@/components/icons';
import { loginFaqs, loginSteps } from '@/lib/content/login';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Login — Step-by-Step Sign In Guide',
  description:
    'Learn how to log in to Sikkim Game quickly and safely. Fix common login errors and find the official login link for app and web.',
  path: '/login',
  keywords: ['Sikkim Game Login', 'Sikkim Login', 'Sikkim Game Sign In', 'Sikkim Game Account'],
});

export default function LoginPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Login', path: '/login' }]} />
      <PageHero
        eyebrow="Sikkim Game Login"
        title="Sikkim Game Login: How to Sign In the Right Way"
        intro="Signing in to Sikkim Game — sometimes searched simply as Sikkim Login — only takes a few seconds once you know the correct steps. This guide walks you through logging in, fixing common errors, and keeping your account secure."
      />

      <Section>
        <SectionHeading eyebrow="Step-by-step" title="How to log in to Sikkim Game" />
        <div className="grid gap-5 sm:grid-cols-2">
          {loginSteps.map((step, index) => (
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
            <LoginIcon className="h-4 w-4" /> Go to Login
          </CtaButton>
          <CtaButton href={SITE.registerUrl} variant="secondary" size="lg">
            Need an account? Register
          </CtaButton>
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Stay secure" title="Sikkim Game login safety checklist" />
        <div className="grid gap-5 sm:grid-cols-2">
          <Card glass>
            <ShieldIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Only use official links</h3>
            <p className="mt-2 text-sm text-slate-300">
              Bookmark the official login link from our Download page instead of clicking links
              from unknown SMS, WhatsApp or social media messages promising bonus logins.
            </p>
          </Card>
          <Card glass>
            <ShieldIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Never share OTPs</h3>
            <p className="mt-2 text-sm text-slate-300">
              No genuine support agent will ever ask for your OTP, password, or full bank details
              over chat. Treat any such request as a scam attempt.
            </p>
          </Card>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-400">
          If your Sikkim Game login stops working after an app update, try clearing the app cache,
          reinstalling the latest APK from our{' '}
          <CtaButton href="/download" external={false} variant="ghost" size="md" className="px-0" showArrow={false}>
            Download page
          </CtaButton>
          , and confirming your internet connection is stable. Persistent issues are best resolved
          through official in-app support rather than third-party pages.
        </p>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Sikkim Game Login — Frequently Asked Questions" />
        <FaqAccordion items={loginFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Ready to sign in?"
          subtitle="Head to the official Sikkim Game login page, or register first if you're new."
        />
      </Section>
    </>
  );
}
