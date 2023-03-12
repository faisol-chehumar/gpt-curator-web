import React from 'react';
import classNames from 'classnames';

import { SectionProps } from '@/shared/components/Layouts/types';
import {
  BG_COLOR_MAPS,
  PADDING_Y_MAPS,
} from '@/shared/components/Layouts/classMappings';
import { Colors, Spaces } from '@/shared/types/commons';

const Section: React.FC<SectionProps> = ({
  children,
  testId,
  bgColor = Colors.TRANSPARENT,
  paddingY = Spaces.NONE,
}) => {
  const classes = classNames(
    'min-w-full',
    BG_COLOR_MAPS[bgColor],
    PADDING_Y_MAPS[paddingY]
  );

  return (
    <section data-testid={testId} className={classes}>
      {children}
    </section>
  );
};

export default Section;
