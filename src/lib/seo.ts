import type { Metadata } from 'next';
import { SITE } from './site';

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogTitle?: string;
};

const BASE_KEYWORDS = [
  'Sikkim Game',
  'sikkimgame.co.in',
  'Sikkim Game Login',
  'Sikkim Game Register',
  'Sikkim Game Download',
  'Sikkim Game APK Guide',
  'Sikkim Game Bonus',
  'Sikkim Login',
  'Sikkim Register',
];

export function buildMetadata({ title, description, path, keywords, ogTitle }: BuildMetadataArgs): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = title;
  const ogImageUrl = `${SITE.url}/og?title=${encodeURIComponent(ogTitle ?? title)}`;
  const allKeywords = Array.from(new Set([...(keywords ?? []), ...BASE_KEYWORDS]));

  return {
    title: { absolute: fullTitle },
    description,
    keywords: allKeywords.join(', '),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: 'website',
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
  };
}
