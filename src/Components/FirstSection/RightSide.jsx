import React from 'react';

const RightSide = () => {
    return (
        <div>
              {/* first */}
          <div className="space-y-3 my-6">
            <div className="flex items-start">
              <p className="text-base font-bold text-gray-800 hover:text-blue-700 ">
                <span className="text-red-600 hover:text-blue-700 ">
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
            <p className="text-sm text-gray-400">১৭ ঘণ্টা আগে</p>
          </div>

          <hr className="border-1 my-6 border-gray-300"></hr>


 {/* second */}
          <div className="space-y-3 my-6">
            <div className="flex items-start">
              <p className="text-base font-bold text-gray-800 hover:text-blue-700 ">
                <span className="text-red-600 hover:text-blue-700 ">
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
            <p className="text-sm text-gray-400">১২ ঘণ্টা আগে</p>
          </div>

          <hr className="border-1 my-6 border-gray-300"></hr>

           {/* third */}
          <div className="space-y-3 my-6">
            <div className="flex items-start">
              <p className="text-base font-bold text-gray-800 hover:text-blue-700 ">
                
                 ফেসবুকে ‘অ্যানোনিমাস’ নেটওয়ার্ক: ষড়যন্ত্র তত্ত্ব, ভবিষ্যদ্বাণী আর ভুয়া তথ্য দিয়ে প্রতারণার ফাঁদ
              </p>
              <img
                src="https://i.postimg.cc/QMYWT4XV/image.png"
                alt=""
                className="w-22 ml-4"
              />
            </div>
            <p className="text-sm text-gray-400">২৭ মিনিট আগে</p>
          </div>

        </div>
    );
};

export default RightSide;