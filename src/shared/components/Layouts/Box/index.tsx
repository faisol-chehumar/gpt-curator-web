import React from 'react';
import classNames from 'classnames';

import { Colors, Positions, Sizes, Spaces } from '@/shared/types/commons';
import {
  BG_COLOR_MAPS,
  WIDTH_MAPS,
  HEIGHT_MAPS,
  ALIGN_MAPS,
  LEADING_MAPS,
  POSITION_MAPS,
  MARGIN_MAPS,
  BOX_BORDER_RADIUSES,
  BOX_OVERFLOWS,
  BOX_BORDER_COLORS,
  PADDING_MAPS,
  BOX_BORDER_VARIANTS,
} from '@/shared/components/Layouts/classMappings';
import {
  BoxProps,
  Widths,
  Overflows,
  Heights,
  Aligns,
  BorderVariants,
} from '@/shared/components/Layouts/types';

const Box: React.FC<BoxProps> = ({
  className,
  children,
  bgColor = Colors.TRANSPARENT,
  width = { mobile: undefined, tablet: undefined, desktop: undefined },
  height = { mobile: undefined, tablet: undefined, desktop: undefined },
  align = { mobile: undefined, tablet: undefined, desktop: undefined },
  leading = Spaces.BASE,
  position = Positions.BASE,
  margin = {
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
  },
  padding = {
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
  },
  overflow = Overflows.VISIBLE,
  border = {
    variant: undefined,
    color: undefined,
    radius: undefined,
  },
}) => {
  const classes = classNames(
    BOX_OVERFLOWS[overflow],
    POSITION_MAPS[position],
    BG_COLOR_MAPS[bgColor],
    WIDTH_MAPS.mobile[width.mobile || Widths.FULL],
    WIDTH_MAPS.tablet[width.tablet || Widths.FULL],
    WIDTH_MAPS.desktop[width.desktop || Widths.FULL],
    HEIGHT_MAPS.mobile[height.mobile || Heights.AUTO],
    HEIGHT_MAPS.tablet[height.tablet || Heights.AUTO],
    HEIGHT_MAPS.desktop[height.desktop || Heights.AUTO],
    ALIGN_MAPS.mobile[align.mobile || Aligns.CENTER],
    ALIGN_MAPS.tablet[align.tablet || Aligns.LEFT],
    ALIGN_MAPS.desktop[align.desktop || Aligns.LEFT],
    LEADING_MAPS[leading],
    MARGIN_MAPS.top[margin.top || Spaces.NONE],
    MARGIN_MAPS.right[margin.right || Spaces.NONE],
    MARGIN_MAPS.bottom[margin.bottom || Spaces.NONE],
    MARGIN_MAPS.left[margin.left || Spaces.NONE],
    PADDING_MAPS.top[padding.top || Spaces.NONE],
    PADDING_MAPS.right[padding.right || Spaces.NONE],
    PADDING_MAPS.bottom[padding.bottom || Spaces.NONE],
    PADDING_MAPS.left[padding.left || Spaces.NONE],
    BOX_BORDER_RADIUSES[border.radius || Sizes.NONE],
    BOX_BORDER_COLORS[border.color || Colors.TRANSPARENT],
    BOX_BORDER_VARIANTS[border.variant || BorderVariants.NONE],
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Box;
