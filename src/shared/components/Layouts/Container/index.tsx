import React from 'react';

import { Container } from './container.types';

const Container = ({ children }: Container) => {
  return (
    <div className="m-auto max-w-screen-md px-lg lg:max-w-screen-xxl">
      {children}
    </div>
  );
};

export default Container;
