import type { FaqItem } from '@/lib/schema';

export const apkChecklist = [
  {
    title: 'Confirm the source domain',
    body: 'Only download an APK from the official link. A mismatched or unfamiliar domain is the single biggest red flag in this game category.',
  },
  {
    title: 'Check the file size looks right',
    body: 'A wildly smaller or larger file than expected can indicate a modified build. When in doubt, delete and re-download from the official source.',
  },
  {
    title: 'Review requested permissions',
    body: 'The app should ask for permissions that make sense for its function. Be cautious of a build requesting access to contacts, SMS reading, or accessibility services beyond what the official app normally needs.',
  },
  {
    title: 'Scan before installing, if unsure',
    body: 'Most Android phones include Play Protect scanning for sideloaded apps by default — do not disable it just to force an install through.',
  },
];

export const apkGuideFaqs: FaqItem[] = [
  {
    question: 'What exactly is an APK file?',
    answer:
      'It is the Android installer package format — essentially the same thing the Play Store installs behind the scenes, just distributed directly instead of through the store.',
  },
  {
    question: 'Why is this app not on the Play Store?',
    answer:
      'Real-money gaming apps are broadly restricted from major app stores under their content policies, which is why direct APK distribution is the standard route for this entire game category, not just one platform.',
  },
  {
    question: 'Does installing an APK void any warranty or damage my phone?',
    answer:
      'No, sideloading an app does not void a hardware warranty or damage the device. The real risk is installing a modified file from an untrusted source, not the APK format itself.',
  },
  {
    question: 'How do I know when a newer version is available?',
    answer:
      'The app typically prompts you in-app when an update exists. You can also periodically re-check our Download page for the current official build.',
  },
  {
    question: 'Can I keep both the APK version and use the web version?',
    answer:
      'Yes, both usually connect to the same account since they authenticate against the same backend — use whichever is more convenient at the time.',
  },
];
