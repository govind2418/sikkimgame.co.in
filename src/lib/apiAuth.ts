import { NextRequest } from 'next/server';

// Guards manual/cron-triggered indexing routes. Set CRON_SECRET as an env
// var (via `vercel env add`) once this is live:
//  - Vercel's own Cron Jobs automatically send it as `Authorization: Bearer
//    <CRON_SECRET>`, so the daily vercel.json cron authenticates itself.
//  - You can trigger it manually by visiting /api/indexnow?secret=<value>.
// If CRON_SECRET isn't set yet, the endpoint stays open (fine while testing).
export function hasValidSecret(request: NextRequest): boolean {
  const expected = process.env.CRON_SECRET;
  if (!expected) return true;

  const authHeader = request.headers.get('authorization');
  if (authHeader === `Bearer ${expected}`) return true;

  const provided = request.nextUrl.searchParams.get('secret');
  return provided === expected;
}
