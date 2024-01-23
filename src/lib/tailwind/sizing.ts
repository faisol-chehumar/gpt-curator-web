import {
  generateClassesFromProps,
  type ClassMapping,
  type ResponsivePropsValue,
} from './class-generator';

type SizingProps = {
  width?: ResponsivePropsValue;
  height?: ResponsivePropsValue;
};

const sizingClassMapping: ClassMapping<SizingProps> = {
  width: 'w',
  height: 'h',
};

function generateSizingClasses(props: SizingProps) {
  return generateClassesFromProps(props, sizingClassMapping);
}

export { generateSizingClasses };
export type { SizingProps };
