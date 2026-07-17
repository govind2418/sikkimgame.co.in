export type PageKey =
  | 'home'
  | 'login'
  | 'register'
  | 'download'
  | 'howToDownload'
  | 'apkGuide'
  | 'howToRegister'
  | 'inviteCode'
  | 'giftCode'
  | 'bonus'
  | 'withdrawal'
  | 'referEarn'
  | 'customerCare'
  | 'wingo'
  | 'colourPrediction'
  | 'faq'
  | 'about'
  | 'contact'
  | 'privacyPolicy'
  | 'terms'
  | 'disclaimer';

export const PAGES: Record<PageKey, { label: string; href: string }> = {
  home: { label: 'Home', href: '/' },
  login: { label: 'Sikkim Game Login', href: '/login' },
  register: { label: 'Sikkim Game Register', href: '/register' },
  download: { label: 'Download', href: '/download' },
  howToDownload: { label: 'How to Download', href: '/how-to-download' },
  apkGuide: { label: 'APK Guide', href: '/apk-guide' },
  howToRegister: { label: 'How to Register', href: '/how-to-register' },
  inviteCode: { label: 'Invite Code', href: '/invite-code' },
  giftCode: { label: 'Gift Code', href: '/gift-code' },
  bonus: { label: 'Bonus', href: '/bonus' },
  withdrawal: { label: 'Withdrawal', href: '/withdrawal' },
  referEarn: { label: 'Refer & Earn', href: '/refer-earn' },
  customerCare: { label: 'Customer Care', href: '/customer-care' },
  wingo: { label: 'Wingo', href: '/wingo' },
  colourPrediction: { label: 'Colour Prediction', href: '/colour-prediction' },
  faq: { label: 'FAQ', href: '/faq' },
  about: { label: 'About', href: '/about' },
  contact: { label: 'Contact', href: '/contact' },
  privacyPolicy: { label: 'Privacy Policy', href: '/privacy-policy' },
  terms: { label: 'Terms & Conditions', href: '/terms' },
  disclaimer: { label: 'Disclaimer', href: '/disclaimer' },
};

// Site-wide interlinking order. Each page links to the next N pages in this
// ring (wrapping around), so every page gets a healthy, evenly-distributed
// set of internal links regardless of any contextual links already in its body.
export const PAGE_RING: PageKey[] = [
  'home',
  'login',
  'register',
  'download',
  'howToDownload',
  'apkGuide',
  'howToRegister',
  'inviteCode',
  'giftCode',
  'bonus',
  'withdrawal',
  'referEarn',
  'customerCare',
  'wingo',
  'colourPrediction',
  'faq',
  'about',
  'contact',
  'privacyPolicy',
  'terms',
  'disclaimer',
];

export function relatedTo(key: PageKey, count = PAGE_RING.length - 1): PageKey[] {
  const idx = PAGE_RING.indexOf(key);
  const result: PageKey[] = [];
  for (let i = 1; i <= count; i++) {
    result.push(PAGE_RING[(idx + i) % PAGE_RING.length]);
  }
  return result;
}
