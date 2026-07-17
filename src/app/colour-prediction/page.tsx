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
import { ColourWheelIllustration } from '@/components/home/ColourWheel';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { relatedTo } from '@/lib/pages';
import { ShieldIcon, AlertTriangleIcon } from '@/components/icons';
import { colourPredictionFaqs, colourPredictionPayouts } from '@/lib/content/colourPrediction';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Colour Prediction 2026 | Rules & Payout Guide',
  description:
    'Sikkim Game Colour Prediction with real numbers: the Green/Red/Violet hit rates, typical payout multipliers, and why the trend table cannot predict the next result.',
  path: '/colour-prediction',
  keywords: ['Sikkim Game Colour Prediction', 'Sikkim Colour Prediction Rules'],
});

export default function ColourPredictionPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Colour Prediction 2026 | Rules & Payout Guide"
        description="Sikkim Game Colour Prediction with real numbers: the Green/Red/Violet hit rates, typical payout multipliers, and why the trend table cannot predict the next result."
        path="/colour-prediction"
      />
      <Breadcrumb
        items={[
          { name: 'Home', path: '/' },
          { name: 'Colour Prediction', path: '/colour-prediction' },
        ]}
      />
      <PageHero
        eyebrow="Sikkim Game Colour Prediction"
        title="Sikkim Game Colour Prediction, without the sales pitch"
        intro="One of the most-searched Sikkim Game modes, broken down honestly — including the parts the scam pages won't tell you about Sikkim Game Colour Prediction."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <SectionHeading eyebrow="Mechanics" title="The same draw as Sikkim Game Wingo, without the number bet" />
            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                Sikkim Game Colour Prediction runs on the same underlying 0–9 number draw used in
                Sikkim Game Wingo — it just hides the number bet and leaves you choosing Green,
                Red, or Violet. A number is drawn on a fixed timer; 1, 3, 7 and 9 land as Green, 2,
                4, 6 and 8 land as Red, and the two remaining numbers, 0 and 5, land as Violet.
                Because Green and Red each cover four numbers while Violet covers only two, Violet
                pays a higher multiplier to offset how much less often it actually hits.
              </p>
              <p>
                Timer length, minimum bet and the exact multipliers are set by the official
                platform and can shift over time — treat the figures below as typical reference
                points, not a live quote, and always check the payout screen shown right before
                you confirm a bet.
              </p>
            </div>
          </div>
          <ColourWheelIllustration />
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="The numbers" title="Hit rate and typical payout, by colour" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-slate-400">
                <th className="py-3 pr-4 font-semibold">Colour</th>
                <th className="py-3 pr-4 font-semibold">Hit rate</th>
                <th className="py-3 font-semibold">Typical payout</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {colourPredictionPayouts.map((row) => (
                <tr key={row.colour}>
                  <td className="py-3 pr-4 font-medium text-white">{row.colour}</td>
                  <td className="py-3 pr-4">{row.hitRate}</td>
                  <td className="py-3 font-semibold text-neon-300">{row.payout}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Read this first" title="The trend table isn't a prediction tool" />
        <div className="grid gap-5 sm:grid-cols-2">
          <Card glass>
            <AlertTriangleIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Past results don&apos;t owe you anything</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Most apps show a history or trend table of the last several rounds. Seeing five
              Reds in a row and betting Green because it feels &quot;due&quot; is the gambler&apos;s fallacy —
              each draw is independent, so the table has zero predictive weight on the next result.
            </p>
          </Card>
          <Card glass>
            <ShieldIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">The scam pattern in this category</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Paid &quot;prediction formulas,&quot; &quot;VIP signal groups&quot; and bots claiming guaranteed
              colour picks exist to take money or account details from you, not to help you win.
              Never hand over your login, OTP, or banking details to any such group.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Colour Prediction questions, answered" />
        <FaqAccordion items={colourPredictionFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('colourPrediction')} />

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
