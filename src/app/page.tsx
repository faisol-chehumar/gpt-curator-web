import Section from '@/components/Layout/Section/Section';
import { Colors, Spaces } from '@/shared/types/commons';
import { promptsService } from '@/services';

import HeroSection from './HeroSection';
import CollectionsSection from './CollectionsSection';
import RecentlyAddedSection from './RecentlyAddedSection';
import TrendingSection from './TrendingSection';

export default async function Home() {
  const promptsCollections = await promptsService.getCollections(10);
  const promptsRecentlyAdded = await promptsService.getRecentlyAdded(10);
  const promptsTrending = await promptsService.getTrending(10);

  return (
    <>
      <HeroSection />
      <Section
        bgColor={Colors.DARKER_DARK}
        padding={{ top: Spaces.LARGE, bottom: Spaces.LARGE }}
      >
        {/* ข้างในรวบ AI tool สำหรัยงานที่เกี่ยวข้อง */}
        {/* <div>{collections.message}</div> */}
        <div style={{ color: 'white' }}>
          AI assistance
          <div>Web developer</div>
          <div>Graphic designer</div>
          <div>Marketer</div>
          <div>Content creator</div>
          <div>Investor</div>
        </div>
        <TrendingSection data={promptsTrending} />
        <RecentlyAddedSection data={promptsRecentlyAdded} />
        <CollectionsSection data={promptsCollections} />
      </Section>
    </>
  );
}
