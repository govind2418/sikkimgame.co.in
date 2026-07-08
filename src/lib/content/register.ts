import type { FaqItem } from '@/lib/schema';

export const registerFaqs: FaqItem[] = [
  {
    question: 'How long does sign-up take?',
    answer:
      'Under a minute in most cases: mobile number, password, OTP, done. See our full How to Register walkthrough if you want every screen explained.',
  },
  {
    question: 'Is an invite code required?',
    answer:
      'No, it\'s optional. Adding one during sign-up can occasionally unlock a welcome bonus — check our Invite Code page for how that works.',
  },
  {
    question: 'Is creating an account free?',
    answer:
      'Yes. Adding funds later is entirely your own decision and never required just to hold an account.',
  },
  {
    question: 'Can I register twice with the same number?',
    answer:
      'No, one account per mobile number. Already signed up? Use the Login page instead.',
  },
];

export const registerSteps = [
  {
    title: 'Get the official app or link',
    body: 'Use our Download page to reach the correct sign-up screen.',
  },
  {
    title: 'Enter an active mobile number',
    body: 'You\'ll need access to it for OTP and future password recovery.',
  },
  {
    title: 'Set a strong, unique password',
    body: 'Don\'t reuse a password from your email or banking apps.',
  },
  {
    title: 'Verify with the OTP sent by SMS',
    body: 'Never share this code with anyone, including people posing as "support".',
  },
];
