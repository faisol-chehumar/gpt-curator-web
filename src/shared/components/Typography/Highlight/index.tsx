import React from 'react';
import classNames from 'classnames';

import { BaseTypography } from '@/shared/components/Typography/types';
import { TEXT_COLOR_MAPS } from '@/shared/components/Typography/classMappings';

const Highlight: React.FC<BaseTypography> = ({
  children,
  color = 'inherit',
}) => {
  const classes = classNames(TEXT_COLOR_MAPS[color]);

  return <span className={classes}>{children}</span>;
};

export default Highlight;
