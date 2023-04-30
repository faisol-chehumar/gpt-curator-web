'use client';

import Image from 'next/image';

import { Layout, Typography, Button } from '@/components';

import { Colors, Sizes, Spaces } from '@/shared/types/commons';
import { AlignItems, Aligns, Heights, Widths } from '@/components/Layout/types';

import robotImage from '../../public/prompt-craft-robot.png';

const { Container, Section, Box, Flex } = Layout;
const { HeroHeadline, HeroTagline, Highlight } = Typography;

const HeroSection = () => {
  return (
    <Section
      testId="hero-section"
      bgColor={Colors.DARK}
      padding={{ top: Spaces.LARGE, bottom: Spaces.LARGE }}
    >
      <Container>
        <Flex
          width={{
            mobile: Widths.FULL,
            tablet: Widths.FULL,
            desktop: Widths.FULL,
          }}
          height={{
            mobile: Heights.FIT,
            tablet: Heights.FIT,
            desktop: Heights.FORTY_REM,
          }}
          direction={{ mobile: 'col-reverse', tablet: 'row', desktop: 'row' }}
          alignItem={AlignItems.CENTER}
        >
          <Box
            width={{
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
              desktop: Widths.SEVEN_TWELVE,
            }}
            height={{
              mobile: Heights.SIXTEEN_REM,
              tablet: Heights.FORTY_REM,
              desktop: Heights.FULL,
            }}
          >
            <Box
              height={{
                mobile: Heights.FULL,
                tablet: Heights.FULL,
                desktop: Heights.FULL,
              }}
              width={{ desktop: Widths.AUTO }}
              align={{ desktop: Aligns.CENTER }}
            >
              <Image
                priority
                fill
                src={robotImage}
                alt="group of creative people illustration"
                style={{
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default HeroSection;
