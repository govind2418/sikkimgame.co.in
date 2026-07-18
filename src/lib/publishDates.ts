// Real first-published date per route, derived from git history
// (`git log --follow --diff-filter=A` on each page.tsx, including through
// renames like /terms -> /terms-and-conditions). Used as Article
// datePublished so it reflects when that page's content genuinely went
// live instead of a placeholder date repeated on every page.
export const PUBLISH_DATES: Record<string, string> = {
  '/': '2026-07-08',
  '/login': '2026-07-08',
  '/register': '2026-07-08',
  '/download': '2026-07-08',
  '/how-to-register': '2026-07-08',
  '/how-to-download': '2026-07-08',
  '/apk-guide': '2026-07-08',
  '/invite-code': '2026-07-08',
  '/game-gift-code': '2026-07-08',
  '/bonus': '2026-07-08',
  '/withdrawal': '2026-07-17',
  '/refer-earn': '2026-07-17',
  '/colour-prediction': '2026-07-08',
  '/wingo': '2026-07-08',
  '/lottery-game': '2026-07-18',
  '/aviator': '2026-07-18',
  '/chicken-road-2': '2026-07-18',
  '/cricket': '2026-07-18',
  '/goal': '2026-07-18',
  '/vortex': '2026-07-18',
  '/faq': '2026-07-08',
  '/about': '2026-07-08',
  '/contact-us': '2026-07-08',
  '/customer-care': '2026-07-17',
  '/responsible-gaming': '2026-07-18',
  '/privacy-policy': '2026-07-08',
  '/terms-and-conditions': '2026-07-08',
  '/disclaimer': '2026-07-08',
};
