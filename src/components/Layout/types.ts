import {
  Colors,
  Devices,
  BaseProps,
  Spaces,
  Positions,
  NegativeSpaces,
  Sizes,
} from '@/shared/types/commons';

export enum Widths {
  AUTO = 'AUTO',
  FULL = 'FULL',
  FULL_SCREEN = 'FULL_SCREEN',
  FIVE_TWELVE = 'FIVE_TWELVE',
  SEVEN_TWELVE = 'SEVEN_TWELVE',
}
export type LayoutWidths = {
  [key in Devices]?: Widths;
};
export enum Heights {
  AUTO = 'AUTO',
  FIT = 'FIT',
  FULL = 'FULL',
  FORTY_REM = '40rem',
  SIXTEEN_REM = '16rem',
}

export type LayoutHeights = {
  [key in Devices]?: Heights;
};

export interface BaseLayoutProps extends BaseProps {
  bgColor?: Colors;
  width?: LayoutWidths;
  height?: LayoutHeights;
}
export interface ContainerProps extends BaseProps {}

export enum Aligns {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}
export type LayoutAligns = {
  [key in Devices]?: Aligns;
};

export enum Directions {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

export type LayoutMargins = {
  [key in Directions]?: Spaces | NegativeSpaces;
};

export type LayoutPaddings = {
  [key in Directions]?: Spaces | NegativeSpaces;
};

export enum BorderVariants {
  NONE = 'NONE',
  BASE_ALL = 'BASE_ALL',
  BASE_TOP = 'BASE_TOP',
}

type LayoutBorders = {
  variant?: BorderVariants;
  color?: Colors;
  radius?: Sizes;
};
export interface BoxProps extends BaseLayoutProps {
  className?: string;
  align?: LayoutAligns;
  leading?: Spaces;
  position?: Positions;
  margin?: LayoutMargins;
  padding?: LayoutPaddings;
  overflow?: Overflows;
  border?: LayoutBorders;
}

export enum AlignItems {
  START = 'START',
  END = 'END',
  CENTER = 'CENTER',
  BASELINE = 'BASELINE',
  STRETCH = 'STRETCH',
}
export enum JustifyContents {
  START = 'START',
  END = 'END',
  CENTER = 'CENTER',
  BETWEEN = 'BETWEEN',
  AROUND = 'AROUND',
  EVENLY = 'EVENLY',
}
type Direction = 'row' | 'row-reverse' | 'col' | 'col-reverse';
export type FlexDirection = {
  [key in Devices]: Direction;
};
export interface FlexProps extends BaseLayoutProps {
  direction?: FlexDirection;
  alignItem?: AlignItems;
  justifyContent?: JustifyContents;
}

export interface BaseSectionProps extends BaseProps {
  bgColor?: Colors;
  padding?: LayoutPaddings;
  border?: LayoutBorders;
}

export enum Overflows {
  HIDDEN = 'HIDDEN',
  AUTO = 'AUTO',
  VISIBLE = 'VISIBLE',
}
