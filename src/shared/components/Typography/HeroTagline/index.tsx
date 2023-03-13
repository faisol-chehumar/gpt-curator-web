import React from 'react';
import classNames from 'classnames';

import { openSans } from '@/shared/fonts';
import { BaseTypographyProps } from '@/shared/components/Typography/types';
import { TEXT_COLOR_MAPS, TEXT_MARGIN_BOTTOMS } from '../classMappings';
import { Colors, Spaces } from '@/shared/types/commons';

const HeroTagline: React.FC<BaseTypographyProps> = ({
  children,
  color = Colors.BLACK,
  mb = Spaces.LARGE,
}) => {
  const classes = classNames(
    'text-hero-tagline leading-tight',
    openSans.className,
    TEXT_COLOR_MAPS[color],
    TEXT_MARGIN_BOTTOMS[mb]
  );

  return <p className={classes}>{children}</p>;
};

export default HeroTagline;
