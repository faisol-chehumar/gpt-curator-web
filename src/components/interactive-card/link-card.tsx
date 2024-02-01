import React from 'react';
import { type StaticImageData } from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/tailwind/utils';

import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  generateSpacingClasses,
  type PaddingProps,
  type SpaceBetweenProps,
} from '@/lib/tailwind';

import { Image, type Alt } from '../ui';

interface LinkCardProps
  extends React.ComponentPropsWithoutRef<'div'>,
    Pick<SpaceBetweenProps, 'spaceY'>,
    PaddingProps {
  src: string | StaticImageData;
  alt: Alt;
  imageRatio?: number;
  title: string;
  subTitle: string;
  caption?: React.ReactNode;
  href: string;
}

const LinkCard = ({
  src,
  alt,
  imageRatio = 16 / 9,
  title,
  subTitle,
  caption,
  href,
  ...rest
}: LinkCardProps) => {
  const spaceClasses = generateSpacingClasses(rest);

  const cardClasses = cn(spaceClasses);

  return (
    <Link href={href}>
      <Card className={cardClasses}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subTitle}</CardDescription>
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
        {caption ? (
          <CardFooter className="justify-center">
            <small>{caption}</small>
          </CardFooter>
        ) : null}
      </Card>
    </Link>
  );
};

LinkCard.displayName = 'LinkCard';
export default LinkCard;
