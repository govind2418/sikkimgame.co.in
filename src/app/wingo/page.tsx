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
import { WingoBoardIllustration } from '@/components/home/WingoBoard';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { relatedTo } from '@/lib/pages';
import { ShieldIcon, GridIcon, ZapIcon } from '@/components/icons';
import { wingoFaqs } from '@/lib/content/wingo';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Wingo 2026 | Rules, Bet Types & Timer Guide',
  description:
    'How Sikkim Game Wingo actually works: number, colour and size bets, round timing, and a few responsible-play habits worth keeping.',
  path: '/wingo',
  keywords: ['Sikkim Game Wingo', 'Sikkim Wingo Rules'],
});

export default function WingoPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Wingo 2026 | Rules, Bet Types & Timer Guide"
        description="How Sikkim Game Wingo actually works: number, colour and size bets, round timing, and a few responsible-play habits worth keeping."
        path="/wingo"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Wingo', path: '/wingo' }]} />
      <PageHero
        eyebrow="Wingo"
        title="Wingo, decoded: numbers, colours and the clock"
        intro="Wingo is one of the most-searched Sikkim Game modes. Here's what a round actually looks like, before you place anything."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <SectionHeading eyebrow="Format" title="What happens in one round" />
            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                A round centers on a set of numbers, usually 0 through 9. Before the countdown
                hits zero, you pick a bet type — a single number, its associated colour, or a size
                bracket like big (roughly 5–9) or small (roughly 0–4). When the clock runs out, a
                result number drops, and payouts settle based on which bet types line up.
              </p>
              <p>
                Rounds queue back-to-back on a short timer, which is exactly why Wingo feels
                faster and more continuous than a traditional lottery draw. That same speed is
                the reason a personal budget set before you start matters more here than in
                slower formats.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Card>
                <GridIcon className="h-7 w-7 text-neon-400" />
                <h3 className="mt-3 text-base font-semibold text-white">Three bet types</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Number, colour and size each carry their own odds — the app shows the live
                  payout table before you confirm anything.
                </p>
              </Card>
              <Card>
                <ZapIcon className="h-7 w-7 text-neon-400" />
                <h3 className="mt-3 text-base font-semibold text-white">Back-to-back rounds</h3>
                <p className="mt-2 text-sm text-slate-300">
                  A new round opens the moment the last one closes, so results arrive in quick
                  succession.
                </p>
              </Card>
            </div>
          </div>
          <WingoBoardIllustration />
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Play responsibly" title="Set your limit before the first round" />
        <Card glass className="max-w-3xl">
          <ShieldIcon className="h-8 w-8 text-neon-400" />
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Because rounds move fast, it&apos;s easy to lose track of how many you&apos;ve played. Pick a
            maximum spend before you open the app and stop there, win or lose. Ignore anyone
            selling a paid &quot;Wingo trick&quot; — results come from the platform&apos;s own system and
            aren&apos;t beatable by a formula.
          </p>
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Wingo questions, answered" />
        <FaqAccordion items={wingoFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('wingo')} />

      <Section>
        <CtaBand
          title="Ready to try a round?"
          subtitle="Sign in or create an account on the official app to see the live Wingo table."
        />
        <div className="mt-6 flex justify-center">
          <CtaButton href="/colour-prediction" external={false} variant="ghost" showArrow>
            Also see: Colour Prediction rules
          </CtaButton>
        </div>
      </Section>
    </>
  );
}
