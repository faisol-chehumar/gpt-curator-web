import React from 'react';
import classNames from 'classnames';

import { openSans } from '@/app/fonts';

import { BaseTypography } from '@/shared/components/Typography/types';

const HeroTagline: React.FC<BaseTypography> = ({
  children,
  color = 'black',
}) => {
  const classes = classNames(
    openSans.className,
    'text-hero-tagline',
    `text-${color}`
  );

  return <span className={classes}>{children}</span>;
};

export default HeroTagline;
