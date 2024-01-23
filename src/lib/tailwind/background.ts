import { Responsive } from './responsive';
import { generateClassesFromProps, type ClassMapping } from './class-generator';

type BackgroundColor = Responsive<'primary' | 'secondary'>;

type BackgroundProps = {
  bgColor?: BackgroundColor;
};

const backgroundClassMapping: ClassMapping<BackgroundProps> = {
  bgColor: 'bg',
};

function generateBackgroundClasses(props: BackgroundProps) {
  return generateClassesFromProps(props, backgroundClassMapping);
}

export { generateBackgroundClasses };
export type { BackgroundProps };
