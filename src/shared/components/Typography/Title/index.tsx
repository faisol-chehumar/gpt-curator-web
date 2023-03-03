import React from 'react';

import { BaseTypography } from '@/shared/types/commons';

const Title = ({ children }: BaseTypography) => {
  return <h1 className="text-2xl">{children}</h1>;
};

export default Title;
