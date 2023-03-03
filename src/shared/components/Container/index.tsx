import React from 'react';

import { BaseContainer } from '@/shared/types/commons';

const Container = ({ children }: BaseContainer) => {
  return <div className="m-auto	max-w-screen-xxl px-lg">{children}</div>;
};

export default Container;
