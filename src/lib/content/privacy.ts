import type { FaqItem } from '@/lib/schema';

export const privacyFaqs: FaqItem[] = [
  {
    question: 'Does sikkimgame.in.net collect my personal data?',
    answer:
      'We do not run user accounts, so we do not collect registration details, passwords, or payment information. Standard, privacy-friendly web analytics may be used to understand aggregate traffic to our pages.',
  },
  {
    question: 'Do you use cookies?',
    answer:
      'This site may use minimal cookies for basic functionality and anonymised analytics. We do not use cookies to process payments or store gaming account credentials, since we do not operate any accounts.',
  },
  {
    question: 'Who should I contact about the official platform\'s privacy policy?',
    answer:
      'For questions about how the official Sikkim Game operator handles your account data, refer to the privacy policy published within their app or official website, not this site.',
  },
];

export const privacySections = [
  {
    title: '1. Scope of this policy',
    body: 'This Privacy Policy explains how sikkimgame.in.net ("we", "this site") handles information related to visitors of this website. It does not cover the official Sikkim Game operator\'s app or website, which maintains its own separate privacy policy.',
  },
  {
    title: '2. Information we collect',
    body: 'We do not require account registration to browse this site. We may collect standard, non-identifying technical data (such as browser type, approximate location, and pages visited) through privacy-conscious analytics tools to understand how our content is used.',
  },
  {
    title: '3. Cookies',
    body: 'Basic cookies may be used to remember simple preferences or measure aggregate traffic. You can disable cookies through your browser settings; core content will still be accessible.',
  },
  {
    title: '4. Third-party links',
    body: 'This site links to the official Sikkim Game operator\'s platform. Once you leave sikkimgame.in.net, that platform\'s own privacy policy and data practices apply — we encourage you to review them independently.',
  },
  {
    title: '5. Data we do not collect',
    body: 'We never ask for your account password, OTP, card numbers, or banking credentials. If anyone claiming to represent this site asks for such information, do not share it — it is not a legitimate request.',
  },
  {
    title: '6. Changes to this policy',
    body: 'We may update this Privacy Policy periodically to reflect changes in our content or applicable regulations. The latest version will always be published on this page.',
  },
  {
    title: '7. Contact',
    body: 'For questions about this policy, reach out via our Contact page.',
  },
];
