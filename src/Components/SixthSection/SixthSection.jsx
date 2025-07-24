import React from "react";
import Left from "./Left";
import Right from "./Right";

const SixthSection = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {/* left */}
        <div className="col-span-5">
          <Left />
        </div>
        {/* right */}
        <div className="col-span-7">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
