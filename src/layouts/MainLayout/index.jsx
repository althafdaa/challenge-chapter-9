import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="mx-auto w-full 2xl:w-[1440px] flex flex-col">
      {children}
    </div>
  );
};

export default MainLayout;
