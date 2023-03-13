'use client';

import React from 'react';
import Image from 'next/image';

import { Colors, Spaces } from '@/shared/types/commons';
import Container from '@/shared/components/Layouts/Container';
import Section from '@/shared/components/Layouts/Section';
import Title from '@/shared/components/Typography/Title';
import Carousel from '@/shared/components/Carousel';

const RecentPromptSection = () => {
  return (
    <Section
      testId="recently-added-section"
      paddingY={Spaces.LARGE}
      bgColor={Colors.DARKER_DARK}
    >
      <Container>
        <Title color={Colors.WHITE} variant="h2">
          Recently Added
        </Title>

        <Carousel
          items={[
            { id: '1', image_path: 'http://placekitten.com/g/400/200' },
            { id: '2', image_path: 'http://placekitten.com/g/400/200' },
            { id: '3', image_path: 'http://placekitten.com/g/400/200' },
            { id: '4', image_path: 'http://placekitten.com/g/400/200' },
            { id: '5', image_path: 'http://placekitten.com/g/400/200' },
            { id: '6', image_path: 'http://placekitten.com/g/400/200' },
            { id: '7', image_path: 'http://placekitten.com/g/400/200' },
            { id: '8', image_path: 'http://placekitten.com/g/400/200' },
            { id: '9', image_path: 'http://placekitten.com/g/400/200' },
          ]}
          render={(item) => (
            <Image
              key={item.id}
              src={item?.image_path}
              width={1000}
              height={1000}
              alt={`carousel id ${item.id}`}
            />
          )}
          slidesToShows={{ mobile: 2, tablet: 3, desktop: 5 }}
        />
      </Container>
    </Section>
  );
};

export default RecentPromptSection;
