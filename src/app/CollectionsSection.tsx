'use client';

import React from 'react';

import { Variants } from '@/shared/types/commons';

import FeaturedSection from '@/components/Layout/Section/FeaturedSection';

import ImageCarousel, { CarouselItem } from './ImageCarousel';

type CollectionsSectionProps = {
  data: CarouselItem[];
};

const CollectionsSection: React.FC<CollectionsSectionProps> = ({ data }) => {
  return (
    <FeaturedSection testId="collections-carousel-section" title="Collections">
      <ImageCarousel
        data={data}
        innerProps={{
          carousel: { slidesToShows: { mobile: 2, tablet: 3, desktop: 5 } },
          feature: { variant: Variants.LARGE },
        }}
      />
    </FeaturedSection>
  );
};

export default CollectionsSection;
