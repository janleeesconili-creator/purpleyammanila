import type { Metadata } from 'next';
import './globals.css';
import './custom.css';
import './motion.css';
import './sections.css';
import './brand-overrides.css';
import './legacy.css';
import './shop.css';
import './checkout.css';
import './orders.css';

export const metadata: Metadata = {
  title: 'Purple Yam Buko Pie',
  description: 'Freshly baked purple yam buko pie made for sharing.',
  openGraph: {
    title: 'Purple Yam Buko Pie',
    description: 'Golden crust. Purple heart.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purple Yam Buko Pie',
    description: 'Golden crust. Purple heart.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
