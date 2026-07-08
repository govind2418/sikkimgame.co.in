import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { CtaButton } from '@/components/ui/Button';
import { GridIcon, PaletteIcon } from '@/components/icons';

const games = [
  {
    icon: GridIcon,
    name: 'Wingo',
    body: 'A rapid-fire number, colour and size format where every round closes on a fixed timer. We break down bet types and how results are revealed.',
    href: '/wingo',
    cta: 'Read the Wingo Guide',
  },
  {
    icon: PaletteIcon,
    name: 'Colour Prediction',
    body: 'Choose a colour before the round locks and see how the payout table is typically structured — explained before you risk anything.',
    href: '/colour-prediction',
    cta: 'Read the Colour Prediction Guide',
  },
];

export function GamesShowcase() {
  return (
    <Section id="games">
      <SectionHeading
        eyebrow="Game modes"
        title="Wingo and Colour Prediction, in plain English"
        subtitle="The two formats most people search for — here's the mechanics, not the marketing."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {games.map(({ icon: Icon, name, body, href, cta }) => (
          <Card key={name} glass className="flex flex-col">
            <Icon className="h-10 w-10 text-neon-400" />
            <h3 className="mt-4 text-xl font-semibold text-white">{name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">{body}</p>
            <CtaButton href={href} external={false} variant="secondary" className="mt-5 self-start">
              {cta}
            </CtaButton>
          </Card>
        ))}
      </div>
    </Section>
  );
}
