import React from "react";

const Right = () => {
  return (
    <div className="xl:pl-4 xl:border-l-2 border-gray-300">
        <div className="pb-4 border-b-4 border-gray-700">
            <img src="https://i.postimg.cc/9MQrFdZ2/image.png" alt="" className="xl:pb-6 w-full" />
        </div>
      <div className="pt-4 ">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-border border-none">
          {/* one */}
          <input
            type="radio"
            name="my_tabs_2"
            className="tab border-b-2 border-transparent tab-active:border-red-500 pb-1"
            aria-label="সর্বশেষ"
            defaultChecked
          />

          <div className="tab-content p-4">
            {/* first */}
            <div className="flex items-center">
              <h1 className="text-4xl text-gray-600 font-bold mb-1 mr-3">১</h1>

              <p className="text-base text-gray-800 font-semibold hover:text-blue-700 ">
                আমরা আর তার স্কুল—এই ছিল তার জীবন: মাইলস্টোনের শিক্ষক মাসুকা
                বেগমের বড় বোন
              </p>
            </div>
            <hr className="border-1 my-5 border-gray-200"></hr>
            {/* second */}
            <div className="flex items-center">
              <h1 className="text-4xl text-gray-600 font-bold mb-1 mr-3">২</h1>

              <p className="text-base text-gray-800 font-semibold hover:text-blue-700 ">
                যুক্তরাষ্ট্রে গরুর মাংসের দাম রেকর্ড বেড়েছে, কারণ কী
              </p>
            </div>
            <hr className="border-1 my-5 border-gray-200"></hr>
            {/* third */}
            <div className="flex items-center">
              <h1 className="text-4xl text-gray-600 font-bold mb-1 mr-3">৩</h1>

              <p className="text-base text-gray-800 font-semibold hover:text-blue-700 ">
                ৬ লাখ ডলার থেকে বছর ঘুরতেই পারিশ্রমিক কোটির ক্লাবে
              </p>
            </div>
            <hr className="border-1 my-5 border-gray-200"></hr>
            {/* fourth */}
            <div className="flex items-center">
              <h1 className="text-4xl text-gray-600 font-bold mb-1 mr-3">৪</h1>

              <p className="text-base text-gray-800 font-semibold hover:text-blue-700 ">
                <span className="text-red-600 hover:text-blue-700 ">
                  বছর পেরিয়ে জুলাই
                  <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
                </span>{" "}
                আরেক জুলাইয়ে দাঁড়িয়ে
              </p>
            </div>
            <hr className="border-1 my-5 border-gray-200"></hr>
            {/* fifth */}
            <div className="flex items-center">
              <h1 className="text-4xl text-gray-600 font-bold mb-1 mr-3">৫</h1>

              <p className="text-base text-gray-800 font-semibold hover:text-blue-700 ">
                উত্তরায় যুদ্ধবিমান বিধ্বস্ত হওয়ার আগে ঠিক কী করেছিলেন পাইলট
                তৌকির
              </p>
            </div>
          </div>
          {/* two */}
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="পঠিত"
          />
          <div className="tab-content  p-4">
            {/* first */}
            <div className="flex items-center">
              <h1 className="text-4xl text-gray-600 font-bold mb-1 mr-3">১</h1>

              <p className="text-base text-gray-800 font-semibold hover:text-blue-700 ">
                নির্বাচিত সরকারের প্রধানমন্ত্রী ও মন্ত্রীদের জন্য বাসা খোঁজা
                হচ্ছে
              </p>
            </div>
            <hr className="border-1 my-5 border-gray-200"></hr>
            {/* second */}
            <div className="flex items-center">
              <h1 className="text-4xl text-gray-600 font-bold mb-1 mr-3">২</h1>

              <p className="text-base text-gray-800 font-semibold hover:text-blue-700 ">
                অনুদানের অর্থের ভাগাভাগির দ্বন্দ্বে বেরিয়ে এল শহীদের তালিকায়
                ভুয়া নাম
              </p>
            </div>
            <hr className="border-1 my-5 border-gray-200"></hr>
            {/* third */}
            <div className="flex items-center">
              <h1 className="text-4xl text-gray-600 font-bold mb-1 mr-3">৩</h1>

              <p className="text-base text-gray-800 font-semibold hover:text-blue-700 ">
                ভারতের কোচ হতে জাভির আবেদন, খারিজ করে দিয়েছে ফেডারেশন
              </p>
            </div>
            <hr className="border-1 my-5 border-gray-200"></hr>
            {/* fourth */}
            <div className="flex items-center">
              <h1 className="text-4xl text-gray-600 font-bold mb-1 mr-3">৪</h1>

              <p className="text-base text-gray-800 font-semibold hover:text-blue-700 ">
                ড গাইবান্ধায় থানায় ঢুকে পুলিশকে ছুরিকাঘাত করা যুবকের লাশ মিলল
                পাশের পুকুরে
              </p>
            </div>
            <hr className="border-1 my-5 border-gray-200"></hr>
            {/* fifth */}
            <div className="flex items-center">
              <h1 className="text-4xl text-gray-600 font-bold mb-1 mr-3">৫</h1>

              <p className="text-base text-gray-800 font-semibold hover:text-blue-700 ">
                ইসরায়েল কি ইরানের বিরুদ্ধে দ্বিতীয় যুদ্ধের পরিকল্পনা করছে
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
