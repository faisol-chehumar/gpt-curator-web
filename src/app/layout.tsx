import AppInfo from '@/shared/static-texts/app-info.json';
import { openSans } from '@/shared/fonts';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/globals.css';

import Footer from './Footer';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mock-apis');
}

export const metadata = {
  title: {
    default: `Discover Creative Prompts | ${AppInfo.NAME}`,
    template: `%s | ${AppInfo.NAME}`,
  },
  description: AppInfo.DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} min-h-screen`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
