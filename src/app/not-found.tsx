import { CtaButton } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-neon-400">404 Error</p>
      <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Page Not Found</h1>
      <p className="mt-4 text-slate-300">
        The page you are looking for doesn&apos;t exist. Head back home to continue exploring
        Sikkim Game login, register, download and gameplay guides.
      </p>
      <CtaButton href="/" external={false} variant="primary" className="mt-8">
        Back to Home
      </CtaButton>
    </div>
  );
}
