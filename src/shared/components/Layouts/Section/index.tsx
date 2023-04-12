import React from 'react';
import classNames from 'classnames';

import {
  BorderVariants,
  SectionProps,
} from '@/shared/components/Layouts/types';
import {
  BG_COLOR_MAPS,
  BOX_BORDER_COLORS,
  BOX_BORDER_RADIUSES,
  BOX_BORDER_VARIANTS,
  PADDING_MAPS,
  PADDING_Y_MAPS,
} from '@/shared/components/Layouts/classMappings';
import { Colors, Sizes, Spaces } from '@/shared/types/commons';

const Section: React.FC<SectionProps> = ({
  children,
  testId,
  bgColor = Colors.TRANSPARENT,
  padding = {
    top: undefined,
    right: Spaces.NONE,
    bottom: Spaces.NONE,
    left: Spaces.NONE,
  },
  border = { variant: undefined, color: undefined, radius: undefined },
}) => {
  const classes = classNames(
    'min-w-full',
    BG_COLOR_MAPS[bgColor],
    PADDING_MAPS.top[padding.top || Spaces.NONE],
    PADDING_MAPS.right[padding.right || Spaces.NONE],
    PADDING_MAPS.bottom[padding.bottom || Spaces.NONE],
    PADDING_MAPS.left[padding.left || Spaces.NONE],
    BOX_BORDER_VARIANTS[border.variant || BorderVariants.NONE],
    BOX_BORDER_COLORS[border.color || Colors.TRANSPARENT],
    BOX_BORDER_RADIUSES[border.radius || Sizes.NONE]
  );

  return (
    <section data-testid={testId} className={classes}>
      {children}
    </section>
  );
};

export default Section;
