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
  { src: splashImg, alt: 'Official Sikkim Game app splash screen', caption: 'App Splash Screen' },
  { src: attendanceImg, alt: 'Sikkim Game 7-day attendance bonus', caption: '7-Day Attendance Bonus' },
  { src: specialDayImg, alt: 'Sikkim Game monthly 3-day recharge bonus', caption: 'Monthly Recharge Bonus' },
  { src: pilotChallengeImg, alt: 'Sikkim Game Aviator Pilot Challenge rewards', caption: 'Aviator Pilot Challenge' },
  { src: referRulesImg, alt: 'Sikkim Game 6-level referral program rules', caption: 'Refer & Earn Rules' },
  { src: referDetailsImg, alt: 'Sikkim Game live commission breakdown', caption: 'Commission Breakdown' },
  { src: rebateRatioImg, alt: 'Sikkim Game rebate ratio by VIP level', caption: 'Rebate Ratio by Level' },
  { src: activityAwardImg, alt: 'Sikkim Game daily and weekly activity missions', caption: 'Activity Missions' },
];

export function AppPreviewGallery() {
  return (
    <Section className="border-t border-white/5 bg-navy-900/40">
      <SectionHeading
        eyebrow="App preview"
        title="Eight real screens from inside Sikkim Game"
        subtitle="Attendance bonuses, the Aviator Pilot Challenge, the full referral rebate structure — straight from the live app, not a mockup."
      />
      <div className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
        {previews.map((preview) => (
          <div key={preview.caption} className="snap-start">
            <IPhoneMockup src={preview.src} alt={preview.alt} caption={preview.caption} />
          </div>
        ))}
      </div>
    </Section>
  );
}
