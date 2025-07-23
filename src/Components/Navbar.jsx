import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <div className="border-t-1 border-gray-400 border-b-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <ul className="flex items-center">
            <li className="text-sm text-black hover:text-blue-700 mr-4 font-semibold">
              সর্বশেষ
            </li>
            <li className="text-sm text-black hover:text-blue-700 mr-4 font-semibold">
              রাজনীতি
            </li>
            <li className="text-sm text-black hover:text-blue-700 mr-4 font-semibold">
              বাংলাদেশ
            </li>
            <li className="text-sm text-black hover:text-blue-700 mr-4 font-semibold">
              অপরাধ
            </li>
            <li className="text-sm text-black hover:text-blue-700 mr-4 font-semibold">
              বিশ্ব
            </li>
            <li className="text-sm text-black hover:text-blue-700 mr-4 font-semibold">
              বাণিজ্য
            </li>
            <li className="text-sm text-black hover:text-blue-700 mr-4 font-semibold">
              মতামত
            </li>
            <li className="text-sm text-black hover:text-blue-700 mr-4 font-semibold">
              খেলা
            </li>
            <li className="text-sm text-black hover:text-blue-700 mr-4 font-semibold">
              বিনোদন
            </li>
            <li className="text-sm text-black hover:text-blue-700 mr-4 font-semibold">
              চাকরি
            </li>
            <li className="text-sm text-black hover:text-blue-700 mr-4 font-semibold">
              জীবনযাপন
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex items-center">
            <li className="text-sm flex items-center  text-gray-600 hover:text-blue-700 py-7 px-4 font-semibold  border-l-1 border-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-6 mr-2 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              খুঁজুন
            </li>
            <li className="text-sm flex items-center text-gray-600 hover:text-blue-700  py-7 px-4 font-semibold  border-l-1 border-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-2 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
              ই-পেপার
            </li>
            <li className="text-sm flex items-center bg-[#fbe9e7] text-gray-600 hover:text-blue-700  py-7 px-4 font-bold  border-l-1 border-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6 mr-2 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              Eng
            </li>
            <li className="text-sm flex items-center text-gray-600 hover:text-blue-700 py-7 px-4 font-semibold  border-l-1 border-gray-400">
              
                <FontAwesomeIcon icon={faUserAlt} className="mr-2 text-xl" />
              <span classname="pl-10">Login</span>
            </li>
            <li className="text-sm  text-gray-600 hover:text-blue-700 py-7 px-4 font-semibold border-r-1 border-l-1 border-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
