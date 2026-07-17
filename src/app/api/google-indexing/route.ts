import { NextRequest, NextResponse } from 'next/server';
import { SITE } from '@/lib/site';
import { SITE_ROUTES } from '@/lib/routes';
import { submitToGoogleIndexing } from '@/lib/googleIndexing';
import { hasValidSecret } from '@/lib/apiAuth';

export const runtime = 'nodejs';

// Requires GOOGLE_INDEXING_CLIENT_EMAIL + GOOGLE_INDEXING_PRIVATE_KEY env
// vars from a Google Cloud service account (see project setup notes) — set
// via `vercel env add`. Google officially scopes this API to
// JobPosting/BroadcastEvent pages, so submissions for other content types
// may be ignored even when this call itself succeeds.
async function handle(request: NextRequest) {
  if (!hasValidSecret(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const urls = SITE_ROUTES.map((path) => `${SITE.url}${path}`);

  try {
    const results = await submitToGoogleIndexing(urls);
    return NextResponse.json({ submittedUrls: urls.length, results });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export const GET = handle;
export const POST = handle;
