import React from 'react';
import { Link } from 'react-router-dom';
import { LeftMenu } from '../../utils/constant';
import { useStoreAuth } from '../../contexts/useAuth';
import { Logout } from '../../utils/etc';

const Header = () => {
  const user = useStoreAuth().loggedIn;

  return (
    <>
      <header className="fixed w-full 2xl:w-[1440px] shadow-lg rounded-b-lg z-10 bg-[#f1f1f1]">
        <nav className="px-8 h-[80px] max-h-[80px] flex items-center justify-between text-[10px] lg:text-[14px]">
          <div className="flex items-center gap-14">
            <Link to="/">
              <div className="transition-all text-xl font-bold hover:text-slate-400">
                GameBank
              </div>
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

          <div className="flex gap-8 font-medium mt-2 ">
            {user && (
              <>
                <Link
                  to="/profile"
                  className="transition-all pb-2 border-b-2 hover:border-slate-400 hover:text-slate-400"
                >
                  Profile
                </Link>
                <Link
                  to="/"
                  className="transition-all pb-2 border-b-2 hover:border-slate-400 hover:text-slate-400"
                  onClick={Logout}
                >
                  Logout
                </Link>
              </>
            )}
            {!user && (
              <>
                <Link
                  to="/login"
                  className="transition-all pb-2 border-b-2 hover:border-slate-400 hover:text-slate-400"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="transition-all pb-2 border-b-2 hover:border-slate-400 hover:text-slate-400"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
      {/* Filler */}
      <div className="pt-[76px] mb-6"></div>
    </>
  );
};

export default Header;
