import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Hero } from '@/components/home/Hero';
import { StatsCounter } from '@/components/home/StatsCounter';
import { Benefits } from '@/components/home/Benefits';
import { HowItWorks } from '@/components/home/HowItWorks';
import { GamesShowcase } from '@/components/home/GamesShowcase';
import { CtaBand } from '@/components/home/CtaBand';
import { Section, SectionHeading } from '@/components/ui/Section';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { homeFaqs } from '@/lib/content/home';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game — Login, Register, Download, Wingo & Colour Prediction',
  description:
    'Independent Sikkim Game info hub: login & register steps, APK download, invite codes, gift codes, and Wingo & Colour Prediction guides in one place.',
  path: '/',
  keywords: ['Sikkim Game', 'Sikkim Game Login', 'Sikkim Game Register', 'Sikkim Game Download'],
});

export default function HomePage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }]} />
      <Hero />
      <StatsCounter />
      <Benefits />
      <HowItWorks />
      <GamesShowcase />
      <Section id="faq">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="Sikkim Game FAQs"
          subtitle="Quick answers to the most common questions about Sikkim Game."
        />
        <FaqAccordion items={homeFaqs} />
      </Section>
      <Section>
        <CtaBand />
      </Section>
    </>
  );
}
