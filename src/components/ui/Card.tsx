export function Card({
  children,
  className = '',
  glass = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  id?: string;
}) {
  const bg = glass ? 'bg-white/5 backdrop-blur-sm' : 'bg-navy-800/60';
  return (
    <div
      id={id}
      className={`rounded-2xl border border-white/10 ${bg} p-6 shadow-card transition-all duration-200 hover:border-neon-400/40 hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </div>
  );
}
