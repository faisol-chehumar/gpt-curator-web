import React from 'react';

import { BaseTypography } from '@/shared/types/commons';
import { openSans } from '@/app/fonts';

const SubTitle = ({ children }: BaseTypography) => {
  return <span className={openSans.className}>{children}</span>;
};

export default SubTitle;
