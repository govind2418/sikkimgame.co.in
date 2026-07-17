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
import { UserPlusIcon } from '@/components/icons';
import { howToRegisterSteps, howToRegisterFaqs } from '@/lib/content/howToRegister';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Register Guide 2026 | Sign-Up & Invite Code',
  description:
    'Every screen of the Sikkim Game sign-up form explained: mobile number, OTP, password and the optional invite code field.',
  path: '/how-to-register',
  keywords: ['How to Register Sikkim Game', 'Sikkim Game Sign Up Guide'],
});

export default function HowToRegisterPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Register Guide 2026 | Sign-Up & Invite Code"
        description="Every screen of the Sikkim Game sign-up form explained: mobile number, OTP, password and the optional invite code field."
        path="/how-to-register"
      />
      <Breadcrumb
        items={[{ name: 'Home', path: '/' }, { name: 'How to Register', path: '/how-to-register' }]}
      />
      <PageHero
        eyebrow="Full Guide"
        title="How to register on Sikkim Game, screen by screen"
        intro="Seven steps that cover the entire sign-up form, including the two places most people get stuck: OTP delivery and the invite code field."
      />

      <Section>
        <SectionHeading eyebrow="Step-by-step" title="The complete registration walkthrough" />
        <div className="grid gap-5 sm:grid-cols-2">
          {howToRegisterSteps.map((step, index) => (
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
            <UserPlusIcon className="h-4 w-4" /> Start Registration
          </CtaButton>
          <CtaButton href="/invite-code" external={false} variant="secondary" size="lg">
            About Invite Codes
          </CtaButton>
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Registration questions, answered" />
        <FaqAccordion items={howToRegisterFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('howToRegister')} />

      <Section>
        <CtaBand
          title="Ready to walk through it yourself?"
          subtitle="Follow the steps above on the official sign-up screen."
        />
      </Section>
    </>
  );
}
