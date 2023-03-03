import React from 'react';
import classNames from 'classnames';

import { BaseTypography } from '@/shared/types/commons';

const HeroHeadline = ({ children }: BaseTypography) => {
  const classes = classNames('text-hero-headline mb-md');

  return <h1 className={classes}>{children}</h1>;
};

export default HeroHeadline;
