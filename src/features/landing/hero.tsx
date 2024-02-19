import Image from 'next/image';

import { Flex, Box, Heading, Em, Lead, Button } from '@/components/ui';

import aiAssistant from '../../../public/images/ai-assistant.png';

const Hero = () => {
  return (
    <Flex
      direction={{ initial: 'col', md: 'row' }}
      height="screen"
      items="center"
      gap={2}
    >
      <Box
        width={{ initial: 'full', md: '7/12' }}
        height={{ initial: 'full', md: 'screen' }}
        positions="relative"
      >
        <Image
          priority
          fill
          alt="AI assistant illustration"
          sizes="(max-width: 375px) 50vw, (max-width: 768px) 50vw, 100vw"
          style={{
            objectFit: 'cover',
          }}
          src={aiAssistant}
        />
      </Box>

      <Flex width={{ md: '5/12' }} direction="col" gap={6}>
        <Box spaceY={2}>
          <Heading>
            Unlock productivity with <Em>GPT Curator</Em>
          </Heading>
          <Lead>
            Unleash your imagination with our curated prompts and tools.
          </Lead>
        </Box>
        <Button>Explore</Button>
      </Flex>
    </Flex>
  );
};

export { Hero };
