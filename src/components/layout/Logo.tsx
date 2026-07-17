export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
        <defs>
          <linearGradient id="sgz-mark" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#00d4ff" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="28" height="28" rx="9" fill="url(#sgz-mark)" fillOpacity="0.16" stroke="url(#sgz-mark)" strokeWidth="1.4" />
        <path
          d="M10.5 19.2c0 1.7 1.9 2.6 3.9 2.6 2.4 0 4-1 4-2.7 0-1.9-1.9-2.3-3.8-2.7-1.6-.3-2.9-.6-2.9-1.6 0-.9 1-1.4 2.2-1.4 1.4 0 2.5.6 2.7 1.7"
          stroke="#f0fbff"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="15" cy="9.4" r="1.6" fill="#f0fbff" />
      </svg>
      <span className="text-base font-extrabold tracking-tight text-white">
        Sikkim <span className="text-neon-400">Game</span>
      </span>
    </span>
  );
}
