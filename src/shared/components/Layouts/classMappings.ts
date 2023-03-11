export const BG_COLOR_MAPS = {
  transparent: 'bg-transparent',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  dark: 'bg-dark',
  'lighter-dark': 'bg-lighter-dark',
  'darker-dark': 'bg-darker-dark',
  white: 'bg-white',
  black: 'bg-black',
};

export const WIDTH_MAPS = {
  mobile: {
    full: 'w-full',
    fullScreen: 'w-screen',
    '5/12': 'w-5/12',
    '7/12': 'w-7/12',
  },
  tablet: {
    full: 'md:w-full',
    fullScreen: 'md:w-screen',
    '5/12': 'md:w-5/12',
    '7/12': 'md:w-7/12',
  },
  desktop: {
    full: 'lg:w-full',
    fullScreen: 'lg:w-screen',
    '5/12': 'lg:w-5/12',
    '7/12': 'lg:w-7/12',
  },
};

export const HEIGHT_MAPS = {
  mobile: {
    fit: 'h-fit',
    full: 'h-full',
    '16rem': 'h-[16rem]',
    '40rem': 'h-[40rem]',
  },
  tablet: {
    fit: 'md:h-fit',
    full: 'md:h-full',
    '16rem': 'md:h-[16rem]',
    '40rem': 'md:h-[40rem]',
  },
  desktop: {
    fit: 'lg:h-fit',
    full: 'lg:h-full',
    '16rem': 'lg:h-[16rem]',
    '40rem': 'lg:h-[40rem]',
  },
};

export const DIRECTION_MAPS = {
  mobile: {
    row: 'flex-row space-x-12 space-y-0',
    col: 'flex-col space-y-12 space-x-0',
    'row-reverse': 'flex-row-reverse space-x-12 space-y-0 space-x-reverse',
    'col-reverse': 'flex-col-reverse space-y-12 space-x-0 space-y-reverse',
  },
  tablet: {
    row: 'md:flex-row md:space-x-12 md:space-y-0',
    col: 'md:flex-col md:space-y-12 md:space-x-0',
    'row-reverse':
      'md:flex-row-reverse md:space-x-12 md:space-y-0 md:space-x-reverse',
    'col-reverse':
      'md:flex-col-reverse md:space-y-12 space-x-0 md:space-y-reverse',
  },
  desktop: {
    row: 'lg:flex-row lg:space-x-12 lg:space-y-0',
    col: 'lg:flex-col lg:space-y-12 lg:space-x-0',
    'row-reverse':
      'lg:flex-row-reverse lg:space-x-12 lg:space-y-0 lg:space-x-reverse',
    'col-reverse':
      'lg:flex-col-reverse lg:space-y-12 lg:space-x-0 lg:space-y-reverse',
  },
};

export const ITEM_ALIGN_MAPS = {
  start: 'items-start',
  end: 'items-end	',
  center: 'items-center	',
  baseline: 'items-baseline	',
  stretch: 'items-stretch',
};

export const PADDING_Y_MAPS = {
  none: 'py-0',
  small: 'py-xs',
  base: 'py-base',
  medium: 'py-md',
  large: 'py-xxl',
};

export const ALIGN_MAPS = {
  mobile: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  },
  tablet: {
    left: 'md:text-left',
    center: 'md:text-center',
    right: 'md:text-right',
  },
  desktop: {
    left: 'lg:text-left',
    center: 'lg:text-center',
    right: 'lg:text-right',
  },
};
