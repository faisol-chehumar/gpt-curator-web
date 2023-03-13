import React from 'react';
import classNames from 'classnames';

import { poppins } from '@/shared/fonts';
import { TitleProps } from '@/shared/components/Typography/types';
import { TEXT_COLOR_MAPS } from '@/shared/components/Typography/classMappings';
import { Colors } from '@/shared/types/commons';

const Title = ({
  children,
  color = Colors.BLACK,
  variant = 'h2',
}: TitleProps) => {
  const classes = classNames(
    'text-2xl mb-md',
    poppins.className,
    TEXT_COLOR_MAPS[color]
  );

  const variantsMapping = {
    h1: <h1 className={classes}>{children}</h1>,
    h2: <h2 className={classes}>{children}</h2>,
    h3: <h3 className={classes}>{children}</h3>,
    h4: <h4 className={classes}>{children}</h4>,
    h5: <h5 className={classes}>{children}</h5>,
    h6: <h6 className={classes}>{children}</h6>,
  };

  return variantsMapping[variant];
};

export default Title;
