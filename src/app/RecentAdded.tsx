'use client';

import React from 'react';

import { Colors, Spaces } from '@/shared/types/commons';
import Container from '@/shared/components/Layouts/Container';
import Section from '@/shared/components/Layouts/Section';
import Title from '@/shared/components/Typography/Title';
import Carousel from '@/shared/components/Carousel';
import Figure from '@/shared/components/Figure';

const RecentPromptSection = () => {
  const images = [
    {
      id: '1',
      image_path:
        'https://cdn.midjourney.com/fc441902-ce74-43e5-953e-239b8749fad4/grid_0.png',
    },
    {
      id: '2',
      image_path:
        'https://cdn.midjourney.com/3216857c-8327-4b49-a2ff-2cbb59e9207e/grid_0.png',
    },
    {
      id: '3',
      image_path:
        'https://cdn.midjourney.com/0db38b01-4cc0-4282-bcba-850fd7de72a6/grid_0.png',
    },
    {
      id: '4',
      image_path:
        'https://cdn.midjourney.com/4072bf04-28cf-4e23-ac50-18fcef637d43/grid_0.png',
    },
    {
      id: '5',
      image_path:
        'https://cdn.midjourney.com/6f855041-a589-4475-800d-aef9e5d91156/grid_0.png',
    },
    {
      id: '6',
      image_path:
        'https://cdn.midjourney.com/10b8f649-7018-4b69-9131-eb3e306505d5/grid_0.png',
    },
  ];

  return (
    <Section
      testId="recently-added-section"
      padding={{ bottom: Spaces.LARGE }}
      bgColor={Colors.DARKER_DARK}
    >
      <Container>
        <Title color={Colors.WHITE} variant="h2">
          Recently Added
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

export default RecentPromptSection;
