import React from "react";
import Middle from "./Middle";
import Right from "./Right";
import Left from "./Left";

const FifthSection = () => {
  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-4">
      <hr className="border-3 border-gray-600"></hr>

      <h1 className="text-xl font-bold text-black my-6  flex items-center">
        বাংলাদেশ
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

      <div  className="xl:flex flex-row items-center space-x-4 xl:space-y-0 space-y-2 bg-[#e3f2fd] xl:p-5 p-3">
        <span className="text-lg  text-black flex items-center xl:pl-5 pl-1">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            class="size-5 mr-2"
          >
            <path
              d="M16 10.667A5.332 5.332 0 0 0 10.668 16a5.332 5.332 0 0 0 5.334 5.333A5.332 5.332 0 0 0 21.334 16a5.332 5.332 0 0 0-5.333-5.333zm11.92 4A11.992 11.992 0 0 0 17.335 4.08V1.333h-2.667V4.08A11.992 11.992 0 0 0 4.081 14.667H1.334v2.666h2.747A11.992 11.992 0 0 0 14.667 27.92v2.747h2.667V27.92a11.992 11.992 0 0 0 10.587-10.587h2.746v-2.666h-2.746zM16 25.333A9.327 9.327 0 0 1 6.668 16a9.327 9.327 0 0 1 9.334-9.333A9.327 9.327 0 0 1 25.334 16a9.327 9.327 0 0 1-9.333 9.333z"
              fill="#D60000"
            ></path>
          </svg>
          আমার এলাকার খবর
        </span>

        {/* first */}
        <div className="dropdown dropdown-bottom dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center font-medium justify-between bg-transparent border-1 border-gray-300 focus:border-blue-500 hover:border-blue-500 btn m-1 xl:w-64 w-86 h-12"
          >
            বিভাগ{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        {/* second */}
        <div className="dropdown dropdown-bottom dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center font-medium bg-transparent border-1 border-gray-300 focus:border-blue-500 hover:border-blue-500 justify-between btn m-1 xl:w-64 w-86 h-12" 
          >
            জেলা{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        {/* third */}
        <div className="dropdown dropdown-bottom dropdown-center ">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center font-medium bg-transparent border-1 border-gray-300 focus:border-blue-500 hover:border-blue-500 justify-between btn m-1 xl:w-64 w-86 h-12"
          >
            উপজেলা{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>


         <div className="text-base rounded-sm bg-[#0d47a1] flex items-center h-12  text-white hover:text-blue-700 xl:mx-0 mx-1.5 xl:px-6  px-33 font-semibold ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
                className="size-4 mr-2 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              খুঁজুন
            </div>
      </div>

      <div className="grid grid-cols-12 gap-4 my-10">
        {/* left */}
        <div className="xl:col-span-4 col-span-12">
          <Left />
        </div>
        {/* middle */}
        <div className="xl:col-span-5 col-span-12">
          <Middle />
        </div>
        {/* right */}
        <div className="xl:col-span-3 col-span-12">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
