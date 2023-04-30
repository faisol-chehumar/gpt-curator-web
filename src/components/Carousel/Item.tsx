import React from 'react';

import { BaseProps, Colors, Sizes, Spaces } from '@/shared/types/commons';

import Box from '../Layout/Box';
import { BorderVariants, Overflows, Widths } from '../Layout/types';

const Item: React.FC<BaseProps> = ({ children }) => {
  return (
    <Box
      width={{ mobile: Widths.AUTO, tablet: Widths.AUTO, desktop: Widths.AUTO }}
      overflow={Overflows.HIDDEN}
      margin={{ left: Spaces.SMALL, right: Spaces.SMALL }}
      border={{
        variant: BorderVariants.BASE_ALL,
        color: Colors.DARKER_LIGHT,
        radius: Sizes.LARGE,
      }}
    >
      {children}
    </Box>
  );
};

export default Item;
