import { Colors, Devices, PropsWithChildren } from '@/shared/types/commons';

export type Widths = 'full' | 'fullScreen' | '500px';
export type LayoutWidths = {
  [key in Devices]: Widths;
};
export type Heights = 'fit' | '40rem';
export type LayoutHeights = {
  [key in Devices]: Heights;
};

export interface BaseLayoutProps extends PropsWithChildren {
  bgColor?: Colors;
  width?: LayoutWidths;
  height?: LayoutHeights;
}
export interface ContainerProps extends PropsWithChildren {}
export interface BoxProps extends BaseLayoutProps {}

type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';
export interface FlexProps extends BaseLayoutProps {
  direction?: FlexDirection;
  alignItems?: AlignItems;
}

export interface SectionProps extends PropsWithChildren {
  bgColor?: Colors;
}
