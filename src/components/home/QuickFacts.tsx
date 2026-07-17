import { Section, SectionHeading } from '@/components/ui/Section';

const facts = [
  { label: 'Platform', value: 'Sikkim Game' },
  { label: 'Live Since', value: '2020' },
  { label: 'Categories', value: 'Hot Slots, Lottery, Original, Slots, Fishing' },
  { label: 'Featured Games', value: 'WinGo, Aviator, Cricket, Goal, Chicken Road 2, Vortex' },
  { label: 'Official Site', value: 'sikkimgg.live' },
];

const rtps = [
  { game: 'WinGo', rtp: '97.84%' },
  { game: 'Chicken Road 2', rtp: '97.03%' },
  { game: 'Cricket', rtp: '97.49%' },
  { game: 'Vortex', rtp: '96.79%' },
  { game: 'Aviator', rtp: '96.55%' },
  { game: 'Goal', rtp: '96.08%' },
];

export function QuickFacts() {
  return (
    <Section id="quick-facts" className="border-t border-white/5 bg-navy-900/40">
      <SectionHeading
        eyebrow="Quick facts"
        title="Sikkim Game at a glance"
        subtitle="Pulled directly from the live platform — game list and RTPs, not a guess."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-navy-800/60">
          <table className="w-full min-w-[420px] border-collapse text-left text-sm">
            <tbody className="divide-y divide-white/5">
              {facts.map((fact) => (
                <tr key={fact.label}>
                  <td className="w-40 py-3 pl-5 pr-4 font-semibold text-white">{fact.label}</td>
                  <td className="py-3 pr-5 text-slate-300">{fact.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-navy-800/60">
          <table className="w-full min-w-[240px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-slate-400">
                <th className="py-3 pl-5 pr-4 font-semibold">Game</th>
                <th className="py-3 pr-5 font-semibold">RTP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {rtps.map((row) => (
                <tr key={row.game}>
                  <td className="py-3 pl-5 pr-4 font-medium text-white">{row.game}</td>
                  <td className="py-3 pr-5 font-semibold text-neon-300">{row.rtp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-400">
        RTP (Return to Player) figures are shown in-app and can change — treat these as a recent
        snapshot, not a permanent guarantee. Full breakdowns for each game are linked below.
      </p>
    </Section>
  );
}
