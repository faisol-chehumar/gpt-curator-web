import React from 'react';
import classNames from 'classnames';

import {
  BG_COLOR_MAPS,
  WIDTH_MAPS,
  HEIGHT_MAPS,
  DIRECTION_MAPS,
  ITEM_ALIGN_MAPS,
} from '../classMappings';

import { FlexProps } from '@/shared/components/Layouts/types';

const Flex: React.FC<FlexProps> = ({
  children,
  bgColor = 'transparent',
  width = { mobile: 'full', tablet: 'fullScreen', desktop: '500px' },
  height = { mobile: 'fit', tablet: 'fit', desktop: 'fit' },
  direction = 'row',
  alignItems = 'start',
}) => {
  const classes = classNames(
    'flex',
    DIRECTION_MAPS[direction],
    ITEM_ALIGN_MAPS[alignItems],
    BG_COLOR_MAPS[bgColor],
    WIDTH_MAPS.mobile[width.mobile],
    WIDTH_MAPS.tablet[width.tablet],
    WIDTH_MAPS.desktop[width.desktop],
    HEIGHT_MAPS.tablet[height.tablet],
    HEIGHT_MAPS.mobile[height.mobile],
    HEIGHT_MAPS.desktop[height.desktop]
  );

  return <div className={classes}>{children}</div>;
};

export default Flex;
