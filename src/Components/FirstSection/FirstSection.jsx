import React from "react";
import LeftSide from "./LeftSide";
import MiddleSide from "./MiddleSide";
import RightSide from "./RightSide";

const FirstSection = () => {
  return (
    <div className="max-w-7xl mx-auto  xl:px-0 px-4">
      <div className="grid grid-cols-12 gap-2">
        {/* left side */}

        <div className="xl:col-span-3 col-span-12 my-6 xl:pr-6  xl:border-r-2 border-gray-400">
          <LeftSide />
        </div>

        {/* middle side */}
        <div className="xl:col-span-6 col-span-12 xl:px-6 my-6 xl:pr-6  xl:border-r-2 border-gray-400">
          <MiddleSide />
        </div>

        {/* right side */}
        <div className="xl:col-span-3 col-span-12 xl:pl-6  ">
          <RightSide/>
          <hr className="border-1 my-6 border-gray-300"></hr>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
