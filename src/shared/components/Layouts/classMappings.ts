import { Positions, NegativeSpaces } from './../../types/commons';
import { Spaces } from '@/shared/types/commons';
import { Directions, Widths } from './types';

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
    [Widths.AUTO]: 'w-auto',
    [Widths.FULL]: 'w-full',
    [Widths.FULL_SCREEN]: 'w-screen',
    [Widths.FIVE_TWELVE]: 'w-5/12',
    [Widths.SEVEN_TWELVE]: 'w-7/12',
  },
  tablet: {
    [Widths.AUTO]: 'md:w-auto',
    [Widths.FULL]: 'md:w-full',
    [Widths.FULL_SCREEN]: 'md:w-screen',
    [Widths.FIVE_TWELVE]: 'md:w-5/12',
    [Widths.SEVEN_TWELVE]: 'md:w-7/12',
  },
  desktop: {
    [Widths.AUTO]: 'lg:w-auto',
    [Widths.FULL]: 'lg:w-full',
    [Widths.FULL_SCREEN]: 'lg:w-screen',
    [Widths.FIVE_TWELVE]: 'lg:w-5/12',
    [Widths.SEVEN_TWELVE]: 'lg:w-7/12',
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

export const LEADING_MAPS = {
  [Spaces.NONE]: 'leading-[0]',
  [Spaces.SMALL]: 'leading-4',
  [Spaces.BASE]: 'leading-6',
  [Spaces.MEDIUM]: 'leading-8',
  [Spaces.LARGE]: 'leading-10',
};

export const POSITION_MAPS = {
  [Positions.BASE]: 'relative',
  [Positions.TOP_RIGHT]: 'absolute top-0 right-0',
};

export const MARGIN_MAPS = {
  [Directions.TOP]: {
    [Spaces.NONE]: 'mt-0',
    [Spaces.SMALL]: 'mt-2',
    [Spaces.BASE]: 'mt-4',
    [Spaces.MEDIUM]: 'mt-8',
    [Spaces.LARGE]: 'mt-10',
    [NegativeSpaces.SMALL]: '-mt-2',
    [NegativeSpaces.BASE]: '-mt-4',
    [NegativeSpaces.MEDIUM]: '-mt-8',
    [NegativeSpaces.LARGE]: '-mt-10',
  },
  [Directions.RIGHT]: {
    [Spaces.NONE]: 'mr-0',
    [Spaces.SMALL]: 'mr-2',
    [Spaces.BASE]: 'mr-4',
    [Spaces.MEDIUM]: 'mr-8',
    [Spaces.LARGE]: 'mr-10',
    [NegativeSpaces.SMALL]: '-mr-2',
    [NegativeSpaces.BASE]: '-mr-4',
    [NegativeSpaces.MEDIUM]: '-mr-8',
    [NegativeSpaces.LARGE]: '-mr-10',
  },
  [Directions.BOTTOM]: {
    [Spaces.NONE]: 'mb-0',
    [Spaces.SMALL]: 'mb-2',
    [Spaces.BASE]: 'mb-4',
    [Spaces.MEDIUM]: 'mb-8',
    [Spaces.LARGE]: 'mb-10',
    [NegativeSpaces.SMALL]: '-mb-2',
    [NegativeSpaces.BASE]: '-mb-4',
    [NegativeSpaces.MEDIUM]: '-mb-8',
    [NegativeSpaces.LARGE]: '-mb-10',
  },
  [Directions.LEFT]: {
    [Spaces.NONE]: 'ml-0',
    [Spaces.SMALL]: 'ml-2',
    [Spaces.BASE]: 'ml-4',
    [Spaces.MEDIUM]: 'ml-8',
    [Spaces.LARGE]: 'ml-10',
    [NegativeSpaces.SMALL]: '-ml-2',
    [NegativeSpaces.BASE]: '-ml-4',
    [NegativeSpaces.MEDIUM]: '-ml-8',
    [NegativeSpaces.LARGE]: '-ml-10',
  },
};
