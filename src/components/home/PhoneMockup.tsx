import Image from 'next/image';
import appIcon from '../../../public/images/brand/app-icon-512.png';
import { GridIcon, PaletteIcon, GiftIcon, TicketIcon } from '@/components/icons';

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-royal-500/20 blur-3xl" aria-hidden />
      <div className="rounded-[2.5rem] border border-white/15 bg-navy-900 p-3 shadow-card">
        <div className="rounded-[2rem] bg-gradient-to-b from-navy-800 to-navy-950 p-5">
          <div className="flex flex-col items-center pb-6 pt-4">
            <Image
              src={appIcon}
              alt="Sikkim Game app icon"
              width={72}
              height={72}
              className="rounded-2xl shadow-glow"
            />
            <p className="mt-3 text-sm font-semibold text-white">Sikkim Game</p>
            <p className="text-xs text-slate-400">Illustrative app preview</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <MockTile icon={<GridIcon className="h-5 w-5" />} label="Wingo" />
            <MockTile icon={<PaletteIcon className="h-5 w-5" />} label="Colour" />
            <MockTile icon={<TicketIcon className="h-5 w-5" />} label="Invite" />
            <MockTile icon={<GiftIcon className="h-5 w-5" />} label="Gift Code" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MockTile({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 py-4 text-neon-400">
      {icon}
      <span className="text-[11px] font-medium text-slate-300">{label}</span>
    </div>
  );
}
