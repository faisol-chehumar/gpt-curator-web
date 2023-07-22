import Section from '@/components/Layout/Section/Section';
import { Colors, Spaces } from '@/shared/types/commons';
import { promptsService } from '@/services';

import HeroSection from './HeroSection';
import AiAssistance from './AiAssistance';
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
      <AiAssistance />
      <Section
        bgColor={Colors.DARKER_DARK}
        padding={{ top: Spaces.LARGE, bottom: Spaces.LARGE }}
      >
        {/* ข้างในรวบ AI tool สำหรัยงานที่เกี่ยวข้อง */}
        <TrendingSection data={promptsTrending} />
        <RecentlyAddedSection data={promptsRecentlyAdded} />
        <CollectionsSection data={promptsCollections} />
      </Section>
    </>
  );
}
