import React from 'react';
import Footer from '../../layouts/Footer';
import { GameLists } from '../../utils/constant';
import GameCard from '../GameCard';

const GameList = () => {
  return (
    <section className="h-full flex flex-col items-center w-full mb-[36px]">
      <h1 className="text-6xl text-black font-semibold mb-10">
        Our Recent Game
      </h1>
      <div className="flex gap-8">
        {GameLists?.map((item, idx) => {
          return <GameCard data={item} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default GameList;
