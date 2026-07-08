import type { FaqItem } from '@/lib/schema';

export const wingoFaqs: FaqItem[] = [
  {
    question: 'What is Wingo, in one sentence?',
    answer:
      'A rapid number-and-colour guessing format where you pick before a round timer runs out, and a result posts the instant it hits zero.',
  },
  {
    question: 'How long does one round take?',
    answer:
      'Set by the platform, usually a short 1–3 minute window — enough to place a bet and see a result without waiting long between rounds.',
  },
  {
    question: 'What can I actually bet on?',
    answer:
      'A specific number, the colour tied to that round\'s number set, or a size category like big or small. Odds and multipliers differ across these bet types.',
  },
  {
    question: 'Is there a real strategy for Wingo?',
    answer:
      'Results come from the platform\'s own system, not a beatable pattern. Any paid "Wingo strategy" or "prediction tool" claim deserves heavy skepticism.',
  },
  {
    question: 'How is Wingo different from Colour Prediction?',
    answer:
      'They\'re close cousins — Wingo centers on numbers with attached colours and size options, while Colour Prediction is purely a colour pick each round. Exact rules vary by platform version.',
  },
];
