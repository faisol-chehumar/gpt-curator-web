// import { promptsService } from '@/services';

import { HeroSection, AiAssistantSection } from '@/features/landing';

export default async function Home() {
  // const [promptsCollections, promptsRecentlyAdded, promptsTrending] =
  //   await Promise.all([
  //     promptsService.getCollections(10),
  //     promptsService.getRecentlyAdded(10),
  //     promptsService.getTrending(10),
  //   ]);

  return (
    <>
      <HeroSection />
      <AiAssistantSection />
    </>
  );
}
