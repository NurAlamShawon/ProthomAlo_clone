import React, { useEffect, useState } from "react";

const EigthSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/Eight.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <hr className="border-3 border-gray-600"></hr>

      <h1 className="text-xl font-bold text-black my-6  flex items-center">
        জীবনযাপন
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="red"
          className="size-6 ml-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </h1>

      <div className="grid items-center grid-cols-4 gap-6">
        {news.map((item, index) => (
          <div
            key={item.id}
            className={`pr-4 space-y-2 h-108 ${
              index < 3 ? "border-r-2 border-gray-300" : ""
            }`}
          >
            <img
              src={item.image}
              className="h-48"
             
            />
            
            <h1 className="text-xl text-black font-bold">{item.title}</h1>
            <p className="text-base text-gray-600 hover:text-gray-900">
              {item.description}
            </p>
            <p className="text-base text-gray-600">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EigthSection;
