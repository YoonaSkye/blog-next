import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Provider from '@/components/provider';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import Plum from '@/features/home/components/plum';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <Provider>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <Plum />
          </div>
        </Provider>
      </body>
    </html>
  );
}
