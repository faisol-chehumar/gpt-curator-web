import React from 'react';
import Image from 'next/image';

import { Colors, Sizes, Spaces } from '@/shared/types/commons';

import { Widths } from '@/components/Layout/types';

import Layout from '@/components/Layout';
import Typography from '@/components/Typography';

import aiAssistanceImage from '../../public/ai-assistance.png';

const { Title, Highlight } = Typography;
const { Flex, Box, Container, Section } = Layout;

const AiAssistance = () => {
  return (
    <Section
      testId="ai-assistance-section"
      bgColor={Colors.DARKER_LIGHT}
      padding={{ top: Spaces.LARGE, bottom: Spaces.LARGE }}
    >
      <Container>
        <Flex>
          <Box margin={{ top: Spaces.LARGE }}>
            <Title color={Colors.WHITE} size={Sizes.BASE} variant="h2">
              What a kind of work do you do?
            </Title>
            <div>Web developer</div>
            <div>Graphic designer</div>
            <div>Marketer</div>
            <div>Content creator</div>
            <div>Investor</div>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default AiAssistance;
