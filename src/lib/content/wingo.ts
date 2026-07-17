import type { FaqItem } from '@/lib/schema';

export const wingoTimers = [
  { label: '30 Sec', body: 'The fastest room — a fresh result every half minute, for players who want the most rounds per session.' },
  { label: '1 Min', body: 'The most commonly used room — enough time to read the payout table before the countdown closes.' },
  { label: '3 Min', body: 'A slower pace that suits players who want to space out bets rather than fire round after round.' },
  { label: '5 Min', body: 'The longest standard room, closer to a traditional lottery draw interval than a rapid-fire format.' },
];

export const wingoPayouts = [
  {
    bet: 'Single number (0–9)',
    example: 'Bet on 7',
    payout: '≈ 9x stake',
    note: 'Highest payout, lowest odds — only one of ten numbers wins.',
  },
  {
    bet: 'Green or Red',
    example: 'Bet on Green',
    payout: '≈ 2x stake',
    note: 'Wins on 4 of the 10 numbers in a full round (1,3,7,9 for Green / 2,4,6,8 for Red).',
  },
  {
    bet: 'Violet',
    example: 'Bet on Violet',
    payout: '≈ 4.5x stake',
    note: 'Only numbers 0 and 5 carry a Violet result, so it wins far less often but pays more.',
  },
  {
    bet: 'Big or Small',
    example: 'Bet on Big (5–9)',
    payout: '≈ 2x stake',
    note: 'Small covers 0–4, Big covers 5–9 — a near coin-flip split across the ten numbers.',
  },
];

export const wingoFaqs: FaqItem[] = [
  {
    question: 'What exact numbers count as Green, Red and Violet?',
    answer:
      'In the standard Wingo mapping, Green usually covers 1, 3, 7 and 9, Red covers 2, 4, 6 and 8, and Violet is layered onto the two remaining numbers — 0 and 5 — which is why Violet pays more but hits less often. Always confirm the live mapping shown in your app, since some versions colour these differently.',
  },
  {
    question: 'What round durations can I choose from?',
    answer:
      'Most Wingo builds offer four room speeds: 30 Sec, 1 Min, 3 Min and 5 Min. Faster rooms mean more results per session, not better odds — the underlying payout structure is the same across all of them.',
  },
  {
    question: 'What does each bet type actually pay?',
    answer:
      'As a rough industry-standard guide: a correct single number pays around 9x your stake, a correct Green or Red pays around 2x, a correct Violet pays around 4.5x, and a correct Big or Small pays around 2x. Treat these as typical reference figures — the live payout table shown before you confirm a bet is always the final word.',
  },
  {
    question: 'Why does Violet pay more than a plain colour bet?',
    answer:
      'Because it wins less often. Green and Red each cover 4 of the 10 numbers, but Violet only triggers on 2 (0 and 5), so the higher multiplier offsets the lower hit rate — it does not mean Violet is a "better" bet mathematically.',
  },
  {
    question: 'Is there a real strategy for Wingo?',
    answer:
      'Results come from the platform\'s own system each round, independent of every previous one. Knowing the bet types and payout structure helps you understand what you\'re risking — it does not create an edge. Any paid "Wingo strategy" or "prediction tool" claim deserves heavy skepticism.',
  },
  {
    question: 'How is Wingo different from Colour Prediction?',
    answer:
      'They run on the same underlying number-to-colour mapping. Wingo exposes all three bet types — number, colour and size — while Colour Prediction strips it down to just the colour choice. See our Colour Prediction guide for that simpler format.',
  },
];
