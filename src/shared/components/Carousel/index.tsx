'use client';

import React, { createRef } from 'react';
import Slider from 'react-slick';
import screens from '@/styles/tokens/screens.json';

import { Colors } from '@/shared/types/commons';
import { LeftArrowSvg, RightArrowSvg } from '@/shared/components/Svg';

import { CarouselProps } from './types';
import Box from '../Layouts/Box';
import CustomArrow from './CustomArrow';

const Carousel: React.FC<CarouselProps> = ({
  items = [],
  render = () => {},
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
        {items.map((item) => render(item))}
      </Slider>
      <CustomArrow onClick={arrowClickHandlers.prev}>
        <LeftArrowSvg color={Colors.PRIMARY} />
      </CustomArrow>
      <CustomArrow onClick={arrowClickHandlers.next}>
        <RightArrowSvg color={Colors.PRIMARY} />
      </CustomArrow>
    </Box>
  );
};

export default Carousel;
