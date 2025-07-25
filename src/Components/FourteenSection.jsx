import React from "react";

const FourteenSection = () => {
  return (
    <div className="p-6 bg-[#e3f2fd80]">
      <div className="flex items-center justify-center">
        {/* first */}
        <div className="relative overflow-hidden drop-shadow-lg mr-4">
          <img
            src="https://i.postimg.cc/kg31phvH/image.png"
            className="w-64 h-25 object-cover"
          />

          {/* Dark shadow overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Centered Text on Image */}
          <div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-start text-white p-4">
            <p className="text-sm font-medium text-[#ffbf2b] mb-2 hover:underline">
              সকালের খবর
            </p>
            <h3 className="text-sm font-semibold leading-snug hover:text-[#ffb300]">
              সকালেই পড়ুন আলোচিত ৫ খবর
            </h3>
          </div>
        </div>

        {/* second */}
        <div className="relative overflow-hidden  drop-shadow-lg">
          <img
            src="https://i.postimg.cc/sftC3mJY/image.png"
             className="w-64 h-25 object-cover"
          />

          {/* Dark shadow overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Centered Text on Image */}
          <div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-start text-white p-4">
            <p className="text-sm font-medium text-[#ffbf2b] mb-2 hover:underline">
              সকালের খবর
            </p>
            <h3 className="text-sm font-semibold leading-snug hover:text-[#ffb300]">
              সকালেই পড়ুন আলোচিত ৫ খবর
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourteenSection;
