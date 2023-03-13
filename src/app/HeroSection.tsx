'use client';

import Image from 'next/image';

import { Layouts, Typography, Button } from '@/shared/components';

import { Colors, Spaces } from '@/shared/types/commons';
import { Widths } from '@/shared/components/Layouts/types';

import heroImage from '../../public/hero-image.svg';

const { Container, Section, Box, Flex } = Layouts;
const { HeroHeadline, HeroTagline, Highlight } = Typography;

const HeroSection = () => {
  return (
    <Section
      testId="hero-section"
      bgColor={Colors.DARK}
      paddingY={Spaces.LARGE}
    >
      <Container>
        <Flex
          width={{
            mobile: Widths.FULL,
            tablet: Widths.FULL,
            desktop: Widths.FULL,
          }}
          height={{ mobile: 'fit', tablet: 'fit', desktop: '40rem' }}
          direction={{ mobile: 'col-reverse', tablet: 'row', desktop: 'row' }}
          alignItems="center"
        >
          <Box
            width={{
              mobile: Widths.FULL,
              tablet: Widths.FULL,
              desktop: Widths.FIVE_TWELVE,
            }}
          >
            <HeroHeadline color={Colors.WHITE}>
              <Highlight color={Colors.PRIMARY}>Unlock</Highlight> your
              creativity with PromptCraft.
            </HeroHeadline>
            <HeroTagline color={Colors.LIGHTER_DARK}>
              Unleash your imagination with our curated prompts
            </HeroTagline>
            <Button>Explore</Button>
          </Box>
          <Box
            width={{
              mobile: Widths.FULL,
              tablet: Widths.FULL,
              desktop: Widths.SEVEN_TWELVE,
            }}
            height={{ mobile: '16rem', tablet: '40rem', desktop: 'full' }}
          >
            <Image
              src={heroImage}
              alt="group of creative people illustration"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              style={{
                objectFit: 'contain',
              }}
              priority
              fill
            />
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default HeroSection;
