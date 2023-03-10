import React from 'react';
import classNames from 'classnames';

import {
  BG_COLOR_MAPS,
  WIDTH_MAPS,
  HEIGHT_MAPS,
} from '@/shared/components/Layouts/classMappings';
import { BoxProps } from '@/shared/components/Layouts/types';

const Box: React.FC<BoxProps> = ({
  children,
  bgColor = 'transparent',
  width = { mobile: 'full', tablet: 'full', desktop: 'full' },
  height = { mobile: 'fit', tablet: 'fit', desktop: 'fit' },
}) => {
  const classes = classNames(
    'relative',
    BG_COLOR_MAPS[bgColor],
    WIDTH_MAPS.mobile[width.mobile],
    WIDTH_MAPS.tablet[width.tablet],
    WIDTH_MAPS.desktop[width.desktop],
    HEIGHT_MAPS.mobile[height.mobile],
    HEIGHT_MAPS.tablet[height.tablet],
    HEIGHT_MAPS.desktop[height.desktop]
  );

  return <div className={classes}>{children}</div>;
};

export default Box;
