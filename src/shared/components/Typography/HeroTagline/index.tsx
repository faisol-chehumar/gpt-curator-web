import React from 'react';
import classNames from 'classnames';

import { openSans } from '@/app/fonts';

import { BaseTypography } from '../typography.types';

const HeroTagline = ({ children, color }: BaseTypography) => {
  const classes = classNames(
    openSans.className,
    'text-hero-tagline',
    `text-${color}`
  );

  return <span className={classes}>{children}</span>;
};

export default HeroTagline;
