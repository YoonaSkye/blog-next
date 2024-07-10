import type { Metadata } from 'next';

import Provider from '@/components/provider';
import { NICKNAME, SLOGAN, WEBSITE } from '@/constants';

import '@/styles/global.css';
export const metadata: Metadata = {
  title: {
    template: `%s - ${WEBSITE}`,
    default: `${WEBSITE}`,
  },
  description: `${SLOGAN}`,
  keywords: NICKNAME,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
