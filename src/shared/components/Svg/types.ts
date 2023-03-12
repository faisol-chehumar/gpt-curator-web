import { Colors, Sizes } from '@/shared/types/commons';

type SvgFillColors = Exclude<Colors, Colors.TRANSPARENT>;

type SvgSizes = Exclude<Sizes, 'none'>;

export interface SvgProps {
  size?: SvgSizes;
  color?: SvgFillColors;
}
