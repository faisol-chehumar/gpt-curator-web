import React from 'react';
import classNames from 'classnames';

import { openSans } from '@/shared/fonts';
import { BaseTypography } from '@/shared/components/Typography/types';

import { TEXT_MARGIN_BOTTOMS } from '../classMappings';

const SubTitle = ({ children, mb = 'large' }: BaseTypography) => {
  const classes = classNames(openSans.className, TEXT_MARGIN_BOTTOMS[mb]);

  return <span className={classes}>{children}</span>;
};

export default SubTitle;
