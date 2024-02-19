import { Responsive } from './responsive';
import { generateClassesFromProps, type ClassMapping } from './class-generator';

type GridDisplay = 'none' | 'grid' | 'inline-grid';
type Gap = Responsive<string | number>;
type Flow = Responsive<
  'row' | 'column' | 'dense' | 'row-dense' | 'column-dense'
>;

type TwGridProps = {
  display?: GridDisplay;
  col?: Responsive<string | number>;
  row?: Responsive<string | number>;
  colSpan?: Responsive<string | number>;
  rowSpan?: Responsive<string | number>;
  flow?: Flow;
  gap?: Gap;
  gapX?: Gap;
  gapY?: Gap;
};

const gridClassMapping: ClassMapping<TwGridProps> = {
  display: null,
  col: 'grid-cols',
  row: 'grid-cols',
  colSpan: 'col-span',
  rowSpan: 'row-span',
  flow: 'grid-flow',
  gap: 'gap',
  gapX: 'gap-x',
  gapY: 'gap-y',
};

function generateGridClasses(props: TwGridProps) {
  return generateClassesFromProps(props, gridClassMapping);
}

export { generateGridClasses };
export type { TwGridProps, GridDisplay };
