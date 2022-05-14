import React from 'react';
import GameList from '../../components/GameList';
import HeroBanner from '../../components/HeroBanner';

const Home = () => {
  return (
    <main className="mx-auto relative">
      <HeroBanner />
      <GameList />
    </main>
  );
};

export default Home;
