import type { FaqItem } from '@/lib/schema';

export const howToDownloadSteps = [
  {
    title: 'Start from the official link',
    body: 'Use the download button on this site rather than searching app stores directly, since clone and fake listings do appear in general search results for this game category.',
  },
  {
    title: 'Allow the download to finish',
    body: 'The APK file is a modest size, so this usually completes in seconds even on a slower mobile connection.',
  },
  {
    title: 'Enable installs from this source',
    body: 'Android blocks installs from outside the Play Store by default. When prompted, allow the specific browser or file manager you used to download the file — not every app system-wide.',
  },
  {
    title: 'Open the downloaded file',
    body: 'Tap the file from your notification shade or downloads folder to begin installation, then wait for it to finish.',
  },
  {
    title: 'Launch and sign in or register',
    body: 'Opening the app for the first time drops you on the login or register screen depending on whether you already have an account.',
  },
  {
    title: 'Check back for updates periodically',
    body: 'Newer APK builds fix bugs and login issues found in older versions, so it is worth checking our Download page again every so often.',
  },
];

export const howToDownloadFaqs: FaqItem[] = [
  {
    question: 'My phone says "installation blocked" — what now?',
    answer:
      'Go to Settings, then Apps or Security, find the browser or file manager you downloaded through, and enable Install Unknown Apps for that one app specifically.',
  },
  {
    question: 'Is it fine to install from a link shared in a group chat?',
    answer:
      'Only if that link points to the same official domain used throughout this site. Files shared as raw APK attachments in chats are a common way modified or unsafe versions circulate — verify the source before trusting it.',
  },
  {
    question: 'iPhone: what is my equivalent path?',
    answer:
      'Use the mobile web version in Safari or Chrome. A native iOS App Store listing is generally not offered for this game category, so the web app is the standard route.',
  },
  {
    question: 'The app will not open after installing — why?',
    answer:
      'Confirm your Android version meets the minimum required, that you have enough free storage, and that you downloaded the complete file rather than a partial one. Reinstalling from the official link resolves most of these.',
  },
];
