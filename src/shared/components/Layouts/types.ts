import {
  Colors,
  Devices,
  BaseProps,
  Spaces,
  Positions,
  NegativeSpaces,
} from '@/shared/types/commons';

export enum Widths {
  AUTO = 'auto',
  FULL = 'full',
  FULL_SCREEN = 'fullScreen',
  FIVE_TWELVE = '5/12',
  SEVEN_TWELVE = '7/12',
}
export type LayoutWidths = {
  [key in Devices]: Widths;
};
export type Heights = 'fit' | 'full' | '40rem' | '16rem';
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
export interface BoxProps extends BaseLayoutProps {
  className?: string;
  align?: LayoutAligns;
  leading?: Spaces;
  position?: Positions;
  margin?: LayoutMargins;
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
