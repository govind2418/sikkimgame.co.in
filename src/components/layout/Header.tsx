import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/lib/site';
import { CtaButton } from '@/components/ui/Button';
import logo from '../../../public/images/brand/logo.png';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label={`${SITE.name} home`}>
          <Image src={logo} alt="Sikkim Game logo" height={28} priority className="h-7 w-auto" />
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
          <CtaButton href="/login" external={false} variant="ghost" size="md" showArrow={false} className="hidden sm:inline-flex">
            Login
          </CtaButton>
          <CtaButton href="/register" external={false} variant="primary" size="md" showArrow={false}>
            Register
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
