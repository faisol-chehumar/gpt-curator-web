import React from 'react';

import { openSans } from '@/app/fonts';

import { BaseTypography } from '../typography.types';

const SubTitle = ({ children }: BaseTypography) => {
  return <span className={openSans.className}>{children}</span>;
};

export default SubTitle;
