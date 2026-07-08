import type { FaqItem } from '@/lib/schema';

export const downloadFaqs: FaqItem[] = [
  {
    question: 'How do I download the Sikkim Game APK?',
    answer:
      'Use the official download link to get the Android APK file, allow installation from your browser/file manager when prompted, then open the file to install. Always download from the official source rather than third-party app stores.',
  },
  {
    question: 'Is the Sikkim Game APK safe to install?',
    answer:
      'Only install APKs from the official link. Third-party mirror sites sometimes bundle modified or unsafe files. If your phone flags the file as unrecognized, verify the source before proceeding.',
  },
  {
    question: 'Why can\'t I install the APK on my Android phone?',
    answer:
      'Most Android phones block APK installs from unknown sources by default. Go to Settings > Security (or Apps) and enable "Install unknown apps" for your browser, then try again.',
  },
  {
    question: 'Is there a Sikkim Game app for iPhone?',
    answer:
      'Many platforms in this category primarily support Android APKs and a mobile web app rather than a native iOS App Store listing. iPhone users can typically use the web version in a mobile browser.',
  },
  {
    question: 'Do I need to download an app, or can I just use the website?',
    answer:
      'Both options are usually available. The app can offer a slightly smoother experience and notifications, while the web version needs no installation at all.',
  },
];

export const downloadSteps = [
  {
    title: 'Tap the official download button',
    body: 'Use the link on this page to reach the official download source rather than searching app stores, where clone or fake listings sometimes appear.',
  },
  {
    title: 'Allow installation from your browser',
    body: 'Android will prompt you to allow installs from unknown sources the first time — enable this only for the browser or file manager you used to download the file.',
  },
  {
    title: 'Install and open the app',
    body: 'Once installed, open the app, and you will land on the login or register screen depending on whether you already have an account.',
  },
  {
    title: 'Keep the app updated',
    body: 'Check back periodically for newer APK versions, since outdated versions can cause login errors or missing features.',
  },
];
