import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <h1 className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:py-3 sm:px-8">
      Hello world!
    </h1>
  );
}
