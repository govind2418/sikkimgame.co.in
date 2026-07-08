import type { FaqItem } from '@/lib/schema';

export const howToRegisterSteps = [
  {
    title: 'Open the sign-up screen',
    body: 'Launch the app or official site and tap Register or Create Account. Use the link from our Download page rather than one forwarded through chat.',
  },
  {
    title: 'Enter your mobile number',
    body: 'Type an active number you personally control — it receives the OTP now and handles password recovery later, so a borrowed or temporary number causes problems down the line.',
  },
  {
    title: 'Choose your country code correctly',
    body: 'Most players are on +91, but double-check the field before submitting since a wrong code silently breaks OTP delivery for some users.',
  },
  {
    title: 'Set a password you have not reused',
    body: 'Mix letters, numbers and a symbol. Reusing an email or banking password here means one leak anywhere else could expose this account too.',
  },
  {
    title: 'Enter the OTP the moment it arrives',
    body: 'Most OTPs expire within a couple of minutes. If it does not arrive within 60 seconds, use the resend option instead of requesting it repeatedly, which can trigger a temporary lock.',
  },
  {
    title: 'Add an invite code if you have one',
    body: 'This step is optional. If someone shared a code with you, this is the only field it belongs in — see our Invite Code guide for details.',
  },
  {
    title: 'Confirm and check your dashboard',
    body: 'Once submitted, you should land straight on your account home screen. If not, restart from step one rather than resubmitting the same form repeatedly.',
  },
];

export const howToRegisterFaqs: FaqItem[] = [
  {
    question: 'What if the OTP never arrives?',
    answer:
      'Wait a full 60 seconds before tapping resend, check that your number can receive SMS, and confirm you typed the country code correctly. Persistent failures usually mean a carrier delay rather than an account problem.',
  },
  {
    question: 'Can I change my registered number later?',
    answer:
      'This depends on the current settings menu in the official app. If the option is not visible, it likely is not supported, and official in-app support is the right place to ask.',
  },
  {
    question: 'Is my information safe during sign-up?',
    answer:
      'Sign-up only ever asks for a mobile number, a password you create, and an OTP. Anything asking for card numbers, banking passwords, or ID documents at this stage is not part of a normal registration flow.',
  },
  {
    question: 'What happens after I finish registering?',
    answer:
      'You land on your account dashboard with a zero balance. Adding funds is entirely optional and a separate decision from creating the account itself.',
  },
];
