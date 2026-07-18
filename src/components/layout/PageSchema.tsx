import {
  JsonLd,
  webPageSchema,
  articleSchema,
  howToSchema,
  softwareAppSchema,
  type HowToStepInput,
} from '@/lib/schema';

// FAQPage schema is emitted by <FaqAccordion> itself wherever it's used, so it
// isn't duplicated here — this only adds WebPage + Article, and optionally
// HowTo (when the page has genuine numbered steps) and SoftwareApplication
// (only for pages that are actually about the app itself).
export function PageSchema({
  title,
  description,
  path,
  howToSteps,
  softwareApp,
}: {
  title: string;
  description: string;
  path: string;
  howToSteps?: HowToStepInput[];
  softwareApp?: boolean;
}) {
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, description, path })} />
      <JsonLd data={articleSchema({ headline: title, description, path })} />
      {howToSteps && howToSteps.length > 0 && (
        <JsonLd data={howToSchema({ name: title, description, steps: howToSteps })} />
      )}
      {softwareApp && <JsonLd data={softwareAppSchema()} />}
    </>
  );
}
