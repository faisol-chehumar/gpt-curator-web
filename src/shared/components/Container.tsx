import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-xl">{children}</div>;
};

export default Container;
