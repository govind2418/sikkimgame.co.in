import { Counter } from '@/components/ui/Counter';

const stats = [
  { target: 12, suffix: '+', label: 'Dedicated Guides' },
  { target: 100, suffix: '%', label: 'Independent Content' },
  { target: 24, suffix: '/7', label: 'Guides Available' },
  { target: 5, suffix: ' min', label: 'Quick Setup Read' },
];

export function StatsCounter() {
  return (
    <div className="border-y border-white/10 bg-navy-900/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-extrabold text-white sm:text-4xl">
              <Counter target={stat.target} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
