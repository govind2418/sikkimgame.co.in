const GREEN = [1, 3, 7, 9];
const RED = [2, 4, 6, 8];
const VIOLET_RED = [0];
const VIOLET_GREEN = [5];

function numberClasses(n: number) {
  if (VIOLET_RED.includes(n) || VIOLET_GREEN.includes(n)) {
    return 'bg-gradient-to-br from-violet-500 to-rose-500 text-white';
  }
  if (GREEN.includes(n)) return 'bg-emerald-500/90 text-white';
  if (RED.includes(n)) return 'bg-rose-500/90 text-white';
  return 'bg-navy-900 text-neon-300';
}

const numbers = Array.from({ length: 10 }, (_, i) => i);

export function WingoBoardIllustration() {
  return (
    <div className="mx-auto w-full max-w-xs rounded-2xl border border-white/10 bg-navy-800/60 p-5">
      <div className="grid grid-cols-5 gap-2">
        {numbers.map((n) => (
          <span
            key={n}
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold ${numberClasses(n)}`}
          >
            {n}
          </span>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-3 text-[11px] text-slate-400">
        <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Green</span>
        <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-rose-500" /> Red</span>
        <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-500 to-rose-500" /> Violet (0 &amp; 5)</span>
      </div>
      <p className="mt-3 text-center text-[11px] text-slate-400">
        Illustrative mapping only — confirm the live number-colour set and payout table in the
        official app before betting.
      </p>
    </div>
  );
}
