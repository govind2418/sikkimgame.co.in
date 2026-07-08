import type { Metadata } from 'next';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { DownloadIcon, ShieldIcon, SmartphoneIcon } from '@/components/icons';
import { downloadFaqs, downloadSteps } from '@/lib/content/download';
import appIcon from '../../../public/images/brand/app-icon-512.png';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Download — APK & App Install Guide',
  description:
    'Download the Sikkim Game APK safely. Step-by-step Android install guide, troubleshooting tips, and the official app download link.',
  path: '/download',
  keywords: ['Sikkim Game Download', 'Sikkim Game APK', 'Sikkim Game App'],
});

export default function DownloadPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Download', path: '/download' }]} />
      <PageHero
        eyebrow="Sikkim Game Download"
        title="Sikkim Game APK Download & Install Guide"
        intro="Get the Sikkim Game app installed correctly the first time. This guide covers the download steps, Android permissions, and answers to common install issues."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:items-center">
          <div>
            <SectionHeading eyebrow="Install steps" title="How to download & install the app" />
            <div className="grid gap-5 sm:grid-cols-2">
              {downloadSteps.map((step, index) => (
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
              <CtaButton variant="primary" size="lg">
                <DownloadIcon className="h-4 w-4" /> Download APK
              </CtaButton>
              <CtaButton href="/register" external={false} variant="secondary" size="lg">
                Register After Install
              </CtaButton>
            </div>
          </div>
          <div className="mx-auto rounded-3xl border border-white/10 bg-navy-800/60 p-6 text-center shadow-card">
            <Image
              src={appIcon}
              alt="Sikkim Game app icon"
              width={120}
              height={120}
              className="mx-auto rounded-3xl shadow-glow"
            />
            <p className="mt-4 text-sm font-semibold text-white">Sikkim Game App</p>
            <p className="text-xs text-slate-400">Android APK · Mobile Web</p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="Before installing" title="Download safety checklist" />
        <div className="grid gap-5 sm:grid-cols-2">
          <Card glass>
            <ShieldIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Verify the source</h3>
            <p className="mt-2 text-sm text-slate-300">
              Only download from the official link. Avoid random forwarded APK files, since
              modified files can contain unwanted extras.
            </p>
          </Card>
          <Card glass>
            <SmartphoneIcon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-3 text-base font-semibold text-white">Check storage &amp; OS version</h3>
            <p className="mt-2 text-sm text-slate-300">
              Make sure your phone has enough free storage and is running a reasonably recent
              Android version for the smoothest installation experience.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Sikkim Game Download — Frequently Asked Questions" />
        <FaqAccordion items={downloadFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Get the Sikkim Game app now"
          subtitle="Install in under two minutes, then register or log in to get started."
        />
      </Section>
    </>
  );
}
