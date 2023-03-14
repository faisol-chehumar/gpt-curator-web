import { Sizes } from '@/shared/types/commons';
export const BUTTON_VARIANTS = {
  regular: 'shadow-sm',
  ghost: 'bg-transparent',
  link: '',
};

export const BUTTON_SIZES = {
  [Sizes.NONE]: '',
  [Sizes.SMALL]: 'px-6 py-1',
  [Sizes.BASE]: 'px-12 py-2',
  [Sizes.MEDIUM]: 'px-24 py-4',
  [Sizes.LARGE]: 'px-48 py-8',
};

export const BUTTON_COLORS = {
  primary: 'bg-primary hover:bg-primary-light active:bg-primary-dark',
  secondary: 'bg-secondary',
  transparent: 'bg-transparent',
  dark: 'bg-dark',
};

export const BUTTON_BORDER_RADIUSES = {
  [Sizes.NONE]: 'rounded-0',
  [Sizes.SMALL]: 'rounded-sm',
  [Sizes.BASE]: 'rounded',
  [Sizes.MEDIUM]: 'rounded-md',
  [Sizes.LARGE]: 'rounded-xl',
};
