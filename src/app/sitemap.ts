import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { SITE_ROUTES } from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return SITE_ROUTES.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : 0.7,
  }));
}
