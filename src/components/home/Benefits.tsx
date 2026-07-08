import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ZapIcon, ShieldIcon, SmartphoneIcon, GiftIcon, UsersIcon, GridIcon } from '@/components/icons';

const benefits = [
  {
    icon: ZapIcon,
    title: 'Fast, No-Clutter Guides',
    body: 'Every guide loads instantly and gets straight to the point — no pop-ups, no autoplay video, no bloated pages slowing you down on mobile data.',
  },
  {
    icon: ShieldIcon,
    title: 'Independent & Transparent',
    body: 'We clearly label ourselves as an unofficial information resource, not the operator, so you always know exactly where your account and funds are handled.',
  },
  {
    icon: SmartphoneIcon,
    title: 'Step-by-Step Download Help',
    body: 'Clear, numbered instructions for installing the Android APK safely and finding the official app link without hunting through search results.',
  },
  {
    icon: GiftIcon,
    title: 'Invite & Gift Code Explained',
    body: 'Understand how invite codes and gift codes are structured, where to enter them, and what to check before trusting a code shared online.',
  },
  {
    icon: GridIcon,
    title: 'Wingo & Colour Prediction 101',
    body: 'Plain-language explanations of how Wingo rounds and Colour Prediction results are structured, so you go in understanding the basics.',
  },
  {
    icon: UsersIcon,
    title: 'Built for Sikkim Game Users',
    body: 'Content is organized around the exact questions players search for — login issues, registration steps, codes, and game rules — in one hub.',
  },
];

export function Benefits() {
  return (
    <Section id="benefits">
      <SectionHeading
        eyebrow="Why use this hub"
        title="A cleaner way to find Sikkim Game information"
        subtitle="We built this site to be fast and clear first — every page is designed to help you get to the official platform informed, not confused."
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
