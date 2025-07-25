import React, { useEffect, useState } from "react";

const Right = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/Twelve.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error loading gallery:", error));
  }, []);
  return (
    <div className="ml-9 grid grid-cols-2 gap-3 ">
      {items.map((item) => (
        <div key={item.id}>
          <div className="relative">
            <img src={item.image} alt={item.title} className="max-w-md z-0" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              className="absolute top-2 left-2 size-9 z-10"
            >
              <circle cx="32" cy="32" r="32" fill="red" />
              <path
                d="M42 24H38.83L36.59 20.59C36.21 20.22 35.7 20 35.17 20H28.83C28.3 20 27.79 20.22 27.41 20.59L25.17 24H22C20.9 24 20 24.9 20 26V38C20 39.1 20.9 40 22 40H42C43.1 40 44 39.1 44 38V26C44 24.9 43.1 24 42 24ZM32 36C29.24 36 27 33.76 27 31C27 28.24 29.24 26 32 26C34.76 26 37 28.24 37 31C37 33.76 34.76 36 32 36Z"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          <div>
            <h2 className="text-lg text-black font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Right;
