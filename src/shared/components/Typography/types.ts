import { PropsWithChildren, Colors } from '@/shared/types/commons';

export type TypographyColors = Exclude<Colors, 'transparent'> | 'inherit';

export interface BaseTypography extends PropsWithChildren {
  color?: TypographyColors;
}
