import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-[#f1f1f1] w-screen ">
      <div className="mx-auto w-full lg:w-[1440px]">{children}</div>
    </div>
  );
};

export default MainLayout;
