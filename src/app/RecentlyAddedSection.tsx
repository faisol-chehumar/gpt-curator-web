'use client';

import React from 'react';

import FeaturedSection from '@/components/Layout/Section/FeaturedSection';

import ImageCarousel, { CarouselItem } from './ImageCarousel';

type RecentlyAddedSectionProps = {
  data: CarouselItem[];
};

const RecentlyAddedSection: React.FC<RecentlyAddedSectionProps> = ({
  data,
}) => {
  return (
    <FeaturedSection
      testId="recently-added-carousel-section"
      title="Recently Added"
    >
      <ImageCarousel
        data={data}
        innerProps={{
          carousel: { slidesToShows: { mobile: 2, tablet: 3, desktop: 5 } },
        }}
      />
    </FeaturedSection>
  );
};

export default RecentlyAddedSection;
