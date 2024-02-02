import type { Breakpoints, Responsive } from './responsive';

type ClassPrefix = string | null | boolean;
type ClassMapping<T> = { [key in keyof T]: ClassPrefix };

type PropsValue = number | string | boolean | undefined;
type ResponsivePropsValue = Responsive<PropsValue>;

function generateClassesFromProps<T>(props: T, mapping: ClassMapping<T>) {
  return Object.entries(mapping)
    .map(([key, classPrefix]) =>
      generateClass(
        classPrefix as ClassPrefix,
        props[key as keyof T] as ResponsivePropsValue
      )
    )
    .filter(Boolean)
    .join(' ');
}

function generateClass(
  classPrefix: ClassPrefix,
  propValue: ResponsivePropsValue
): string {
  // Convert propValue to Responsive type format for consistency
  const responsiveValue =
    typeof propValue === 'number' || typeof propValue === 'string'
      ? { initial: propValue }
      : propValue;

  return withBreakpoints(responsiveValue, classPrefix);
}

// Utility function to handle responsive values
function withBreakpoints(
  propValue: ResponsivePropsValue,
  classPrefix: ClassPrefix
): string {
  const classes: string[] = [];

  if (typeof propValue === 'object') {
    for (const bp of Object.keys(propValue) as Breakpoints[]) {
      const strValue = propValue[bp]?.toString() || '';
      let className = '';

      if (classPrefix && typeof classPrefix !== 'boolean') {
        const initialClassName =
          strValue === 'true' ? classPrefix : `${classPrefix}-${strValue}`;

        const responsiveClassName =
          strValue === 'true'
            ? `${bp}:${classPrefix}`
            : `${bp}:${classPrefix}-${strValue}`;

        className = bp === 'initial' ? initialClassName : responsiveClassName;
      }

      if (typeof classPrefix === 'boolean') {
        className =
          bp === 'initial' ? `${classPrefix}` : `${bp}:${classPrefix}`;
      }

      if (!classPrefix) {
        className = bp === 'initial' ? strValue : `${bp}:${strValue}`;
      }

      classes.push(className);
    }
  } else if (typeof propValue === 'string' || typeof propValue === 'number') {
    classes.push(`${classPrefix}-${propValue}`);
  } else if (typeof propValue === 'boolean') {
    classes.push(`${classPrefix}`);
  }

  return classes.join(' ');
}

export { generateClassesFromProps };
export type { ClassMapping, PropsValue, ResponsivePropsValue };
