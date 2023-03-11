'use client';

import classNames from 'classnames';

import {
  BUTTON_BORDER_RADIUSES,
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from './classMappings';
import { BaseButtonProps } from './types';

const Button: React.FC<BaseButtonProps> = ({
  children,
  onClick,
  variant = 'regular',
  color = 'primary',
  size = 'base',
  radius = 'base',
}) => {
  const classes = classNames(
    'inline-block text-white',
    BUTTON_VARIANTS[variant],
    BUTTON_COLORS[color],
    BUTTON_SIZES[size],
    BUTTON_BORDER_RADIUSES[radius]
  );

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
