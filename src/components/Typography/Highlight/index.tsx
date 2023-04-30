import React from 'react';
import classNames from 'classnames';

import { BaseTypographyProps } from '@/components/Typography/types';
import { TEXT_COLOR_MAPS } from '@/components/Typography/classMappings';
import { Colors } from '@/shared/types/commons';

const Highlight: React.FC<BaseTypographyProps> = ({
  children,
  color = Colors.BLACK,
}) => {
  const classes = classNames(TEXT_COLOR_MAPS[color]);

  return <span className={classes}>{children}</span>;
};

export default Highlight;
