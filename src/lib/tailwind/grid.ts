import { Responsive } from './responsive';
import { generateClassesFromProps, type ClassMapping } from './class-generator';

type GridDisplay = 'none' | 'inline-grid' | 'grid';
type Gap = Responsive<string | number>;

type Flow = Responsive<
  'row' | 'column' | 'dense' | 'row-dense' | 'column-dense'
>;

type TwGridProps = {
  display: GridDisplay;
  columns: Responsive<string | number>;
  rows: Responsive<string | number>;
  flow: Flow;
  gap: Gap;
  gapX: Gap;
  gapY: Gap;
};

const gridClassMapping: ClassMapping<TwGridProps> = {
  display: 'grid',
  columns: 'grid-cols',
  rows: 'grid-rows',
  flow: 'grid-flow',
  gap: 'gap',
  gapX: 'gap-x',
  gapY: 'gap-y',
};

function generateGridClasses(props: TwGridProps) {
  return generateClassesFromProps(props, gridClassMapping);
}

export { generateGridClasses };
export type { TwGridProps };
