import { Colors, BaseProps, Sizes } from '@/shared/types/commons';

type ButtonVariants = 'regular' | 'ghost' | 'link';
type ButtonSizes = Sizes;
type ButtonColors = Exclude<
  Colors,
  Colors.BLACK | Colors.WHITE | Colors.LIGHTER_DARK | Colors.DARKER_DARK
>;
type ButtonRadius = Sizes;

export interface BaseButtonProps extends BaseProps {
  onClick?: () => void;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  color?: ButtonColors;
  radius?: ButtonRadius;
}
