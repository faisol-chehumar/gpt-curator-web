'use client';

import React from 'react';
import classNames from 'classnames';

import { SectionProps } from '@/shared/components/Layouts/types';
import { BG_COLOR_MAPS } from '@/shared/components/Layouts/classMappings';

const Section: React.FC<SectionProps> = ({
  children,
  bgColor = 'transparent',
}) => {
  const classes = classNames('min-w-full', BG_COLOR_MAPS[bgColor]);

  return <section className={classes}>{children}</section>;
};

export default Section;
