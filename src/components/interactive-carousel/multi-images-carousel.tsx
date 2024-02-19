import { Card, CardContent, CardFooter } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from '../ui/carousel';
import { Image } from '../ui/image';
import { Grid } from '../ui/grid';
import { Text } from '../ui/text';
import { Flex } from '../ui/flex';

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
              <CardContent className="flex aspect-auto items-center justify-center p-0 pb-6">
                <Grid col={6} width="full" gap={1}>
                  <Grid colSpan={6}>
                    <Image
                      src={generalAssistant}
                      alt="alt"
                      objectFit="cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      ratio={5 / 3}
                      fill
                    />
                  </Grid>
                  <Grid colSpan={2}>
                    <Image
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
                      alt={'alt'}
                      objectFit="cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      ratio={1}
                      fill
                    />
                  </Grid>
                  <Grid colSpan={2}>
                    <Image
                      src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt={'alt'}
                      objectFit="cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      ratio={1}
                      fill
                    />
                  </Grid>
                  <Grid colSpan={2} positions="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt={'alt'}
                      objectFit="cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      ratio={1}
                      fill
                    />
                    <Flex
                      inset="0"
                      positions="absolute"
                      bgColor="slate-900/80"
                      justify="center"
                      items="center"
                    >
                      <Text className="items-center">+ 23</Text>
                    </Flex>
                  </Grid>
                </Grid>
              </CardContent>
              <CardFooter>
                <Text variant="small" weight="semibold">
                  {item.caption}
                </Text>
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
