import { Colors, Sizes } from '@/shared/types/commons';

type SvgFillColors = Exclude<Colors, Colors.TRANSPARENT>;

type SvgSizes = Exclude<Sizes, Sizes.NONE>;

export interface SvgProps {
  size?: SvgSizes;
  color?: SvgFillColors;
}
