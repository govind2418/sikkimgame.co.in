import type { FaqItem } from '@/lib/schema';

export const loginFaqs: FaqItem[] = [
  {
    question: 'What do I need to sign in?',
    answer:
      'Just the mobile number you registered with and your password. If you installed the app via APK, confirm you\'re on the latest build first — outdated versions are a common cause of sign-in failures.',
  },
  {
    question: 'I forgot my password — now what?',
    answer:
      'Use the "Forgot Password" link on the official sign-in screen to reset it through your registered number. Lost access to that number entirely? You\'ll need official in-app support to recover the account.',
  },
  {
    question: 'Why does sign-in keep failing even with the right password?',
    answer:
      'Check four things in order: app version, correct country code, spelling of the password, and connection stability. Nine times out of ten it\'s one of these.',
  },
  {
    question: 'Can I sign in from a desktop browser?',
    answer:
      'A web option is often available alongside the app. See our Download page for whichever official link is currently live.',
  },
  {
    question: 'Is it safe to stay signed in on my phone?',
    answer:
      'On a personal, locked device, yes. Never share your password or OTP with anyone — including messages claiming to offer account "verification" or bonus unlocks.',
  },
];

export const loginSteps = [
  {
    title: 'Open the official app or site',
    body: 'Launch the app you installed, or open the sign-in page from our Download link. Skip anything shared through random SMS or chat forwards.',
  },
  {
    title: 'Type your registered mobile number',
    body: 'Enter it exactly as used at sign-up, country code included if the field asks for one.',
  },
  {
    title: 'Enter your password carefully',
    body: 'Mistyping repeatedly can trigger a temporary lock on some accounts — use Forgot Password instead of guessing.',
  },
  {
    title: 'Confirm any OTP prompt',
    body: 'Complete the verification step if shown, and you should land straight on your account dashboard.',
  },
];
