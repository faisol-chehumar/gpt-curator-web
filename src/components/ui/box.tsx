import React from 'react';

import { cn } from '@/lib/tailwind/utils';

import {
  generateLayoutClasses,
  generateSizingClasses,
  generateSpacingClasses,
  generateBorderClasses,
  type SizingProps,
  type LayoutProps,
  type PaddingProps,
  type SpaceBetweenProps,
  type BorderProps,
  type Display,
  type MarginProps,
  type BackgroundProps,
  generateBackgroundClasses,
} from '@/lib/tailwind';

type BoxElement = React.ElementRef<'div'>;

interface BoxProps
  extends React.ComponentPropsWithoutRef<'div'>,
    SizingProps,
    Omit<LayoutProps, 'display'>,
    SpaceBetweenProps,
    PaddingProps,
    MarginProps,
    BorderProps,
    BackgroundProps {
  display?: Omit<Display, 'flex' | 'inline-flex'>;
  ['data-testid']?: string;
}

const Box = React.forwardRef<BoxElement, BoxProps>((props, forwardedRef) => {
  const { children, id, className } = props;

  const layoutClasses = generateLayoutClasses(props);
  const sizingClasses = generateSizingClasses(props);
  const spacingClasses = generateSpacingClasses(props);
  const borderClasses = generateBorderClasses(props);
  const backgroundClasses = generateBackgroundClasses(props);

  const classNames = cn(
    'block',
    layoutClasses,
    sizingClasses,
    spacingClasses,
    borderClasses,
    backgroundClasses,
    className
  );

  return (
    <div ref={forwardedRef} id={id} className={classNames}>
      {children}
    </div>
  );
});

Box.displayName = 'Box';
export { Box };
export type { BoxProps };
