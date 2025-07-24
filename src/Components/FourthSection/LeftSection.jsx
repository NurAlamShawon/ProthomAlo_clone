import React from "react";

const LeftSection = () => {
  return (
    <div className=" border-r-2 border-gray-400">
      <div className="pt-4">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-border border-none">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab "
            aria-label="পঠিত"
            defaultChecked
          />
          <div className="tab-content p-4">
            {/* first */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">১</h1>

              <p className="text-base text-gray-800 font-semibold">
                নারী কর্মীদের ছোট হাতা ও স্বল্প দৈর্ঘ্যের পোশাক, লেগিংস পরা বাদ
                দিতে বলল বাংলাদেশ ব্যাংক
              </p>
            </div>
            <hr className="border-1 my-5 border-gray-200"></hr>
            {/* second */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">২</h1>

              <p className="text-base text-gray-800 font-semibold">
                ডাকাতির পর ভুক্তভোগী গৃহকর্ত্রী বললেন, ‘প্লিজ, কিছু লিখিয়েন না,
                আমাদের মেরে ফেলবে’
              </p>
            </div>
           <hr className="border-1 my-5 border-gray-200"></hr>
            {/* third */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">৩</h1>

              <p className="text-base text-gray-800 font-semibold">
                <span className="text-red-600 ">
                  প্রথম আলোর গোলটেবিল
                  <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
                </span>{" "}
                এমন ভয়ের পরিবেশে রায় তো দূরের কথা, আদেশই–বা কে দেবে: সারা হোসেন
              </p>
            </div>
             <hr className="border-1 my-5 border-gray-200"></hr>
            {/* fourth */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">৪</h1>

              <p className="text-base text-gray-800 font-semibold">
                কাঠগড়ায় সাবেক অধ্যাপক আবুল বারকাতের এক ঘণ্টা
              </p>
            </div>
             <hr className="border-1 my-5 border-gray-200"></hr>
            {/* fifth */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">৫</h1>

              <p className="text-base text-gray-800 font-semibold">
                ‘গুলি করি মরে একটা, বাকিডি যায় না স্যার’—পুলিশের সেই কর্মকর্তা
                ইকবাল বরখাস্ত
              </p>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="আলোচিত"
          />
          <div className="tab-content  p-4">
            {/* first */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">১</h1>

              <p className="text-base text-gray-800 font-semibold">
                নারী কর্মীদের ছোট হাতা ও দৈর্ঘ্যের পোশাক ও লেগিংস বাদ দিতে বলল
                বাংলাদেশ ব্যাংক
              </p>
            </div>
             <hr className="border-1 my-5 border-gray-200"></hr>
            {/* second */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">২</h1>

              <p className="text-base text-gray-800 font-semibold">
                ক নিলে চাঁদা, খ নিলে ডোনেশন, গ নিলে ইয়ানত, ঘ নিলে হাদিয়া!
              </p>
            </div>
            <hr className="border-1 my-5 border-gray-200"></hr>
            {/* third */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">৩</h1>

              <p className="text-base text-gray-800 font-semibold">
                ‘ফ্যাসিবাদের’ বিরুদ্ধে রাজনৈতিক দলগুলোর ঐক্য আরও দৃশ্যমান চান
                অধ্যাপক ইউনূস
              </p>
            </div>
             <hr className="border-1 my-5 border-gray-200"></hr>
            {/* fourth */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">৪</h1>

              <p className="text-base text-gray-800 font-semibold">
                ড. ইউনূসের স্বজনপ্রীতির সবচেয়ে বড় উদাহরণ স্বাস্থ্য উপদেষ্টা:
                হাসনাত আবদুল্লাহ
              </p>
            </div>
            <hr className="border-1 my-5 border-gray-200"></hr>
            {/* fifth */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">৫</h1>

              <p className="text-base text-gray-800 font-semibold">
                ডাকাতির পর ভুক্তভোগী গৃহকর্ত্রী বললেন, ‘কিছু লিখিয়েন না, আমাদের
                মেরে ফেলবে’
              </p>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="সুখবর"
          />
          <div className="tab-content  p-4">
            {/* first */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">১</h1>

              <p className="text-base text-gray-800 font-semibold">
                টিউশনির জমানো টাকায় ভাগ্যবদল
              </p>
            </div>
             <hr className="border-1 my-5 border-gray-200"></hr>
            {/* second */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">২</h1>

              <p className="text-base text-gray-800 font-semibold">
                ৮২ বছর বয়সেও প্রতিদিন ২২ কিমি হেঁটে পত্রিকা বিলি করেন রবীন্দ্র
                মিত্র
              </p>
            </div>
            <hr className="border-1 my-5 border-gray-200"></hr>
            {/* third */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">৩</h1>

              <p className="text-base text-gray-800 font-semibold">
                মাছ থেকে শুরু করে মশা, নানা বিষয়ে গবেষণা হয় যেখানে
              </p>
            </div>
            <hr className="border-1 my-5 border-gray-200"></hr>
            {/* fourth */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">৪</h1>

              <p className="text-base text-gray-800 font-semibold">
                আফিমজাতীয় ওষুধের আসক্তি নিখুঁতভাবে বের করার পদ্ধতি উদ্ভাবনে
                নেতৃত্ব দিয়েছেন বাংলাদেশের রামিসা
              </p>
            </div>
            <hr className="border-1 my-5 border-gray-200"></hr>
            {/* fifth */}
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-1">৫</h1>

              <p className="text-base text-gray-800 font-semibold">
                আঙিনায় বেড়া দিয়ে ৩০০ মুরগি থেকে শুরু, এখন মতিউরের বছরে আয় ৮ লাখ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
