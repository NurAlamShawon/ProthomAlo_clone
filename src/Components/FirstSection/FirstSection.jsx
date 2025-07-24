import React from "react";
import LeftSide from "./LeftSide";
import MiddleSide from "./MiddleSide";
import RightSide from "./RightSide";

const FirstSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-2">
        {/* left side */}

        <div className="col-span-3 my-6 pr-6  border-r-2 border-gray-400">
          <LeftSide />
        </div>

        {/* middle side */}
        <div className="col-span-6 px-6 my-6 pr-6  border-r-2 border-gray-400">
          <MiddleSide />
        </div>

        {/* right side */}
        <div className="col-span-3 pl-6  ">
          <RightSide/>
          <hr className="border-1 my-6 border-gray-300"></hr>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
