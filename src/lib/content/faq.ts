export type FaqGroup = {
  category: string;
  items: { question: string; answer: string }[];
};

export const faqGroups: FaqGroup[] = [
  {
    category: 'Account & Access',
    items: [
      {
        question: 'I have both a web account and an APK install — are they the same account?',
        answer:
          'Yes, in almost all cases they share the same backend, so signing in with the same mobile number gives access to the same balance and history either way.',
      },
      {
        question: 'Can I use one number for two separate accounts?',
        answer:
          'No, a mobile number is generally tied to a single account. Trying to register a second account with the same number should be rejected by the sign-up form.',
      },
      {
        question: 'What should I do if I suspect my account was accessed by someone else?',
        answer:
          'Change your password immediately from a device you trust and contact official in-app support. Do not wait, and do not rely on a third-party page like this one to resolve it.',
      },
    ],
  },
  {
    category: 'Bonuses & Codes',
    items: [
      {
        question: 'What is the difference between a bonus, an invite code and a gift code?',
        answer:
          'A bonus is any credited reward in general. An invite code is entered once at sign-up to link a referral. A gift code is redeemed afterward from a rewards menu for a specific, separate reward. See our Bonus overview for the full picture.',
      },
      {
        question: 'Do unused bonus codes roll over?',
        answer:
          'Typically no — most codes carry a fixed expiry and simply stop working once it passes, regardless of whether you used them.',
      },
    ],
  },
  {
    category: 'Wingo & Colour Prediction',
    items: [
      {
        question: 'Which game mode is better for beginners?',
        answer:
          'Neither is objectively easier since both are chance-based. Colour Prediction has fewer bet types and can feel simpler to follow for a first-time player.',
      },
      {
        question: 'Can a betting pattern improve my odds over time?',
        answer:
          'No. Results are generated independently each round by the platform, so no sequence of past bets changes the odds of the next one.',
      },
    ],
  },
  {
    category: 'Safety & Legality',
    items: [
      {
        question: 'Is Sikkim Game legal where I live?',
        answer:
          'Real-money gaming rules differ across Indian states. We cannot give you a legal guarantee — check your local regulations before registering or adding funds.',
      },
      {
        question: 'How do I report a scam using this site\'s name?',
        answer:
          'Contact us directly through our Contact page with details. We do not authorize third parties to sell "predictions" or request payments on our behalf, ever.',
      },
    ],
  },
];
