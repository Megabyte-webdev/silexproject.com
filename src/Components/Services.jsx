import React from "react";

const Services = () => {
  return (
    <div className="h-max w-full flex flex-wrap justify-center md:justify-around">
      <section className="h-72 bg-gray-50 rounded-md flex-grow md:w-40 max-w-96 w-[90%] p-6 m-4 transition-all ease-in-out duration-300">
        <h2 className="my-3 capitalize text-2xl text-gray-700">
          Customer loyalty
        </h2>
        <p className="text-sm text-gray-500 max-w-96">
          Fast and secure payment processing is essential for customer
          satisfaction.
        </p>
      </section>
      <section className="h-72 bg-white rounded-md flex-grow md:w-40 max-w-96 w-[90%] p-6 m-4 transition-all ease-in-out duration-300">
        <h2 className="my-3 capitalize text-2xl text-gray-700">
          Inventory Control
        </h2>
        <p className="text-sm text-gray-500 max-w-96">
          Fast and secure payment processing is essential for customer
          satisfaction.
        </p>
      </section>
      <section className="h-72 bg-gray-50 rounded-md flex-grow md:w-40 max-w-96 w-[90%] p-6 m-4 transition-all ease-in-out duration-300">
        <h2 className="my-3 capitalize text-2xl text-gray-700">
          Staff Management
        </h2>
        <p className="text-sm text-gray-500 max-w-96">
          Fast and secure payment processing is essential for customer
          satisfaction.
        </p>
      </section>
    </div>
  );
};

export default Services;
