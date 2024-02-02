import { generateClassesFromProps, type ClassMapping } from './class-generator';
import { Responsive } from './responsive';

type DefaultBorder = Responsive<true | 0 | 2 | 4 | 8>;

type Border = DefaultBorder;
type BorderBottom = DefaultBorder;
type BorderTop = DefaultBorder;
type BorderColor =
  | 'inherit'
  | 'currentColor'
  | 'transparent'
  | 'black'
  | 'white'
  | 'primary'
  | 'secondary';

type BorderProps = {
  border?: Border;
  borderTop?: BorderTop;
  borderBottom?: BorderBottom;
  borderColor?: BorderColor;
  borderY?: DefaultBorder;
  borderX?: DefaultBorder;
  divideX?: DefaultBorder;
  divideY?: DefaultBorder;
};

const borderClassMapping: ClassMapping<BorderProps> = {
  border: 'border',
  borderTop: 'border-t',
  borderBottom: 'border-b',
  borderColor: 'border',
  borderX: 'border-x',
  borderY: 'border-y',
  divideX: 'divide-x',
  divideY: 'divide-y',
};

function generateBorderClasses(props: BorderProps) {
  return generateClassesFromProps(props, borderClassMapping);
}

export { generateBorderClasses };
export type { BorderProps };
