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
import { ShieldIcon, ZapIcon } from '@/components/icons';
import { wingoFaqs, wingoTimers, wingoPayouts } from '@/lib/content/wingo';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Wingo 2026 | Rules, Bet Types & Timer Guide',
  description:
    'Sikkim Game Wingo explained with real numbers: the Green/Red/Violet colour mapping, Big/Small split, typical payout multipliers, and the four round-timer options.',
  path: '/wingo',
  keywords: ['Sikkim Game Wingo', 'Sikkim Wingo Rules'],
});

export default function WingoPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Wingo 2026 | Rules, Bet Types & Timer Guide"
        description="Sikkim Game Wingo explained with real numbers: the Green/Red/Violet colour mapping, Big/Small split, typical payout multipliers, and the four round-timer options."
        path="/wingo"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Wingo', path: '/wingo' }]} />
      <PageHero
        eyebrow="Sikkim Game Wingo"
        title="Sikkim Game Wingo, decoded: numbers, colours and the clock"
        intro="Not just 'pick a number and hope' — Sikkim Game Wingo runs on a specific colour mapping and payout structure. Here's the actual mechanic behind Sikkim Game Wingo, with real figures, before you place anything."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <SectionHeading eyebrow="Format" title="The number-colour mapping behind every Sikkim Game Wingo round" />
            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                Every Sikkim Game Wingo round draws one number from 0 to 9, and that number
                carries a colour and a size along with it. In the standard mapping used across
                this game category, 1, 3, 7 and 9 come up Green; 2, 4, 6 and 8 come up Red; and 0
                and 5 are the two Violet numbers layered on top of Red and Green respectively.
                Size works on a separate split: 0 through 4 counts as Small, 5 through 9 counts as
                Big. A result of 7, for example, is simultaneously Green, Big, and just &quot;7&quot; for
                number-bet purposes — three ways the same Sikkim Game Wingo draw can pay out at
                once.
              </p>
              <p>
                Rounds queue back-to-back on a fixed timer with a visible period number, which is
                why Sikkim Game Wingo feels faster and more continuous than a traditional lottery
                draw. That same speed is exactly why a personal budget set before you start
                matters more here than in slower formats — see our full breakdown below before you
                set one.
              </p>
            </div>
          </div>
          <WingoBoardIllustration />
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="The numbers" title="What each bet type typically pays" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-slate-400">
                <th className="py-3 pr-4 font-semibold">Bet type</th>
                <th className="py-3 pr-4 font-semibold">Example</th>
                <th className="py-3 pr-4 font-semibold">Typical payout</th>
                <th className="py-3 font-semibold">Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {wingoPayouts.map((row) => (
                <tr key={row.bet}>
                  <td className="py-3 pr-4 font-medium text-white">{row.bet}</td>
                  <td className="py-3 pr-4">{row.example}</td>
                  <td className="py-3 pr-4 font-semibold text-neon-300">{row.payout}</td>
                  <td className="py-3 text-slate-400">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-slate-400">
          These are typical, genre-standard reference figures, not a quote from any specific
          operator&apos;s current table. The live payout screen shown before you confirm a bet always
          overrides anything written here.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Room speed" title="Four timer options, same underlying odds" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {wingoTimers.map((timer) => (
            <Card key={timer.label}>
              <span className="text-2xl font-extrabold text-royal-400">{timer.label}</span>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{timer.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Play responsibly" title="Set your limit before the first round" />
        <Card glass className="max-w-3xl">
          <ShieldIcon className="h-8 w-8 text-neon-400" />
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Because rounds move fast — especially in the 30 Sec room — it&apos;s easy to lose track of
            how many you&apos;ve played. Pick a maximum spend before you open the app and stop there,
            win or lose. The Violet payout looking bigger than Green or Red doesn&apos;t make it a
            better bet mathematically — it wins less often precisely because it pays more. Ignore
            anyone selling a paid &quot;Wingo trick&quot; — results come from the platform&apos;s own system
            and aren&apos;t beatable by a formula.
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
            <ZapIcon className="h-4 w-4 text-neon-400" />
            Full limit-setting and warning-sign guidance is in our Responsible Gaming page.
          </div>
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
