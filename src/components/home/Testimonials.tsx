import { Section, SectionHeading } from '@/components/ui/Section';
import { QuoteIcon, StarIcon } from '@/components/icons';

const testimonials = [
  {
    name: 'Pemba T.',
    city: 'Gangtok',
    quote:
      'The APK guide saved me from installing a random file from a search result. Clear steps, no confusion.',
  },
  {
    name: 'Anjali R.',
    city: 'Siliguri',
    quote:
      'I kept failing OTP verification during sign-up. The Register guide pointed out the exact step I was rushing through.',
  },
  {
    name: 'Deepak M.',
    city: 'Namchi',
    quote:
      'Finally a page that explains Wingo without trying to sell me a "prediction formula". Straightforward and honest.',
  },
];

export function Testimonials() {
  return (
    <Section id="reader-notes" className="border-t border-white/5 bg-navy-900/40">
      <SectionHeading
        eyebrow="From our readers"
        title="What visitors tell us"
        subtitle="Illustrative reader feedback shared with us — names shortened for privacy, not verified account reviews."
      />
      <div className="grid gap-5 sm:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="glass-panel rounded-2xl border border-white/10 p-6 transition-all duration-200 hover:border-neon-400/40 hover:-translate-y-0.5"
          >
            <QuoteIcon className="h-6 w-6 text-neon-400" />
            <blockquote className="mt-3 text-sm leading-relaxed text-slate-300">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-white">
                {t.name} <span className="font-normal text-slate-400">— {t.city}</span>
              </span>
              <span className="flex gap-0.5 text-neon-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
