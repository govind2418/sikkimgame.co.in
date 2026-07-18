import { SITE } from './site';

export type FaqItem = { question: string; answer: string };
export type BreadcrumbItem = { name: string; path: string };

// Computed once when this module loads (i.e. at build time for statically
// generated pages), so dateModified reflects the actual last build/deploy
// instead of a hardcoded date that never moves.
const BUILD_DATE = new Date().toISOString().slice(0, 10);

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    alternateName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/images/brand/app-icon-512.png`,
    description: SITE.description,
    sameAs: [] as string[],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/faq?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${SITE.url}${path}`,
    inLanguage: 'en-IN',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
    },
    about: {
      '@type': 'Thing',
      name: 'Sikkim Game',
    },
  };
}

export function articleSchema({
  headline,
  description,
  path,
  datePublished = '2026-01-01',
  dateModified = BUILD_DATE,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: `${SITE.url}${path}`,
    image: `${SITE.url}/images/brand/app-icon-512.png`,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/images/brand/app-icon-512.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}${path}`,
    },
    about: {
      '@type': 'Thing',
      name: 'Sikkim Game',
    },
  };
}

export function itemListSchema({
  name,
  items,
}: {
  name: string;
  items: { name: string; path: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${SITE.url}${item.path}`,
    })),
  };
}

export type HowToStepInput = { title: string; body: string } | string;

export function howToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: HowToStepInput[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) =>
      typeof step === 'string'
        ? { '@type': 'HowToStep', position: index + 1, text: step }
        : { '@type': 'HowToStep', position: index + 1, name: step.title, text: step.body }
    ),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function softwareAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.name,
    applicationCategory: 'GameApplication',
    operatingSystem: 'Android, Web',
    url: SITE.url,
    description: SITE.description,
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
