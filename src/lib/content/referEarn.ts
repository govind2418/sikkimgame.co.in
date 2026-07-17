import type { FaqItem } from '@/lib/schema';

export const referEarnSteps = [
  {
    title: 'Find your own referral code',
    body: 'Usually listed under Profile, Invite Friends, or Refer & Earn inside the official app — it\'s different from any code you entered at sign-up.',
  },
  {
    title: 'Share your code or link',
    body: 'Send it directly to friends, or share the referral link the app generates, instead of posting it publicly where strangers can use it.',
  },
  {
    title: 'Wait for your friend to join',
    body: 'They enter your code while registering — see our Invite Code guide for exactly where that field sits.',
  },
  {
    title: 'Check your rewards tab',
    body: 'Referral bonuses are usually credited automatically once the condition for that campaign is met.',
  },
];

export const referEarnFaqs: FaqItem[] = [
  {
    question: 'Where do I find my own referral code?',
    answer:
      'Look in your profile or account settings for an Invite Friends or Refer & Earn section — it generates a personal code or link you can share.',
  },
  {
    question: 'When exactly do I get credited for a referral?',
    answer:
      'It depends on the current campaign — some credit as soon as a friend registers, others require the friend to complete a first deposit or round. Check the terms shown on the Refer & Earn screen itself.',
  },
  {
    question: 'What\'s the difference between Refer & Earn and an Invite Code?',
    answer:
      'Refer & Earn is about sharing your own code to earn a reward. Invite Code is about entering someone else\'s code, usually at sign-up. See our Invite Code guide for that side of it.',
  },
  {
    question: 'Is there a limit to how many people I can refer?',
    answer:
      'Most platforms don\'t cap the number of friends you can refer, but individual campaigns can carry their own limits or expiry dates — read the specific offer before assuming it\'s unlimited.',
  },
];
