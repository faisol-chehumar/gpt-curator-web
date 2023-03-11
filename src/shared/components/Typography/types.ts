import { BaseProps, Colors, Sizes } from '@/shared/types/commons';

type TypographyColors = Exclude<Colors, 'transparent'> | 'inherit';
type TypographyMargins = Sizes | 'none';

export interface BaseTypography extends BaseProps {
  color?: TypographyColors;
  mb?: TypographyMargins;
}
