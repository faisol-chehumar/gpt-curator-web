import React from 'react';
import Image from 'next/image';

import { BaseProps, Sizes, Spaces } from '@/shared/types/commons';

import Box from '../Layouts/Box';
import { Overflows } from '../Layouts/types';

const Item: React.FC<BaseProps> = ({ children }) => {
  return (
    <Box
      height={{ mobile: 'auto', tablet: 'auto', desktop: 'auto' }}
      radius={Sizes.LARGE}
      overflow={Overflows.HIDDEN}
      margin={{ left: Spaces.SMALL, right: Spaces.SMALL }}
    >
      {children}
    </Box>
  );
};

export default Item;
