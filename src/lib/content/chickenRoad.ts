import type { FaqItem } from '@/lib/schema';

export const chickenRoadDifficulties = [
  { level: 'Easy', body: 'Smaller multiplier steps per lane, but a much lower chance of failing any single lane.' },
  { level: 'Medium', body: 'A balance point — moderate step size with moderate lane-failure risk.' },
  { level: 'Hard', body: 'Bigger multiplier jumps per lane, paired with a noticeably higher chance of failing early.' },
  { level: 'Extreme', body: 'The largest per-lane multiplier growth, and the highest chance the chicken fails within the first few lanes.' },
];

export const chickenRoadFaqs: FaqItem[] = [
  {
    question: 'How does a Chicken Road 2 round work?',
    answer:
      'You pick a difficulty level before starting, then a chicken moves forward one lane at a time. Every lane crossed successfully bumps the multiplier up. You can cash out after any successful lane — but if the chicken fails a lane, the round ends and the stake is lost.',
  },
  {
    question: 'What difficulty level should I pick?',
    answer:
      'Higher difficulty (Hard, Extreme) grows the multiplier faster per lane but fails far more often, early. Lower difficulty (Easy, Medium) grows slower but survives more lanes on average. Neither is "better" mathematically — they trade speed for survival odds.',
  },
  {
    question: 'What does the 97.03% RTP mean here?',
    answer:
      'Averaged across a large number of rounds and all difficulty levels, about 97.03% of money wagered on Chicken Road 2 is returned to players collectively. It does not predict any single round or difficulty pick.',
  },
  {
    question: 'Is there a way to know which lane will fail?',
    answer:
      'No. Each lane\'s outcome is generated independently by the platform\'s system at the difficulty you selected — there is no pattern to read or predict from previous rounds or other players\' results.',
  },
  {
    question: 'How is this different from Aviator?',
    answer:
      'Aviator uses one continuously climbing multiplier that can crash at any instant. Chicken Road 2 breaks that same idea into discrete steps (lanes), with a difficulty setting that controls the risk/reward per step. See our Aviator guide for that side of it.',
  },
];
