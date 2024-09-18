import React from "react";

const InfoSection = () => {
  return (
    <div className="w-full flex flex-wrap justify-center md:justify-around">
      <section className="bg-white flex-grow h-96 max-w-[400px] w-[90%] rounded-md p-4 m-4 transition-all ease-in-out duration-300">
        <h2 className="my-3 capitalize text-2xl text-gray-700">
          Data-Driven decision making
        </h2>
        <p className="text-sm text-gray-500 max-w-[400px]">
          Identify your top products, tract sale trends and adjust your
          inventory and marketing strategies accordingly
        </p>
      </section>
      <section className="bg-grey-50 rounded-md h-96 flex-grow max-w-[400px] w-[90%] p-4 m-4 transition-all ease-in-out duration-300">
        <h2 className="my-3 capitalize text-2xl text-gray-700">
          Data-Driven decision making
        </h2>
        <p className="text-sm text-gray-500 max-w-[400px]">
          Identify your top products, tract sale trends and adjust your
          inventory and marketing strategies accordingly
        </p>
      </section>
    </div>
  );
};

export default InfoSection;
