import { Responsive } from './responsive';
import { generateClassesFromProps, type ClassMapping } from './class-generator';

type FontSize = Responsive<
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'
>;

type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';

type TypographyProps = {
  size?: FontSize;
  transform?: TextTransform;
  align?: 'left' | 'right' | 'center';
  weight?: 'light' | 'normal' | 'medium' | 'bold';
};

const typographyClassMapping: ClassMapping<TypographyProps> = {
  size: 'text',
  transform: null,
  align: 'text',
  weight: 'font',
};

function generateTypographyClasses(props: TypographyProps) {
  return generateClassesFromProps(props, typographyClassMapping);
}

export { generateTypographyClasses };
export type { TypographyProps, FontSize, TextTransform };
