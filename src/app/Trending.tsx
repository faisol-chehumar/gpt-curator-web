'use client';

import React from 'react';
import Image from 'next/image';

import { Colors, Sizes, Spaces } from '@/shared/types/commons';
import Container from '@/shared/components/Layouts/Container';
import Section from '@/shared/components/Layouts/Section';
import Title from '@/shared/components/Typography/Title';
import Carousel from '@/shared/components/Carousel';
import Figure from '@/shared/components/Figure';

const Trending = () => {
  const images = [
    {
      id: '1',
      image_path:
        'https://cdn.midjourney.com/0ddc078e-9081-43b3-a392-9ae36e54c0e3/grid_0.png',
    },
    {
      id: '2',
      image_path:
        'https://cdn.midjourney.com/30e0fdd9-74cc-4862-8bce-31419746c54b/grid_0.png',
    },
    {
      id: '3',
      image_path:
        'https://cdn.midjourney.com/526b7109-5031-4f43-8f1b-670e38b950d3/grid_0.png',
    },
    {
      id: '4',
      image_path:
        'https://cdn.midjourney.com/b68d1cff-c64a-4da0-bedd-309c5201fda1/grid_0.png',
    },
    {
      id: '5',
      image_path:
        'https://cdn.midjourney.com/c39102d8-000f-4a7e-b0d5-8d76708a6186/grid_0.png',
    },
    {
      id: '6',
      image_path:
        'https://cdn.midjourney.com/c5a7a40f-59ab-4349-9eb2-c7f46d0d3d2e/grid_0.png',
    },
  ];

  return (
    <Section
      testId="trending-section"
      paddingY={Spaces.LARGE}
      bgColor={Colors.DARKER_DARK}
    >
      <Container>
        <Title color={Colors.WHITE} variant="h2">
          Trending
        </Title>

        <Carousel slidesToShows={{ mobile: 2, tablet: 3, desktop: 5 }}>
          {images.map((item) => (
            <Carousel.Item key={item?.id}>
              <Figure
                imagePath={item?.image_path}
                alt={`carousel id ${item?.id}`}
                caption="Fig.1 - Trulli, Puglia, Italy."
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default Trending;
