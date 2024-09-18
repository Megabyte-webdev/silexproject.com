import React from "react";
import assets from "../assets/assets";
const TxtImgSection2 = () => {
  return (
    <div className="flex flex-wrap justify-center items-center my-5">
      <div className="first-line:md:flex-grow flex flex-col items-center md:w-1/2 max-w-[600px] w-full p-3 md:px-10 mx-5">
        <h2 className="w-full capitalize text-3xl lg:text-4xl text-gray-700 font-bold">
          Elevate your pos exerience with personalized reports
        </h2>
        <p className="max-w-[600px] text-sm text-gray-500 my-5">
          Set ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
          ab illo inventore veritatis et quasi architecto baetae vitae dicta
          sunt explicabo.
        </p>
        <ul className="max-w-96 w-full self-start flex justify-between items-stretch my-4 ">
          <li className="flex-grow flex-shrink w-40 p-1">
            <h4 className="capitalize my-2 text-blue-600 font-normal text-4xl md:text-5xl">
              {" "}
              25%{" "}
            </h4>
            <p className="w-40 text-xs text-gray-500">
              Duis aute irure dolor in velit reprehenderit in voluptate
            </p>
          </li>
          <li className="flex-grow flex-shrink w-40 p-1">
            <h4 className="capitalize my-2 text-blue-600 font-normal text-4xl md:text-5xl">
              15%
            </h4>
            <p className="w-40 text-xs text-gray-500">
              Duis aute irure dolor in velit reprehenderit in voluptate
            </p>
          </li>
        </ul>
      </div>
      <div className="w-[95%] lg:w-[400px] md:w-96 bg-gray-300 flex justify-center h-96 p-2">
        <img
          className="h-20 mt-10 mx-2 self-start"
          src={assets.chatTrans}
          alt="chat translation"
        />
      </div>
    </div>
  );
};

export default TxtImgSection2;
