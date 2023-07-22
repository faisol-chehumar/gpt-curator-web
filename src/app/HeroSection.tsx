'use client';

import Image from 'next/image';

import { Layout, Typography, Button } from '@/components';

import { Colors, Sizes, Spaces } from '@/shared/types/commons';
import { AlignItems, Aligns, Heights, Widths } from '@/components/Layout/types';

import robotImage from '../../public/prompt-craft-robot.png';
import heroBg from '../../public/hero-bg.png';
import bg from '../../public/bg.png';
import aiAssistanceImage from '../../public/ai-assistance.png';

const { Container, Section, Box, Flex } = Layout;
const { HeroHeadline, HeroTagline, Highlight } = Typography;

const HeroSection = () => {
  return (
    <Section
      testId="hero-section"
      bgColor={Colors.BLACK}
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
            desktop: Heights.FIFTY_REM,
          }}
          direction={{ mobile: 'col', tablet: 'row', desktop: 'row' }}
          alignItem={AlignItems.CENTER}
        >
          <Box
            width={{
              desktop: Widths.FIVE_TWELVE,
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
                src={aiAssistanceImage}
                alt="group of creative people illustration"
                style={{
                  objectFit: 'contain',
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Box>
          </Box>
          <Box
            width={{
              desktop: Widths.SEVEN_TWELVE,
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
        </Flex>
      </Container>
    </Section>
  );
};

export default HeroSection;
