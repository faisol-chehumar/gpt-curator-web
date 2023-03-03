import React from 'react';
import classNames from 'classnames';

import { BaseTypography } from '../typography.types';

const HeroHeadline = ({ children, color = 'black' }: BaseTypography) => {
  const classes = classNames(
    'text-4xl md:text-6xl lg:text-hero-headline mb-md',
    `text-${color}`
  );

  return <h1 className={classes}>{children}</h1>;
};

export default HeroHeadline;
