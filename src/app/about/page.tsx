import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { ShieldIcon, ZapIcon, UsersIcon } from '@/components/icons';
import { aboutFaqs } from '@/lib/content/about';
import { DISCLAIMER } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'About Sikkim Game — Who We Are',
  description:
    'Learn about sikkimgame.in.net: an independent Sikkim Game information hub covering login, registration, downloads, and game guides.',
  path: '/about',
  keywords: ['About Sikkim Game', 'Sikkim Game Info'],
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />
      <PageHero
        eyebrow="About Us"
        title="About Sikkim Game Info Hub"
        intro="sikkimgame.in.net exists to make Sikkim Game information easy to find, accurate, and free of clutter. Here's who we are and how this site works."
      />

      <Section>
        <div className="space-y-5 text-sm leading-relaxed text-slate-300 max-w-3xl">
          <p>
            Searching for &quot;Sikkim Game&quot; often turns up scattered, outdated, or overly
            promotional pages. We built sikkimgame.in.net as a single, fast-loading hub covering
            the exact things players look for: how to log in, how to register, where to download
            the app, how invite and gift codes work, and plain explanations of the Wingo and
            Colour Prediction game modes.
          </p>
          <p>
            This site is independent and unofficial. We are not the game developer or operator,
            we do not process registrations, deposits or withdrawals, and we are not affiliated
            with or endorsed by the Government of Sikkim or any state authority — the name
            reflects common player terminology, not an official government connection.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <Card>
            <ZapIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Our goal</h3>
            <p className="mt-2 text-sm text-slate-300">
              Fast, accurate, jargon-free guides so you spend less time searching and more time
              informed.
            </p>
          </Card>
          <Card>
            <ShieldIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Our approach</h3>
            <p className="mt-2 text-sm text-slate-300">
              Transparent labeling of what we are (an information/affiliate hub) and what we are
              not (the operator).
            </p>
          </Card>
          <Card>
            <UsersIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Who it&apos;s for</h3>
            <p className="mt-2 text-sm text-slate-300">
              Anyone searching for Sikkim Game login, registration, download, or game rule
              information.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Full disclosure" title="Our disclaimer" />
        <Card glass className="max-w-3xl text-sm leading-relaxed text-slate-300">
          {DISCLAIMER}
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="About Sikkim Game — Frequently Asked Questions" />
        <FaqAccordion items={aboutFaqs} />
      </Section>

      <Section>
        <CtaBand />
      </Section>
    </>
  );
}
