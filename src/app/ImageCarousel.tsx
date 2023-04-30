import React from 'react';

import { ID, Variants } from '@/shared/types/commons';
import { SlidesToShows } from '@/components/Carousel/types';

import { Carousel, Figure } from '@/components';

export type CarouselItem = {
  id: ID;
  image_path: string;
  name: string;
};

type InnerProps = {
  feature?: { variant?: Variants };
  carousel?: { slidesToShows?: SlidesToShows };
};

interface ImageCarouselProps {
  data: CarouselItem[];
  innerProps?: InnerProps;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ data, innerProps }) => {
  return (
    <Carousel slidesToShows={innerProps?.carousel?.slidesToShows}>
      {data.map((item) => (
        <Carousel.Item key={item?.id}>
          <Figure
            imagePath={item?.image_path}
            alt={`${item?.name} image`}
            caption={item?.name?.toUpperCase()}
            variant={innerProps?.feature?.variant}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
