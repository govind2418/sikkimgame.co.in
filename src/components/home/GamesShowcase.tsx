import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { CtaButton } from '@/components/ui/Button';
import { GridIcon, PaletteIcon } from '@/components/icons';

const games = [
  {
    icon: GridIcon,
    name: 'Wingo Game',
    body: 'A fast-paced number and colour guessing round where every result is generated on a fixed timer. Learn the format, terminology and result cycle.',
    href: '/wingo',
    cta: 'Read Wingo Guide',
  },
  {
    icon: PaletteIcon,
    name: 'Colour Prediction',
    body: 'Pick a colour before each round closes and see how payouts are structured. Understand the rules before you try it on the official app.',
    href: '/colour-prediction',
    cta: 'Read Colour Prediction Guide',
  },
];

export function GamesShowcase() {
  return (
    <Section id="games">
      <SectionHeading
        eyebrow="Popular game modes"
        title="Wingo & Colour Prediction, explained simply"
        subtitle="Two of the most searched Sikkim Game modes — here's what to know before you play."
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
