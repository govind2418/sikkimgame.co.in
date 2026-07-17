import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { ArrowRightIcon } from '@/components/icons';
import { PAGES, type PageKey } from '@/lib/pages';

export function RelatedLinks({
  keys,
  title = 'Every guide on this site',
  subtitle = 'All of it, one tap away — login, register, codes, games, and the fine print.',
}: {
  keys: PageKey[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <Section className="border-t border-white/5 bg-navy-900/40">
      <SectionHeading eyebrow="Related" title={title} subtitle={subtitle} />
      <div className="flex flex-wrap gap-3">
        {keys.map((key) => {
          const page = PAGES[key];
          return (
            <Link
              key={key}
              href={page.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-navy-800/60 px-4 py-2 text-sm text-slate-300 transition-all duration-200 hover:border-neon-400/40 hover:text-neon-300"
            >
              {page.label}
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
