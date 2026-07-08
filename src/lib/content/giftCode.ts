import type { FaqItem } from '@/lib/schema';

export const giftCodeFaqs: FaqItem[] = [
  {
    question: 'What counts as a gift code here?',
    answer:
      'A short redeem code — sometimes called a reward code — that credits a specific bonus once entered correctly in the app\'s redemption section.',
  },
  {
    question: 'Where do I actually enter one?',
    answer:
      'Sign in, then look under Rewards, Promotions or Redeem Code (exact naming shifts between app versions). Paste the code exactly as given and confirm.',
  },
  {
    question: 'My code says invalid or expired — why?',
    answer:
      'Check for stray spaces or wrong capitalisation first. Beyond that, most codes carry an expiry date or a maximum number of redemptions, and once either limit is hit the code simply stops working.',
  },
  {
    question: 'Should a gift code ever cost money?',
    answer:
      'Never. Redemption is free by definition. Anyone asking for payment, your password, or an OTP to "activate" a code is running a scam — stop immediately.',
  },
  {
    question: 'Where do genuine codes get posted?',
    answer:
      'Official in-app notifications and verified promotional channels are the safest sources. Treat codes from random forwards or unfamiliar pages with real suspicion.',
  },
];
