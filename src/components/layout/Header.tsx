import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/lib/site';
import { CtaButton } from '@/components/ui/Button';
import { Logo } from '@/components/layout/Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" aria-label={`${SITE.name} home`}>
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-neon-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CtaButton href={SITE.registerUrl} variant="ghost" size="md" showArrow={false} className="hidden sm:inline-flex">
            Login
          </CtaButton>
          <CtaButton href={SITE.registerUrl} variant="primary" size="md" showArrow={false}>
            Register
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
