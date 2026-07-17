import type { FaqItem } from '@/lib/schema';

export const aviatorSteps = [
  {
    title: 'Place your bet before the round starts',
    body: 'A short betting window opens between rounds. Some versions let you place two separate bets in the same round.',
  },
  {
    title: 'Watch the multiplier climb',
    body: 'Once the round starts, a multiplier begins at 1.00x and rises continuously — visually shown as a plane climbing.',
  },
  {
    title: 'Cash out any time before it crashes',
    body: 'Tap cash out whenever you want to lock in the current multiplier against your stake. The earlier you cash out, the smaller — but safer — the win.',
  },
  {
    title: 'Miss the window and you lose the stake',
    body: 'The round ends at a random "crash point." Anyone still in when it crashes loses that bet — there is no partial refund.',
  },
];

export const aviatorFaqs: FaqItem[] = [
  {
    question: 'What is Sikkim Game Aviator, in one sentence?',
    answer:
      'A round-based multiplier game where you bet, watch a multiplier climb from 1.00x, and must cash out before it randomly "crashes" — miss the window and the stake is lost.',
  },
  {
    question: 'What does the 96.55% RTP actually mean?',
    answer:
      'RTP (Return to Player) of 96.55% means that, averaged across a very large number of rounds, about 96.55% of all money wagered on Aviator is returned to players collectively, with the remaining 3.45% built into the house edge. It says nothing about what happens on your next individual round.',
  },
  {
    question: 'Can I predict when it will crash?',
    answer:
      'No. Each round\'s crash point is generated independently, typically through a provably-fair or RNG-based system, with no connection to previous rounds. Betting systems, "signal" channels or crash predictors cannot reliably beat this.',
  },
  {
    question: 'What is auto cash-out?',
    answer:
      'A setting where you choose a target multiplier in advance (say 2.00x) and the system cashes out automatically the instant the multiplier reaches it, removing the need to react manually.',
  },
  {
    question: 'Are Cricket, Goal and Vortex the same game as Aviator?',
    answer:
      'Yes — they run on the same rising-multiplier, cash-out-before-crash mechanic, just re-themed around cricket, football and a vortex visual respectively. Each carries its own RTP, so check the live figure for whichever one you play.',
  },
];
