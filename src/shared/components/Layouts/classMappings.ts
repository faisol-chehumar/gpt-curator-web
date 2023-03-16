import {
  AlignItems,
  BorderVariants,
  Heights,
  JustifyContents,
  Overflows,
} from '@/shared/components/Layouts/types';
import { Positions, NegativeSpaces } from './../../types/commons';
import { Spaces, Sizes, Colors } from '@/shared/types/commons';
import { Directions, Widths, Aligns } from './types';

export const BG_COLOR_MAPS = {
  transparent: 'bg-transparent',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  dark: 'bg-dark',
  'lighter-dark': 'bg-lighter-dark',
  'darker-dark': 'bg-darker-dark',
  white: 'bg-white',
  black: 'bg-black',
  [Colors.DARKER_LIGHT]: 'bg-black',
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
    [Heights.AUTO]: 'h-auto',
    [Heights.FIT]: 'h-fit',
    [Heights.FULL]: 'h-full',
    [Heights.SIXTEEN_REM]: 'h-[16rem]',
    [Heights.FORTY_REM]: 'h-[40rem]',
  },
  tablet: {
    [Heights.AUTO]: 'md:h-auto',
    [Heights.FIT]: 'md:h-fit',
    [Heights.FULL]: 'md:h-full',
    [Heights.SIXTEEN_REM]: 'md:h-[16rem]',
    [Heights.FORTY_REM]: 'md:h-[40rem]',
  },
  desktop: {
    [Heights.AUTO]: 'lg:h-auto',
    [Heights.FIT]: 'lg:h-fit',
    [Heights.FULL]: 'lg:h-full',
    [Heights.SIXTEEN_REM]: 'lg:h-[16rem]',
    [Heights.FORTY_REM]: 'lg:h-[40rem]',
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
  [AlignItems.START]: 'items-start',
  [AlignItems.END]: 'items-end',
  [AlignItems.CENTER]: 'items-center',
  [AlignItems.BASELINE]: 'items-baseline',
  [AlignItems.STRETCH]: 'items-stretch',
};

export const JUSTIFY_CONTENTS = {
  [JustifyContents.START]: 'justify-start',
  [JustifyContents.END]: 'justify-end',
  [JustifyContents.CENTER]: 'justify-center',
  [JustifyContents.BETWEEN]: 'justify-between',
  [JustifyContents.EVENLY]: 'justify-evenly',
  [JustifyContents.AROUND]: 'justify-around',
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
    [Aligns.LEFT]: 'text-left',
    [Aligns.CENTER]: 'text-center',
    [Aligns.RIGHT]: 'text-right',
  },
  tablet: {
    [Aligns.LEFT]: 'md:text-left',
    [Aligns.CENTER]: 'md:text-center',
    [Aligns.RIGHT]: 'md:text-right',
  },
  desktop: {
    [Aligns.LEFT]: 'lg:text-left',
    [Aligns.CENTER]: 'lg:text-center',
    [Aligns.RIGHT]: 'lg:text-right',
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

export const PADDING_MAPS = {
  [Directions.TOP]: {
    [Spaces.NONE]: 'pt-0',
    [Spaces.SMALL]: 'pt-2',
    [Spaces.BASE]: 'pt-4',
    [Spaces.MEDIUM]: 'pt-8',
    [Spaces.LARGE]: 'pt-10',
    [NegativeSpaces.SMALL]: '-pt-2',
    [NegativeSpaces.BASE]: '-pt-4',
    [NegativeSpaces.MEDIUM]: '-pt-8',
    [NegativeSpaces.LARGE]: '-pt-10',
  },
  [Directions.RIGHT]: {
    [Spaces.NONE]: 'pr-0',
    [Spaces.SMALL]: 'pr-2',
    [Spaces.BASE]: 'pr-4',
    [Spaces.MEDIUM]: 'pr-8',
    [Spaces.LARGE]: 'pr-10',
    [NegativeSpaces.SMALL]: '-pr-2',
    [NegativeSpaces.BASE]: '-pr-4',
    [NegativeSpaces.MEDIUM]: '-pr-8',
    [NegativeSpaces.LARGE]: '-pr-10',
  },
  [Directions.BOTTOM]: {
    [Spaces.NONE]: 'pb-0',
    [Spaces.SMALL]: 'pb-2',
    [Spaces.BASE]: 'pb-4',
    [Spaces.MEDIUM]: 'pb-8',
    [Spaces.LARGE]: 'pb-10',
    [NegativeSpaces.SMALL]: '-pb-2',
    [NegativeSpaces.BASE]: '-pb-4',
    [NegativeSpaces.MEDIUM]: '-pb-8',
    [NegativeSpaces.LARGE]: '-pb-10',
  },
  [Directions.LEFT]: {
    [Spaces.NONE]: 'pl-0',
    [Spaces.SMALL]: 'pl-2',
    [Spaces.BASE]: 'pl-4',
    [Spaces.MEDIUM]: 'pl-8',
    [Spaces.LARGE]: 'pl-10',
    [NegativeSpaces.SMALL]: '-pl-2',
    [NegativeSpaces.BASE]: '-pl-4',
    [NegativeSpaces.MEDIUM]: '-pl-8',
    [NegativeSpaces.LARGE]: '-pl-10',
  },
};

export const BOX_OVERFLOWS = {
  [Overflows.AUTO]: 'overflow-auto',
  [Overflows.HIDDEN]: 'overflow-hidden',
  [Overflows.VISIBLE]: 'overflow-visible',
};

export const BOX_BORDER_VARIANTS = {
  [BorderVariants.NONE]: 'border-0',
  [BorderVariants.BASE_ALL]: 'border-[0.5px]',
  [BorderVariants.BASE_TOP]: 'border-t-[0.5px]',
};

export const BOX_BORDER_COLORS = {
  [Colors.WHITE]: 'border-white',
  [Colors.BLACK]: 'border-black',
  [Colors.DARK]: 'border-dark',
  [Colors.DARKER_DARK]: 'border-darker-dark',
  [Colors.LIGHTER_DARK]: 'border-lighter-dark',
  [Colors.PRIMARY]: 'border-primary',
  [Colors.SECONDARY]: 'border-secondary',
  [Colors.TRANSPARENT]: 'border-transparent',
  [Colors.DARKER_LIGHT]: 'border-darker-light',
};

export const BOX_BORDER_RADIUSES = {
  [Sizes.NONE]: 'round-none',
  [Sizes.SMALL]: 'rounded-sm',
  [Sizes.BASE]: 'rounded',
  [Sizes.MEDIUM]: 'rounded-md',
  [Sizes.LARGE]: 'rounded-xl',
};
