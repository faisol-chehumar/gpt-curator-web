type ImagePath = string;
type Atl = string;
type FigureCaption = string | undefined;

export enum FigureVariants {
  SMALL = 'SMALL',
  BASE = 'BASE',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export interface FigureProps {
  imagePath: ImagePath;
  alt: Atl;
  caption: FigureCaption;
  variant?: FigureVariants;
}
