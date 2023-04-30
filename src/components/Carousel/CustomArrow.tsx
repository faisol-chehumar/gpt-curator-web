'use client';

import React from 'react';
import classNames from 'classnames';

import { CustomArrowProps } from './types';

const CustomArrow: React.FC<CustomArrowProps> = ({ children, onClick }) => {
  const classes = classNames(
    'group hover:bg-primary border border-gray-600 mx-1 hover:border-primary-light  rounded'
  );

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomArrow;
