import React from "react";
import Left from "./Left";
import Right from "./Right";

const ElevenSection = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 xl:px-0 px-4">
      <div className="grid grid-cols-12 gap-4">
        {/* left */}
        <div className="xl:col-span-6 col-span-12">
          <Left />
        </div>
        {/* right */}
        <div className="xl:col-span-6 col-span-12">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default ElevenSection;
