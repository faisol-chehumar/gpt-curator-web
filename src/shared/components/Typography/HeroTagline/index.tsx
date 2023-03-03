import React from 'react';
import classNames from 'classnames';

import { BaseTypography } from '@/shared/types/commons';
import { openSans } from '@/app/fonts';

const HeroTagline = ({ children }: BaseTypography) => {
  const classes = classNames(openSans.className, 'text-hero-tagline');

  return <span className={classes}>{children}</span>;
};

export default HeroTagline;
