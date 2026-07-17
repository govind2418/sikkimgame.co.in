import { SITE } from './site';

// Verification file at public/<key>.txt must contain exactly this key.
export const INDEXNOW_KEY = 'c90636649b9e3db0fb289cb698929a9f';

export async function submitToIndexNow(urls: string[]) {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(SITE.url).host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE.url}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });

  return {
    ok: res.ok,
    status: res.status,
    statusText: res.statusText,
  };
}
