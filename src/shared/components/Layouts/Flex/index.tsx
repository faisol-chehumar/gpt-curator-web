import React from 'react';
import classNames from 'classnames';

import {
  BG_COLOR_MAPS,
  WIDTH_MAPS,
  HEIGHT_MAPS,
  DIRECTION_MAPS,
  ITEM_ALIGN_MAPS,
} from '@/shared/components/Layouts/classMappings';
import { FlexProps, Heights, Widths } from '@/shared/components/Layouts/types';
import { Colors } from '@/shared/types/commons';

const Flex: React.FC<FlexProps> = ({
  children,
  bgColor = Colors.TRANSPARENT,
  width = { mobile: undefined, tablet: undefined, desktop: undefined },
  height = { mobile: undefined, tablet: undefined, desktop: undefined },
  direction = { mobile: 'col-reverse', tablet: 'row', desktop: 'row' },
  alignItems = 'start',
}) => {
  const classes = classNames(
    'flex',
    DIRECTION_MAPS.mobile[direction.mobile],
    DIRECTION_MAPS.tablet[direction.tablet],
    DIRECTION_MAPS.desktop[direction.desktop],
    ITEM_ALIGN_MAPS[alignItems],
    BG_COLOR_MAPS[bgColor],
    WIDTH_MAPS.mobile[width.mobile || Widths.FULL],
    WIDTH_MAPS.tablet[width.tablet || Widths.FULL],
    WIDTH_MAPS.desktop[width.desktop || Widths.FULL],
    HEIGHT_MAPS.tablet[height.tablet || Heights.FIT],
    HEIGHT_MAPS.mobile[height.mobile || Heights.FIT],
    HEIGHT_MAPS.desktop[height.desktop || Heights.FIT]
  );

  return <div className={classes}>{children}</div>;
};

export default Flex;
