import React from 'react';

import { cn } from '@/lib/tailwind/utils';
import {
  generateTypographyClasses,
  type TypographyProps,
} from '@/lib/tailwind';

type LeadElement = React.ElementRef<'h1'>;

interface LeadProps
  extends React.ComponentPropsWithoutRef<'p'>,
    TypographyProps {}

const Lead = React.forwardRef<LeadElement, LeadProps>((props, forwardedRef) => {
  const { children, id } = props;

  const typographyClass = generateTypographyClasses(props);

  const className = cn('text-xl text-muted-foreground', typographyClass);

  return (
    <p ref={forwardedRef} id={id} className={className}>
      {children}
    </p>
  );
});

Lead.displayName = 'Lead';
export { Lead };
