import React from "react";
import Left from "./Left";
import Right from "./Right";

const RajnitiSection01 = () => {
  return (
    <div className="max-w-7xl mx-auto mb-20 xl:px-0 px-4">
      <h1 className="text-start text-red-600 font-semibold text-2xl my-6">
        রাজনীতি
      </h1>
      <div className="grid grid-cols-12">
        {/* left */}
        <div className="xl:col-span-9 col-span-12">
          <Left />
        </div>
        {/* right */}
        <div className="xl:col-span-3 col-span-12">
          <Right />
        </div>
      </div>

      <div className="my-20 border-t-1 border-b-1 border-gray-300 py-10">
        <p className="text-xs text-gray-500 text-center mb-2">বিজ্ঞাপন</p>
        <div className="bg-[#f3f3f3] max-w-4xl mx-auto">
          <img
            src="https://tpc.googlesyndication.com/simgad/15819761843865011339"
            alt=""
            className="mx-auto py-20"
          />
        </div>
      </div>
    </div>
  );
};

export default RajnitiSection01;
