import { Devices, BaseProps } from '@/shared/types/commons';

type CarouselItem = {
  id: string;
  [key: string]: any;
};

type SlidesToShows = {
  [key in Devices]: number;
};

export interface CarouselProps {
  items: CarouselItem[];
  render?: (item: CarouselItem) => any;
  settings?: {};
  slidesToShows?: SlidesToShows;
}

export interface CustomArrowProps extends BaseProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
