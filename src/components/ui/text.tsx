import React from 'react';

import { cn } from '@/lib/tailwind/utils';
import {
  generateSpacingClasses,
  generateTypographyClasses,
  type MarginProps,
  type TypographyProps,
} from '@/lib/tailwind';

type TextElement = React.ElementRef<'p'>;

interface TextProps
  extends React.ComponentPropsWithoutRef<'p'>,
    TypographyProps,
    MarginProps {
  variant?: 'p';
}

const Text = React.forwardRef<TextElement, TextProps>((props, forwardedRef) => {
  const { children, id, variant: Tag = 'p' } = props;

  const typographyClasses = generateTypographyClasses(props);
  const spacingClasses = generateSpacingClasses(props);

  const className = cn(
    'leading-7 [&:not(:first-child)]:mt-6',
    typographyClasses,
    spacingClasses
  );

  return (
    <Tag ref={forwardedRef} id={id} className={className}>
      {children}
    </Tag>
  );
});

Text.displayName = 'Text';
export { Text };
