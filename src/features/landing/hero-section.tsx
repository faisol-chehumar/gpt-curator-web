import Image from 'next/image';

import {
  Section,
  Container,
  Flex,
  Box,
  Heading,
  Em,
  Lead,
  Button,
} from '@/components/ui';

import aiAssistant from '../../../public/images/ai-assistant.png';

const HeroSection = () => {
  return (
    <Section
      id="hero-section"
      pb={{ initial: 6, md: 0 }}
      borderBottom
      borderColor="secondary"
    >
      <Container>
        <Flex
          direction={{ initial: 'col', md: 'row' }}
          height="screen"
          align="center"
          gap={2}
        >
          <Box
            width={{ initial: 'full', md: '6/12' }}
            height={{ initial: 'full', md: 'screen' }}
            positions="relative"
          >
            <Image
              priority
              fill
              alt="AI assistant illustration"
              sizes="(max-width: 375px) 50vw, (max-width: 768px) 50vw, 100vw"
              style={{
                objectFit: 'contain',
              }}
              src={aiAssistant}
            />
          </Box>

          <Flex width={{ md: '6/12' }} direction="col" gap={6}>
            <Box spaceY={2}>
              <Heading>
                Unlock creativity with <Em>Prompt Craft</Em>
              </Heading>
              <Lead>Unleash your imagination with our curated prompts.</Lead>
            </Box>
            <Button>Explore</Button>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

export default HeroSection;
