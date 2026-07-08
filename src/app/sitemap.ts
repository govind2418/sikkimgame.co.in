import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

const routes = [
  '',
  '/login',
  '/register',
  '/download',
  '/invite-code',
  '/gift-code',
  '/colour-prediction',
  '/wingo',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
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
