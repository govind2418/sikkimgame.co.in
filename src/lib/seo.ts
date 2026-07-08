import type { Metadata } from 'next';
import { SITE } from './site';

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogTitle?: string;
};

export function buildMetadata({ title, description, path, keywords, ogTitle }: BuildMetadataArgs): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === '/' ? title : `${title} | ${SITE.name}`;
  const ogImageUrl = `${SITE.url}/og?title=${encodeURIComponent(ogTitle ?? title)}`;

  return {
    title: { absolute: fullTitle },
    description,
    keywords: keywords?.join(', '),
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
