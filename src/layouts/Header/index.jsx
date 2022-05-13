import React from 'react';
import { Link } from 'react-router-dom';
import { LeftMenu, RightMenu } from '../../utils/constant';

const Header = () => {
  return (
    <>
      <header className="fixed w-full lg:w-[1440px] shadow-lg rounded-b-lg bg-[#f1f1f1]">
        <nav className="px-8 h-[80px] max-h-[80px] flex items-center justify-between">
          <div className="flex items-center gap-14">
            <Link to="/">
              <div className="text-xl font-bold">LOGO</div>
            </Link>

            <div className="flex gap-8 font-medium mt-2">
              {LeftMenu?.map((item, idx) => {
                return (
                  <Link key={idx} to={item?.route}>
                    <div className="transition-all pb-2 border-b-2 hover:border-slate-400 hover:text-slate-400">
                      {item?.label}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex gap-8 font-medium mt-2">
            {RightMenu?.map((item, idx) => {
              return (
                <Link key={idx} to={item?.route}>
                  <div className="transition-all pb-2 border-b-2 hover:border-slate-400 hover:text-slate-400">
                    {item?.label}
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
      {/* Filler */}
      <div className="pt-[76px] mb-6"></div>
    </>
  );
};

export default Header;
