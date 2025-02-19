/* eslint-disable new-cap */
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import '../../style/typography.css';
import ProvidersWrapper from '@/provider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Booking App',
  description: 'Booking App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${roboto.variable}`}>
      <body
        suppressHydrationWarning
        className={`${roboto.variable} antialiased`}
      >
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}
