import React from 'react';
import Image from 'next/image';

import Text from '@/shared/components/Typography/Text';
import { Colors } from '@/shared/types/commons';

import { FigureProps, FigureVariants } from './types';
import classNames from 'classnames';
import { FIGURE_VARIANTS_MAPS } from './classMappings';

const Figure: React.FC<FigureProps> = ({
  imagePath,
  alt,
  caption,
  variant = FigureVariants.BASE,
}) => {
  const classesImageWrapper = classNames(
    'relative bg-black',
    FIGURE_VARIANTS_MAPS[variant]
  );
  const classesCaptionWrapper = classNames('bg-dark p-[1rem]');

  return (
    <figure>
      <div className={classesImageWrapper}>
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
      <figcaption className={classesCaptionWrapper}>
        <Text color={Colors.WHITE}>{caption}</Text>
      </figcaption>
    </figure>
  );
};

export default Figure;
