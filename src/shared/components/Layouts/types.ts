import { Colors, Devices, BaseProps } from '@/shared/types/commons';

export type Widths = 'full' | 'fullScreen' | '5/12' | '7/12';
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
export interface BoxProps extends BaseLayoutProps {
  align?: LayoutAligns;
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

type Spaces = 'none' | 'lg';
export interface SectionProps extends BaseProps {
  bgColor?: Colors;
  paddingY?: Spaces;
}
