import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full flex justify-center bg-[#f1f1f1] py-4">
      <span className="text-[12px] lg:text-[14px] font-bold">
        Copyright {year} Created by Fullstack Web Dev Team Wave 18
      </span>
    </footer>
  );
};

export default Footer;
