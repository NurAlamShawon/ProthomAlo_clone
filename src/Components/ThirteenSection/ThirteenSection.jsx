import React from "react";
import Left from "./Left";
import Right from "./Right";

const ThirteenSection = () => {
  return (
    <div className="bg-gray-600 py-10">
      <div className=" max-w-7xl mx-auto ">
        <h1 className="text-xl font-bold text-white  mb-4 flex items-center">
          ভিডিও
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="yellow"
            className="size-6 ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </h1>

        <div className="grid grid-cols-12 gap-4">
          {/* left */}
          <div className="col-span-6">
            <Left />
          </div>
          {/* right */}
          <div className="col-span-6">
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirteenSection;
