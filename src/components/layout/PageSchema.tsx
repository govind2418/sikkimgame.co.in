import { JsonLd, webPageSchema, articleSchema } from '@/lib/schema';

// FAQPage schema is emitted by <FaqAccordion> itself wherever it's used, so it
// isn't duplicated here — this only adds the page-level WebPage + Article schema.
export function PageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, description, path })} />
      <JsonLd data={articleSchema({ headline: title, description, path })} />
    </>
  );
}
