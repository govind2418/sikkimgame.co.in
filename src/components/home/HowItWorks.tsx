import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { CtaButton } from '@/components/ui/Button';
import { DownloadIcon, UserPlusIcon, LoginIcon, PercentIcon, TicketIcon } from '@/components/icons';

const essentials = [
  {
    id: 'apk',
    icon: DownloadIcon,
    title: 'Download & APK',
    body: 'Getting the app safely matters more than getting it fast. Our Download page points to the current official link, so you are not pulling an APK from a random forum post or a modified file circulating on file-sharing sites. Once downloaded, Android will usually flag the file as being from an unknown source — expected for any APK installed outside an app store, not a sign that something is wrong, provided it came from our linked official source. The separate APK Guide covers enabling that install permission safely and confirming you are on a genuine, unmodified build before you open it.',
    href: '/download',
    cta: 'Download Sikkim Game APK',
  },
  {
    id: 'register',
    icon: UserPlusIcon,
    title: 'Sikkim Game Register',
    body: 'Creating an account takes under a minute: enter an active mobile number, set a password you do not reuse elsewhere, confirm the OTP sent by SMS, and you are in. An invite code is optional at this step but worth having ready, since some campaigns unlock a small welcome bonus for using one. Registration is free and never requires a deposit just to hold an account. One mobile number supports exactly one account, so returning players should use Login instead of signing up again.',
    href: '/register',
    cta: 'Sikkim Game Register Guide',
  },
  {
    id: 'login',
    icon: LoginIcon,
    title: 'Sikkim Game Login',
    body: 'Signing in only needs the mobile number you registered with and your password, plus an OTP if you are on a new device. Most login failures trace back to one of four things, roughly in order of likelihood: an outdated app build, a mistyped password, the wrong country code, or a shaky connection. If you have forgotten your password, use the official Forgot Password link rather than guessing repeatedly, since repeated wrong attempts can briefly lock some accounts.',
    href: '/login',
    cta: 'Sikkim Game Login Guide',
  },
  {
    id: 'bonus',
    icon: PercentIcon,
    title: 'Bonus',
    body: 'Bonus rewards generally fall into four buckets: a one-time welcome bonus for new accounts, referral or invite bonuses earned by sharing your code, gift or redeem codes distributed through official channels, and short-lived promotional credits tied to in-app events. Most bonus credit carries a wagering condition before any resulting winnings can be withdrawn, and nearly all offers expire on a set schedule, so read the terms shown at the exact moment you receive one.',
    href: '/bonus',
    cta: 'Sikkim Game Bonus Guide',
  },
  {
    id: 'invite-code',
    icon: TicketIcon,
    title: 'Invite Code',
    body: 'An invite code links a new account to whoever shared it — a friend, a promotional page, or an affiliate link — and can occasionally unlock a bonus for one or both sides depending on the campaign currently running. It is entered on the registration screen in a field usually labelled Invite Code or Referral Code, and it is entirely optional. A legitimate invite code never requires payment or your OTP to function — treat any that do as a scam.',
    href: '/invite-code',
    cta: 'Sikkim Game Invite Code Guide',
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-t border-white/5 bg-navy-900/40">
      <SectionHeading
        eyebrow="Know before you play"
        title="Sikkim Game: Download, Register, Login, Bonus & Invite Code"
        subtitle="The six things people search for most about Sikkim Game, summarised here and linked to a full guide each."
      />
      <p className="mb-8 max-w-3xl text-sm leading-relaxed text-slate-300">
        Sikkim Game is the name most players use for the real-money, round-based mobile
        platform covered across this site, best known through formats like Wingo and Colour
        Prediction. sikkimgame.co.in is an independent guide hub, not the operator — every
        account, deposit and round happens on the official app itself. Below is a fast
        breakdown of getting the app, creating an account, signing back in, understanding
        bonus offers, and using an invite code.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {essentials.map(({ id, icon: Icon, title, body, href, cta }) => (
          <Card key={title} id={id} className="scroll-mt-24">
            <Icon className="h-8 w-8 text-neon-400" />
            <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
            <CtaButton href={href} external={false} variant="ghost" size="md" className="mt-4 px-0">
              {cta}
            </CtaButton>
          </Card>
        ))}
      </div>
    </Section>
  );
}
