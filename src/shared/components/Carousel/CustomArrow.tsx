'use client';

import classNames from 'classnames';
import React from 'react';

import { CustomArrowProps } from './types';

const CustomArrow: React.FC<CustomArrowProps> = ({ children, onClick }) => {
  const classes = classNames('');

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomArrow;
