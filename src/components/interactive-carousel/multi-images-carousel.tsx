import { Card, CardContent, CardFooter } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from '../ui/carousel';
import { Image } from '../ui/image';

import generalAssistant from '../../../public/images/general-assistant.png';

interface Items {
  images: string[];
  href: string;
  caption: string;
}

interface MultiImagesCarouselProps {
  items: Items[];
}

const MultiImagesCarousel = ({ items = [] }: MultiImagesCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-2/12">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center">
                <div className="col-span-2 grid w-full grid-cols-6 gap-1">
                  <div className=" col-span-6 max-h-[6rem] overflow-hidden">
                    <Image
                      src={generalAssistant}
                      alt={'alt'}
                      objectFit="cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      ratio={4 / 3}
                      fill
                    />
                  </div>
                  <div className="col-span-2 max-h-[4rem] w-[4/12] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
                      alt={'alt'}
                      objectFit="cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      ratio={1}
                      fill
                    />
                  </div>
                  <div className=" col-span-2 max-h-[4rem] w-[4/12] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt={'alt'}
                      objectFit="cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      ratio={1}
                      fill
                    />
                  </div>
                  <div className="relative col-span-2 max-h-[4rem] w-[4/12] overflow-hidden">
                    <div className="absolute inset-0 flex items-center  justify-center bg-slate-900/80 text-xl text-white">
                      + 23
                    </div>
                    <Image
                      src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt={'alt'}
                      objectFit="cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      ratio={1}
                      fill
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <small className="font-semibold">{item.caption}</small>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

MultiImagesCarousel.displayName = 'MultiImagesCarousel';
export { MultiImagesCarousel };
