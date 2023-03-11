import React from 'react';

import Container from '@/shared/components/Layouts/Container';
import Section from '@/shared/components/Layouts/Section';
import Title from '@/shared/components/Typography/Title';

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
      </Container>
    </Section>
  );
};

export default RecentPromptSection;
