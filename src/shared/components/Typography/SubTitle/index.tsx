import React from 'react';
import classNames from 'classnames';

import { openSans } from '@/shared/fonts';
import { BaseTypographyProps } from '@/shared/components/Typography/types';

import { TEXT_MARGIN_BOTTOMS } from '../classMappings';
import { Spaces } from '@/shared/types/commons';

const SubTitle = ({ children, mb = Spaces.LARGE }: BaseTypographyProps) => {
  const classes = classNames(openSans.className, TEXT_MARGIN_BOTTOMS[mb]);

  return <span className={classes}>{children}</span>;
};

export default SubTitle;
