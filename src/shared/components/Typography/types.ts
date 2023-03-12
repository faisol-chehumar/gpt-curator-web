import { BaseProps, Colors, Spaces } from '@/shared/types/commons';

type TypographyColors = Exclude<Colors, 'transparent'> | 'inherit';
type TypographyMargins = Spaces;

export interface BaseTypographyProps extends BaseProps {
  color?: TypographyColors;
  mb?: TypographyMargins;
}

type TitleVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TitleProps extends BaseTypographyProps {
  variant?: TitleVariants;
}
