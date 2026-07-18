import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageSchema } from '@/components/layout/PageSchema';
import { Hero } from '@/components/home/Hero';
import { TableOfContents } from '@/components/home/TableOfContents';
import { StatsCounter } from '@/components/home/StatsCounter';
import { QuickFacts } from '@/components/home/QuickFacts';
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
  title: 'Sikkim Game 2026 | Login, Register & Download Guide',
  description:
    'Sikkim Game: independent sign-in and sign-up help, APK setup, bonus/invite/gift code guides, and plain-English Wingo & Colour Prediction breakdowns.',
  path: '/',
  keywords: ['Sikkim Game Login', 'Sikkim Game Register', 'Sikkim Game Download'],
});

export default function HomePage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game 2026 | Login, Register & Download Guide"
        description="Sikkim Game: independent sign-in and sign-up help, APK setup, bonus/invite/gift code guides, and plain-English Wingo & Colour Prediction breakdowns."
        path="/"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }]} />
      <Hero />
      <TableOfContents />
      <StatsCounter />
      <QuickFacts />
      <HowItWorks />
      <Benefits />
      <GamesShowcase />
      <Testimonials />
      <Section id="faq" className="scroll-mt-24">
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
