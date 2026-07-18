import {
  JsonLd,
  webPageSchema,
  articleSchema,
  howToSchema,
  softwareAppSchema,
  itemListSchema,
  type HowToStepInput,
} from '@/lib/schema';

// FAQPage schema is emitted by <FaqAccordion> itself wherever it's used, so it
// isn't duplicated here — this only adds WebPage + Article, and optionally
// HowTo (when the page has genuine numbered steps), SoftwareApplication
// (only for pages that are actually about the app itself), and ItemList
// (only for pages that genuinely list out a set of other pages/items).
export function PageSchema({
  title,
  description,
  path,
  howToSteps,
  softwareApp,
  itemList,
}: {
  title: string;
  description: string;
  path: string;
  howToSteps?: HowToStepInput[];
  softwareApp?: boolean;
  itemList?: { name: string; path: string }[];
}) {
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, description, path })} />
      <JsonLd data={articleSchema({ headline: title, description, path })} />
      {howToSteps && howToSteps.length > 0 && (
        <JsonLd data={howToSchema({ name: title, description, steps: howToSteps })} />
      )}
      {softwareApp && <JsonLd data={softwareAppSchema()} />}
      {itemList && itemList.length > 0 && (
        <JsonLd data={itemListSchema({ name: title, items: itemList })} />
      )}
    </>
  );
}
