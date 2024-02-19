import React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/tailwind/utils';
import {
  generateSpacingClasses,
  generateTypographyClasses,
  type MarginProps,
  type TypographyProps,
} from '@/lib/tailwind';

type TextElement = React.ElementRef<'p'>;

const textVariants = cva(null, {
  variants: {
    variant: {
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      small: 'text-sm font-medium leading-none',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

interface TextProps
  extends React.ComponentPropsWithoutRef<'p'>,
    TypographyProps,
    MarginProps {
  variant?: 'p' | 'small';
}

const Text = React.forwardRef<TextElement, TextProps>((props, forwardedRef) => {
  const { children, id, variant: Tag = 'p' } = props;

  const typographyClasses = generateTypographyClasses(props);
  const spacingClasses = generateSpacingClasses(props);

  const className = cn(typographyClasses, spacingClasses);

  return (
    <Tag
      ref={forwardedRef}
      id={id}
      className={textVariants({ variant: Tag, className })}
    >
      {children}
    </Tag>
  );
});

Text.displayName = 'Text';
export { Text };
