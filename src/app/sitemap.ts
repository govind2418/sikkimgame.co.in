import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

const routes = [
  '',
  '/login',
  '/register',
  '/download',
  '/how-to-register',
  '/how-to-download',
  '/apk-guide',
  '/invite-code',
  '/gift-code',
  '/bonus',
  '/colour-prediction',
  '/wingo',
  '/faq',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/disclaimer',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : 0.7,
  }));
}
