export function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`animate-fadeIn py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  as: As = 'h2',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  as?: 'h2' | 'h3';
}) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neon-400">
          {eyebrow}
        </p>
      )}
      <As className="text-2xl font-bold text-white sm:text-3xl">{title}</As>
      {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
    </div>
  );
}
