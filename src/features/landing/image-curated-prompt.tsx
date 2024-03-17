import { Flex, Heading } from '@/components/ui';
import { MultiImagesCarousel } from '@/components';

const ITEMS = [
  {
    images: [
      'https://image.cdn2.seaart.ai/static/ff8a69427d47d12d1ba30b53b9882913/20231013/d9fa67bc0c4e677847346a8ef0646ad1_high.webp',
      'https://image.cdn2.seaart.ai/2023-06-30/39900361195589/d9121fd09554c28654b6f01d63e87b818c43c00c_high.webp',
      'https://image.cdn2.seaart.ai/2023-08-20/14846826635081733/de4516a30ae9256a67bd6312e15c781daf5919e5_high.webp',
      'https://image.cdn2.seaart.ai/2023-08-13/14251895471230981/d40e42d4605af057eb65568bba53df2e8fb4b419_high.webp',
    ],
    href: '/curated-prompt/images/japanese-anime-style',
    caption: 'Japanese anime style',
    tags: [
      { name: 'Anime', href: '/anime' },
      { name: 'Japanese', href: '/japanese' },
    ],
  },
  {
    images: [
      'https://image.cdn2.seaart.ai/2023-07-13/44537714430021/5d09c9c00be2854744cac1c1863117f83008ee34_high.webp',
      'https://image.cdn2.seaart.ai/2023-07-30/50727682863173/7d491fe168c48c4408581f4bd7751538edc8e01d_high.webp',
      'https://image.cdn2.seaart.ai/2023-07-19/46781081215045/6b3918bb788c13f1a46ee6b1e9e86068df95661a_high.webp',
      'https://image.cdn2.seaart.ai/2023-07-18/46467280633925/e64803181094839f8a0e90740db00962f4696f16_high.webp',
    ],
    href: '/curated-prompt/images/realistic-architecture',
    caption: 'Realistic architecture',
    tags: [
      { name: 'Architecture', href: '/architecture' },
      { name: 'Realistic', href: '/realistic' },
    ],
  },
  {
    images: [
      'https://image.cdn2.seaart.ai/2023-10-18/20250709881535493/b373a4caebff454edc4872d070e1df9f86207d89_high.webp',
      'https://image.cdn2.seaart.ai/2023-10-28/21115921209812997/a79361df0bfa80d60e134d6f6ea1ce9fafaaae2e_high.webp',
      'https://image.cdn2.seaart.ai/static/b7f86c5ab0b5a415c1a7583f667759f1/20231018/306388a3175ce731d980039b84141c77_high.webp',
      'https://image.cdn2.seaart.ai/static/96764f6293df9991ef28ebf6be9a1597/20230703/05c020b58be0adb5ccd46d14227800f3_high.webp',
    ],
    href: '/curated-prompt/images/pop-art',
    caption: 'Pop art',
    tags: [{ name: 'Pop art', href: '/pop-art' }],
  },
  {
    images: [
      'https://image.cdn2.seaart.ai/static/06d03470d14660c056475b54282e9e48/20231031/6a02da6ecda324274ba05672fb35a664_high.webp',
      'https://image.cdn2.seaart.ai/2023-09-15/17215868980221957/de04e177f6e7bd71944f52f9c5ff31b7020b9816_high.webp',
      'https://image.cdn2.seaart.ai/2023-09-04/16205726865171461/5dbb8d90eb79f7a91ee8cb4f191bb1c4eeb78abe_high.webp',
      'https://image.cdn2.seaart.ai/2023-08-21/14982977759006725/4181e645995c8a97f0bcc4b8b19f161d68cc0444_high.webp',
    ],
    href: '/curated-prompt/images/illustrator',
    caption: 'Illustrator',
    tags: [{ name: 'Illustrator', href: '/illustrator' }],
  },
  {
    images: [
      'https://image.cdn2.seaart.ai/static/2ebe429df1dd983fdbf00d95efa8f1db/20231030/e1c3685168dad291e3438870e1a98f23_high.webp',
      'https://image.cdn2.seaart.ai/2023-10-30/21347449268368389/db4e929bd2b8bae39a7c20b1aa9ab067c3c182a6_high.webp',
      'https://image.cdn2.seaart.ai/2023-08-23/15097952339005445/0d639278c873b4451cf80714f1ea3b79c203210b_high.webp',
      'https://image.cdn2.seaart.ai/static/23ea34a294a4861c94b9be3080507e58/20230715/f62206b00b8b1b63c701d6e9f968f5f4_high.webp',
    ],
    href: '/curated-prompt/images/images/3d',
    caption: '3D',
    tags: [{ name: '3D', href: '/3d' }],
  },
  {
    images: [
      'https://image.cdn2.seaart.ai/2024-01-28/cmqvbite878c73flh950/ac5fc7cd856e9f40394e2c28a60301fe0e5df8c1_high.webp',
      'https://image.cdn2.seaart.ai/2023-11-30/24096046715023365/18b4e76edd1c32a58d0b2c065f6946c5c2ac3681_high.webp',
      'https://image.cdn2.seaart.ai/static/0f089a3bcf38d052f7882d12b3923a82/20230318/e1eaf38b3788895bd6898c21010ad31e_high.webp',
      'https://image.cdn2.seaart.ai/static/19c768e48aca9308d1a11fe86157731f/20230518/a267a867f5727c233b077e7275dfa57f_high.webp',
    ],
    href: '/curated-prompt/images/product-design',
    caption: 'Product Design',
    tags: [{ name: 'Product design', href: '/product-design' }],
  },
  {
    images: [
      'https://image.cdn2.seaart.ai/static/3595b42a21d6415b48f3e992ad4591f6/20230701/92f9e0f0675c19d6c318c1fa1cc5efe0_high.webp',
      'https://image.cdn2.seaart.ai/static/5ecc26b612316e2494011f9fcafa610f/20230726/bebb81770ef87c65d59b9a165a44c1be_high.webp',
      'https://image.cdn2.seaart.ai/static/4bb51d72da028d47b13bbe68fa9d43bf/20230525/adc106b8488269ce37f02fa6c956ce85_high.webp',
      'https://image.cdn2.seaart.ai/2023-11-30/24078922501087237/62a45b579ca1d89cbcef32a96b9db97fa3641d5a_high.webp',
    ],
    href: '/curated-prompt/images/character-design',
    caption: 'Character Design',
    tags: [{ name: 'Character Design', href: '/character-design' }],
  },
];

const ImageCuratedPrompt = () => {
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

export { ImageCuratedPrompt };
