import { CtaButton } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-neon-400">404</p>
      <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">That page wandered off</h1>
      <p className="mt-4 text-slate-300">
        We couldn&apos;t find what you were looking for. Head back to the homepage for sign-in,
        sign-up, download and game-guide links.
      </p>
      <CtaButton href="/" external={false} variant="primary" className="mt-8">
        Back to Home
      </CtaButton>
    </div>
  );
}
