import React, { useEffect, useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";

const Topsection = () => {
  const [top, settop] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("/Top.json");
      const data = await res.json();
      settop(data);
    };

    fetchdata();
  }, []);

  return (
    <div className="max-w-7xl mx-auto pt-6 pb-6">
      <div className="flex items-center justify-between">
        <div>
          <img
            src="https://i.postimg.cc/CdyDCGvD/image.png"
            alt=""
            className="w-66"
          />
        </div>
        <div>
          <div className="max-w-[812px] grid xl:grid-cols-3 gap-3">
            {top.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center p-1 ${
                  index < 2 ? "border-r border-gray-300" : ""
                }`}
              >
                <div className="w-16 h-16 overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt="thumbnail"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="ml-2">
                  <p className="text-sm text-black font-light line-clamp-2 overflow-hidden hover:text-blue-700">
                    <span className="align-start">
                      <FaRegPlayCircle className="inline text-red-600 text-sm mr-1" />
                    </span>
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topsection;
