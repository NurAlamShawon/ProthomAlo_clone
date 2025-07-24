import React from "react";
import LeftSection from "./LeftSection";
import RigthSection from "./RigthSection";

const FourthSection = () => {
  return (
    <div className="max-w-7xl mx-auto my-18">
      <div className="grid grid-cols-12 gap-5">
        {/* left */}
        <div className="col-span-3 mr-2  border-t-3 border-gray-700">
          <LeftSection />
        </div>
        
        {/* right */}
        <div className="col-span-9  border-t-3 border-gray-700">
          <h1 className="flex mt-5 mb-6 items-center text-xl">
            <span className="inline w-5 h-5 rounded-full bg-blue-700 mr-2"></span>
            খেলা
          </h1>
          <RigthSection />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
