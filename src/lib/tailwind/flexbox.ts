import { Responsive } from './responsive';
import { generateClassesFromProps, type ClassMapping } from './class-generator';

type FlexDirection = Responsive<'row' | 'col' | 'row-reverse' | 'col-reverse'>;
type JustifyContent = Responsive<
  | 'normal'
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch'
>;
type FlexWrap = Responsive<'nowrap' | 'wrap' | 'wrap-reverse'>;
type Gap = Responsive<string | number>;
type AlignItems = Responsive<
  'start' | 'end' | 'center' | 'baseline' | 'stretch'
>;
type FlexDisplay = 'flex' | 'inline-flex';

type FlexboxProps = {
  display?: FlexDisplay;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  gap?: Gap;
  justify?: JustifyContent;
  items?: AlignItems;
};

const flexboxClassMapping: ClassMapping<FlexboxProps> = {
  display: null,
  direction: 'flex',
  wrap: 'flex',
  gap: 'gap',
  justify: 'justify',
  items: 'items',
};

function generateFlexboxClasses(props: FlexboxProps) {
  return generateClassesFromProps(props, flexboxClassMapping);
}

export { generateFlexboxClasses };
export type { FlexboxProps, FlexDisplay };
