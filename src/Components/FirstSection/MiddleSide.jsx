import React, { useEffect, useState } from 'react';

const MiddleSide = () => {
      const [news1, setnews1] = useState([]);
  const [news2, setnews2] = useState([]);

  useEffect(() => {
    const fetchnews1 = async () => {
      const res = await fetch("./New1.json");
      const data = await res.json();
      setnews1(data);
    };

    const fetchnews2 = async () => {
      const res = await fetch("./New2.json");
      const data = await res.json();
      setnews2(data);
    };

    fetchnews1();
    fetchnews2();
  }, []);
    return (
        <div>
             {/* fist part */}
          <div className="xl:flex flex-row items-center justify-between mb-6">
            <div className="xl:mr-4">
              <img
                src="https://i.postimg.cc/Gmz354Ty/image.png"
                alt=""
                className="xl:max-w-xs mb-2"
              />
              <p className="text-sm text-gray-500">
                এ বি এম খায়রুল হক | ফাইল ছবি
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold text-black hover:text-blue-700 ">
                সাবেক প্রধান বিচারপতি খায়রুল হক ঢাকায় আটক
              </h1>
              <p className="text-sm text-gray-600 hover:text-gray-800 ">
                আপিল বিভাগে থাকাকালে সংবিধানের ত্রয়োদশ সংশোধনী বা তত্ত্বাবধায়ক
                সরকারব্যবস্থা বাতিল এবং ফতোয়া অবৈধ ঘোষণার রায় দেন খায়রুল হক।
              </p>
              <p className="text-sm text-gray-600">১ ঘণ্টা আগে</p>
            </div>
          </div>
          <hr className="border-1 border-gray-500"></hr>
          {/* second part */}
          <div className="xl:flex  flex-row justify-between py-4">
            {/* left */}
            <div className="xl:pr-4 space-y-4 xl:border-r-1 xl:pb-0 pb-2 xl:border-b-0 border-b-1 border-gray-300">
              <div className="flex items-center">
                <p className="text-base font-bold text-gray-800 ">
                  মাইলফলকের সামনে রিশাদ, সাকিবকে কি পেছনে ফেলতে পারবেন
                </p>
                <img
                  src="https://i.postimg.cc/3x09LvcL/image.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <p className="text-sm text-gray-600">
                আজ মিরপুরে পাকিস্তানের বিপক্ষে সিরিজের তৃতীয় টি-টোয়েন্টিতে
                মাইলফলকও হাতছানি দিয়ে ডাকছে রিশাদকে।
              </p>
              <p className="text-sm text-gray-600">১ ঘণ্টা আগে</p>
            </div>

            {/* right */}
            <div className="xl:pl-4 space-y-4 xl:my-0 my-3">
              <div className="flex justify-between">
                <p className="text-base font-bold text-gray-800 ">
                  লাল ঘড়ি দেখে বাবা নিশ্চিত হন এটা সাদ
                </p>
                <img
                  src="https://i.postimg.cc/MpsMjPDN/image.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <p className="text-sm text-gray-600">
                বাবা বললেন, ‘আমার ছেলের গল্প লেখার দরকার নেই। যদি রিপোর্ট করেন,
                তাহলে কারা দায়ী, তাদের কথা লেখেন।’
              </p>
              <p className="text-sm text-gray-600">৩ ঘণ্টা আগে</p>
            </div>
          </div>
          <hr className="border-1 border-gray-300"></hr>
          {/* third part */}
          <div className="grid grid-cols-3 gap-3 my-6">
            {news1.map((news, index) => {
              return (
                <div
                  key={news.id}
                  className={` p-1 pr-4 space-y-3 ${
                    index < 2 ? "border-r border-gray-300" : ""
                  }`}
                >
                  <img src={news.img} alt="" className="w-full" />
                  <p className="text-base font-bold text-gray-800 w-full hover:text-blue-700 ">
                    {news.title}
                  </p>
                  <p className="text-sm text-gray-600 hover:text-gray-800 ">{news.description}</p>
                  <p className="text-sm text-gray-400">{news.time}</p>
                </div>
              );
            })}
          </div>
          <hr className="border-1 border-gray-300"></hr>
          {/* fourth part */}

          <div className="grid grid-cols-3 gap-3 my-6">
            {news2.map((news, index) => {
              return (
                <div
                  key={news.id}
                  className={` p-1 pr-4 space-y-3 ${
                    index < 2 ? "border-r border-gray-300" : ""
                  }`}
                >
                  <p className="text-base font-bold text-gray-800 hover:text-blue-700 ">
                    {news.title}
                  </p>
                  <p className="text-sm text-gray-600 hover:text-gray-800 ">{news.description}</p>
                  <p className="text-sm text-gray-400">{news.time}</p>
                </div>
              );
            })}
          </div>
        </div>
    );
};

export default MiddleSide;