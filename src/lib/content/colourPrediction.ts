import type { FaqItem } from '@/lib/schema';

export const colourPredictionPayouts = [
  { colour: 'Green', hitRate: '4 of 10 draws (1, 3, 7, 9)', payout: '≈ 2x stake' },
  { colour: 'Red', hitRate: '4 of 10 draws (2, 4, 6, 8)', payout: '≈ 2x stake' },
  { colour: 'Violet', hitRate: '2 of 10 draws (0, 5)', payout: '≈ 4.5x stake' },
];

export const colourPredictionFaqs: FaqItem[] = [
  {
    question: 'How does a Colour Prediction round actually work?',
    answer:
      'It runs on the same underlying number draw as Wingo, just without showing the number bet. A number from 0–9 is drawn on a fixed timer, and that number maps to Green (1,3,7,9), Red (2,4,6,8), or Violet (0 and 5 specifically). You pick a colour before the timer closes; the draw settles it.',
  },
  {
    question: 'Why does Violet pay more than Green or Red?',
    answer:
      'Because it hits less often. Green and Red each come up on 4 of the 10 possible numbers, but Violet only comes up on 2 (0 and 5) — the higher multiplier, typically around 4.5x versus roughly 2x for a plain colour, offsets the lower hit rate rather than making Violet a mathematically better bet.',
  },
  {
    question: 'Is the history or trend table useful for predicting the next colour?',
    answer:
      'No. Reading a run of Green results and betting Red because it feels "due" is the gambler\'s fallacy — each draw is independent of the ones before it, so past results carry zero predictive weight on the next one, no matter how the trend table looks.',
  },
  {
    question: 'Is this skill-based or pure chance?',
    answer:
      'Pure chance — outcomes come from the platform\'s system, not player skill. Treat it as entertainment carrying real financial risk, never a reliable income source.',
  },
  {
    question: 'What about "prediction formulas" sold online?',
    answer:
      'Be very skeptical of any paid signal group, formula, or bot promising guaranteed colour predictions — this is a common scam pattern in this game category, and no such tool can consistently beat a chance-based system.',
  },
  {
    question: 'Can I actually lose money?',
    answer:
      'Yes, exactly like any real-money prediction game. Only ever play with money you can afford to lose, and set a personal limit before you start.',
  },
];
