import React from 'react';

import Container from '@/shared/components/Layouts/Container';
import Section from '@/shared/components/Layouts/Section';
import Title from '@/shared/components/Typography/Title';
import Box from '@/shared/components/Layouts/Box';
import Carousel from '@/shared/components/Carousel';

const RecentPromptSection = () => {
  return (
    <Section
      testId="recently-added-section"
      paddingY="large"
      bgColor="darker-dark"
    >
      <Container>
        <Title color="white" variant="h2">
          Recently Added
        </Title>
        <Box>
          <Carousel />
        </Box>
      </Container>
    </Section>
  );
};

export default RecentPromptSection;
