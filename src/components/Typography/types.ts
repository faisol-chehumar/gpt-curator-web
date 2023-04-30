import { BaseProps, Colors, Spaces, Sizes } from '@/shared/types/commons';

type TypographyColors = Exclude<Colors, Colors.TRANSPARENT>;
type TypographyMargins = Spaces;

export interface BaseTypographyProps extends BaseProps {
  color?: TypographyColors;
  mb?: TypographyMargins;
}

type TitleVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TitleProps extends BaseTypographyProps {
  variant?: TitleVariants;
}

export interface TextProps extends BaseTypographyProps {
  size?: Exclude<Sizes, Sizes.NONE>;
}
