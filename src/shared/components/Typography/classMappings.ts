import { Sizes } from '@/shared/types/commons';
export const TEXT_COLOR_MAPS = {
  inherit: 'text-inherit',
  primary: 'text-primary',
  secondary: 'text-secondary',
  dark: 'text-dark',
  'lighter-dark': 'text-lighter-dark',
  'darker-dark': 'text-darker-dark',
  white: 'text-white',
  black: 'text-black',
};

export const TEXT_MARGIN_BOTTOMS = {
  none: 'mb-0',
  small: 'mb-1',
  base: 'mb-2',
  medium: 'mb-4',
  large: 'mb-8',
};

export const TEXT_SIZES = {
  [Sizes.SMALL]: 'text-xs',
  [Sizes.BASE]: 'text-sm',
  [Sizes.MEDIUM]: 'text-base',
  [Sizes.LARGE]: 'text-lg',
};
