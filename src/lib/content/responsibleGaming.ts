import type { FaqItem } from '@/lib/schema';

export const responsibleGamingChecks = [
  {
    title: 'Confirm you can legally play',
    body: 'You must be 18 or older, and real-money gaming rules differ by Indian state — confirm what is permitted where you live before joining any round.',
  },
  {
    title: 'Set a budget before you open the app',
    body: 'Decide the maximum amount you are comfortable losing entirely, in advance, and stop at that number regardless of how a session is going.',
  },
  {
    title: 'Set a time limit too',
    body: 'Fast, round-based formats like Wingo make it easy to lose track of time. Decide how long you will play before you start, not mid-session.',
  },
];

export const responsibleGamingWarningSigns = [
  'Chasing losses by increasing your stake to "win back" money already lost.',
  'Borrowing money, or using funds set aside for bills, rent or essentials, to keep playing.',
  'Hiding how much time or money you spend from family or friends.',
  'Feeling anxious, irritable or unable to stop when you try to take a break.',
  'Playing to escape stress rather than for entertainment.',
];

export const responsibleGamingFaqs: FaqItem[] = [
  {
    question: 'Does sikkimgame.co.in run the games or hold my money?',
    answer:
      'No. We are an independent guide site. Every account, deposit, round and withdrawal happens on the official operator\'s own platform, never through this website.',
  },
  {
    question: 'Can I set deposit or time limits in the official app?',
    answer:
      'Most platforms offer some combination of deposit limits, session reminders, or self-exclusion in account settings. Check the official app\'s settings or support menu for what is currently available.',
  },
  {
    question: 'What should I do if I recognise the warning signs in myself?',
    answer:
      'Stop playing, use any self-exclusion or cooling-off option the official app offers, and talk to someone you trust or a local counselling service. Treat it the same as any other habit that has started costing more than it gives back.',
  },
  {
    question: 'Are Wingo and Colour Prediction games of skill?',
    answer:
      'No. Both are chance-based, real-money formats. No strategy, formula or "signal group" can reliably predict a result, so budget and time limits matter more than any playing technique.',
  },
  {
    question: 'I think a family member has a problem — what can I do?',
    answer:
      'Encourage an honest conversation, help them look at official self-exclusion or limit-setting tools, and consider a local counsellor or support service if the pattern continues. Acting early is easier than after larger losses build up.',
  },
];
