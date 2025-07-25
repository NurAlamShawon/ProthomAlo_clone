import React from "react";

const Top = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        {/* first */}
        <div>
          <hr className="border-3 border-gray-600"></hr>

          <h1 className="text-xl font-bold text-black my-6  flex items-center">
            শিক্ষা
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

          <div className="overflow-hidden group w-full">
            <img
              src="//media.prothomalo.com/prothomalo-bangla%2F2024-08-29%2F4t92x6g0%2F1.webp?rect=0%2C0%2C640%2C427&amp;w=255&amp;auto=format%2Ccompress&amp;fmt=avif"
              alt=""
              className="w-full transform transition-transform duration-500 group-hover:scale-110 mb-2"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-lg font-bold text-black">
              একাদশ শ্রেণিতে ভর্তির আবেদন ৩০ জুলাই শুরু, ক্লাস ১৫ সেপ্টেম্বর
              থেকে
            </h1>
            <hr className="border-1 border-gray-300"></hr>
            <h1 className="text-lg  text-black">
              বিল গেটস বৃত্তি, সুযোগ তিন শতাধিক শিক্ষার্থীর
            </h1>
            <hr className="border-1 border-gray-300"></hr>
            <h1 className="text-lg  text-black">
              বিনা খরচে ২ লাখ টাকার আইটি প্রশিক্ষণ, ফাজিল–কামিলের শিক্ষার্থীদেরও
              সুযোগ
            </h1>
          </div>
        </div>

        {/* second */}
        <div>
          <hr className="border-3 border-gray-600"></hr>

          <h1 className="text-xl font-bold text-black my-6  flex items-center">
            চাকরি
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

          <div className="overflow-hidden group w-full">
            <img
              src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-25%2Fxn12zi8c%2FOvimot.jpg?rect=0%2C0%2C599%2C399&amp;w=255&amp;auto=format%2Ccompress&amp;fmt=avif"
              alt=""
              className="w-full transform transition-transform duration-500 group-hover:scale-110 mb-2"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-lg font-bold text-black">
            বিদ্যুৎ কোম্পানিতে চাকরি, সংশোধিত বিজ্ঞপ্তিতে নেবে ১১৮ জন
            </h1>
            <hr className="border-1 border-gray-300"></hr>
            <h1 className="text-lg  text-black">
             ৮ ব্যাংক ও ১টি আর্থিক প্রতিষ্ঠানে ‘অফিসার’ পদের পরীক্ষার সূচি প্রকাশ, প্রার্থী ১২,৯৯৯
            </h1>
            <hr className="border-1 border-gray-300"></hr>
            <h1 className="text-lg  text-black">
            কৃষি গবেষণা ইনস্টিটিউটে নবমসহ বিভিন্ন গ্রেডে নিয়োগ, পদ ৯৭
            </h1>
          </div>
        </div>

        {/* third */}
        <div>
          <hr className="border-3 border-gray-600"></hr>

          <h1 className="text-xl font-bold text-black my-6  flex items-center">
            প্রযুক্তি
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

          <div className="overflow-hidden group w-full">
            <img
              src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-24%2Fnlqdwvm5%2FAI.Reuters.png?rect=44%2C0%2C540%2C360&amp;w=255&amp;auto=format%2Ccompress&amp;fmt=avif"
              alt=""
              className="w-full transform transition-transform duration-500 group-hover:scale-110 mb-2"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-lg font-bold text-black">
             <span className="text-red-600 ">
              স্যাম অল্টম্যানের মতে
              <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
            </span>{" "} এআইয়ের কারণে পুরোপুরি বিলুপ্ত হয়ে যাবে যে পেশা
            </h1>
            <hr className="border-1 border-gray-300"></hr>
            <h1 className="text-lg  text-black">
             জুলাই মাসে দ্রুত ঘুরছে পৃথিবী
            </h1>
            <hr className="border-1 border-gray-300"></hr>
            <h1 className="text-lg  text-black">
             চ্যাটজিপিটির মাধ্যমে পছন্দের তারকার সঙ্গে সেলফি তৈরির সুযোগ
            </h1>
          </div>
        </div>

        {/* fourth */}
        <div>
          <hr className="border-3 border-gray-600"></hr>

          <h1 className="text-xl font-bold text-black my-6  flex items-center">
            গ্যাজেটস
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

          <div className="overflow-hidden group w-full">
            <img
              src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-20%2Fz1wumjzi%2FTech-01.jpg?rect=125%2C0%2C1350%2C900&amp;w=255&amp;auto=format%2Ccompress&amp;fmt=avif"
              alt=""
              className="w-full transform transition-transform duration-500 group-hover:scale-110 mb-2"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-lg font-bold text-black">
             দেশের বাজারে কোপাইলট চ্যাটবটযুক্ত নতুন দুই ল্যাপটপ
            </h1>
            <hr className="border-1 border-gray-300"></hr>
            <h1 className="text-lg  text-black">
             দেশের বাজারে কম দামে কৃত্রিম বুদ্ধিমত্তা প্রযুক্তির নতুন স্মার্টফোন
            </h1>
            <hr className="border-1 border-gray-300"></hr>
            <h1 className="text-lg  text-black">
              দেশের বাজারে নতুন গেমিং স্মার্টফোন
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
