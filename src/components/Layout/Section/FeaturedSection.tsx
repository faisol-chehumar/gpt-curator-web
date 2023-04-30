import React from 'react';

import { BaseProps, Colors, Spaces } from '@/shared/types/commons';

import Typography from '@/components/Typography';
import Container from '@/components/Layout/Container';
import BaseSection from '@/components/Layout/Section';

const { Title } = Typography;

interface FeaturedSection extends BaseProps {
  title: string;
}

const FeaturedSection: React.FC<FeaturedSection> = ({
  children,
  testId,
  title,
}) => {
  return (
    <BaseSection
      testId={testId}
      bgColor={Colors.DARKER_DARK}
      padding={{ bottom: Spaces.LARGE }}
    >
      <Container>
        <Title color={Colors.WHITE} variant="h2">
          {title}
        </Title>

        {children}
      </Container>
    </BaseSection>
  );
};

export default FeaturedSection;
