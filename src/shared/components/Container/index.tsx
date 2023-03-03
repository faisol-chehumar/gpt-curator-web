import React from 'react';

import { BaseContainer } from '@/shared/types/commons';

const Container = ({ children }: BaseContainer) => {
  return (
    <div className="m-auto max-w-screen-md px-lg lg:max-w-screen-xxl">
      {children}
    </div>
  );
};

export default Container;
