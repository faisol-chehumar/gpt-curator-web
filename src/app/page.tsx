import Section from '@/shared/components/Layouts/Section';
import { Colors, Spaces } from '@/shared/types/commons';

import Collections from './Collections';
import HeroSection from './HeroSection';
import RecentAdded from './RecentAdded';
import Trending from './Trending';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Section
        bgColor={Colors.DARKER_DARK}
        padding={{ top: Spaces.LARGE, bottom: Spaces.LARGE }}
      >
        <Collections />
        <RecentAdded />
        <Trending />
      </Section>
    </>
  );
}
