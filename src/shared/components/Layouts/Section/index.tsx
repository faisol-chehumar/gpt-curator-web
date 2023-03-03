import React from 'react';
import classNames from 'classnames';

import { Section } from './section.type';

const Section = ({ children, bgColor = 'transparent' }: Section) => {
  const classes = classNames('min-w-full', `bg-${bgColor}`);

  return <section className={classes}>{children}</section>;
};

export default Section;
