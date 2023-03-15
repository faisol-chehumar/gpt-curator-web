import classNames from 'classnames';
import React from 'react';

import { openSans } from '@/shared/fonts';
import { Colors, Sizes } from '@/shared/types/commons';

import { TextProps } from '../types';
import { TEXT_COLOR_MAPS, TEXT_SIZES } from '../classMappings';

const Text: React.FC<TextProps> = ({
  children,
  color = Colors.BLACK,
  size = Sizes.BASE,
}) => {
  const classes = classNames(
    openSans.className,
    TEXT_COLOR_MAPS[color],
    TEXT_SIZES[size]
  );

  return <p className={classes}>{children}</p>;
};

export default Text;
