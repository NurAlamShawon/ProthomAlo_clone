import React, { useEffect, useState } from "react";

const RajnitiSection02 = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/Rajniti.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="max-w-sm xl:ml-46 xl:px-0 mx-4">
      {news.map((item, index) => (
        <div key={index} className="border-b-1 pb-2 border-gray-300  p-1 flex items-center mb-4">
          <div className="mr-1">
            <h2 className="text-lg text-gray-900 font-semibold hover:text-blue-700">
              <span className="text-red-600 hover:text-blue-700 ">
                {item.title}
               {item.title? <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span> :"" } 
              </span>
              {item.description}
            </h2>
            <p className="text-xs text-gray-400 mt-2">{item.time}</p>
          </div>
          <img
            src={item.image}
            alt="news"
            className="xl:w-40 w-35 xl:h-24 h-23 object-cover mb-4"
          />
        </div>
      ))}
    </div>
  );
};

export default RajnitiSection02;
