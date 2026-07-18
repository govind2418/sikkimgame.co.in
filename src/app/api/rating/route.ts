import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { redis } from '@/lib/redis';

export const runtime = 'nodejs';

const COUNT_KEY = 'site-rating:count';
const SUM_KEY = 'site-rating:sum';

// One vote per IP per 24h — soft anti-spam, not full auth.
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(1, '24 h'),
  prefix: 'site-rating:limit',
});

async function getStats() {
  const [count, sum] = await Promise.all([
    redis.get<number>(COUNT_KEY),
    redis.get<number>(SUM_KEY),
  ]);
  const total = count ?? 0;
  const totalSum = sum ?? 0;
  return {
    count: total,
    average: total > 0 ? Math.round((totalSum / total) * 10) / 10 : 0,
  };
}

export async function GET() {
  const stats = await getStats();
  return NextResponse.json(stats);
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const rating = Number(body?.rating);

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Rating must be an integer 1-5' }, { status: 400 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return NextResponse.json({ error: 'You have already rated recently' }, { status: 429 });
  }

  await Promise.all([redis.incr(COUNT_KEY), redis.incrby(SUM_KEY, rating)]);

  const stats = await getStats();
  return NextResponse.json(stats);
}
