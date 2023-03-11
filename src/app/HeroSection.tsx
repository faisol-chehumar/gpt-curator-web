'use client';

import Image from 'next/image';

import { Layouts, Typography } from '@/shared/components';
import Button from '@/shared/components/Button';

import heroImage from '../../public/hero-image.svg';

const { Container, Section, Box, Flex } = Layouts;
const { HeroHeadline, HeroTagline, Highlight } = Typography;

const HeroSection = () => {
  return (
    <Section testId="hero-section" bgColor="dark" paddingY="large">
      <Container>
        <Flex
          width={{
            mobile: 'full',
            tablet: 'full',
            desktop: 'full',
          }}
          height={{ mobile: 'fit', tablet: 'fit', desktop: '40rem' }}
          direction={{ mobile: 'col-reverse', tablet: 'row', desktop: 'row' }}
          alignItems="center"
        >
          <Box width={{ mobile: 'full', tablet: 'full', desktop: '5/12' }}>
            <HeroHeadline color="white">
              <Highlight color="primary">Unlock</Highlight> your creativity with
              PromptCraft.
            </HeroHeadline>
            <HeroTagline color="lighter-dark">
              Unleash your imagination with our curated prompts
            </HeroTagline>
            <Button>Explore</Button>
          </Box>
          <Box
            width={{ mobile: 'full', tablet: 'full', desktop: '7/12' }}
            height={{ mobile: '16rem', tablet: '40rem', desktop: 'full' }}
          >
            <Image
              src={heroImage}
              alt="group of creative people illustration"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
              style={{
                objectFit: 'contain',
              }}
              fill
            />
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default HeroSection;
