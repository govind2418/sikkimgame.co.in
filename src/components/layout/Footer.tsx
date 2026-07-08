import Link from 'next/link';
import { FOOTER_LINKS, SITE, DISCLAIMER } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 pb-24 pt-12 lg:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2">
            <p className="text-lg font-bold text-white">{SITE.name}</p>
            <p className="mt-2 max-w-sm text-sm text-slate-400">{SITE.description}</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Quick Links</p>
            <ul className="space-y-2">
              {FOOTER_LINKS.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-neon-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Company</p>
            <ul className="space-y-2">
              {FOOTER_LINKS.slice(6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-neon-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-slate-400">
          <strong className="text-slate-300">Disclaimer:</strong> {DISCLAIMER}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
