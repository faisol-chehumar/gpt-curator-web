import React from 'react';

import { BaseProps, Colors, Sizes, Spaces } from '@/shared/types/commons';

import Box from '../Layouts/Box';
import { Overflows, Widths } from '../Layouts/types';

const Item: React.FC<BaseProps> = ({ children }) => {
  return (
    <Box
      width={{ mobile: Widths.AUTO, tablet: Widths.AUTO, desktop: Widths.AUTO }}
      overflow={Overflows.HIDDEN}
      margin={{ left: Spaces.SMALL, right: Spaces.SMALL }}
      border={{
        size: Sizes.BASE,
        color: Colors.LIGHTER_DARK,
        radius: Sizes.LARGE,
      }}
    >
      {children}
    </Box>
  );
};

export default Item;
