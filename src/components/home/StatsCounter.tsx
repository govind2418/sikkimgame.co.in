const stats = [
  { value: '22+', label: 'In-Depth Guides' },
  { value: '100%', label: 'Independent, Unpaid Reviews' },
  { value: '3 min', label: 'Avg. Read to Get Set Up' },
  { value: '24/7', label: 'Guides Online' },
];

export function StatsCounter() {
  return (
    <div className="border-y border-white/10 bg-navy-900/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-extrabold text-white sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
