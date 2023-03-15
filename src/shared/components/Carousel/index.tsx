'use client';

import React, { createRef } from 'react';
import Slider from 'react-slick';

import screens from '@/styles/tokens/screens.json';
import Svg from '@/shared/components/Svg';
import {
  Colors,
  NegativeSpaces,
  Positions,
  Spaces,
} from '@/shared/types/commons';

import { Widths } from '../Layouts/types';
import Box from '../Layouts/Box';

import { CarouselProps } from './types';
import CustomArrow from './CustomArrow';
import Item from './Item';

const Carousel: React.FC<CarouselProps> & { Item: typeof Item } = ({
  children,
  settings = {},
  slidesToShows = { mobile: 1, tablet: 1, desktop: 1 },
}) => {
  const sliderRef = createRef<Slider>();

  const defaultSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShows.desktop,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: screens.desktop,
        settings: {
          slidesToShow: slidesToShows.tablet,
        },
      },
      {
        breakpoint: screens.tablet,
        settings: {
          slidesToShow: slidesToShows.tablet,
        },
      },
      {
        breakpoint: screens.mobile,
        settings: {
          slidesToShow: slidesToShows.mobile,
        },
      },
    ],
    ...settings,
  };

  const arrowClickHandlers = {
    prev: () => sliderRef.current?.slickPrev(),
    next: () => sliderRef.current?.slickNext(),
  };

  return (
    <Box>
      <Slider ref={sliderRef} {...defaultSettings}>
        {children}
      </Slider>
      <Box
        leading={Spaces.NONE}
        position={Positions.TOP_RIGHT}
        margin={{ top: NegativeSpaces.LARGE }}
        width={{
          mobile: Widths.AUTO,
          tablet: Widths.AUTO,
          desktop: Widths.AUTO,
        }}
      >
        <CustomArrow onClick={arrowClickHandlers.prev}>
          <Svg.LeftArrow color={Colors.WHITE} />
        </CustomArrow>
        <CustomArrow onClick={arrowClickHandlers.next}>
          <Svg.RightArrow color={Colors.WHITE} />
        </CustomArrow>
      </Box>
    </Box>
  );
};

Carousel.Item = Item;

export default Carousel;
