import React from 'react';

import { BaseSectionProps } from '@/components/Layout/types';
import BaseSection from './BaseSection';

const Section: React.FC<BaseSectionProps> = ({
  children,
  testId,
  bgColor,
  padding,
  border,
}) => {
  return (
    <BaseSection
      testId={testId}
      bgColor={bgColor}
      padding={padding}
      border={border}
    >
      {children}
    </BaseSection>
  );
};

export default Section;
