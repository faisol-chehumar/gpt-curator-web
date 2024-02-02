import React from 'react';

import { cn } from '@/lib/tailwind/utils';
import {
  generateSpacingClasses,
  type BorderProps,
  type PaddingProps,
  generateBorderClasses,
} from '@/lib/tailwind';
import {
  BackgroundProps,
  generateBackgroundClasses,
} from '@/lib/tailwind/background';

type SectionElement = React.ElementRef<'section'>;

interface SectionProps
  extends React.ComponentPropsWithoutRef<'section'>,
    PaddingProps,
    BackgroundProps,
    BorderProps {}

const Section = React.forwardRef<SectionElement, SectionProps>(
  (props, forwardedRef) => {
    const { children, id, className } = props;

    const spacingClasses = generateSpacingClasses(props);
    const backgroundClasses = generateBackgroundClasses(props);
    const borderClasses = generateBorderClasses(props);

    const classNames = cn(
      spacingClasses,
      backgroundClasses,
      borderClasses,
      className
    );

    return (
      <section ref={forwardedRef} id={id} className={classNames}>
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';
export { Section };
