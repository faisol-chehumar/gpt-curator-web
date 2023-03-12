'use client';

import React, { createRef } from 'react';
import Slider from 'react-slick';
import screens from '@/styles/tokens/screens.json';

import {
  Colors,
  NegativeSpaces,
  Positions,
  Spaces,
} from '@/shared/types/commons';
import { LeftArrowSvg, RightArrowSvg } from '@/shared/components/Svg';

import { CarouselProps } from './types';
import Box from '../Layouts/Box';
import CustomArrow from './CustomArrow';
import { Widths } from '../Layouts/types';
import { MARGIN_MAPS } from '../Layouts/classMappings';

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
        {items.map((item) => (
          <Box key={item.id} className="carousel__item">
            {render(item)}
          </Box>
        ))}
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
          <LeftArrowSvg color={Colors.WHITE} />
        </CustomArrow>
        <CustomArrow onClick={arrowClickHandlers.next}>
          <RightArrowSvg color={Colors.WHITE} />
        </CustomArrow>
      </Box>
    </Box>
  );
};

export default Carousel;
