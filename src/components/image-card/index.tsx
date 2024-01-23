import React from 'react';
import { type StaticImageData } from 'next/image';

import { cn } from '@/lib/tailwind/utils';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Image, type Alt, Text } from '../ui';
import {
  generateSpacingClasses,
  type PaddingProps,
  type SpaceBetweenProps,
} from '@/lib/tailwind';

interface ImageCardProps
  extends React.ComponentPropsWithoutRef<'figure'>,
    Pick<SpaceBetweenProps, 'spaceY'>,
    PaddingProps {
  src: string | StaticImageData;
  caption?: string;
  alt: Alt;
  imageRatio?: number;
}

const ImageCard = ({
  src,
  caption,
  alt,
  imageRatio = 16 / 9,
  ...rest
}: ImageCardProps) => {
  const spaceClasses = generateSpacingClasses(rest);

  const figureClasses = cn(spaceClasses);
  const figcaptionClasses = cn('text-center');

  return (
    <Card className={figureClasses}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={src}
          alt={alt}
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          ratio={imageRatio}
          fill
        />
      </CardContent>
      <CardFooter>
        {caption ? <Text className={figcaptionClasses}>{caption}</Text> : null}
      </CardFooter>
    </Card>
  );
};

ImageCard.displayName = 'ImageCard';
export default ImageCard;
