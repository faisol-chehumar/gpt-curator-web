import React from 'react';
import NextImage, { type StaticImageData } from 'next/image';

import { AspectRatio } from './aspect-ratio';

type ImageElement = React.ElementRef<'div'>;
type Alt = string;

interface ImageProps extends React.ComponentPropsWithoutRef<'div'> {
  src: string | StaticImageData;
  alt: Alt;
  fill?: boolean | undefined;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | undefined;
  sizes?: string | undefined;
  ratio?: number;
}

const Image = React.forwardRef<ImageElement, ImageProps>(
  (props, forwardedRef) => {
    const { id, src, alt, fill, objectFit, sizes, ratio = 16 / 9 } = props;

    return (
      <AspectRatio id={id} ref={forwardedRef} ratio={ratio}>
        <NextImage
          src={src}
          alt={alt}
          fill={fill}
          style={{ objectFit: objectFit }}
          sizes={sizes}
        />
      </AspectRatio>
    );
  }
);

Image.displayName = 'Image';
export { Image };
export type { Alt };
