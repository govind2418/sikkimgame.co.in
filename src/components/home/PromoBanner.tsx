import Image from 'next/image';
import { Section, SectionHeading } from '@/components/ui/Section';
import bannerImg from '../../../public/images/promo/best-gaming-platform-campaign-banner.jpg';

export function PromoBanner() {
  return (
    <Section className="border-t border-white/5 bg-navy-900/40">
      <div className="overflow-hidden rounded-3xl border border-amber-400/30 shadow-[0_0_0_1px_rgba(251,191,36,0.12),0_0_44px_-10px_rgba(251,191,36,0.4)]">
        <Image
          src={bannerImg}
          alt="Sikkim Game promotional campaign banner — one of the best gaming platforms in India 2025"
          className="h-auto w-full"
          placeholder="blur"
        />
      </div>
      <div className="mt-6 max-w-2xl">
        <SectionHeading
          eyebrow="Welcome"
          title="Welcome to Sikkim Game"
          subtitle="Sikkim Game is a modern online gaming platform that brings together engaging gameplay, a user-friendly interface, and exciting digital entertainment in one place. Whether you're exploring the platform for the first time or returning to discover new features, Sikkim Game is designed to provide a smooth and enjoyable experience across both mobile and desktop devices."
        />
        <p className="text-sm leading-relaxed text-slate-300">
          From interactive games to a streamlined account system, Sikkim Game offers a simple way
          to access its services while maintaining fast performance and intuitive navigation. The
          platform is suitable for both new users who are just getting started and experienced
          players looking for a convenient gaming experience.
        </p>
      </div>
    </Section>
  );
}
