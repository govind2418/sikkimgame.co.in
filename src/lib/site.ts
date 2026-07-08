export const SITE = {
  name: 'Sikkim Game',
  domain: 'sikkimgame.in.net',
  url: 'https://sikkimgame.in.net',
  legalName: 'Sikkim Game Info Hub',
  description:
    'Independent information hub for Sikkim Game — login, register, APK download, invite codes, gift codes, Wingo and Colour Prediction guides.',
  officialUrl: 'https://sikkimgg.live/#/',
  contactEmail: 'support@sikkimgame.in.net',
  twitterHandle: '@sikkimgameinfo',
  themeColor: '#0a1024',
  locale: 'en_IN',
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Download', href: '/download' },
  { label: 'Wingo', href: '/wingo' },
  { label: 'Colour Prediction', href: '/colour-prediction' },
  { label: 'Invite Code', href: '/invite-code' },
  { label: 'Gift Code', href: '/gift-code' },
  { label: 'About', href: '/about' },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Login', href: '/login' },
  { label: 'Register', href: '/register' },
  { label: 'Download App', href: '/download' },
  { label: 'Invite Code', href: '/invite-code' },
  { label: 'Gift Code', href: '/gift-code' },
  { label: 'Wingo Game', href: '/wingo' },
  { label: 'Colour Prediction', href: '/colour-prediction' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

export const DISCLAIMER =
  'Sikkim Game (sikkimgame.in.net) is an independent, unofficial information and affiliate resource. We are not the gaming operator and are not affiliated with, endorsed by, or acting on behalf of the Government of Sikkim or any state authority. All game access, accounts, deposits and withdrawals happen on the official operator platform, not on this site. This site does not accept payments, does not run any game, and does not guarantee winnings. Real-money gaming may be restricted or regulated in your state — you are solely responsible for verifying local legality before participating. Must be 18+. Please play responsibly.';
