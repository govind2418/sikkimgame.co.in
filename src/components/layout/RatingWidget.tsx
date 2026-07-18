'use client';

import { useEffect, useState } from 'react';
import { StarIcon } from '@/components/icons';

const STORAGE_KEY = 'sikkim-game-rated';

type Stats = { count: number; average: number };

export function RatingWidget() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [hoverValue, setHoverValue] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setHasVoted(Boolean(localStorage.getItem(STORAGE_KEY)));
    fetch('/api/rating')
      .then((res) => res.json())
      .then(setStats)
      .catch(() => setStats({ count: 0, average: 0 }));
  }, []);

  async function submitRating(value: number) {
    if (hasVoted || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/rating', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating: value }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Could not submit rating');
      }
      const data: Stats = await res.json();
      setStats(data);
      localStorage.setItem(STORAGE_KEY, String(value));
      setHasVoted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  const displayValue = hoverValue || (hasVoted ? Number(localStorage.getItem(STORAGE_KEY)) : 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="rounded-3xl border border-amber-400/25 bg-navy-900/60 p-8 text-center shadow-[0_0_0_1px_rgba(251,191,36,0.1),0_0_40px_-12px_rgba(251,191,36,0.35)]">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-300">
          Rate this guide
        </p>
        <h3 className="mt-2 text-xl font-bold text-white">
          Was sikkimgame.co.in useful to you?
        </h3>

        <div
          className="mt-4 flex justify-center gap-1"
          onMouseLeave={() => setHoverValue(0)}
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              disabled={hasVoted || submitting}
              onMouseEnter={() => !hasVoted && setHoverValue(value)}
              onClick={() => submitRating(value)}
              aria-label={`Rate ${value} out of 5 stars`}
              className={`p-1 transition-transform ${hasVoted ? 'cursor-default' : 'cursor-pointer hover:scale-110'}`}
            >
              <StarIcon
                className={`h-8 w-8 ${
                  value <= displayValue ? 'text-amber-400' : 'text-slate-600'
                }`}
              />
            </button>
          ))}
        </div>

        <p className="mt-3 min-h-[1.25rem] text-sm text-slate-300">
          {error && <span className="text-rose-400">{error}</span>}
          {!error && hasVoted && 'Thanks for rating this guide!'}
          {!error && !hasVoted && stats === null && 'Loading ratings…'}
          {!error && !hasVoted && stats !== null && (
            stats.count > 0
              ? 'Tap a star to add your rating.'
              : 'Be the first to rate this guide.'
          )}
        </p>

        {stats !== null && (
          <p className="mt-1 text-xs text-slate-400">
            {stats.count > 0
              ? `${stats.average.toFixed(1)} average from ${stats.count.toLocaleString('en-IN')} rating${stats.count === 1 ? '' : 's'}`
              : 'No ratings yet'}
          </p>
        )}
      </div>
    </div>
  );
}
