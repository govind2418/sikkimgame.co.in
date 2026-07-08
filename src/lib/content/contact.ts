import type { FaqItem } from '@/lib/schema';

export const contactFaqs: FaqItem[] = [
  {
    question: 'Can you fix my deposit or withdrawal problem?',
    answer:
      'No — we have no access to any user account or transaction, so those issues must go through official in-app support directly.',
  },
  {
    question: 'What should I actually contact you about?',
    answer:
      'Corrections to a guide, a broken link, a suggestion for a page we\'re missing, or general questions about the content published here.',
  },
  {
    question: 'How fast do you reply?',
    answer:
      'We aim for a few business days. For anything urgent tied to your account, in-app support will always be faster than emailing us.',
  },
];
