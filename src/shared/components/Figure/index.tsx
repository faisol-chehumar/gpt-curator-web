import React from 'react';
import Image from 'next/image';

import Text from '@/shared/components/Typography/Text';
import { Colors } from '@/shared/types/commons';

type ImagePath = string;
type Atl = string;
type FigureCaption = string;

interface FigureProps {
  imagePath: ImagePath;
  alt: Atl;
  caption: FigureCaption;
}

const Figure: React.FC<FigureProps> = ({ imagePath, alt, caption }) => {
  return (
    <figure>
      <div className="relative h-[15rem] bg-black">
        <Image
          src={imagePath}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw"
          style={{
            objectFit: 'cover',
          }}
          fill
          alt={alt}
        />
      </div>
      <figcaption className="bg-dark p-[1rem]">
        <Text color={Colors.WHITE}>{caption}</Text>
      </figcaption>
    </figure>
  );
};

export default Figure;
