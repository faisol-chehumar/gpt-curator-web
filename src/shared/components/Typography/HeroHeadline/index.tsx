import React from 'react';
import classNames from 'classnames';

import { BaseTypography } from '@/shared/components/Typography/types';
import { TEXT_COLOR_MAPS } from '@/shared/components/Typography/classMappings';

const HeroHeadline: React.FC<BaseTypography> = ({
  children,
  color = 'dark',
}) => {
  const classes = classNames(
    'text-4xl md:text-5xl lg:text-hero-headline mb-md',
    TEXT_COLOR_MAPS[color]
  );

  return <h1 className={classes}>{children}</h1>;
};

export default HeroHeadline;
