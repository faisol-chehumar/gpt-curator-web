import React from 'react';
import classNames from 'classnames';

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
} from '@/shared/components/Layouts/classMappings';
import { BoxProps, Widths, Overflows } from '@/shared/components/Layouts/types';
import { Colors, Positions, Sizes, Spaces } from '@/shared/types/commons';

const Box: React.FC<BoxProps> = ({
  className,
  children,
  bgColor = Colors.TRANSPARENT,
  width = { mobile: Widths.AUTO, tablet: Widths.AUTO, desktop: Widths.AUTO },
  height = { mobile: 'fit', tablet: 'fit', desktop: 'fit' },
  align = { mobile: 'center', tablet: 'left', desktop: 'left' },
  leading = Spaces.BASE,
  position = Positions.BASE,
  margin = {
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
  },
  radius = Sizes.BASE,
  overflow = Overflows.VISIBLE,
}) => {
  const classes = classNames(
    BOX_OVERFLOWS[overflow],
    POSITION_MAPS[position],
    BG_COLOR_MAPS[bgColor],
    WIDTH_MAPS.mobile[width.mobile],
    WIDTH_MAPS.tablet[width.tablet],
    WIDTH_MAPS.desktop[width.desktop],
    HEIGHT_MAPS.mobile[height.mobile],
    HEIGHT_MAPS.tablet[height.tablet],
    HEIGHT_MAPS.desktop[height.desktop],
    ALIGN_MAPS.mobile[align.mobile],
    ALIGN_MAPS.tablet[align.tablet],
    ALIGN_MAPS.desktop[align.desktop],
    LEADING_MAPS[leading],
    MARGIN_MAPS.top[margin.top || Spaces.NONE],
    MARGIN_MAPS.right[margin.right || Spaces.NONE],
    MARGIN_MAPS.bottom[margin.bottom || Spaces.NONE],
    MARGIN_MAPS.left[margin.left || Spaces.NONE],
    BOX_BORDER_RADIUSES[radius],
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Box;
