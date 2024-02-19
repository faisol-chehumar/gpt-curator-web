import {
  generateClassesFromProps,
  type ClassMapping,
  type ResponsivePropsValue,
} from './class-generator';

type SizingProps = {
  width?: ResponsivePropsValue;
  height?: ResponsivePropsValue;
  maxHeight?: ResponsivePropsValue;
  maxWidth?: ResponsivePropsValue;
};

const sizingClassMapping: ClassMapping<SizingProps> = {
  width: 'w',
  height: 'h',
  maxHeight: 'max-h',
  maxWidth: 'max-w',
};

function generateSizingClasses(props: SizingProps) {
  return generateClassesFromProps(props, sizingClassMapping);
}

export { generateSizingClasses };
export type { SizingProps };
