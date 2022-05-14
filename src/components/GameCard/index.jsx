import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ data }) => {
  return (
    <Link to={data?.route ?? '/'}>
      <div className="w-[264px] transition-all hover:shadow-xl ">
        <div
          className="w-[264px] h-[345px] relative shadow-lg"
          style={{
            background: `url(${
              data?.imageUrl ??
              'https://user-images.githubusercontent.com/92288572/168407813-90df0a9e-15f9-48cb-84fc-333dffd4e606.jpg'
            })`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        >
          <span
            className={`text-white font-bold ${data?.bgColor} rounded-full w-[54px] h-[54px] flex items-center justify-center absolute -top-7 left-7`}
          >
            {data?.score ?? '??'}
          </span>
        </div>
        <div className="flex flex-col items-center  mt-[30px]">
          <h5 className="text-xl font-bold">{data?.title}</h5>
          <p className="text-center mt-[16px]">{data?.subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
