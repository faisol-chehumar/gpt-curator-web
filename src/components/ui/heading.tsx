import React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/tailwind/utils';
import {
  generateSpacingClasses,
  generateTypographyClasses,
  type MarginProps,
  type TypographyProps,
} from '@/lib/tailwind';

type HeadingElement = React.ElementRef<'h1'>;

const headingVariants = cva('scroll-m-20', {
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold tracking-tight lg:text-5xl/[1.2em]',
      h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
});

interface HeadingProps
  extends React.ComponentPropsWithoutRef<'h1'>,
    TypographyProps,
    MarginProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
}

const Heading = React.forwardRef<HeadingElement, HeadingProps>(
  (props, forwardedRef) => {
    const { children, id, variant: Tag = 'h1' } = props;

    const typographyClasses = generateTypographyClasses(props);
    const spacingClasses = generateSpacingClasses(props);

    const className = cn(
      headingVariants({ variant: Tag }),
      typographyClasses,
      spacingClasses
      // 'lg:text-8xl/[2rem]'
    );

    return (
      <Tag ref={forwardedRef} id={id} className={className}>
        {children}
      </Tag>
    );
  }
);

Heading.displayName = 'Heading';
export { Heading };
