import { Responsive } from './responsive';
import { generateClassesFromProps, type ClassMapping } from './class-generator';
import { GridDisplay } from './grid';
import { FlexDisplay } from './flexbox';

type Display = Responsive<
  'none' | 'inline' | 'block' | FlexDisplay | GridDisplay
>;
type Position = Responsive<
  'static' | 'fixed' | 'absolute' | 'relative' | 'sticky'
>;

type Overflow = Responsive<'auto' | 'hidden' | 'clip' | 'visible' | 'scroll'>;

type LayoutProps = {
  display?: Display;
  positions?: Position;
  overflow?: Overflow;
};

const layoutClassMapping: ClassMapping<LayoutProps> = {
  display: null,
  positions: null,
  overflow: 'overflow',
};

function generateLayoutClasses(props: LayoutProps) {
  return generateClassesFromProps(props, layoutClassMapping);
}

export { generateLayoutClasses };
export type { LayoutProps, Display, Position };
