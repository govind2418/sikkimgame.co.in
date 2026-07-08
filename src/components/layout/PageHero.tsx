export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="border-b border-white/10 bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neon-400">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">{intro}</p>
      </div>
    </div>
  );
}
