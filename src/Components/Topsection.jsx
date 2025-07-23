import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";

const Topsection = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 ">
      <div className="flex items-center justify-between">
        <div>
          <img
            src="https://i.postimg.cc/CdyDCGvD/image.png"
            alt=""
            className="w-62"
          />
        </div>
        <div className="max-w-3xl">
          <div className="grid xl:grid-cols-3 gap-3 ">
            {/* first  */}
            <div className="flex items-center p-1 border-r-1 border-gray-400 ">
              <div className="w-56 h-16 overflow-hidden">
                <img
                  src="https://i.postimg.cc/6QHMrPCv/image.png"
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <div className="flex  m-2">
                <FaRegPlayCircle className="border-red-600 text-red-600 text-2xl mr-1" />
                <p className="line-clamp-2 overflow-hidden text-sm text-black font-light">
                  মাইলস্টোন স্কুলের দুই শিক্ষার্থীর চোখে দেখা বিমান বিধ্বস্তের
                  পরের পাঁচ ঘণ্টা
                </p>
              </div>
            </div>
            {/* second */}
            <div className=" flex items-center p-1 border-r-1 border-gray-400">
              <div className="w-52 h-16 overflow-hidden">
                <img
                  src="https://i.postimg.cc/WtLdQ2cJ/image.png"
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="flex  m-2">
                <FaRegPlayCircle className="border-red-600 text-red-600 text-2xl mr-1" />
                <p className="line-clamp-2 overflow-hidden text-sm text-black font-light">
                  স্বাস্থ্য উপদেষ্টা ইউনূসের কাছের লোক—এটাই ওনার যোগ্যতা: হাসনাত
                </p>
              </div>
            </div>
            {/* third */}
            <div className="flex items-center">
              <div className="w-52 h-16 overflow-hidden">
                <img
                  src="https://i.postimg.cc/HWJBDBCp/image.png"
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="flex  m-2">
                <FaRegPlayCircle className="border-red-600 text-red-600 text-2xl mr-1" />
                <p className="line-clamp-2 overflow-hidden text-sm text-black font-light">
                  নাটোরে মাইক্রোবাস-ট্রাক সংঘর্ষে নিহত ৬, আহত ২
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topsection;
