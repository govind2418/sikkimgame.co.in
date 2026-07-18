import Image, { type StaticImageData } from 'next/image';

export function ScreenshotCard({
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
    <div
      className={`mx-auto w-full max-w-xs overflow-hidden rounded-3xl border border-amber-400/30 bg-navy-800/60 shadow-[0_0_0_1px_rgba(251,191,36,0.12),0_0_44px_-10px_rgba(251,191,36,0.4)] ${className}`}
    >
      <Image src={src} alt={alt} className="h-auto w-full" placeholder="blur" />
      {caption && (
        <p className="border-t border-amber-400/20 bg-navy-900/60 px-4 py-2.5 text-center text-[11px] font-medium uppercase tracking-wide text-amber-300/90">
          {caption}
        </p>
      )}
    </div>
  );
}
