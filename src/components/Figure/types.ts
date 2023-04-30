import { Variants } from '@/shared/types/commons';

type ImagePath = string;
type Atl = string;
type FigureCaption = string | undefined;

export interface FigureProps {
  imagePath: ImagePath;
  alt: Atl;
  caption: FigureCaption;
  variant?: Variants;
}
