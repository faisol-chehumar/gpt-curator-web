import { Devices, BaseProps } from '@/shared/types/commons';
import React from 'react';

export type CarouselItem = {
  [key: string]: any;
};

export type SlidesToShows = {
  [key in Devices]: number;
};

export interface CarouselProps {
  children: React.ReactNode;
  settings?: {};
  slidesToShows?: SlidesToShows;
}

export interface CustomArrowProps extends BaseProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
