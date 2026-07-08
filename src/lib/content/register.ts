import type { FaqItem } from '@/lib/schema';

export const registerFaqs: FaqItem[] = [
  {
    question: 'How do I register on Sikkim Game?',
    answer:
      'Open the official app or website, tap Register, enter your mobile number, create a password, verify the OTP sent to your phone, and your account is ready. It usually takes under a minute.',
  },
  {
    question: 'Do I need an invite code to register?',
    answer:
      'An invite code is usually optional during registration but can unlock welcome bonuses on some campaigns. See our Invite Code page for details on where to enter one if you have it.',
  },
  {
    question: 'What details are required to sign up?',
    answer:
      'Typically just a valid mobile number, a password of your choice, and OTP verification. Never provide banking passwords or card PINs during registration — those are never required to create an account.',
  },
  {
    question: 'Can I register with the same number twice?',
    answer:
      'No, each mobile number can usually be linked to only one account. If you already registered, use the Login page instead of creating a duplicate account.',
  },
  {
    question: 'Is Sikkim Game registration free?',
    answer:
      'Yes, creating an account is free. You only need to add funds if and when you choose to, and that step is entirely optional and your own decision.',
  },
];

export const registerSteps = [
  {
    title: 'Get the official app or site',
    body: 'Use our Download page to find the correct APK or web link, then open the registration screen.',
  },
  {
    title: 'Enter your mobile number',
    body: 'Provide an active number you can access, since it is used for OTP verification and password recovery later.',
  },
  {
    title: 'Create a strong password',
    body: 'Mix letters, numbers, and symbols. Avoid reusing a password from your email or banking apps.',
  },
  {
    title: 'Verify with OTP',
    body: 'Enter the one-time code sent by SMS. Do not share this code with anyone, including people claiming to be "support".',
  },
  {
    title: 'Add an invite code (optional)',
    body: 'If you have a valid invite code, enter it where prompted to potentially unlock a welcome bonus — see our Invite Code guide.',
  },
];
