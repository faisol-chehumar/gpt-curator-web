'use client';

import React from 'react';
import Image from 'next/image';

import { Colors, Sizes, Spaces } from '@/shared/types/commons';
import Container from '@/shared/components/Layouts/Container';
import Section from '@/shared/components/Layouts/Section';
import Title from '@/shared/components/Typography/Title';
import Carousel from '@/shared/components/Carousel';
import Box from '@/shared/components/Layouts/Box';
import { Overflows } from '@/shared/components/Layouts/types';

const Trending = () => {
  const images = [
    { id: '1', image_path: 'http://placekitten.com/g/400/200' },
    { id: '2', image_path: 'http://placekitten.com/g/400/200' },
    { id: '3', image_path: 'http://placekitten.com/g/400/200' },
    { id: '4', image_path: 'http://placekitten.com/g/400/200' },
    { id: '5', image_path: 'http://placekitten.com/g/400/200' },
    { id: '6', image_path: 'http://placekitten.com/g/400/200' },
    { id: '7', image_path: 'http://placekitten.com/g/400/200' },
    { id: '8', image_path: 'http://placekitten.com/g/400/200' },
    { id: '9', image_path: 'http://placekitten.com/g/400/200' },
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
              <Image
                src={item?.image_path}
                width={1000}
                height={1000}
                alt={`carousel id ${item?.id}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default Trending;
