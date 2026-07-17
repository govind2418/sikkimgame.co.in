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
import { PhoneMockup } from '@/components/home/PhoneMockup';
import { WingoBoardIllustration } from '@/components/home/WingoBoard';
import { ColourWheelIllustration } from '@/components/home/ColourWheel';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { relatedTo } from '@/lib/pages';
import { ShieldIcon, GridIcon, PaletteIcon } from '@/components/icons';
import { lotteryGameFaqs } from '@/lib/content/lotteryGame';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Lottery 2026 | Wingo & Colour Prediction Guide',
  description:
    'What "Sikkim Game lottery" actually means, how Wingo and Colour Prediction rounds are drawn, and how to play the fast, chance-based formats responsibly.',
  path: '/lottery-game',
  keywords: ['Sikkim Game Lottery', 'Sikkim Game Lottery Game'],
});

export default function LotteryGamePage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Lottery 2026 | Wingo & Colour Prediction Guide"
        description='What "Sikkim Game lottery" actually means, how Wingo and Colour Prediction rounds are drawn, and how to play the fast, chance-based formats responsibly.'
        path="/lottery-game"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Lottery Game', path: '/lottery-game' }]} />
      <PageHero
        eyebrow="Lottery Game"
        title="Sikkim Game lottery: how the draw-style formats actually work"
        intro='"Sikkim Game lottery" is what most people type when searching for the quick-draw, colour-and-number formats behind Wingo and Colour Prediction. Here is what that phrase actually refers to, how a round is structured, and what to check before you play one.'
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <SectionHeading eyebrow="What the term means" title="One name, two lottery-style formats" />
            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                &quot;Sikkim Game&quot; is not a single lottery — it is the umbrella name players use for
                a set of round-based, real-money formats offered through the official app this
                site covers. When someone searches &quot;Sikkim Game lottery,&quot; they usually mean one
                of two things: Wingo, a rapid number-colour-size draw that closes every few
                minutes, or Colour Prediction, a simpler pick-a-colour format on its own short
                timer. Both work like a compressed lottery — you choose an outcome before a
                countdown ends, a result is drawn by the platform&apos;s own system, and payouts
                follow a fixed table shown before you commit anything.
              </p>
              <p>
                The comparison to a traditional lottery is useful for one reason: it sets
                expectations correctly. There is no skill edge, no pattern to study in past
                results, and no legitimate way to know a draw&apos;s outcome in advance. Every round
                is independent of the one before it, exactly like a lottery ball does not
                remember what was drawn last week. Channels claiming a &quot;formula&quot; or &quot;signal
                group&quot; for Sikkim Game lottery draws are selling something they cannot deliver
                — treat that claim itself as the biggest warning sign on this topic.
              </p>
              <p>
                One naming note worth repeating here: &quot;Sikkim&quot; in every version of this name —
                Sikkim Game, Sikkim Game lottery, Sikkim Game Wingo — refers only to how players
                commonly describe this game category. It does not imply backing from,
                partnership with, or endorsement by the Government of Sikkim or any state
                authority. Real-money gaming rules differ by Indian state, so confirm what is
                permitted where you live before treating any lottery-style round as more than
                entertainment.
              </p>
            </div>
          </div>
          <PhoneMockup />
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <SectionHeading eyebrow="The fast draw" title="Wingo: lottery speed, round after round" />
            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                Wingo is the format most players mean when they mention a Sikkim Game lottery
                draw with real speed behind it. Rounds run back-to-back on a short, fixed timer
                — often under three minutes — so results land far more often than a weekly or
                daily lottery ever could. Before each countdown ends, you choose one of three bet
                types: a single number from 0 through 9, that number&apos;s associated colour, or a
                size bracket covering roughly half the number range. When the timer hits zero,
                the platform draws a result, and every open bet settles instantly against the
                live payout table.
              </p>
              <p>
                That speed is exactly what makes Wingo feel different from a slower lottery, and
                it is also the detail that catches people out. Because a new round opens the
                moment the last one closes, it is easy to lose track of how many you have played
                in one sitting. Treat each round as a fresh, independent draw rather than a
                continuation of a winning or losing streak, and set a spending limit before you
                open the app rather than mid-session.
              </p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Card>
                <GridIcon className="h-7 w-7 text-neon-400" />
                <h3 className="mt-3 text-base font-semibold text-white">Three bet types</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Number, colour and size each carry their own odds, shown on the live payout
                  table before you confirm a bet.
                </p>
              </Card>
              <Card>
                <CtaButton href="/wingo" external={false} variant="ghost" size="md" className="h-full w-full justify-start px-4">
                  Read the full Wingo guide
                </CtaButton>
              </Card>
            </div>
          </div>
          <WingoBoardIllustration />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <SectionHeading eyebrow="The simple pick" title="Colour Prediction: a lottery pick, stripped down" />
            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                Colour Prediction strips the lottery format down even further. A small set of
                colour options appears before each countdown, you pick one, and the round locks
                and reveals a result the instant time runs out. There is no number or size bet
                layered on top — just a colour, a timer, and a payout multiplier shown before you
                confirm anything. That simplicity is why it gets compared to a lottery scratch
                card more than a Wingo-style draw.
              </p>
              <p>
                The mechanics underneath are identical to Wingo in the ways that matter most:
                outcomes come from the platform&apos;s own system, no colour is &quot;due&quot; after a run of
                the opposite result, and no third-party predictor can see the draw coming. Paid
                &quot;prediction formulas&quot; and VIP tipster channels built around Colour Prediction are
                some of the most common scams in this game category, usually asking for a
                subscription fee or, worse, your login and OTP to &quot;verify&quot; a supposed win.
                Neither request is ever legitimate.
              </p>
            </div>
            <div className="mt-6">
              <Card className="max-w-sm">
                <PaletteIcon className="h-7 w-7 text-neon-400" />
                <p className="mt-2 text-sm text-slate-300">
                  Full payout structure and a longer list of scam patterns in our
                </p>
                <CtaButton href="/colour-prediction" external={false} variant="ghost" size="md" className="mt-2 px-0">
                  Colour Prediction guide
                </CtaButton>
              </Card>
            </div>
          </div>
          <ColourWheelIllustration />
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Before you play" title="A chance game, not an income plan" />
        <Card glass className="max-w-3xl">
          <ShieldIcon className="h-8 w-8 text-neon-400" />
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Every format described here is a real-money, chance-based product — not a skill game
            and not a guaranteed income source. Before joining a round under any Sikkim Game
            lottery name, confirm you are 18 or older, confirm real-money gaming is permitted in
            your state, and decide a maximum spend you are comfortable losing entirely, because
            that is the realistic worst case on any single draw. If a session stops feeling like
            entertainment and starts feeling like chasing a loss, that is the point to stop, not
            to raise your stake.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <CtaButton href="/responsible-gaming" external={false} variant="secondary" size="md">
              Responsible Gaming Guide
            </CtaButton>
            <CtaButton href="/disclaimer" external={false} variant="ghost" size="md">
              Read Our Disclaimer
            </CtaButton>
          </div>
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Sikkim Game lottery questions, answered" />
        <FaqAccordion items={lotteryGameFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('lotteryGame')} />

      <Section>
        <CtaBand
          title="Ready to see a live round?"
          subtitle="Sign in or create an account on the official app, and set your limit before you start."
        />
      </Section>
    </>
  );
}
