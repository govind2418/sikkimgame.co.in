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
import { ZapIcon, ShieldIcon, PercentIcon } from '@/components/icons';
import { aviatorSteps, aviatorFaqs } from '@/lib/content/aviator';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Aviator 2026 | Multiplier & Cash-Out Guide',
  description:
    'Sikkim Game Aviator explained: how the rising multiplier and crash mechanic work, what the 96.55% RTP means, and how Cricket, Goal and Vortex use the same engine.',
  path: '/aviator',
  keywords: ['Sikkim Game Aviator', 'Sikkim Aviator RTP'],
});

export default function AviatorPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Aviator 2026 | Multiplier & Cash-Out Guide"
        description="Sikkim Game Aviator explained: how the rising multiplier and crash mechanic work, what the 96.55% RTP means, and how Cricket, Goal and Vortex use the same engine."
        path="/aviator"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Aviator', path: '/aviator' }]} />
      <PageHero
        eyebrow="Sikkim Game Aviator"
        title="Sikkim Game Aviator: cash out before it crashes"
        intro="A rising multiplier, a random crash point, and one decision every round — cash out now, or risk it for more. Real RTP: 96.55%."
      />

      <Section>
        <SectionHeading eyebrow="Format" title="How one round of Aviator works" />
        <div className="grid gap-5 sm:grid-cols-2">
          {aviatorSteps.map((step, index) => (
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
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="The numbers" title="What 96.55% RTP actually means" />
        <Card glass className="max-w-3xl">
          <PercentIcon className="h-8 w-8 text-neon-400" />
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Aviator on this platform currently shows a 96.55% RTP (Return to Player). Averaged
            across a very large number of rounds, about 96.55% of all money wagered comes back to
            players collectively — the remaining 3.45% is the built-in house edge. That figure
            says nothing about what happens on any single round you play; it only holds up over a
            large sample size.
          </p>
        </Card>
      </Section>

      <Section>
        <SectionHeading eyebrow="Same engine, different skin" title="Cricket, Goal and Vortex run on the same mechanic" />
        <div className="grid gap-5 sm:grid-cols-3">
          <Card>
            <ZapIcon className="h-7 w-7 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Cricket — 97.49% RTP</h3>
            <p className="mt-2 text-sm text-slate-300">Cricket-themed skin, identical crash mechanic.</p>
            <CtaButton href="/cricket" external={false} variant="ghost" size="md" className="mt-3 px-0">
              Read the Cricket guide
            </CtaButton>
          </Card>
          <Card>
            <ZapIcon className="h-7 w-7 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Goal — 96.08% RTP</h3>
            <p className="mt-2 text-sm text-slate-300">Football-themed skin, identical crash mechanic.</p>
            <CtaButton href="/goal" external={false} variant="ghost" size="md" className="mt-3 px-0">
              Read the Goal guide
            </CtaButton>
          </Card>
          <Card>
            <ZapIcon className="h-7 w-7 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Vortex — 96.79% RTP</h3>
            <p className="mt-2 text-sm text-slate-300">Vortex visual, identical crash mechanic.</p>
            <CtaButton href="/vortex" external={false} variant="ghost" size="md" className="mt-3 px-0">
              Read the Vortex guide
            </CtaButton>
          </Card>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-300">
          Chicken Road 2 (97.03% RTP) is related but not identical — it breaks the same rising-risk
          idea into discrete lanes with a difficulty setting instead of one continuous curve. See
          our{' '}
          <CtaButton href="/chicken-road-2" external={false} variant="ghost" size="md" className="px-0" showArrow={false}>
            Chicken Road 2 guide
          </CtaButton>{' '}
          for that mechanic.
        </p>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Play responsibly" title="Set your cash-out discipline before you start" />
        <Card glass className="max-w-3xl">
          <ShieldIcon className="h-8 w-8 text-neon-400" />
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            The pull to &quot;wait just a bit longer&quot; for a bigger multiplier is exactly how crash
            games catch people out. Using auto cash-out at a target you decide before the round
            starts removes the in-the-moment temptation. No pattern in past rounds predicts the
            next crash point — set a budget you can afford to lose in full, and stop at it.
          </p>
          <CtaButton href="/responsible-gaming" external={false} variant="secondary" size="md" className="mt-4">
            Responsible Gaming Guide
          </CtaButton>
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Aviator questions, answered" />
        <FaqAccordion items={aviatorFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('aviator')} />

      <Section>
        <CtaBand
          title="Ready to try a round?"
          subtitle="Sign in or create an account on the official app to see the live Aviator table."
        />
      </Section>
    </>
  );
}
