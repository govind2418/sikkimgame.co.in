import type { FaqItem } from '@/lib/schema';

export const bonusTypes = [
  {
    title: 'Welcome Bonus',
    body: 'A one-time credit or match offered to new accounts, sometimes tied to entering an invite code at sign-up. Terms and amounts are set by the official platform and change over time.',
  },
  {
    title: 'Invite / Referral Bonus',
    body: 'Earned when someone signs up using your invite code, or when you sign up using someone else\'s. See our Invite Code guide for exactly where that field sits.',
  },
  {
    title: 'Gift / Redeem Codes',
    body: 'Short codes distributed through official channels that credit a specific reward when redeemed correctly from the rewards menu.',
  },
  {
    title: 'Promotional Credits',
    body: 'Occasional time-limited offers tied to app events or milestones. These appear directly in-app and are the most reliable source of current promotions.',
  },
];

export const bonusFaqs: FaqItem[] = [
  {
    question: 'Which bonus should I look for first?',
    answer:
      'If you\'re brand new, check whether a welcome bonus is active and whether you have an invite code to enter at sign-up — that\'s the easiest one to claim.',
  },
  {
    question: 'Do bonuses come with wagering requirements?',
    answer:
      'Often, yes. Bonus credit may need to be used a certain number of times before any winnings from it can be withdrawn. Read the specific bonus terms shown in-app before assuming it\'s free money.',
  },
  {
    question: 'Can a bonus expire?',
    answer:
      'Yes — most carry a time limit or a maximum number of uses. Check the expiry shown at the time you receive it rather than assuming it lasts indefinitely.',
  },
  {
    question: 'How do I avoid bonus-related scams?',
    answer:
      'Never pay a fee to "unlock" a bonus, and never share your password or OTP to "verify" one. Legitimate bonuses are credited automatically once a valid code or condition is met — no manual "activation" via chat is ever required.',
  },
];
