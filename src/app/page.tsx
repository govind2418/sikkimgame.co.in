import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageSchema } from '@/components/layout/PageSchema';
import { Hero } from '@/components/home/Hero';
import { TableOfContents } from '@/components/home/TableOfContents';
import { StatsCounter } from '@/components/home/StatsCounter';
import { QuickFacts } from '@/components/home/QuickFacts';
import { PlatformShowcase } from '@/components/home/PlatformShowcase';
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
  title: 'Sikkim Game Login (2026) | Register, APK Download & Bonus Guide',
  description:
    'Sikkim Game Login, Register, APK Download, Bonus and Invite Code guides — independent, plain-English help plus Wingo & Colour Prediction breakdowns.',
  path: '/',
  keywords: ['Sikkim Game Login', 'Sikkim Game Register', 'Sikkim Game Download'],
});

export default function HomePage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Login (2026) | Register, APK Download & Bonus Guide"
        description="Sikkim Game Login, Register, APK Download, Bonus and Invite Code guides — independent, plain-English help plus Wingo & Colour Prediction breakdowns."
        path="/"
        itemList={[
          { name: 'Sikkim Game Login', path: '/login' },
          { name: 'Sikkim Game Register', path: '/register' },
          { name: 'Sikkim Game Download & APK', path: '/download' },
          { name: 'Sikkim Game Bonus', path: '/bonus' },
          { name: 'Sikkim Game Invite Code', path: '/invite-code' },
          { name: 'Sikkim Game Wingo', path: '/wingo' },
          { name: 'Sikkim Game Colour Prediction', path: '/colour-prediction' },
        ]}
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }]} />
      <Hero />
      <TableOfContents />
      <StatsCounter />
      <QuickFacts />
      <PlatformShowcase />
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
