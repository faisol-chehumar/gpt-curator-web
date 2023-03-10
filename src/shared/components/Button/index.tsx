'use client';

import classNames from 'classnames';

import { BaseButtonProps } from './types';

const Button: React.FC<BaseButtonProps> = ({ children, onClick }) => {
  const classes = classNames('block text-white');
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
