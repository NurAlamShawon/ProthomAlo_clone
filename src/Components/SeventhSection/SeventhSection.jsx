import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

const SeventhSection = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 xl:px-0 px-4">
      <hr className="border-3 border-gray-600"></hr>

      <h1 className="text-xl font-bold text-black my-6  flex items-center">
        বিনোদন
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="red"
          className="size-6 ml-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </h1>
      <div className="grid grid-cols-12">
        {/* left */}
        <div className="xl:col-span-4 col-span-12 order-2 xl:order-1">
          <Left />
        </div>
        {/* middle */}
        <div className="xl:col-span-4 col-span-12 order-1 xl:order-2">
          <Middle />
        </div>
        {/* right */}
        <div className="xl:col-span-4 col-span-12 order-3">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
