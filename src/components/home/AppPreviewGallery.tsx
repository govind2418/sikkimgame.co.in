import { Section, SectionHeading } from '@/components/ui/Section';
import { IPhoneMockup } from '@/components/ui/IPhoneMockup';
import splashImg from '../../../public/images/app-preview/app-splash-logo.png';
import attendanceImg from '../../../public/images/app-preview/attendance-bonus.png';
import specialDayImg from '../../../public/images/app-preview/special-day-recharge.png';
import pilotChallengeImg from '../../../public/images/app-preview/aviator-pilot-challenge.png';
import referRulesImg from '../../../public/images/app-preview/refer-earn-rules.png';
import referDetailsImg from '../../../public/images/app-preview/refer-earn-details.png';
import rebateRatioImg from '../../../public/images/app-preview/rebate-ratio.png';
import activityAwardImg from '../../../public/images/app-preview/activity-award.png';

const previews = [
  {
    src: splashImg,
    alt: 'Official Sikkim Game app splash screen',
    caption: 'App splash screen',
    body: 'The official Sikkim Game splash screen is about as minimal as it gets — just the blue wordmark logo animating inside a loading ring while the app connects. No autoplay video, no forced ad, just a short pause before you land on the actual lobby.',
  },
  {
    src: attendanceImg,
    alt: 'Sikkim Game 7-day attendance bonus',
    caption: '7-Day attendance bonus',
    body: 'The Attendance bonus rewards consecutive login days rather than deposits — ₹5 on day one, climbing to ₹200 by day four, ₹3,000 by day six, and a ₹7,000 gift on day seven. Miss a day and the streak resets, which is why it is an attendance bonus, not a deposit bonus.',
  },
  {
    src: specialDayImg,
    alt: 'Sikkim Game monthly 3-day recharge bonus',
    caption: 'Monthly 3-day recharge bonus',
    body: 'Three fixed dates every month — the 7th, 17th and 27th — carry a flat 3% recharge bonus, automatically credited to every member who deposits on those days. The terms are explicit that Sikkim reserves the right to modify or cancel the promotion at any time.',
  },
  {
    src: pilotChallengeImg,
    alt: 'Sikkim Game Aviator Pilot Challenge rewards',
    caption: 'Aviator Pilot Challenge',
    body: 'The Pilot Challenge rewards big Aviator multipliers directly: a 20x cash-out on a ₹100+ bet claims ₹100, the same 20x on a ₹500+ bet claims ₹500. It scales up to 100x, paying ₹3,000 or ₹20,000 depending on bet size — though you submit a screenshot to customer service and wait up to 24 hours for it to land.',
  },
  {
    src: referRulesImg,
    alt: 'Sikkim Game 6-level referral program rules',
    caption: 'Refer & Earn: 6-level rules',
    body: 'The referral program runs six subordinate levels deep — if A invites B and B invites C, C counts as both a level-1 subordinate of B and a level-2 subordinate of A, and so on down the chain. Commission is paid once an invitee registers through your code and completes a deposit.',
  },
  {
    src: referDetailsImg,
    alt: 'Sikkim Game live commission breakdown',
    caption: 'Live commission breakdown',
    body: 'A real Details screen shows exactly how the six-level structure pays out: Level 1 subordinates betting ₹4,040 return a 0.6% rebate (₹24.24), while Level 2 at ₹2,478 in bets returns 0.18% (₹4.46) — each level down the chain earning roughly a third of the rate above it.',
  },
  {
    src: rebateRatioImg,
    alt: 'Sikkim Game rebate ratio by VIP level',
    caption: 'Rebate ratio by VIP level',
    body: 'Higher VIP tiers unlock better rebate percentages across the same six levels. At Rebate Level L0, a level-1 subordinate\'s bets return 0.6%; at L1 that climbs to 0.65%; at L2, 0.7% — small per-level differences that compound as your network and VIP tier both grow.',
  },
  {
    src: activityAwardImg,
    alt: 'Sikkim Game daily and weekly activity missions',
    caption: 'Daily & weekly activity missions',
    body: 'Beyond attendance, the Activity Award tab tracks deposit-and-bet combinations directly: deposit ₹3,000 and wager ₹21,000 in a day to unlock a ₹100 award, or a smaller ₹1,500-deposit/₹12,000-bet combo for ₹60. Neither target carries over if you miss the window.',
  },
];

export function AppPreviewGallery() {
  return (
    <Section className="border-t border-white/5 bg-navy-900/40">
      <SectionHeading
        eyebrow="Real screenshots"
        title="What's actually inside the Sikkim Game app"
        subtitle="Attendance bonuses, the Aviator Pilot Challenge, the full referral rebate structure — straight from the live app, not a mockup."
      />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {previews.map((preview) => (
          <div key={preview.caption}>
            <IPhoneMockup src={preview.src} alt={preview.alt} caption={preview.caption} />
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{preview.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
