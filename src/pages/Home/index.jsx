import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="h-[1920px] mx-auto">
      <Link to="/halaman-contoh">
        <button className="bg-green-600 px-4 py-2 rounded-lg font-medium text-white">
          ke halaman contoh
        </button>
      </Link>
    </main>
  );
};

export default Home;
