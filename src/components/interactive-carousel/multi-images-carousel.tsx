import Link from 'next/link';

import { Card, CardContent, CardFooter, CardTitle } from '../ui/card';
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
import { badgeVariants } from '../ui/badge';
import { Flex } from '../ui/flex';

interface Tag {
  name: string;
  href: string;
}

interface Items {
  images: string[];
  href: string;
  caption: string;
  tags: Tag[];
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
                  <HighlightImage src={item.images[0]} />
                  {item.images.slice(1).map((image, idx) => (
                    <SmallImage
                      key={idx}
                      src={image}
                      isLastImage={idx === item.images.length - 2}
                    />
                  ))}
                </Grid>
              </CardContent>
              <CardFooter className="flex-col items-start space-y-3">
                <CardTitle>{item.caption}</CardTitle>
                <Flex gap={1} width="full">
                  {item.tags.map((tag, idx) => (
                    <Link
                      key={idx}
                      className={badgeVariants({ variant: 'default' })}
                      href={tag.href}
                    >
                      <Text variant="small">{tag.name}</Text>
                    </Link>
                  ))}
                </Flex>
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

const HighlightImage = ({ src }: { src: string }) => {
  return (
    <Grid colSpan={6}>
      <Image
        src={src}
        alt="alt"
        objectFit="cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ratio={5 / 3}
        fill
      />
    </Grid>
  );
};

const SmallImage = ({
  src,
  isLastImage,
}: {
  src: string;
  isLastImage: boolean;
}) => {
  return (
    <Grid colSpan={2} positions={isLastImage ? 'relative' : 'static'}>
      <Image
        src={src}
        alt="alt"
        objectFit="cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ratio={1}
        fill
      />
      {isLastImage ? (
        <Flex
          inset="0"
          positions="absolute"
          bgColor="slate-900/80"
          justify="center"
          items="center"
        >
          <Text className="items-center">+ 23</Text>
        </Flex>
      ) : null}
    </Grid>
  );
};

export { MultiImagesCarousel };
