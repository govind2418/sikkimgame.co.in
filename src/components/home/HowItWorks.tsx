import { Section, SectionHeading } from '@/components/ui/Section';
import { CtaButton } from '@/components/ui/Button';

const steps = [
  {
    step: '01',
    title: 'Get the App',
    body: 'Our How to Download guide covers finding the official APK or web app link and installing it without tripping Android security warnings.',
    href: '/how-to-download',
    linkText: 'Open How to Download',
  },
  {
    step: '02',
    title: 'Create Your Account',
    body: 'How to Register walks through the sign-up form field by field, including the OTP step most people rush through and regret.',
    href: '/how-to-register',
    linkText: 'Open How to Register',
  },
  {
    step: '03',
    title: 'Check Bonus & Codes',
    body: 'See our Bonus, Invite Code and Gift Code pages to understand what rewards exist and how they are typically redeemed.',
    href: '/bonus',
    linkText: 'Open Bonus Guide',
  },
  {
    step: '04',
    title: 'Learn the Game Modes',
    body: 'Read the Wingo and Colour Prediction guides before your first round so the timer, bet types and payouts make sense.',
    href: '/wingo',
    linkText: 'Open Wingo Guide',
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-t border-white/5 bg-navy-900/40">
      <SectionHeading
        eyebrow="Getting started"
        title="From zero to your first round in four steps"
        subtitle="Follow this order and you'll skip most of the confusion new players run into."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ step, title, body, href, linkText }) => (
          <div key={step} className="rounded-2xl border border-white/10 bg-navy-800/50 p-6">
            <span className="text-3xl font-extrabold text-royal-400">{step}</span>
            <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
            <CtaButton href={href} external={false} variant="ghost" size="md" className="mt-4 px-0">
              {linkText}
            </CtaButton>
          </div>
        ))}
      </div>
    </Section>
  );
}
