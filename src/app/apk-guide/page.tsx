import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { RelatedLinks } from '@/components/layout/RelatedLinks';
import { relatedTo } from '@/lib/pages';
import { ShieldIcon, FileTextIcon } from '@/components/icons';
import { apkChecklist, apkGuideFaqs } from '@/lib/content/apkGuide';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game APK Guide — Verify Before You Install',
  description:
    'What an APK file actually is, why this game category distributes one directly, and a four-point checklist to verify it before installing.',
  path: '/apk-guide',
  keywords: ['Sikkim Game APK Guide', 'Sikkim Game APK Safe'],
});

export default function ApkGuidePage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'APK Guide', path: '/apk-guide' }]} />
      <PageHero
        eyebrow="APK Safety"
        title="Before you install: an APK checklist worth thirty seconds"
        intro="APK installs are routine for this game category, but not all files circulating online are the real one. Here is what to check."
      />

      <Section>
        <SectionHeading eyebrow="Verification" title="Four checks before you tap install" />
        <div className="grid gap-5 sm:grid-cols-2">
          {apkChecklist.map((item) => (
            <Card key={item.title}>
              <ShieldIcon className="h-8 w-8 text-neon-400" />
              <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href="/how-to-download" external={false} variant="primary" size="lg">
            <FileTextIcon className="h-4 w-4" /> Full Install Steps
          </CtaButton>
          <CtaButton href="/download" external={false} variant="secondary" size="lg">
            Back to Download
          </CtaButton>
        </div>
      </Section>

      <Section id="faq" className="border-t border-white/5 bg-navy-900/40">
        <SectionHeading eyebrow="FAQs" title="APK questions, answered" />
        <FaqAccordion items={apkGuideFaqs} />
      </Section>

      <RelatedLinks keys={relatedTo('apkGuide')} />

      <Section>
        <CtaBand
          title="Verified the file? You are ready."
          subtitle="Install, open, and sign in or register to get started."
        />
      </Section>
    </>
  );
}
