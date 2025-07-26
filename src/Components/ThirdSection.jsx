import React from "react";

const ThirdSection = () => {
  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-4">
      <hr className="border-3 border-gray-600"></hr>

      <h1 className="text-xl font-bold text-black my-6  flex items-center">
        আপনার জন্য
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
      <div className="grid xl:grid-cols-4 grid-cols-2">
        {/* first */}
        <div className=" pr-6 pb-6 border-r-1 border-gray-300 space-y-4">
          <img
            src="https://i.postimg.cc/BZ54rbXN/image.png"
            alt=""
            className="h-45"
          />
          <h1 className="text-lg text-gray-900 font-semibold hover:text-blue-700 " >
            ‘গুলি করি মরে একটা, বাকিডি যায় না স্যার’—পুলিশের সেই কর্মকর্তা
            ইকবাল বরখাস্ত
          </h1>
          <p className="text-base text-gray-600 hover:text-gray-800">
            বর্তমানে খুলনা রেঞ্জ ডিআইজি কার্যালয়ে সংযুক্ত মোহাম্মদ ইকবাল হোসাইন
            কর্তৃপক্ষের বিনা অনুমতিতে গত ২৮ আগস্ট থেকে কর্মস্থলে অনুপস্থিত
            রয়েছেন। এটি সরকারি কর্মচারী বিধিমালা অনুযায়ী পলায়নের
          </p>
          <p className="text-base text-gray-400">১৩ ঘণ্টা আগে</p>
        </div>

        {/* second */}
        <div className=" xl:px-6 pl-6 pb-6 xl:border-r-1 border-gray-300 space-y-4">
          <img
            src="https://i.postimg.cc/DwK04VLx/image.png"
            alt=""
            className="h-45"
          />
          <h1 className="text-lg hover:text-blue-700  text-gray-900 font-semibold">
            <span className="text-red-600 hover:text-blue-700 ">
              মতামত
              <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
            </span>{" "}
            ক নিলে চাঁদা, খ নিলে ডোনেশন, গ নিলে ইয়ানত, ঘ নিলে হাদিয়া!
          </h1>
          <p className="text-base text-gray-600 hover:text-gray-800">
            আওয়ামী চাঁদাবাজি অস্ত গেছে। এখন এসেছে নতুন চাঁদাবাজ, তাঁকে ছেড়ে দিতে
            হচ্ছে স্থান।
          </p>
          <p className="text-base text-gray-400">১৭ ঘণ্টা আগে</p>
        </div>
     
        {/* third */}
        <div className=" xl:px-6 pr-6 pb-6 border-r-1 border-gray-300 space-y-4 xl:mt-0 mt-4">
          <img
            src="https://i.postimg.cc/vTx9mnk1/image.png"
            alt=""
            className="h-45"
          />
          <h1 className="text-lg text-gray-900 font-semibold hover:text-blue-700 ">
            <span className="text-red-600 hover:text-blue-700 ">
              ১৩ দল ও জোটের সঙ্গে বৈঠক
              <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
            </span>{" "}
            পরাজিত শক্তির নানা ষড়যন্ত্রের লক্ষণ দেখা যাচ্ছে: অধ্যাপক ইউনূস
          </h1>
          <p className="text-base text-gray-600 hover:text-gray-800 ">
            এক বছর যেতে না যেতেই পরাজিত শক্তির নানা ষড়যন্ত্রের লক্ষণ দেখা
            যাচ্ছে—বলেছেন প্রধান উপদেষ্টা।
          </p>
          <p className="text-base text-gray-400">১৭ ঘণ্টা আগে</p>
        </div>
        {/* fourth */}
        <div className="pl-6 pb-6 space-y-4 xl:mt-0 mt-4">
          <img
            src="https://i.postimg.cc/k5jf6x1w/image.png"
            alt=""
            className="h-45"
          />
          <h1 className="text-lg text-gray-900 font-semibold hover:text-blue-700 ">
            অধ্যাপক ইউনূসের স্বজনপ্রীতির সবচেয়ে বড় উদাহরণ স্বাস্থ্য উপদেষ্টা:
            হাসনাত আবদুল্লাহ
          </h1>
          <p className="text-base text-gray-600 hover:text-gray-800 ">
            স্বাস্থ্য উপদেষ্টা নূরজাহান বেগম স্বাস্থ্যব্যবস্থা ও চিকিৎসা
            সম্পর্কে ‘কিছু বোঝেন না’ বলে মন্তব্য করেন বৈষম্যবিরোধী ছাত্র
            আন্দোলনের সাবেক আহ্বায়ক হাসনাত।
          </p>
          <p className="text-base text-gray-400">২১ ঘণ্টা আগে</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
