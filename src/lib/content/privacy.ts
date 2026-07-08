import type { FaqItem } from '@/lib/schema';

export const privacyFaqs: FaqItem[] = [
  {
    question: 'Does this site collect my personal data?',
    answer:
      'We run no accounts, so we never collect passwords, registration details or payment information. Basic, privacy-respecting analytics may be used to see which pages get read.',
  },
  {
    question: 'Do you use cookies?',
    answer:
      'Only minimal cookies for functionality and anonymised traffic measurement — never to process payments or store gaming credentials, since we don\'t operate any accounts.',
  },
  {
    question: 'What about the official app\'s privacy policy?',
    answer:
      'That\'s entirely separate and maintained by the operator directly — check their in-app or official policy for how your account data is handled.',
  },
];

export const privacySections = [
  {
    title: '1. What this policy covers',
    body: 'This policy explains how sikkimgame.co.in ("this site", "we") handles data from visitors to this website. It has no bearing on the official Sikkim Game operator\'s own app or platform, which maintains a separate policy.',
  },
  {
    title: '2. Information we collect',
    body: 'No account is needed to read this site. We may collect standard, non-identifying technical data — browser type, rough location, pages viewed — through privacy-conscious analytics to understand content usage.',
  },
  {
    title: '3. Cookies',
    body: 'Basic cookies may store simple preferences or measure aggregate traffic. Disable them in your browser at any time; the site will still function.',
  },
  {
    title: '4. Outbound links',
    body: 'We link out to the official operator platform. Once you leave sikkimgame.co.in, that platform\'s own privacy practices take over — review them independently before creating an account.',
  },
  {
    title: '5. What we will never ask for',
    body: 'Your account password, OTP, card number or banking credentials are never required by this site. Treat any such request claiming to be from us as fraudulent.',
  },
  {
    title: '6. Updates to this policy',
    body: 'We may revise this policy as our content or applicable regulation changes. The version published here is always the current one.',
  },
  {
    title: '7. Contact',
    body: 'Questions about this policy can be sent through our Contact page.',
  },
];
