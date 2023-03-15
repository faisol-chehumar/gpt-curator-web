'use client';

import Image from 'next/image';

import { Layouts, Typography, Button } from '@/shared/components';

import { Colors, Sizes, Spaces } from '@/shared/types/commons';
import { Aligns, Heights, Widths } from '@/shared/components/Layouts/types';

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
          height={{
            mobile: Heights.FIT,
            tablet: Heights.FIT,
            desktop: Heights.FORTY_REM,
          }}
          direction={{ mobile: 'col-reverse', tablet: 'row', desktop: 'row' }}
          alignItems="center"
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
                src={heroImage}
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
