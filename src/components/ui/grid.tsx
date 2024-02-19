import React from 'react';

import { cn } from '@/lib/tailwind/utils';
import {
  TwGridProps,
  generateGridClasses,
  generateLayoutClasses,
  generateSizingClasses,
} from '@/lib/tailwind';

import { BoxProps } from './box';

type GridElement = React.ElementRef<'div'>;

interface GridProps
  extends React.ComponentPropsWithoutRef<'div'>,
    Omit<BoxProps, 'display'>,
    TwGridProps {}

const Grid = React.forwardRef<GridElement, GridProps>((props, forwardedRef) => {
  const { children, className, id } = props;

  const gridClasses = generateGridClasses(props);
  const sizeClasses = generateSizingClasses(props);
  const layoutClasses = generateLayoutClasses(props);

  const classNames = cn(
    'grid',
    gridClasses,
    sizeClasses,
    layoutClasses,
    className
  );

  return (
    <div
      ref={forwardedRef}
      id={id}
      data-testid={props['data-testid']}
      className={classNames}
    >
      {children}
    </div>
  );
});

Grid.displayName = 'Grid';

export { Grid };
