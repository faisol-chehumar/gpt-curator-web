import { Colors, Sizes } from '@/shared/types/commons';
export const TEXT_COLOR_MAPS = {
  [Colors.PRIMARY]: 'text-primary',
  [Colors.SECONDARY]: 'text-secondary',
  [Colors.DARK]: 'text-dark',
  [Colors.LIGHTER_DARK]: 'text-lighter-dark',
  [Colors.DARKER_DARK]: 'text-darker-dark',
  [Colors.WHITE]: 'text-white',
  [Colors.BLACK]: 'text-black',
  [Colors.DARKER_LIGHT]: 'darker-light',
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
