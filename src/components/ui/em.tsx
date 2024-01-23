import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/tailwind/utils';
import {
  TypographyProps,
  generateTypographyClasses,
} from '@/lib/tailwind';

const emVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-fuchsia-600',
      secondary: 'text-purple-600',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type EmElement = React.ElementRef<'em'>;
interface EmProps
  extends React.ComponentPropsWithoutRef<'em'>,
    Pick<TypographyProps, 'transform'> {
  variant?: 'primary' | 'secondary';
}

const Em = React.forwardRef<EmElement, EmProps>((props, forwardedRef) => {
  const { children, id, variant } = props;

  const typographyClasses = generateTypographyClasses(props);

  const className = cn(emVariants({ variant }), typographyClasses);

  return (
    <em id={id} ref={forwardedRef} className={className} {...props}>
      {children}
    </em>
  );
});

Em.displayName = 'Em';

export { Em };
