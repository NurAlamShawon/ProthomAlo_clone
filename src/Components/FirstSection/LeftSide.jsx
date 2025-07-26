import React from "react";

const LeftSide = () => {
  return (
    <div className="px- xl:px-0">
      {/* first */}
      <div className="space-y-3 mb-6 ">
        <div className="flex items-start">
          <p className="hover:text-blue-700  text-lg font-bold text-gray-800 ">
            <span className="text-red-600 hover:text-blue-700">
              এইচআরডব্লিউর <br /> প্রতিবেদন
              <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
            </span>
          শত শত মুসলিমকে বেআইনিভাবে বাংলাদেশে বিতাড়িত করেছে ভারত
          </p>
          <img
            src="https://i.postimg.cc/9MyNM7h8/image.png"
            alt=""
            className="w-24 ml-4"
          />
        </div>
        <p className="text-sm  text-gray-600">১ ঘণ্টা আগে</p>
      </div>

      <hr className="border-1 my-6 border-gray-300"></hr>

      {/* second */}
      <img src="https://i.postimg.cc/RZqst8mn/image.png" alt="" />

      <hr className="border-1 my-6 border-gray-300"></hr>

      {/* third */}
      <div className="space-y-3 my-6">
        <div className="flex items-start">
          <p className="text-base hover:text-blue-700 font-bold text-gray-800 ">
            <span className="text-red-600 hover:text-blue-700">
              মাইলস্টোনে বিমান বিধ্বস্ত
              <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
            </span>{" "}
            ‘জীবনের শ্রেষ্ঠ সিদ্ধান্তটাই নিয়েছে মাহরীন’
          </p>
          <img
            src="https://i.postimg.cc/xTNNby71/image.png"
            alt=""
            className="w-22 ml-4"
          />
        </div>
        <p className="text-sm text-gray-600">১৮ মিনিট আগে</p>
      </div>

      <hr className="border-1 my-6 border-gray-300"></hr>

      {/* fourth */}
      <div className="space-y-3 my-6">
        <div className="flex items-start">
          <p className="text-base hover:text-blue-700 font-bold text-gray-800 ">
            দুই পরিবারই বলছে মেয়েটি তাঁদের, ডিএনএ পরীক্ষার ফলের অপেক্ষায় রাইসার
            মা–বাবা
          </p>
          <img
            src="https://i.postimg.cc/DfHKmqL6/image.png"
            alt=""
            className="w-22 ml-4"
          />
        </div>
        <p className="text-sm text-gray-600">১ ঘণ্টা আগে</p>
      </div>

     
      <hr className="border-1 my-6 border-gray-200"></hr>
 {/* fifth */}
      <div className="xl:inline hidden">
        <div>
          <p className="text-base hover:text-blue-700 text-gray-800 ">
            দুবাই থেকে আসা বিমানের ফ্লাইটে যান্ত্রিক ত্রুটি
          </p>
        </div>

        {/* sixth */}
        <hr className="border-1 my-6  border-gray-200"></hr>
        <div>
          <p className="text-base text-gray-800 hover:text-blue-700 ">
            যেসব ফল খেলে কোলেস্টেরল কমবে, ভালো থাকবে হৃৎপিণ্ড
          </p>
        </div>

        {/* seventh */}
        <hr className="border-1 my-6 border-gray-200 "></hr>
        <div>
          <p className="text-base text-gray-800 hover:text-blue-700">
            কোন গাড়ির অগ্রিম কর কত, কীভাবে দেবেন
          </p>
        </div>
        <hr className="border-1 my-6 border-gray-200"></hr>

        {/* eight */}

        <div>
          <p className="text-base text-gray-800 hover:text-blue-700">
            আন্তর্জাতিক গণিত অলিম্পিয়াডে স্বর্ণপদক পেল এআই
          </p>
        </div>

        {/* ninth */}
        <hr className="border-1 my-6 border-gray-200"></hr>
        <div>
          <p className="text-base text-gray-800 hover:text-blue-700">
            একাদশ শ্রেণিতে বিভিন্ন কলেজে ভর্তি তথ্য
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
