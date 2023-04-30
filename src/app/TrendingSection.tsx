'use client';

import React from 'react';

import FeaturedSection from '@/components/Layout/Section/FeaturedSection';

import ImageCarousel, { CarouselItem } from './ImageCarousel';

type TrendingSectionProps = {
  data: CarouselItem[];
};

const TrendingSection: React.FC<TrendingSectionProps> = ({ data }) => {
  return (
    <FeaturedSection testId="trending-feature-section" title="Trending">
      <ImageCarousel
        data={data}
        innerProps={{
          carousel: { slidesToShows: { mobile: 2, tablet: 3, desktop: 5 } },
        }}
      />
    </FeaturedSection>
  );
};

export default TrendingSection;
