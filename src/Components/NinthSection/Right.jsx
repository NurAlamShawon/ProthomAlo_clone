import React, { useEffect, useState } from "react";

const Right = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("/Ninth.json")
      .then((res) => res.json())
      .then((data) => setNewsList(data));
  }, []);

  return (
    <div className="ml-5">
      {newsList.map((news, index) => (
        <div className="flex items-center mb-4 ">
          <div className="mr-3">
            <div className="bg-gray-300 rounded-full w-21 h-21 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-10 absolute left-5.5 top-5.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </div>
          </div>

          <div
            className={`w-full ${
              index < 3 ? "border-b border-gray-300" : ""
            }`}
          >
            <p className="xl:text-xl text-base font-medium text-gray-800 mb-4">
              <span className="text-red-600 ">
                {news.title}
                <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-600 rounded-full align-middle"></span>
              </span>{" "}
              {news.description}
            </p>
            <hr className="border-2 border-gray-400 w-10 xl:mb-0 mb-1"></hr>
            <p className="xl:text-lg text-xs font-medium pb-2 text-gray-600">সম্পাদকীয়</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Right;
