import { JsonLd, faqPageSchema, type FaqItem } from '@/lib/schema';
import { ChevronDownIcon } from '@/components/icons';

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-navy-800/60">
      <JsonLd data={faqPageSchema(items)} />
      {items.map((item) => (
        <details key={item.question} className="group px-5 py-4 open:pb-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-white marker:content-none">
            {item.question}
            <ChevronDownIcon className="h-5 w-5 shrink-0 text-neon-400 transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
