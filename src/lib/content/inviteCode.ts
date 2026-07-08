import type { FaqItem } from '@/lib/schema';

export const inviteCodeFaqs: FaqItem[] = [
  {
    question: 'What does an invite code actually do?',
    answer:
      'It links your new account to whoever shared the code — a friend or a promotional page — and can sometimes unlock a welcome bonus for both sides depending on the current campaign.',
  },
  {
    question: 'Where do I type it in?',
    answer:
      'Usually on the registration screen, in a field labeled Invite Code or Referral Code. Some app versions also allow it from account settings shortly after sign-up.',
  },
  {
    question: 'Is it mandatory to register?',
    answer:
      'No. You can create an account with no invite code at all — it\'s purely optional.',
  },
  {
    question: 'I already registered — can I still add one?',
    answer:
      'Depends entirely on the platform\'s current rules; some allow it briefly post-signup, others only at the exact moment of registration. If the option isn\'t visible in your settings, it likely needs to be entered at sign-up.',
  },
  {
    question: 'How do I know a shared invite code is legitimate?',
    answer:
      'A real invite code never requires payment to "activate" and never needs your password or OTP to work. If someone attaches either condition, walk away.',
  },
];
