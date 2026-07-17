import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ShieldIcon, ZapIcon, GridIcon, BookOpenIcon } from '@/components/icons';

const benefits = [
  {
    icon: ShieldIcon,
    title: 'We Say What We Are Not',
    body: 'Every one of our 22 guides carries the same line: we never process deposits, withdrawals, passwords or KYC — that only ever happens inside the official operator\'s app. And despite the name, we have zero affiliation with the Government of Sikkim.',
  },
  {
    icon: ZapIcon,
    title: 'Built for Slow Connections',
    body: 'This site currently scores 100/100 on Google Lighthouse SEO and 97+/100 on Performance — no autoplay video, no bloated ad scripts, server responses under 40ms — so a guide still loads on a patchy mobile network.',
  },
  {
    icon: GridIcon,
    title: 'Wingo & Colour Prediction, With Real Numbers',
    body: 'We list the actual Green (1,3,7,9) / Red (2,4,6,8) / Violet (0,5) mapping, typical payouts — ~9x on a number, ~2x on colour, ~4.5x on Violet — and all four Wingo room speeds, not just "it\'s chance-based, be careful."',
  },
  {
    icon: BookOpenIcon,
    title: '22 Guides, One Hub',
    body: 'Login, Register, APK installs, Bonus, Withdrawal, Refer & Earn, Customer Care, Responsible Gaming and more — each page answers one specific search instead of one page trying to cover everything.',
  },
];

export function Benefits() {
  return (
    <Section id="benefits">
      <SectionHeading
        eyebrow="Why players land here"
        title="A calmer way to figure out Sikkim Game"
        subtitle="We built this hub to answer the question first and sell you nothing second."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {benefits.map(({ icon: Icon, title, body }) => (
          <Card key={title}>
            <Icon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
