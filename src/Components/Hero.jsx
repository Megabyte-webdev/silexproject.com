import React from "react";
import Btn from "./Btn";
import assets from "../assets/assets";
const Hero = () => {
  return (
    <div className="relative text-black h-[650px] flex flex-col items-center pt-28 *:transition-all *:ease-in-out *:duration-500">
      <small className="mt-4">Fully Integrated Point of-sale System</small>
      <h1 className="my-5 md:my-10 capitalize text-center lg:max-w-[1007px] max-w-[600px] w-[98%] text-3xl font-bold md:text-4l lg:text-5xl">
        The Hidden tool smart bettors use to outsmart the bookmakers
      </h1>
      <p className="max-w-[530px] w-[95%] text-center text-sm text-gray-600 md:text-[18px]">
        Predictivo<sup className="text-xs md:text-sm">TM</sup> assists thousands
        of game-loving bettors and traders in making smarter, data-driven
        betting decisions every day.
      </p>
      <div className="z-10 flex items-center mt-5 flex-wrap gap-5 w-fit ">
        <Btn
          title="Get started"
          styl="bg-red-600 text-white border-2 border-red-600 hover:bg-red-800 border-red-800"
          loc="/signup"
        />
        <Btn
          title="learn more"
          styl="border-2 border-purple-600 text-purple-800 hover:bg-purple-800 hover:text-white"
        />
      </div>
      <img
        className="h-20 mt-12 mx-7 self-start md:self-center"
        src={assets.chatTrans}
        alt="chat translation"
      />
      <div className="absolute right-3 md:right-12 bottom-0">
        <img
          className="absolute h-36 md:h-40 lg:h-[210px] top-0 bottom-0 right-0 left-0 m-auto"
          src={assets.iphone}
          alt="iphone"
        />
        <img
          className="h-72 md:h-80 lg:h-[420px]"
          src={assets.handHolding}
          alt="hand-holding"
        />
      </div>
      <img
        src={assets.payment}
        alt="chat translation"
        className="h-10 md:h-16 absolute bottom-6 left-10 md:left-20"
      />
    </div>
  );
};

export default Hero;
