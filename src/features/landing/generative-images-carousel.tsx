import { Flex, Heading } from '@/components/ui';
import { MultiImagesCarousel } from '@/components';

const ITEMS = [
  {
    images: [
      'https://image.cdn2.seaart.ai/2023-10-05/19049696417850373/1b32fb77eab8f6b3cb94fda58e152702e8df2526_high.webp',
    ],
    href: '/images/japanese-anime-style',
    caption: 'Japanese anime style',
  },
  {
    images: [
      'https://image.cdn2.seaart.ai/2023-10-05/19049696417850373/1b32fb77eab8f6b3cb94fda58e152702e8df2526_high.webp',
    ],
    href: '/images/realistic-architecture',
    caption: 'Realistic architecture',
  },
  {
    images: [
      'https://image.cdn2.seaart.ai/2023-10-05/19049696417850373/1b32fb77eab8f6b3cb94fda58e152702e8df2526_high.webp',
    ],
    href: '/images/pop-art',
    caption: 'Pop art',
  },
  {
    images: [
      'https://image.cdn2.seaart.ai/2023-10-05/19049696417850373/1b32fb77eab8f6b3cb94fda58e152702e8df2526_high.webp',
    ],
    href: '/images/illustrator',
    caption: 'Illustrator',
  },
  {
    images: [
      'https://image.cdn2.seaart.ai/2023-10-05/19049696417850373/1b32fb77eab8f6b3cb94fda58e152702e8df2526_high.webp',
    ],
    href: '/images/illustrator',
    caption: 'Illustrator',
  },
  {
    images: [
      'https://image.cdn2.seaart.ai/2023-10-05/19049696417850373/1b32fb77eab8f6b3cb94fda58e152702e8df2526_high.webp',
    ],
    href: '/images/illustrator',
    caption: 'Illustrator',
  },
  {
    images: [
      'https://image.cdn2.seaart.ai/2023-10-05/19049696417850373/1b32fb77eab8f6b3cb94fda58e152702e8df2526_high.webp',
    ],
    href: '/images/illustrator',
    caption: 'Illustrator',
  },
];

const GenerativeImagesCarousel = () => {
  return (
    <>
      <Heading variant="h4" weight="bold" mb={8}>
        Images curated prompt
      </Heading>
      <Flex justify="center">
        <MultiImagesCarousel items={ITEMS} />
      </Flex>
    </>
  );
};

export { GenerativeImagesCarousel };
