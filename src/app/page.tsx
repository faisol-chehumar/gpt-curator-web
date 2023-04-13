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
        {/* ข้างในรวบ AI tool สำหรัยงานที่เกี่ยวข้อง */}
        <div>
          AI assistance
          <div>Web developer</div>
          <div>Graphic designer</div>
          <div>Marketer</div>
          <div>Content creator</div>
          <div>Investor</div>
        </div>
        <Collections />
        <RecentAdded />
        <Trending />
      </Section>
    </>
  );
}
