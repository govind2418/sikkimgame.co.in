import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { relatedTo } from '@/lib/pages';
import { ShieldIcon, ZapIcon, UsersIcon } from '@/components/icons';
import { aboutFaqs } from '@/lib/content/about';
import { DISCLAIMER } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'About Sikkim Game Zone',
  description:
    'sikkimgame.co.in is an independent Sikkim Game guide hub covering sign-in, sign-up, downloads and game rules. Here is who we are.',
  path: '/about',
  keywords: ['About Sikkim Game Zone'],
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />
      <PageHero
        eyebrow="About Us"
        title="Why sikkimgame.co.in exists"
        intro="Search results for Sikkim Game are often scattered or overly promotional. We built this hub to fix that — here's how it works and who runs it."
      />

      <Section>
        <div className="space-y-5 text-sm leading-relaxed text-slate-300 max-w-3xl">
          <p>
            sikkimgame.co.in gathers the exact things players search for in one fast-loading
            place: signing in, creating an account, getting the app safely, understanding bonus
            and invite codes, and reading Wingo or Colour Prediction rules without the sales
            pitch that usually comes with them.
          </p>
          <p>
            This site is independent and unofficial. We don&apos;t develop or operate the game, we
            never touch registrations, deposits or withdrawals, and we have no affiliation with
            the Government of Sikkim or any state authority — the name simply reflects how
            players refer to this game category.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <Card>
            <ZapIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">What we&apos;re after</h3>
            <p className="mt-2 text-sm text-slate-300">
              Guides that get to the point, so you spend less time searching and more time
              actually informed.
            </p>
          </Card>
          <Card>
            <ShieldIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">How we work</h3>
            <p className="mt-2 text-sm text-slate-300">
              Transparent about what we are — an information and referral hub — and equally
              clear about what we&apos;re not.
            </p>
          </Card>
          <Card>
            <UsersIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Who reads this</h3>
            <p className="mt-2 text-sm text-slate-300">
              Anyone looking for Sikkim Game sign-in help, sign-up steps, downloads, or game
              rules in one place.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Full disclosure" title="Our disclaimer, in short" />
        <Card glass className="max-w-3xl text-sm leading-relaxed text-slate-300">
          {DISCLAIMER}
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="About us — frequently asked questions" />
        <FaqAccordion items={aboutFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('about')} />

      <Section>
        <CtaBand />
      </Section>
    </>
  );
}
