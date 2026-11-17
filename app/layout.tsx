import type { Metadata, Viewport } from 'next';
import { Nunito, Plus_Jakarta_Sans } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

// Same typefaces as the mobile app (src/theme/typography.ts).
const display = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-display' });
const body = Nunito({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  icons: { icon: '/brand/icon.png', apple: '/brand/icon.png' },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: '/screens/welcome.png', width: 780, height: 1688 }],
    type: 'website',
  },
};

export const viewport: Viewport = { themeColor: '#0C4756' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
