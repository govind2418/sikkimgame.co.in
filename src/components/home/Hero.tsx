import { CtaButton } from '@/components/ui/Button';
import { PhoneMockup } from './PhoneMockup';
import { ZapIcon, ShieldIcon, BookOpenIcon } from '@/components/icons';
import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="animate-fadeIn">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-400/30 bg-neon-400/5 px-4 py-1.5 text-xs font-semibold text-neon-300">
            sikkimgame.co.in — reader-run guide hub
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Sikkim Game Login, Register &amp; Download Guide (2026)
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            One clean stop for Sikkim Game Login, Sikkim Game Register, APK download, bonus
            codes and invite codes, plus honest explainers on how Wingo and Colour Prediction
            rounds actually work — written before you open the official app, not after.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href={SITE.registerUrl} size="lg">Create Account</CtaButton>
            <CtaButton href="/how-to-download" external={false} variant="secondary" size="lg">
              How to Download
            </CtaButton>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <ZapIcon className="h-4 w-4 text-neon-400" /> No clutter, no autoplay ads
            </span>
            <span className="flex items-center gap-2">
              <ShieldIcon className="h-4 w-4 text-neon-400" /> Clearly independent
            </span>
            <span className="flex items-center gap-2">
              <BookOpenIcon className="h-4 w-4 text-neon-400" /> Refreshed regularly
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
