import AppInfo from '@/shared/static-text/app-info.json';

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
      <body>{children}</body>
    </html>
  );
}
