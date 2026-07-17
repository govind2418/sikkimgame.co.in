import { NextRequest, NextResponse } from 'next/server';
import { SITE } from '@/lib/site';
import { SITE_ROUTES } from '@/lib/routes';
import { submitToIndexNow } from '@/lib/indexnow';
import { hasValidSecret } from '@/lib/apiAuth';

export const runtime = 'nodejs';

async function handle(request: NextRequest) {
  if (!hasValidSecret(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const urls = SITE_ROUTES.map((path) => `${SITE.url}${path}`);
  const result = await submitToIndexNow(urls);

  return NextResponse.json({
    submittedUrls: urls.length,
    indexNow: result,
  });
}

export const GET = handle;
export const POST = handle;
