import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { ColourWheelIllustration } from '@/components/home/ColourWheel';
import { ShieldIcon, ZapIcon, GridIcon } from '@/components/icons';
import { colourPredictionFaqs } from '@/lib/content/colourPrediction';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Colour Prediction — How Rounds Really Work',
  description:
    'A clear, no-hype explanation of Sikkim Game Colour Prediction rounds, payouts, and the scam patterns to watch for.',
  path: '/colour-prediction',
  keywords: ['Sikkim Game Colour Prediction', 'Sikkim Colour Prediction Rules'],
});

export default function ColourPredictionPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: 'Home', path: '/' },
          { name: 'Colour Prediction', path: '/colour-prediction' },
        ]}
      />
      <PageHero
        eyebrow="Colour Prediction"
        title="Colour Prediction, without the sales pitch"
        intro="One of the most-searched Sikkim Game modes, broken down honestly — including the parts the scam pages won't tell you."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <SectionHeading eyebrow="Mechanics" title="What one round looks like" />
            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                A small set of colour options sits on screen before each countdown starts. Pick
                one before it hits zero, and the round locks and reveals a result the instant time
                runs out. A winning pick returns a multiple of your stake based on the platform&apos;s
                live payout table; other picks lose the stake.
              </p>
              <p>
                Colour options, timer length, minimum bet and multipliers are all set by the
                official platform and can shift over time — treat this page, and any other
                third-party explainer, as background context rather than a live rulebook.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Card>
                <ZapIcon className="h-7 w-7 text-neon-400" />
                <h3 className="mt-3 text-base font-semibold text-white">Quick round cycles</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Short, fixed timers mean results land far faster than a traditional lottery
                  draw.
                </p>
              </Card>
              <Card>
                <GridIcon className="h-7 w-7 text-neon-400" />
                <h3 className="mt-3 text-base font-semibold text-white">Pure chance</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Outcomes come from the platform&apos;s own system — no reading of past results
                  reliably predicts the next one.
                </p>
              </Card>
            </div>
          </div>
          <ColourWheelIllustration />
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Read this first" title="The scam pattern in this game category" />
        <Card glass className="max-w-3xl">
          <ShieldIcon className="h-8 w-8 text-neon-400" />
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Paid &quot;prediction formulas&quot;, &quot;VIP signal groups&quot; and bots claiming guaranteed
            colour picks are extremely common around this game type. None of them can reliably
            beat a chance-based system — they exist to take money or account details from you,
            not to help you win. Never hand over your login, OTP, or banking details to any such
            group.
          </p>
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Colour Prediction questions, answered" />
        <FaqAccordion items={colourPredictionFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Ready to try a round?"
          subtitle="Sign in or register on the official app, and set a personal limit before you start."
        />
        <div className="mt-6 flex justify-center">
          <CtaButton href="/wingo" external={false} variant="ghost" showArrow>
            Also see: Wingo rules
          </CtaButton>
        </div>
      </Section>
    </>
  );
}
