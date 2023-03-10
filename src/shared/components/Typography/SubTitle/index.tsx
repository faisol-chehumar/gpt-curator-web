import React from 'react';

import { openSans } from '@/shared/fonts';

import { BaseTypography } from '@/shared/components/Typography/types';

const SubTitle = ({ children }: BaseTypography) => {
  return <span className={openSans.className}>{children}</span>;
};

export default SubTitle;
