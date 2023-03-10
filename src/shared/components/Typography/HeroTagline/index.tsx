import React from 'react';
import classNames from 'classnames';

import { openSans } from '@/shared/fonts';

import { BaseTypography } from '@/shared/components/Typography/types';
import { TEXT_COLOR_MAPS } from '../classMappings';

const HeroTagline: React.FC<BaseTypography> = ({
  children,
  color = 'black',
}) => {
  const classes = classNames(
    openSans.className,
    'text-hero-tagline',
    TEXT_COLOR_MAPS[color]
  );

  return <span className={classes}>{children}</span>;
};

export default HeroTagline;
