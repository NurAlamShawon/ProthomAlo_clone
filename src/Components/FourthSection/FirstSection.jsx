import React, { useEffect, useState } from "react";

const FirstSection = () => {
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
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-2">
        {/* left side */}

        <div className="col-span-3 my-6 pr-6  border-r-2 border-gray-400">
          {/* first */}
          <div className="space-y-3 my-6">
            <div className="flex items-start">
              <p className="text-lg font-bold text-gray-800 ">
                <span className="text-red-600 ">
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
            <p className="text-sm text-gray-600">১ ঘণ্টা আগে</p>
          </div>

          <hr className="border-1 my-6 border-gray-300"></hr>

          {/* second */}
          <img src="https://i.postimg.cc/RZqst8mn/image.png" alt="" />

          <hr className="border-1 my-6 border-gray-300"></hr>

          {/* third */}
          <div className="space-y-3 my-6">
            <div className="flex items-start">
              <p className="text-base font-bold text-gray-800 ">
                <span className="text-red-600 ">
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
              <p className="text-base font-bold text-gray-800 ">
                দুই পরিবারই বলছে মেয়েটি তাঁদের, ডিএনএ পরীক্ষার ফলের অপেক্ষায়
                রাইসার মা–বাবা
              </p>
              <img
                src="https://i.postimg.cc/DfHKmqL6/image.png"
                alt=""
                className="w-22 ml-4"
              />
            </div>
            <p className="text-sm text-gray-600">১ ঘণ্টা আগে</p>
          </div>

          {/* fifth */}
          <hr className="border-1 my-6 border-gray-200"></hr>
          <div>
            <p className="text-base text-gray-800 ">
              দুবাই থেকে আসা বিমানের ফ্লাইটে যান্ত্রিক ত্রুটি
            </p>
          </div>

          {/* sixth */}
          <hr className="border-1 my-6 border-gray-200"></hr>
          <div>
            <p className="text-base text-gray-800 ">
              যেসব ফল খেলে কোলেস্টেরল কমবে, ভালো থাকবে হৃৎপিণ্ড
            </p>
          </div>

          {/* seventh */}
          <hr className="border-1 my-6 border-gray-200"></hr>
          <div>
            <p className="text-base text-gray-800 ">
              কোন গাড়ির অগ্রিম কর কত, কীভাবে দেবেন
            </p>
          </div>
          <hr className="border-1 my-6 border-gray-200"></hr>

          {/* eight */}

          <div>
            <p className="text-base text-gray-800 ">
              আন্তর্জাতিক গণিত অলিম্পিয়াডে স্বর্ণপদক পেল এআই
            </p>
          </div>

          {/* ninth */}
          <hr className="border-1 my-6 border-gray-200"></hr>
          <div>
            <p className="text-base text-gray-800 ">
              একাদশ শ্রেণিতে বিভিন্ন কলেজে ভর্তি তথ্য
            </p>
          </div>
        </div>

        {/* middle side */}
        <div className="col-span-6 px-6 my-6 pr-6  border-r-2 border-gray-400">
          {/* fist part */}
          <div className="flex items-center justify-between mb-6">
            <div className="mr-4">
              <img
                src="https://i.postimg.cc/Gmz354Ty/image.png"
                alt=""
                className="max-w-xs mb-2"
              />
              <p className="text-sm text-gray-500">
                এ বি এম খায়রুল হক | ফাইল ছবি
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold text-black">
                সাবেক প্রধান বিচারপতি খায়রুল হক ঢাকায় আটক
              </h1>
              <p className="text-sm text-gray-600 ">
                আপিল বিভাগে থাকাকালে সংবিধানের ত্রয়োদশ সংশোধনী বা তত্ত্বাবধায়ক
                সরকারব্যবস্থা বাতিল এবং ফতোয়া অবৈধ ঘোষণার রায় দেন খায়রুল হক।
              </p>
              <p className="text-sm text-gray-600">১ ঘণ্টা আগে</p>
            </div>
          </div>
          <hr className="border-1 border-gray-500"></hr>
          {/* second part */}
          <div className="flex  justify-between py-4">
            {/* left */}
            <div className="pr-4 space-y-4 border-r-1 border-gray-300">
              <div className="flex items-center ">
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
            <div className="pl-4 space-y-4 ">
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
                  <p className="text-base font-bold text-gray-800 w-full">
                    {news.title}
                  </p>
                  <p className="text-sm text-gray-600">{news.description}</p>
                  <p className="text-sm text-gray-600">{news.time}</p>
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
                  <p className="text-base font-bold text-gray-800 ">
                    {news.title}
                  </p>
                  <p className="text-sm text-gray-600">{news.description}</p>
                  <p className="text-sm text-gray-600">{news.time}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* right side */}
        <div className="col-span-3 pl-6  ">
          {/* first */}
          <div className="space-y-3 my-6">
            <div className="flex items-start">
              <p className="text-base font-bold text-gray-800 ">
                <span className="text-red-600 ">
                  মতামত
                  <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
                </span>{" "}
                ক নিলে চাঁদা, খ নিলে ডোনেশন, গ নিলে ইয়ানত, ঘ নিলে হাদিয়া!
              </p>
              <img
                src="https://i.postimg.cc/DwK04VLx/image.png"
                alt=""
                className="w-22 ml-4"
              />
            </div>
            <p className="text-sm text-gray-600">১৭ ঘণ্টা আগে</p>
          </div>

          <hr className="border-1 my-6 border-gray-300"></hr>


 {/* second */}
          <div className="space-y-3 my-6">
            <div className="flex items-start">
              <p className="text-base font-bold text-gray-800 ">
                <span className="text-red-600 ">
                  মতামত
                  <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
                </span>{" "}
                 ইসরায়েলের সিরিয়া আক্রমণ যেভাবে বুমেরাং হচ্ছে
              </p>
              <img
                src="https://i.postimg.cc/Sxq8FYTQ/image.png"
                alt=""
                className="w-22 ml-4"
              />
            </div>
            <p className="text-sm text-gray-600">১২ ঘণ্টা আগে</p>
          </div>

          <hr className="border-1 my-6 border-gray-300"></hr>

           {/* third */}
          <div className="space-y-3 my-6">
            <div className="flex items-start">
              <p className="text-base font-bold text-gray-800 ">
                
                 ফেসবুকে ‘অ্যানোনিমাস’ নেটওয়ার্ক: ষড়যন্ত্র তত্ত্ব, ভবিষ্যদ্বাণী আর ভুয়া তথ্য দিয়ে প্রতারণার ফাঁদ
              </p>
              <img
                src="https://i.postimg.cc/QMYWT4XV/image.png"
                alt=""
                className="w-22 ml-4"
              />
            </div>
            <p className="text-sm text-gray-600">২৭ মিনিট আগে</p>
          </div>

          <hr className="border-1 my-6 border-gray-300"></hr>





        </div>
      </div>
    </div>
  );
};

export default FirstSection;
