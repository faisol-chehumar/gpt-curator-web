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
  [key in Devices]: Widths;
};
export type Heights = 'auto' | 'fit' | 'full' | '40rem' | '16rem';
export type LayoutHeights = {
  [key in Devices]: Heights;
};

export interface BaseLayoutProps extends BaseProps {
  bgColor?: Colors;
  width?: LayoutWidths;
  height?: LayoutHeights;
}
export interface ContainerProps extends BaseProps {}

export type aligns = 'left' | 'center' | 'right';
export type LayoutAligns = {
  [key in Devices]: aligns;
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

type LayoutRadius = Sizes;

export interface BoxProps extends BaseLayoutProps {
  className?: string;
  align?: LayoutAligns;
  leading?: Spaces;
  position?: Positions;
  margin?: LayoutMargins;
  radius?: LayoutRadius;
  overflow?: Overflows;
}

type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
type Direction = 'row' | 'row-reverse' | 'col' | 'col-reverse';
export type FlexDirection = {
  [key in Devices]: Direction;
};
export interface FlexProps extends BaseLayoutProps {
  direction?: FlexDirection;
  alignItems?: AlignItems;
}
export interface SectionProps extends BaseProps {
  bgColor?: Colors;
  paddingY?: Spaces;
}

export enum Overflows {
  HIDDEN = 'HIDDEN',
  AUTO = 'AUTO',
  VISIBLE = 'VISIBLE',
}
