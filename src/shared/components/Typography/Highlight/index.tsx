import React from 'react';
import classNames from 'classnames';

import { BaseTypographyProps } from '@/shared/components/Typography/types';
import { TEXT_COLOR_MAPS } from '@/shared/components/Typography/classMappings';

const Highlight: React.FC<BaseTypographyProps> = ({
  children,
  color = 'inherit',
}) => {
  const classes = classNames(TEXT_COLOR_MAPS[color]);

  return <span className={classes}>{children}</span>;
};

export default Highlight;
