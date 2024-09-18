import React from "react";

const FAQs = () => {
  return (
    <div className="h-max flex gap-y-4 flex-wrap justify-center items-stretch my-5">
      <div className="max-w-[500px] md:w-1/2 w-[90%] h-96 p-2 flex flex-col justify-between">
        <div>
          <h2 className="max-w-[600px] capitalize text-2xl md:text-3xl text-gray-700">
            Get Quick Answers to your Concern
          </h2>
          <p className="max-w-[600px] text-sm text-gray-500 my-5">
            Set ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis et quasi architecto baetae vitae dicta
            sunt explicabo.
          </p>
        </div>
        <article className="">
          <p className="text-gray-500 text-sm mb-4">
            Couldn't find what you are looking for? write to us at
          </p>
          <a
            className="text-blue-400 text-sm border-b border-b-blue-400 p-2"
            href="mailto:cyber@silexsecure"
          >
            cyber@silexsecure.com
          </a>
        </article>
      </div>
      <div className="max-w-[500px] w-[90%] md:w-1/2 min-h-96 p-2 flex flex-col justify-center">
        <h4 className="text-xl text-gray-800">
          is Axpos suitable for my type of business?
        </h4>
        <p className="text-sm text-gray-500 my-6">
          Nemo enim ipsam voluptatem quia voluptas sit aspermatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt porro quisquam est magni dolores eos qui ratione
        </p>
        <h4 className="my-7 text-xl text-gray-800">
          Can i get a customized solution for my business?
        </h4>
        <h4 className="my-7 text-xl text-gray-800">
          How secure is Axpos for payment processing?
        </h4>
        <h4 className="my-7 text-xl text-gray-800" text-medium>
          How do I contact Axpos for more information?
        </h4>
      </div>
    </div>
  );
};

export default FAQs;
