import { Colors, BaseProps, Sizes } from '@/shared/types/commons';

type ButtonVariants = 'regular' | 'ghost' | 'link';
type ButtonSizes = Sizes;
type ButtonColors = Exclude<Colors, 'black' | 'white' | 'lighter-dark'>;
type ButtonRadius = Sizes;

export interface BaseButtonProps extends BaseProps {
  onClick?: () => void;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  color?: ButtonColors;
  radius?: ButtonRadius;
}
