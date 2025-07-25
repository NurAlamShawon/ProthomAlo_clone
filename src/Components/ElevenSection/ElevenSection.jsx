import React from "react";
import Left from "./Left";
import Right from "./Right";

const ElevenSection = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
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
  );
};

export default ElevenSection;
