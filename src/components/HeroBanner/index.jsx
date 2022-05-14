import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../../images/hero.jpg';

const HeroBanner = () => {
  return (
    <section className="w-full 2xl:w-[1440x] h-[460px] -mt-[20px] mb-[36px] relative">
      <div className="w-full 2xl:w-[1440px] h-[460px] relative -z-[1]">
        <div className="bg-black w-full h-full absolute opacity-50"></div>
        <img
          className="w-full h-full object-cover"
          src={BannerImg}
          alt="Hero Banner"
        />
      </div>
      <article className="text-white z-[2] absolute top-0 w-[50%] mx-[64px] mt-[96px]">
        <h1 className="text-6xl font-semibold mb-8">The Best Game Out There</h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          temporibus ut doloremque ad, eum laboriosam blanditiis ipsa officia
          dolore molestiae modi provident consectetur optio odit, ex quaerat
          cupiditate unde quod?
        </p>
        <Link to="/game">
          <button className="px-4 py-2 bg-yellow-600 rounded-full shadow-lg text-white font-bold text-xl hover:text-black transition-all">
            PLAY NOW
          </button>
        </Link>
      </article>
    </section>
  );
};

export default HeroBanner;
