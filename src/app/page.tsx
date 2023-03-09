import { Layouts, Typography } from '@/shared/components';

const { Container, Section, Box, Flex } = Layouts;
const { HeroHeadline, HeroTagline, Highlight } = Typography;

export default function Home() {
  return (
    <Section data-testid="hero-section" bgColor="dark">
      <Container>
        <Flex
          width={{ mobile: 'full', tablet: 'full', desktop: '500px' }}
          height={{ mobile: 'fit', tablet: 'fit', desktop: '40rem' }}
          alignItems="center"
        >
          <Box>
            <HeroHeadline color="white">
              <Highlight color="primary">Unlock</Highlight> your creativity with
              PromptCraft.
            </HeroHeadline>
            <HeroTagline color="white">
              Unleash your imagination with our curated prompts
            </HeroTagline>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}
