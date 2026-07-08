const numbers = Array.from({ length: 10 }, (_, i) => i);

export function WingoBoardIllustration() {
  return (
    <div className="mx-auto w-full max-w-xs rounded-2xl border border-white/10 bg-navy-800/60 p-5">
      <div className="grid grid-cols-5 gap-2">
        {numbers.map((n) => (
          <span
            key={n}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-navy-900 text-sm font-bold text-neon-300"
          >
            {n}
          </span>
        ))}
      </div>
      <p className="mt-4 text-center text-[11px] text-slate-500">
        Illustrative example only — actual Wingo number sets and timers are set by the official app.
      </p>
    </div>
  );
}
