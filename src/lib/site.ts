export const SITE = {
  name: 'Sikkim Game',
  domain: 'sikkimgame.co.in',
  url: 'https://sikkimgame.co.in',
  legalName: 'Sikkim Game Network',
  description:
    'Sikkim Game is a fast, unofficial player resource for sign-in, sign-up, APK setup, bonus and invite codes, plus clear Wingo and Colour Prediction breakdowns — everything before you touch the official app.',
  officialUrl: 'https://sikkimgg.live/#/',
  registerUrl: 'https://sikkimgg.live/#/register?invitationCode=448445788742',
  contactEmail: 'connect@sikkimgame.co.in',
  twitterHandle: '@sikkimgamezone',
  themeColor: '#050b1a',
  locale: 'en_IN',
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Download', href: '/download' },
  { label: 'Bonus', href: '/bonus' },
  { label: 'Wingo', href: '/wingo' },
  { label: 'Colour Prediction', href: '/colour-prediction' },
  { label: 'FAQ', href: '/faq' },
];

export const FOOTER_LINKS: NavLink[] = [
  // Get Started
  { label: 'Home', href: '/' },
  { label: 'Login', href: '/login' },
  { label: 'Register', href: '/register' },
  { label: 'Download App', href: '/download' },
  { label: 'How to Register', href: '/how-to-register' },
  { label: 'How to Download', href: '/how-to-download' },
  { label: 'APK Guide', href: '/apk-guide' },
  // Codes & Rewards
  { label: 'Invite Code', href: '/invite-code' },
  { label: 'Gift Code', href: '/game-gift-code' },
  { label: 'Bonus', href: '/bonus' },
  { label: 'Withdrawal', href: '/withdrawal' },
  { label: 'Refer & Earn', href: '/refer-earn' },
  { label: 'Wingo', href: '/wingo' },
  { label: 'Colour Prediction', href: '/colour-prediction' },
  { label: 'Lottery Game', href: '/lottery-game' },
  // Support & Company
  { label: 'Customer Care', href: '/customer-care' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact-us' },
  { label: 'Responsible Gaming', href: '/responsible-gaming' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

export const DISCLAIMER =
  'Sikkim Game (sikkimgame.co.in) is an independent, reader-supported resource and is not the game operator. Nothing here implies backing from, partnership with, or endorsement by the Government of Sikkim or any state authority — the word "Sikkim" is used only because that is what players call this game category. Every sign-up, deposit, game round and withdrawal happens on the official operator\'s own platform, never through this website. We take no payments, run no game rounds, and cannot promise any outcome. Real-money gaming laws differ by Indian state, so confirm what is permitted where you live before joining. You must be 18 or older, and we encourage playing only with money you can afford to lose.';
