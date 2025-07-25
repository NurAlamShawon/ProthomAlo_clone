import React from "react";

const Left = () => {
  return (
    <div className="bg-black h-174 mr-4 overflow-hidden group">
      <a
        href="https://www.youtube.com/embed/F_3ZaqglIwY"
        className="relative z-0 block"
      >
        <div className="overflow-hidden">
          <img
            src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-25%2Fxvfc2clq%2FWeb.jpg?rect=0%2C0%2C800%2C450&amp;w=470&amp;auto=format%2Ccompress&amp;fmt=avif"
            alt=""
            className="w-full h-[405px] transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="red"
          className="absolute top-3 left-3 size-11"
        >
          <circle cx="32" cy="32" r="32" fill="red" />
          <polygon points="26,20 26,44 46,32" fill="white" />
        </svg>
      </a>

      <div className="ml-3 mt-3 space-y-3">
        <p className="text-xl font-bold text-white hover:text-yellow-400">
          বিধ্বস্ত হওয়ার আগমুহূর্তে বিমানটিতে যা ঘটেছিল
        </p>
        <p className="text-sm text-gray-400">১ ঘণ্টা আগে</p>
      </div>
    </div>
  );
};

export default Left;
