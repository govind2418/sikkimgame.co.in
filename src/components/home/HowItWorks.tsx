import { Section, SectionHeading } from '@/components/ui/Section';
import { CtaButton } from '@/components/ui/Button';

const steps = [
  {
    step: '01',
    title: 'Download the App',
    body: 'Visit our Download page for the safest way to find the official Sikkim Game APK or web app link for your device.',
    href: '/download',
  },
  {
    step: '02',
    title: 'Register an Account',
    body: 'Follow our Register guide to complete sign-up on the official platform with your mobile number in under a minute.',
    href: '/register',
  },
  {
    step: '03',
    title: 'Add an Invite or Gift Code',
    body: 'Check our Invite Code and Gift Code pages to see how bonus codes work and where to apply them after login.',
    href: '/invite-code',
  },
  {
    step: '04',
    title: 'Explore Wingo & Colour Prediction',
    body: 'Read our Wingo and Colour Prediction guides to understand the basics before you start playing on the official app.',
    href: '/wingo',
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-t border-white/5 bg-navy-900/40">
      <SectionHeading
        eyebrow="Getting started"
        title="How to get started with Sikkim Game"
        subtitle="A simple four-step path from download to your first game round."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ step, title, body, href }) => (
          <div key={step} className="rounded-2xl border border-white/10 bg-navy-800/50 p-6">
            <span className="text-3xl font-extrabold text-royal-400">{step}</span>
            <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
            <CtaButton href={href} external={false} variant="ghost" size="md" className="mt-4 px-0">
              Learn more
            </CtaButton>
          </div>
        ))}
      </div>
    </Section>
  );
}
