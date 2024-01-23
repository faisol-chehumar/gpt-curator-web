import React from 'react';

import { cn } from '@/lib/tailwind/utils';

type ContainerElement = React.ElementRef<'div'>;
interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {}

const Container = React.forwardRef<ContainerElement, ContainerProps>(
  (props, forwardedRef) => {
    const { children, id } = props;

    const classNames = cn('container');

    return (
      <div ref={forwardedRef} id={id} className={classNames}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
export { Container };
