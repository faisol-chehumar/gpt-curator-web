import { Responsive } from './responsive';
import { generateClassesFromProps, type ClassMapping } from './class-generator';

type Display = Responsive<'none' | 'inline' | 'block' | 'inline-flex' | 'flex'>;
type Position = Responsive<
  'static' | 'fixed' | 'absolute' | 'relative' | 'sticky'
>;

type LayoutProps = {
  display?: Display;
  positions?: Position;
};

const layoutClassMapping: ClassMapping<LayoutProps> = {
  display: null,
  positions: null,
};

function generateLayoutClasses(props: LayoutProps) {
  return generateClassesFromProps(props, layoutClassMapping);
}

export { generateLayoutClasses };
export type { LayoutProps, Display, Position };
