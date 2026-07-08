import type { FaqItem } from '@/lib/schema';

export const loginFaqs: FaqItem[] = [
  {
    question: 'How do I log in to Sikkim Game?',
    answer:
      'Open the official Sikkim Game app or website, enter the mobile number you registered with along with your password, and tap Login. If you installed the APK, make sure you are using the latest version to avoid login errors.',
  },
  {
    question: 'I forgot my Sikkim Game password. What do I do?',
    answer:
      'Use the "Forgot Password" option on the official login screen to reset it via your registered mobile number. If you no longer have access to that number, you will need to contact official support through the app.',
  },
  {
    question: 'Why does my Sikkim Game login keep failing?',
    answer:
      'Login failures are usually caused by an outdated app version, an incorrect password, a weak internet connection, or entering the wrong country code. Double-check each of these before trying again.',
  },
  {
    question: 'Can I log in to Sikkim Game from a browser?',
    answer:
      'Many players prefer the app for stability, but a web login option may also be available. Check the Download page for the current official links.',
  },
  {
    question: 'Is it safe to save my Sikkim Game login details?',
    answer:
      'Only save your login on a personal, password-protected device. Never share your password, OTP, or login link with anyone claiming to offer bonuses or account help.',
  },
];

export const loginSteps = [
  {
    title: 'Open the official app or site',
    body: 'Launch the Sikkim Game app you installed, or open the official login page in your browser. Avoid links shared in random messages — use the link from our Download page.',
  },
  {
    title: 'Enter your registered mobile number',
    body: 'Type in the exact mobile number used during registration, including the correct country code if prompted.',
  },
  {
    title: 'Enter your password',
    body: 'Carefully type your password. If you are unsure, use the Forgot Password option instead of guessing repeatedly, which can temporarily lock some accounts.',
  },
  {
    title: 'Tap Login and verify',
    body: 'Complete any OTP or verification step if asked, then you should land on your account dashboard, ready to check your balance or continue to a game mode.',
  },
];
