const colours = [
  { name: 'Green', className: 'bg-emerald-500' },
  { name: 'Violet', className: 'bg-violet-500' },
  { name: 'Red', className: 'bg-rose-500' },
];

export function ColourWheelIllustration() {
  return (
    <div className="mx-auto grid w-full max-w-xs grid-cols-3 gap-3">
      {colours.map((colour) => (
        <div
          key={colour.name}
          className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-navy-800/60 p-4"
        >
          <span className={`h-10 w-10 rounded-full ${colour.className} shadow-glow`} aria-hidden />
          <span className="text-xs font-medium text-slate-300">{colour.name}</span>
        </div>
      ))}
      <p className="col-span-3 mt-1 text-center text-[11px] text-slate-500">
        Illustrative example only — actual colour sets and payout rules are set by the official app.
      </p>
    </div>
  );
}
