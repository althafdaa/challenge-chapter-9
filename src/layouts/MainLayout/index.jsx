import React from 'react';
import { ToastContainer } from 'react-toastify';

const MainLayout = ({ children }) => {
  return (
    <div className="mx-auto w-full 2xl:w-[1440px] flex flex-col">
      {children}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default MainLayout;
