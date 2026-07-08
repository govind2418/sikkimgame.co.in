import { CtaButton } from '@/components/ui/Button';

export function CtaBand({
  title = 'Ready to get started with Sikkim Game?',
  subtitle = 'Register on the official platform or grab the app in under a minute.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded-3xl border border-royal-500/30 bg-gradient-to-br from-royal-700/40 via-navy-900 to-navy-900 p-8 text-center shadow-glow sm:p-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-300">{subtitle}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <CtaButton href="/register" external={false} size="lg">
            Register Now
          </CtaButton>
          <CtaButton href="/download" external={false} variant="secondary" size="lg">
            Download App
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
