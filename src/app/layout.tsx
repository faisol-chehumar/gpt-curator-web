import AppInfo from '@/shared/static-texts/app-info.json';
import { poppins } from '@/shared/fonts';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/globals.css';

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
      <body className={`${poppins.className} min-h-screen`}>{children}</body>
    </html>
  );
}
