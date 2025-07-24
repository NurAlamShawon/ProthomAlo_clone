import React from "react";

const RigthSection = () => {
  return (
    <div className="grid grid-cols-9 gap-4 ">
      {/* col-span-6 */}
      <div className="col-span-6 pr-3 border-r-2 border-gray-400">
        <div className="relative">
          <img
            src="https://i.postimg.cc/K8SRyjbY/image.png"
            alt=""
            className="relative"
          />
          <div className="absolute bottom-4 px-4 ">
            <p className="text-2xl font-bold text-white">
              হাসপাতাল থেকে ফিরে স্পেনকে ফাইনালে তুললেন<br></br> বোনমাতি
            </p>
            <p className="text-base text-gray-300">১ ঘণ্টা আগে</p>
          </div>
        </div>
        <hr className="border-1 my-6 border-gray-200"></hr>
        <div className="grid grid-cols-2 gap-4">
          <div className=" pr-3 border-r-2 border-gray-300">
            <img src="https://i.postimg.cc/25n30BKY/image.png" alt="" />
            <p>
              মৃত্যুবরণে সাহায্য করতে বলেছিলেন গ্রাহাম থর্প, বললেন তাঁর স্ত্রী
            </p>
            <p>২ ঘণ্টা আগে</p>
          </div>

          <div>
            <img src="https://i.postimg.cc/7Y7gFbcB/image.png" alt="" />
            <p>এমএলএস অল-স্টার ম্যাচে না খেলায় কি নিষিদ্ধ হবেন মেসি</p>
            <p>৩ ঘণ্টা আগে</p>
          </div>
        </div>
      </div>
      {/* col-span-3 */}
      <div className="col-span-3">
        <img src="https://i.postimg.cc/gkFnCs3h/image.png" alt="" />
        <hr className="border-1 my-6 border-gray-200"></hr>
        {/* first */}
        <div className="space-y-3 my-6">
          <div className="flex items-start">
            <p className="text-base font-bold text-gray-800 ">
              বার্সেলোনাই এখন রাশফোর্ডের ‘ঘর’
            </p>
            <img
              src="https://i.postimg.cc/5yBJ8w7Y/image.png"
              alt=""
             className="w-28 ml-4"
            />
          </div>
          <p className="text-sm text-gray-600">৪ ঘণ্টা আগে</p>
        </div>
        <hr className="border-1 my-6 border-gray-200"></hr>

        {/* second */}
        <div className="space-y-3 my-6">
          <div className="flex items-start">
            <p className="text-base font-bold text-gray-800 ">
             মাইলফলকের সামনে রিশাদ, সাকিবকে কি পেছনে ফেলতে পারবেন
            </p>
            <img
              src="https://i.postimg.cc/3x09LvcL/image.png"
              alt=""
             className="w-28 ml-4"
            />
          </div>
          <p className="text-sm text-gray-600">৫ ঘণ্টা আগে</p>
        </div>
        <hr className="border-1 my-6 border-gray-200"></hr>

        {/* third */}
        <div className="space-y-3 my-6">
          <div className="flex items-start">
            <p className="text-base font-bold text-gray-800 ">
              ‘ভারতের সঙ্গে সম্পর্ক এখনো খুব ভালো’—দাবি বিসিবি সভাপতির
            </p>
            <img
              src="https://i.postimg.cc/gJpNn8ZB/image.png"
              alt=""
              className="w-28 ml-4"
            />
          </div>
          <p className="text-sm text-gray-600">৬ ঘণ্টা আগে</p>
        </div>
      </div>
    </div>
  );
};

export default RigthSection;
