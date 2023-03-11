import React from 'react';
import classNames from 'classnames';

import { openSans } from '@/shared/fonts';

import { BaseTypographyProps } from '@/shared/components/Typography/types';
import { TEXT_COLOR_MAPS, TEXT_MARGIN_BOTTOMS } from '../classMappings';

const HeroTagline: React.FC<BaseTypographyProps> = ({
  children,
  color = 'black',
  mb = 'large',
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
