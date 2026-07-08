const particles = [
  { left: '6%', delay: '0s', duration: '10s', size: 3 },
  { left: '18%', delay: '2.2s', duration: '13s', size: 4 },
  { left: '32%', delay: '4.1s', duration: '9s', size: 2 },
  { left: '47%', delay: '1.1s', duration: '12s', size: 3 },
  { left: '61%', delay: '3.4s', duration: '11s', size: 4 },
  { left: '74%', delay: '0.6s', duration: '14s', size: 2 },
  { left: '86%', delay: '2.8s', duration: '10s', size: 3 },
  { left: '93%', delay: '5s', duration: '12s', size: 3 },
];

export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -left-24 -top-24 h-[26rem] w-[26rem] animate-blobFloat rounded-full bg-royal-600/25 blur-[100px]" />
      <div className="absolute -right-16 top-1/3 h-[22rem] w-[22rem] animate-blobFloatSlow rounded-full bg-neon-400/15 blur-[110px]" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] animate-blobFloat rounded-full bg-royal-700/20 blur-[120px]" />
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle animate-drift"
          style={{
            left: p.left,
            bottom: '-10%',
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
