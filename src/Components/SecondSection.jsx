import React, { useEffect, useState } from "react";

const SecondSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/Type.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="bg-[#fbe9e780] py-6 my-10 ">
      <div className="max-w-7xl mx-auto ">
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg drop-shadow-lg"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-25 object-cover"
              />

              {/* Dark shadow overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Centered Text on Image */}
              <div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-start text-white p-4">
                <p className="text-sm font-medium text-[#ffbf2b] mb-2 hover:underline">
                  {item.category}
                </p>
                <h3 className="text-sm font-semibold leading-snug hover:text-[#ffb300]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
