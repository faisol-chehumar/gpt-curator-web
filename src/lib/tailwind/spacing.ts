import {
  generateClassesFromProps,
  type ClassMapping,
  type ResponsivePropsValue,
} from './class-generator';

type MarginProps = {
  m?: ResponsivePropsValue;
  mx?: ResponsivePropsValue;
  my?: ResponsivePropsValue;
  mt?: ResponsivePropsValue;
  mr?: ResponsivePropsValue;
  mb?: ResponsivePropsValue;
  ml?: ResponsivePropsValue;
};

type PaddingProps = {
  p?: ResponsivePropsValue;
  px?: ResponsivePropsValue;
  py?: ResponsivePropsValue;
  pt?: ResponsivePropsValue;
  pr?: ResponsivePropsValue;
  pb?: ResponsivePropsValue;
  pl?: ResponsivePropsValue;
};

type SpaceBetweenProps = {
  spaceX?: ResponsivePropsValue;
  spaceY?: ResponsivePropsValue;
};

type SpacingProps = MarginProps | PaddingProps | SpaceBetweenProps;

const paddingClassMapping: ClassMapping<PaddingProps> = {
  p: 'p',
  px: 'px',
  py: 'py',
  pt: 'pt',
  pr: 'pr',
  pb: 'pb',
  pl: 'pl',
};

const marginClassMapping: ClassMapping<MarginProps> = {
  m: 'm',
  mx: 'mx',
  my: 'my',
  mt: 'mt',
  mr: 'mr',
  mb: 'mb',
  ml: 'ml',
};

const spaceBetweenClassMapping: ClassMapping<SpaceBetweenProps> = {
  spaceX: 'space-x',
  spaceY: 'space-y',
};

function generateSpacingClasses(props: SpacingProps) {
  return generateClassesFromProps(props, {
    ...marginClassMapping,
    ...paddingClassMapping,
    ...spaceBetweenClassMapping,
  });
}

export { generateSpacingClasses };
export type { SpacingProps, MarginProps, PaddingProps, SpaceBetweenProps };
