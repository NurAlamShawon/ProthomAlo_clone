import React from "react";

const Right = () => {
  return (
    <div className="bg-[#fff7ec]">
      <img
        src="//media.prothomalo.com/prothomalo-bangla%2F2023-10%2Fbe784370-9e4f-4120-a587-f13ae1f731a5%2FHaalfashion_banner.png?w=undefined&amp;auto=format%2Ccompress&amp;fmt=webp"
        alt=""
        className="w-full mt-4"
      />

      <div className="w-full grid grid-cols-6 xl:pb-0 pb-6  px-4 mt-4 border-b-1 border-amber-400">
        {/* left */}
        <div className="xl:col-span-3 col-span-6">
          <div className="xl:pr-4 space-y-3  xl:border-b-0 border-b-1 border-gray-300 xl:pb-0 pb-4 xl:mb-0 mb-4">
            <img
              src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-25%2Fvub20bih%2Fpaoli2.jpg?w=375&amp;auto=format%2Ccompress&amp;fmt=avif"
              alt=""
              className="w-full h-45"
            />
            <h1 className="text-xl text-black font-bold hover:text-blue-700 ">
              বর্ষার আমেজে পাওলি নজর কাড়লেন নীল শাড়িতে
            </h1>
            <p className="text-base text-gray-600 hover:text-gray-800">
              ছিপছিপে কায়া, ডাগর ডাগর চোখ আর লম্বা চুলে পাওলির সৌন্দর্য দেখে
              বারবার মুগ্ধ হন অনুরাগীরা। সম্প্রতি অভিনেত্রী ধরা দিয়েছেন নীল
              শাড়ির মোহময়ী লুকে।
            </p>
            <p className="text-base text-gray-400">৩ ঘণ্টা আগে</p>
          </div>
        </div>
        {/* right */}
        <div className="xl:col-span-3 col-span-6 xl:mb-2 xl:pl-4 xl:border-l-2 border-gray-300">
          {/* first */}
          <div>
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <p className="text-base font-bold text-gray-800 ">
                  প্রতিদিন ৭ হাজার স্টেপ হাঁটলে মৃত্যুর সম্ভাবনা কমবে ৪৭ শতাংশ,
                  বলছে গবেষণা
                </p>
                <p className="text-sm text-gray-400">১৫ ঘণ্টা আগে</p>
              </div>

              <img
                src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-24%2Fqf9qj7r1%2Fwalk-1.jpg?w=155&amp;auto=format%2Ccompress&amp;fmt=avif"
                alt=""
                className="max-w-22 h-22 "
              />
            </div>
          </div>
          <hr className="border-1 my-6 border-gray-300"></hr>

          {/* second */}
          <div>
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <p className="text-base font-bold text-gray-800 ">
                  ইন্ডিয়া কতুর উইক ২০২৫: রূপকথার জলপরির মতো র‍্যাম্পে তামান্না
                  ভাটিয়া
                </p>
                <p className="text-sm text-gray-400">২০ ঘণ্টা আগে</p>
              </div>

              <img
                src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-24%2Fz6a06rl8%2FTama-V-W.jpg?rect=349%2C0%2C732%2C732&amp;w=155&amp;auto=format%2Ccompress&amp;fmt=avif"
                alt=""
                className="max-w-50 h-22 "
              />
            </div>
          </div>
          <hr className="border-1 my-6 border-gray-200"></hr>

          {/* third */}
          <div>
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <p className="text-base font-bold text-gray-800 ">
                  সুঘ্রাণে মাতিয়ে তুলুন ঘরের কোণ, একটু পেলেই বহুগুণে ফিরিয়ে দেয়
                  এই গাছ
                </p>
                <p className="text-sm text-gray-400">২৪ জুলাই ২০২৫</p>
              </div>

              <img
                src="//media.prothomalo.com/prothomalo-bangla%2F2023-07%2F038254d6-4092-46c3-9fca-7a3f7baea1a0%2Fbeli___W.jpg?rect=173%2C0%2C732%2C732&amp;w=155&amp;auto=format%2Ccompress&amp;fmt=avif"
                alt=""
                className="max-w-50 h-22 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
