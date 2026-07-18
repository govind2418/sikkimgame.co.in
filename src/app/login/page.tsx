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
import { LoginIcon, ShieldIcon } from '@/components/icons';
import { loginFaqs, loginSteps } from '@/lib/content/login';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Login 2026 | Register & Download Official Guide',
  description:
    'A quick, clear guide to signing in to Sikkim Game — plus fixes for the login errors people run into most often.',
  path: '/login',
  keywords: ['Sikkim Game Login', 'Sikkim Game Sign In'],
});

export default function LoginPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Login 2026 | Register & Download Official Guide"
        description="A quick, clear guide to signing in to Sikkim Game — plus fixes for the login errors people run into most often."
        path="/login"
        howToSteps={loginSteps}
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Login', path: '/login' }]} />
      <PageHero
        eyebrow="Sign In"
        title="Signing in to Sikkim Game shouldn't be the hard part"
        intro="Most Sikkim Game sign-in problems trace back to one of four things. Here's the correct sequence, plus what to check first when Sikkim Game login doesn't work."
      />

      <Section>
        <SectionHeading eyebrow="Four steps" title="Signing in correctly" />
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
            <LoginIcon className="h-4 w-4" /> Sign In
          </CtaButton>
          <CtaButton href={SITE.registerUrl} variant="secondary" size="lg">
            New here? Create an account
          </CtaButton>
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Stay secure" title="Two habits worth keeping" />
        <div className="grid gap-5 sm:grid-cols-2">
          <Card glass>
            <ShieldIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Bookmark the real link</h3>
            <p className="mt-2 text-sm text-slate-300">
              Use the official link from our Download page rather than anything forwarded through
              SMS or WhatsApp promising bonus sign-ins.
            </p>
          </Card>
          <Card glass>
            <ShieldIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">OTPs are yours alone</h3>
            <p className="mt-2 text-sm text-slate-300">
              No real support agent will ever ask for your OTP, password, or full bank details in
              a chat. Assume it&apos;s a scam if they do.
            </p>
          </Card>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-400">
          If sign-in breaks right after an app update, clear the app cache or reinstall the latest
          build from our{' '}
          <CtaButton href="/download" external={false} variant="ghost" size="md" className="px-0" showArrow={false}>
            Download page
          </CtaButton>
          . Anything that persists is best solved through official in-app support, not a third-party page.
        </p>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Login questions, answered" />
        <FaqAccordion items={loginFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('login')} />

      <Section>
        <CtaBand
          title="Ready to sign in?"
          subtitle="Head to the official login screen, or create an account first if you're new."
        />
      </Section>
    </>
  );
}
