import Image, { type StaticImageData } from 'next/image';

export function IPhoneMockup({
  src,
  alt,
  caption,
  className = '',
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={`w-full max-w-[220px] shrink-0 ${className}`}>
      <div className="relative rounded-[2.5rem] border-[8px] border-navy-950 bg-navy-950 shadow-[0_0_0_2px_rgba(251,191,36,0.4),0_24px_50px_-16px_rgba(0,0,0,0.65),0_0_46px_-10px_rgba(251,191,36,0.4)]">
        <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-navy-950" />
        <div className="pointer-events-none absolute -left-[9px] top-20 h-7 w-[3px] rounded-full bg-navy-800" />
        <div className="pointer-events-none absolute -left-[9px] top-32 h-12 w-[3px] rounded-full bg-navy-800" />
        <div className="pointer-events-none absolute -right-[9px] top-28 h-14 w-[3px] rounded-full bg-navy-800" />
        <div className="overflow-hidden rounded-[1.9rem]">
          <Image src={src} alt={alt} className="h-auto w-full" placeholder="blur" />
        </div>
      </div>
      {caption && (
        <p className="mt-3 text-center text-xs font-medium uppercase tracking-wide text-amber-300/90">
          {caption}
        </p>
      )}
    </div>
  );
}
