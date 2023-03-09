import React from 'react';

import { ContainerProps } from '@/shared/components/Layouts/types';

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container m-auto max-w-screen-md px-lg lg:max-w-screen-xl">
      {children}
    </div>
  );
};

export default Container;
