// import { promptsService } from '@/services';

import {
  HeroSection,
  AiAssistantSection,
  ImagesPromptCarouselSection,
} from '@/features/landing';
import { Separator } from '@/components/ui';

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
      <Separator />
      <AiAssistantSection />
      <Separator />
      <ImagesPromptCarouselSection />
    </>
  );
}
