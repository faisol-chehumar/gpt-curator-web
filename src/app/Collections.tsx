'use client';

import React from 'react';

import { Colors, Spaces } from '@/shared/types/commons';
import Container from '@/shared/components/Layouts/Container';
import Section from '@/shared/components/Layouts/Section';
import Title from '@/shared/components/Typography/Title';
import Carousel from '@/shared/components/Carousel';
import Figure from '@/shared/components/Figure';
import { FigureVariants } from '@/shared/components/Figure/types';

const Collections = () => {
  const images = [
    {
      id: '1',
      name: 'Realistic',
      image_path:
        'https://cdn.midjourney.com/3694e9a4-033b-4ae6-87e7-4a6251a2ced9/0_2.png',
    },
    {
      id: '2',
      name: 'Vintage Film',
      image_path:
        'https://cdn.midjourney.com/0d1505c8-fa10-4962-945f-86639e27dd23/0_1.png',
      source:
        'https://www.midjourney.com/app/jobs/69fea32a-d631-488b-8646-f303c0d1a3e5/',
    },
    {
      id: '3',
      name: 'Concept art',
      image_path:
        'https://cdn.midjourney.com/a4adf56d-1f9e-4f0d-accf-821a216a72b3/0_0.png',
    },
    {
      id: '4',
      name: 'Person shooting',
      image_path:
        'https://cdn.midjourney.com/d26399fb-3d39-4ba3-9fb0-b74e6aecfae9/grid_0.png',
      source:
        'https://www.midjourney.com/app/jobs/d26399fb-3d39-4ba3-9fb0-b74e6aecfae9/',
    },
    {
      id: '5',
      name: 'Flower portrait',
      image_path:
        'https://cdn.midjourney.com/26775e10-e2b7-42eb-ae8d-61e7d0a83614/0_0.png',
      source:
        'https://www.midjourney.com/app/jobs/a98f4fa9-b329-4c76-9031-7a8dc9227b42/',
    },
    {
      id: '6',
      name: 'Cute cartoon',
      image_path:
        'https://cdn.midjourney.com/489f047f-44f8-495b-bdd5-f2902c18aa27/0_2.png',
      source:
        'https://www.midjourney.com/app/jobs/1f7fffd1-15c6-4d0f-8154-e0dac66d1baa/',
    },
    {
      id: '7',
      name: 'Animal portrait',
      image_path:
        'https://cdn.midjourney.com/dfc017a6-a9a4-465a-b231-f131a35bcc07/0_0.png',
      source:
        'https://www.midjourney.com/app/jobs/e8aac3a0-a7fc-44c6-881a-e6d3c3191b6c/',
    },
    {
      id: '8',
      name: 'Food portrait',
      image_path:
        'https://cdn.midjourney.com/dd34d1d0-55ee-45d9-8356-1b56865a4cf8/0_2.png',
      source:
        'https://www.midjourney.com/app/jobs/483a5beb-a171-4144-97b2-7f0db631bc7d/',
    },
    {
      id: '9',
      name: 'Flat icons',
      image_path:
        'https://cdn.midjourney.com/dd34d1d0-55ee-45d9-8356-1b56865a4cf8/0_2.png',
      source:
        'https://www.midjourney.com/app/jobs/483a5beb-a171-4144-97b2-7f0db631bc7d/',
    },
    {
      id: '10',
      name: 'Cute 3D cartoon',
      image_path:
        'https://cdn.midjourney.com/dd34d1d0-55ee-45d9-8356-1b56865a4cf8/0_2.png',
      source:
        'https://www.midjourney.com/app/jobs/483a5beb-a171-4144-97b2-7f0db631bc7d/',
      prompt:
        'Tiny cute isometric banana, soft smooth lighting, soft colors, soft colors, 100 mm lens, 3 d blender render, trending on polycount, white background, physically based rendering, centered',
    },
  ];

  return (
    <Section
      testId="collections-section"
      padding={{ bottom: Spaces.LARGE }}
      bgColor={Colors.DARKER_DARK}
    >
      <Container>
        <Title color={Colors.WHITE} variant="h2">
          Collections
        </Title>

        <Carousel slidesToShows={{ mobile: 2, tablet: 3, desktop: 5 }}>
          {images.map((item) => (
            <Carousel.Item key={item?.id}>
              <Figure
                imagePath={item?.image_path}
                alt={`carousel id ${item?.id}`}
                caption={item?.name?.toUpperCase()}
                variant={FigureVariants.LARGE}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default Collections;
