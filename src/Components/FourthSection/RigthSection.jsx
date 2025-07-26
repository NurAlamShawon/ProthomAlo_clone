import React from "react";

const RigthSection = () => {
  return (
    <div className="grid grid-cols-9 gap-4 ">
      {/* col-span-6 */}
      <div className="xl:col-span-6 col-span-9 xl:pr-3 xl:border-r-2 border-gray-400">
        <div className="relative">
          <img
            src="https://i.postimg.cc/K8SRyjbY/image.png"
            alt=""
            className="relative"
          />
          <div className="absolute bottom-4 px-4 ">
            <p className="text-2xl font-bold text-white ">
              হাসপাতাল থেকে ফিরে স্পেনকে ফাইনালে তুললেন<br></br> বোনমাতি
            </p>
            <p className="text-base text-gray-300">১ ঘণ্টা আগে</p>
          </div>
        </div>
        <hr className="border-1 my-6 border-gray-200"></hr>
        <div className="grid grid-cols-2">
          <div className="pr-4 xl:pb-4  border-r-2 border-gray-300" >
            <img src="https://i.postimg.cc/25n30BKY/image.png" alt="" className="w-full"/>
            <p className="text-base text-gray-600 hover:text-blue-700">
              মৃত্যুবরণে সাহায্য করতে বলেছিলেন গ্রাহাম থর্প, বললেন তাঁর স্ত্রী
            </p>
            <p className="text-base text-gray-400">২ ঘণ্টা আগে</p>
          </div>

          <div className=" pl-4 xl:pb-4">
            <img src="https://i.postimg.cc/7Y7gFbcB/image.png" alt="" className="w-full"  />
            <p className="text-base text-gray-600 hover:text-blue-700">এমএলএস অল-স্টার ম্যাচে না খেলায় কি নিষিদ্ধ হবেন মেসি</p>
            <p className="text-base text-gray-400">৩ ঘণ্টা আগে</p>
          </div>
        </div>
      </div>
      {/* col-span-3 */}
      <div className="xl:col-span-3 col-span-9">
        <img src="https://i.postimg.cc/gkFnCs3h/image.png" alt="" className="xl:pl-0 pl-2"  />
        <hr className="border-1 my-6 border-gray-200"></hr>
        {/* first */}
        <div className="space-y-3 my-6">
          <div className="flex items-start">
            <p className="text-base font-bold text-gray-600 hover:text-blue-700">
              বার্সেলোনাই এখন রাশফোর্ডের ‘ঘর’
            </p>
            <img
              src="https://i.postimg.cc/5yBJ8w7Y/image.png"
              alt=""
             className="w-28 ml-4"
            />
          </div>
          <p className="text-sm text-gray-400 hover:text-blue-700">৪ ঘণ্টা আগে</p>
        </div>
        <hr className="border-1 my-6 border-gray-200"></hr>

        {/* second */}
        <div className="space-y-3 my-6">
          <div className="flex items-start">
            <p className="text-base font-bold text-gray-600 hover:text-blue-700">
             মাইলফলকের সামনে রিশাদ, সাকিবকে কি পেছনে ফেলতে পারবেন
            </p>
            <img
              src="https://i.postimg.cc/3x09LvcL/image.png"
              alt=""
             className="w-28 ml-4"
            />
          </div>
          <p className="text-sm text-gray-400">৫ ঘণ্টা আগে</p>
        </div>
        <hr className="border-1 my-6 border-gray-200"></hr>

        {/* third */}
        <div className="space-y-3 my-6">
          <div className="flex items-start">
            <p className="text-base font-bold text-gray-600 hover:text-blue-700">
              ‘ভারতের সঙ্গে সম্পর্ক এখনো খুব ভালো’—দাবি বিসিবি সভাপতির
            </p>
            <img
              src="https://i.postimg.cc/gJpNn8ZB/image.png"
              alt=""
              className="w-28 ml-4"
            />
          </div>
          <p className="text-sm text-gray-400">৬ ঘণ্টা আগে</p>
        </div>
      </div>
    </div>
  );
};

export default RigthSection;
