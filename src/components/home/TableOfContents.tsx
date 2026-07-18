const items = [
  { href: '#introduction', label: 'Introduction' },
  { href: '#login', label: 'Login' },
  { href: '#register', label: 'Register' },
  { href: '#apk', label: 'APK' },
  { href: '#bonus', label: 'Bonus' },
  { href: '#invite-code', label: 'Invite Code' },
  { href: '#wingo', label: 'Wingo' },
  { href: '#colour-prediction', label: 'Colour Prediction' },
  { href: '#faq', label: 'FAQ' },
];

export function TableOfContents() {
  return (
    <nav
      aria-label="Table of contents"
      className="mx-auto max-w-6xl px-4 py-4 sm:px-6"
    >
      <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neon-400">
          Table of Contents
        </p>
        <ol className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-slate-300">
          {items.map((item, index) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-neon-400">
                {index + 1}. {item.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
