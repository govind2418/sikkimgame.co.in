import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ZapIcon, ShieldIcon, FileTextIcon, PercentIcon, GridIcon, BookOpenIcon } from '@/components/icons';

const benefits = [
  {
    icon: FileTextIcon,
    title: 'APK Install, De-Risked',
    body: 'Our APK Guide walks through verifying the source, enabling installs safely, and avoiding the modified-file traps that circulate on file-sharing sites.',
  },
  {
    icon: ShieldIcon,
    title: 'We Say What We Are Not',
    body: 'Clearly labeled as an independent resource on every page — not the operator, not a government body, not a place that touches your money.',
  },
  {
    icon: ZapIcon,
    title: 'Built for Slow Connections',
    body: 'No heavy scripts, no autoplay video, no intrusive pop-ups — every guide is readable in seconds even on a patchy mobile network.',
  },
  {
    icon: PercentIcon,
    title: 'Bonus & Code Mechanics Explained',
    body: 'Our Bonus, Invite Code and Gift Code pages break down how each reward type is structured and where scams typically hide.',
  },
  {
    icon: GridIcon,
    title: 'Wingo & Colour Prediction, Demystified',
    body: 'Plain-language walkthroughs of round timers, bet types and payout structure — written for first-timers, not insiders.',
  },
  {
    icon: BookOpenIcon,
    title: 'Organised Around Real Questions',
    body: 'Every section maps to something players actually search for: login errors, sign-up steps, code redemption, game rules — one hub, not ten tabs.',
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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
