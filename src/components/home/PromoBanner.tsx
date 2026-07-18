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
          eyebrow="What the marketing looks like"
          title="The official campaign creative, for context"
          subtitle="This is the platform's own ad artwork, not an independent endorsement from us — we're showing it so you recognise it when you see it elsewhere, and can compare the pitch against the plain-English guides on this site."
        />
      </div>
    </Section>
  );
}
