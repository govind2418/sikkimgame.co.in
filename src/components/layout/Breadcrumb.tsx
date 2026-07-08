import Link from 'next/link';
import { JsonLd, breadcrumbSchema, type BreadcrumbItem } from '@/lib/schema';

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-1.5">
            {index > 0 && <span className="text-slate-600">/</span>}
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-slate-200">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-neon-400">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
