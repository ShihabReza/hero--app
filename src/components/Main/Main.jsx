import React from 'react';
import { FaApple, FaGooglePlay } from "react-icons/fa";
const Main = () => {
    return (
        <div className='bg-gray-100'>
            <div className="max-w-screen-2xl mx-auto px-4 py-5">
        <h1 className="text-6xl text-center mt-14">
          We Build <br />
          <span className="text-blue-500">Productive</span> Apps
        </h1>
        <p className='text-center px-4 py-5 font-sans text-gray-400'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
       
      </div>
      <div className="flex justify-center gap-4 mt-6">
           <a href="https://play.google.com/store">
                 <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 ">
                <FaGooglePlay className="text-2xl" />
                Google Play
            </button>
           </a>

            <a href="https://www.apple.com/store">
                <button className="flex items-center gap-2 bg-black text-white px-4 py-2 ">
            <FaApple className="text-2xl" />
            App Store
            </button>
            </a>
            </div>
            <div className="mt-12 flex justify-center">
                <img src="/assets/hero.png" alt="" className="w-full max-w-3xl object-contain " />
            </div>
        </div>
    );
};

export default Main;