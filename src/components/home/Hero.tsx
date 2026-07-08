import { CtaButton } from '@/components/ui/Button';
import { PhoneMockup } from './PhoneMockup';
import { ShieldIcon, ZapIcon, StarIcon } from '@/components/icons';
import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="animate-fadeIn">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-400/30 bg-neon-400/5 px-4 py-1.5 text-xs font-semibold text-neon-300">
            Independent Sikkim Game Info Hub
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Sikkim Game — Login, Register &amp; Play Wingo and Colour Prediction
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            Everything you need for Sikkim Game in one place: quick login and register steps,
            APK download links, invite &amp; gift code guides, and how Wingo and Colour Prediction
            rounds actually work — explained simply, before you head to the official app.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href={SITE.registerUrl} size="lg">Register Now</CtaButton>
            <CtaButton href="/download" external={false} variant="secondary" size="lg">
              Download App
            </CtaButton>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <ZapIcon className="h-4 w-4 text-neon-400" /> Fast, lightweight guides
            </span>
            <span className="flex items-center gap-2">
              <ShieldIcon className="h-4 w-4 text-neon-400" /> Independent &amp; transparent
            </span>
            <span className="flex items-center gap-2">
              <StarIcon className="h-4 w-4 text-neon-400" /> Updated regularly
            </span>
          </div>
        </div>
        <div className="animate-fadeIn">
          <PhoneMockup />
        </div>
      </div>
    </div>
  );
}
