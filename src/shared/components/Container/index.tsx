import React from 'react';

import { PropsWithChildren } from '@/shared/types/commons';

const Container = ({ children }: PropsWithChildren) => {
  return <div className="m-auto	max-w-screen-xxl px-lg">{children}</div>;
};

export default Container;
