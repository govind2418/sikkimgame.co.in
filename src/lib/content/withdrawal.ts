import type { FaqItem } from '@/lib/schema';

export const withdrawalSteps = [
  {
    title: 'Open the Wallet or Withdraw screen',
    body: 'It usually sits under your account or wallet tab, separate from the deposit option.',
  },
  {
    title: 'Confirm your linked payout method',
    body: 'Bank account or UPI details need to be added and verified before a request can go through.',
  },
  {
    title: 'Enter the amount and submit',
    body: 'Most platforms enforce a minimum withdrawal amount — check the screen for the current figure.',
  },
  {
    title: 'Wait for processing',
    body: 'Requests are typically reviewed before payout; timing varies by platform and verification status.',
  },
];

export const withdrawalFaqs: FaqItem[] = [
  {
    question: 'What do I need before requesting a withdrawal?',
    answer:
      'A verified account, a linked bank account or UPI ID matching your registered details, and a balance above the platform\'s minimum withdrawal threshold.',
  },
  {
    question: 'Why is my withdrawal stuck on pending?',
    answer:
      'Common causes are incomplete verification, a mismatch between your registered name and payout account, or standard processing time that hasn\'t elapsed yet. If it runs well past the stated window, use official Customer Care rather than a third party.',
  },
  {
    question: 'Does a bonus stop me from withdrawing?',
    answer:
      'Bonus credit often carries a wagering condition — you may need to play through it a set number of times before resulting winnings become withdrawable. Check the terms shown when you received the bonus.',
  },
  {
    question: 'Is there a minimum or maximum withdrawal amount?',
    answer:
      'Yes, most platforms set both a floor and a daily or per-transaction ceiling. These figures are set by the operator and can change, so check the withdrawal screen itself rather than relying on an old screenshot.',
  },
  {
    question: 'Someone offered to "speed up" my withdrawal for a fee — is that real?',
    answer:
      'No. A legitimate withdrawal never requires paying a third party, an "agent," or anyone claiming to expedite it. Only official Customer Care can look into a delayed payout.',
  },
];
