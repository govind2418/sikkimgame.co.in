import { Section, SectionHeading } from '@/components/ui/Section';
import { ScreenshotCard } from '@/components/ui/ScreenshotCard';
import lobbyImg from '../../../public/images/screenshots/sikkim-game-lobby.png';

export function PlatformShowcase() {
  return (
    <Section className="border-t border-white/5 bg-navy-900/40">
      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-center">
        <ScreenshotCard src={lobbyImg} alt="Sikkim Game official app lobby" caption="Official app lobby" />
        <div>
          <SectionHeading
            eyebrow="Inside the app"
            title="What the official Sikkim Game lobby actually looks like"
            subtitle="A real screenshot, not a mockup — so you know what to expect before you install anything."
          />
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
            The official Sikkim Game lobby leans hard into its signature look — a gold-chained,
            velvet-suited mascot presiding over the game selection screen like royalty on a
            throne of coins. Underneath the theatrics sits a genuinely simple layout: Hot Slots,
            Lottery, Original and Slots categories sit right at the top, with Aviator, Cricket
            and the rest of the recommended games one tap away. It is exactly this mix — a
            premium look with a straightforward menu underneath — that we try to demystify across
            every guide on this site.
          </p>
        </div>
      </div>
    </Section>
  );
}
