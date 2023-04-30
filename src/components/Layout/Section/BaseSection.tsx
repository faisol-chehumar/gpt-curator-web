import React from 'react';
import classNames from 'classnames';

import { BorderVariants, BaseSectionProps } from '@/components/Layout/types';
import {
  BG_COLOR_MAPS,
  BOX_BORDER_COLORS,
  BOX_BORDER_RADIUSES,
  BOX_BORDER_VARIANTS,
  PADDING_MAPS,
} from '@/components/Layout/classMappings';
import { Colors, Sizes, Spaces } from '@/shared/types/commons';

const BaseSection: React.FC<BaseSectionProps> = ({
  children,
  testId,
  bgColor = Colors.TRANSPARENT,
  padding = {
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
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

export default BaseSection;
