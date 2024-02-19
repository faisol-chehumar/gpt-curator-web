import React from 'react';

import { cn } from '@/lib/tailwind/utils';
import { TwGridProps, generateGridClasses } from '@/lib/tailwind';

type GridElement = React.ElementRef<'div'>;

interface GridProps
  extends React.ComponentPropsWithoutRef<'div'>,
    TwGridProps {}

const Grid = React.forwardRef<GridElement, GridProps>((props, forwardedRef) => {
  const gridClasses = generateGridClasses(props);

  const classNames = cn(gridClasses);

  return (
    <div ref={forwardedRef} className={classNames}>
      Grid
    </div>
  );
});

Grid.displayName = 'Grid';

export { Grid };
