import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCTA } from '@/components/layout/StickyCTA';
import { JsonLd, organizationSchema } from '@/lib/schema';
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
    default: `${SITE.name} — Login, Register, Download, Wingo & Colour Prediction`,
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
  },
  verification: {
    google: 'UWWFC1BQhro8tzO6aD8DLvQj8PmuxS51nr4qoZzWchM',
  },
  keywords: [
    'Sikkim Game',
    'Sikkim Game Login',
    'Sikkim Game Register',
    'Sikkim Login',
    'Sikkim Register',
    'Sikkim Game Download',
    'Sikkim Game APK',
    'Sikkim Game App',
    'Sikkim Game Invite Code',
    'Sikkim Game Gift Code',
    'Sikkim Game Colour Prediction',
    'Sikkim Game Wingo',
    'Sikkim Colour Prediction',
    'Sikkim Wingo',
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
