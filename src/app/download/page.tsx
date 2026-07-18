import type { Metadata } from 'next';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageSchema } from '@/components/layout/PageSchema';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { relatedTo } from '@/lib/pages';
import { DownloadIcon, FileTextIcon, BookOpenIcon } from '@/components/icons';
import { downloadFaqs } from '@/lib/content/download';
import { SITE } from '@/lib/site';
import appIcon from '../../../public/images/brand/app-icon-512.png';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Download 2026 | APK & Register Official Guide',
  description:
    'Where to get Sikkim Game on Android or through your browser, plus links to our detailed install and APK safety guides.',
  path: '/download',
  keywords: ['Sikkim Game Download', 'Sikkim Game App'],
});

export default function DownloadPage() {
  return (
    <>
      <PageSchema
        title="Sikkim Game Download 2026 | APK & Register Official Guide"
        description="Where to get Sikkim Game on Android or through your browser, plus links to our detailed install and APK safety guides."
        path="/download"
      />
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Download', path: '/download' }]} />
      <PageHero
        eyebrow="Get the App"
        title="Get Sikkim Game on your phone or browser"
        intro="Android users can grab the APK directly; everyone else can use the mobile web version. Pick your path below."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:items-center">
          <div>
            <SectionHeading eyebrow="Two ways in" title="Choose your route" />
            <div className="grid gap-5 sm:grid-cols-2">
              <Card>
                <DownloadIcon className="h-7 w-7 text-neon-400" />
                <h3 className="mt-3 text-base font-semibold text-white">Android APK</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Installs directly on your device and adds notifications for rounds and rewards.
                </p>
              </Card>
              <Card>
                <BookOpenIcon className="h-7 w-7 text-neon-400" />
                <h3 className="mt-3 text-base font-semibold text-white">Mobile Web</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  No install needed — works in any modern mobile browser, iPhone included.
                </p>
              </Card>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href={SITE.officialUrl} variant="primary" size="lg">
                <DownloadIcon className="h-4 w-4" /> Get the App
              </CtaButton>
              <CtaButton href="/how-to-download" external={false} variant="secondary" size="lg">
                Sikkim Game Download Walkthrough
              </CtaButton>
              <CtaButton href="/apk-guide" external={false} variant="ghost" size="lg">
                <FileTextIcon className="h-4 w-4" /> APK Safety Guide
              </CtaButton>
            </div>
          </div>
          <div className="mx-auto rounded-3xl border border-white/10 bg-navy-800/60 p-6 text-center shadow-card">
            <Image
              src={appIcon}
              alt="Illustrative Sikkim Game app icon"
              width={120}
              height={120}
              className="mx-auto rounded-3xl shadow-glow"
            />
            <p className="mt-4 text-sm font-semibold text-white">Sikkim Game</p>
            <p className="text-xs text-slate-400">Android APK · Mobile Web</p>
          </div>
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="Download questions, answered" />
        <FaqAccordion items={downloadFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('download')} />

      <Section>
        <CtaBand
          title="Ready to get set up?"
          subtitle="Grab the app, then create your account in under a minute."
        />
      </Section>
    </>
  );
}
