import {
  Roboto_Slab as RobotoSlab,
  Open_Sans as OpenSans,
} from 'next/font/google';

export const robotoSlab = RobotoSlab({
  subsets: ['latin'],
  display: 'swap',
  weight: '600',
});

export const openSans = OpenSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});
