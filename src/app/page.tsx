import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Hero } from '@/components/home/Hero';
import { StatsCounter } from '@/components/home/StatsCounter';
import { Benefits } from '@/components/home/Benefits';
import { HowItWorks } from '@/components/home/HowItWorks';
import { GamesShowcase } from '@/components/home/GamesShowcase';
import { CtaBand } from '@/components/home/CtaBand';
import { Testimonials } from '@/components/home/Testimonials';
import { Section, SectionHeading } from '@/components/ui/Section';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { relatedTo } from '@/lib/pages';
import { homeFaqs } from '@/lib/content/home';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Zone — Sign In, Sign Up, APK & Bonus Code Guides',
  description:
    'Sikkim Game Zone: independent sign-in and sign-up help, APK setup, bonus/invite/gift code guides, and plain-English Wingo & Colour Prediction breakdowns.',
  path: '/',
  keywords: ['Sikkim Game Zone', 'Sikkim Game Login', 'Sikkim Game Register', 'Sikkim Game Download'],
});

export default function HomePage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }]} />
      <Hero />
      <StatsCounter />
      <HowItWorks />
      <Benefits />
      <GamesShowcase />
      <Testimonials />
      <Section id="faq">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="Quick answers before you start"
          subtitle="The questions we get asked most about sikkimgame.co.in and how it works."
        />
        <FaqAccordion items={homeFaqs} />
      </Section>
      <RelatedLinks keys={relatedTo('home')} />
      <Section>
        <CtaBand />
      </Section>
    </>
  );
}
