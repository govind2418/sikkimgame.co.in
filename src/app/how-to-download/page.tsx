import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { DownloadIcon, FileTextIcon } from '@/components/icons';
import { howToDownloadSteps, howToDownloadFaqs } from '@/lib/content/howToDownload';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'How to Download Sikkim Game — Full Install Walkthrough',
  description:
    'Every step of installing the Sikkim Game APK on Android, from the official download link to opening the app for the first time.',
  path: '/how-to-download',
  keywords: ['How to Download Sikkim Game', 'Sikkim Game Install Guide'],
});

export default function HowToDownloadPage() {
  return (
    <>
      <Breadcrumb
        items={[{ name: 'Home', path: '/' }, { name: 'How to Download', path: '/how-to-download' }]}
      />
      <PageHero
        eyebrow="Full Guide"
        title="How to download and install Sikkim Game"
        intro="Six steps from tapping the download link to landing on your account dashboard, plus what to do when Android blocks the install."
      />

      <Section>
        <SectionHeading eyebrow="Step-by-step" title="The complete install walkthrough" />
        <div className="grid gap-5 sm:grid-cols-2">
          {howToDownloadSteps.map((step, index) => (
            <Card key={step.title}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-royal-500/20 text-sm font-bold text-neon-300">
                  {index + 1}
                </span>
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{step.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={SITE.officialUrl} variant="primary" size="lg">
            <DownloadIcon className="h-4 w-4" /> Get the App
          </CtaButton>
          <CtaButton href="/apk-guide" external={false} variant="secondary" size="lg">
            <FileTextIcon className="h-4 w-4" /> APK Safety Guide
          </CtaButton>
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Install questions, answered" />
        <FaqAccordion items={howToDownloadFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Ready to install?"
          subtitle="Grab the app, then create your account when it opens."
        />
      </Section>
    </>
  );
}
