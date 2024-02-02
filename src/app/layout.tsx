import { Metadata } from 'next';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { openSans } from '@/styles/fonts';
import { cn } from '@/lib/tailwind/utils';
import AppInfo from '@/shared/configs/app-info.json';

import Footer from '@/features/footer';

import '../styles/globals.css';

// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
//   require('../mock-apis');
// }

export const metadata: Metadata = {
  title: {
    default: `Discover Creative Prompts | ${AppInfo.NAME}`,
    template: `%s | ${AppInfo.NAME}`,
  },
  description: AppInfo.DESCRIPTION,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          openSans.variable
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
