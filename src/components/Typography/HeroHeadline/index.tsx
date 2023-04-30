import React from 'react';
import classNames from 'classnames';

import { poppins } from '@/shared/fonts';
import { BaseTypographyProps } from '@/components/Typography/types';
import {
  TEXT_COLOR_MAPS,
  TEXT_MARGIN_BOTTOMS,
} from '@/components/Typography/classMappings';
import { Colors, Spaces } from '@/shared/types/commons';

const HeroHeadline: React.FC<BaseTypographyProps> = ({
  children,
  color = Colors.DARK,
  mb = Spaces.NONE,
}) => {
  const classes = classNames(
    poppins.className,
    'text-4xl md:text-5xl lg:text-hero-headline mb-md',
    TEXT_COLOR_MAPS[color],
    TEXT_MARGIN_BOTTOMS[mb]
  );

  return <h1 className={classes}>{children}</h1>;
};

export default HeroHeadline;
