import React from 'react';

import { cn } from '@/lib/tailwind/utils';

import {
  generateLayoutClasses,
  generateFlexboxClasses,
  generateSizingClasses,
  generateBorderClasses,
  generateSpacingClasses,
  type FlexboxProps,
} from '@/lib/tailwind';

import { BoxProps } from './box';

type FlexElement = React.ElementRef<'div'>;

interface FlexProps
  extends React.ComponentPropsWithoutRef<'div'>,
    Omit<BoxProps, 'display'>,
    FlexboxProps {}

const Flex = React.forwardRef<FlexElement, FlexProps>((props, forwardedRef) => {
  const { children, id, ...rest } = props;

  const layoutClasses = generateLayoutClasses(props);
  const flexboxClasses = generateFlexboxClasses(props);
  const sizingClasses = generateSizingClasses(props);
  const borderClasses = generateBorderClasses(props);
  const spaceClasses = generateSpacingClasses(props);

  const classNames = cn(
    'flex items-start',
    sizingClasses,
    layoutClasses,
    flexboxClasses,
    borderClasses,
    spaceClasses
  );

  return (
    <div
      ref={forwardedRef}
      id={id}
      data-testid={props['data-testid']}
      className={classNames}
      {...rest}
    >
      {children}
    </div>
  );
});

Flex.displayName = 'Flex';
export { Flex };
