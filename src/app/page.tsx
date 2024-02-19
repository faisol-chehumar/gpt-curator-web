// import { promptsService } from '@/services';

import {
  Hero,
  AiAssistantFeatures,
  ImageCuratedPrompt,
} from '@/features/landing';
import { Container, Section, Separator } from '@/components/ui';

export default async function Home() {
  // const [promptsCollections, promptsRecentlyAdded, promptsTrending] =
  //   await Promise.all([
  //     promptsService.getCollections(10),
  //     promptsService.getRecentlyAdded(10),
  //     promptsService.getTrending(10),
  //   ]);

  return (
    <>
      <Section id="hero-section" pb={{ initial: 6, md: 0 }}>
        <Container>
          <Hero />
        </Container>
      </Section>
      <Separator />
      <Section id="ai-assistance-section" py={16}>
        <Container>
          <AiAssistantFeatures />
        </Container>
      </Section>
      <Separator />
      <Section id="ai-assistance-section" py={16}>
        <Container>
          <ImageCuratedPrompt />
        </Container>
      </Section>
    </>
  );
}
