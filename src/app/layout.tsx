import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCTA } from '@/components/layout/StickyCTA';
import { BackgroundFX } from '@/components/layout/BackgroundFX';
import { JsonLd, organizationSchema, websiteSchema } from '@/lib/schema';
import { SITE } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Sign In, Sign Up, APK & Bonus Code Guides`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  icons: {
    icon: '/images/brand/app-icon-192.png',
    apple: '/images/brand/app-icon-192.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'uEzFjWx0LtsrG2U2a_HW32LOn5PSlyc0CXb2cvbYb5Y',
  },
  keywords: [
    'Sikkim Game',
    'sikkimgame.co.in',
    'Sikkim Game Login',
    'Sikkim Game Register',
    'Sikkim Game Sign In',
    'Sikkim Game Sign Up',
    'Sikkim Game Download',
    'Sikkim Game APK',
    'Sikkim Game APK Guide',
    'Sikkim Game App',
    'Sikkim Game Bonus',
    'Sikkim Game Bonus Code',
    'Sikkim Game Invite Code',
    'Sikkim Game Referral Code',
    'Sikkim Game Gift Code',
    'Sikkim Game Redeem Code',
    'Sikkim Game Withdrawal',
    'Sikkim Game Refer and Earn',
    'Sikkim Game Customer Care',
    'Sikkim Game Wingo',
    'Sikkim Wingo Guide',
    'Sikkim Game Colour Prediction',
    'Sikkim Colour Prediction Guide',
    'Sikkim Game FAQ',
    'Sikkim Login',
    'Sikkim Register',
    'How to Download Sikkim Game',
    'How to Register Sikkim Game',
  ],
};

export const viewport = {
  themeColor: SITE.themeColor,
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-navy-950 font-sans antialiased">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <BackgroundFX />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
