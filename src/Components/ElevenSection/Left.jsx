import React from "react";

const Left = () => {
  return (
    <div>
      <img
        src="//media.prothomalo.com/prothomalo-bangla%2F2023-10%2F7c217b91-df12-49dc-8611-565fe92a4168%2Fektuthamun_banner.png?w=undefined&auto=format%2Ccompress&fmt=webp"
        alt=""
        className="w-full my-4"
      />

      <div className="w-full grid grid-cols-6 xl:pb-15  pb-8 border-b-1 border-gray-300">
        {/* left */}
        <div className="xl:col-span-3 col-span-6">
          <div className="xl:pr-4  space-y-3 xl:border-r-2 border-gray-300 xl:border-b-0 border-b-1 xl:pb-0 pb-4 xl:mb-0 mb-4 ">
            <img
              src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-24%2F0tj77cyq%2F1756Online01.jpg?rect=50%2C0%2C534%2C356&amp;w=242&amp;auto=format%2Ccompress&amp;fmt=avif"
              alt=""
              className="w-full  h-48"
            />
            <h1 className="text-xl text-black font-bold hover:text-blue-700 ">
              শত বছরের পুরোনো সভ্যতা, অথচ বর্তমান ইউরোপের চেয়েও পরিচ্ছন্ন
            </h1>
            <p className="text-base text-gray-600 hover:text-gray-800">
              যুক্তরাষ্ট্রের ক্যালিফোর্নিয়ার স্যান হোসেতে কুয়েটজেলকোয়াটল নামে
              একটি ভাস্কর্য আছে, যা দেখতে অনেকটা মলের মতো।
            </p>
            <p className="text-base text-gray-400">১৫ ঘণ্টা আগে</p>
          </div>
        </div>
        {/* right */}
        <div className="xl:col-span-3 col-span-6 xl:pl-4">
          {/* first */}
          <div>
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <p className="text-base font-bold text-gray-800 hover:text-blue-700 ">
                  গভীর ধ্যানে আছি
                </p>
                <p className="text-sm text-gray-400">১৫ ঘণ্টা আগে</p>
              </div>

              <img
                src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-24%2F2terr4rk%2F1756Online03.jpg?rect=194%2C0%2C723%2C723&amp;w=155&amp;auto=format%2Ccompress&amp;fmt=avif"
                alt=""
                className="max-w-50 h-22 "
              />
            </div>
          </div>
          <hr className="border-1 my-6 border-gray-200"></hr>

          {/* second */}
          <div>
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <p className="text-base font-bold text-gray-800 hover:text-blue-700 ">
                  অলিম্পিকের খেলার তালিকায় এটিও ছিল
                </p>
                <p className="text-sm text-gray-400">২৩ জুলাই ২০২৫</p>
              </div>

              <img
                src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-23%2Fu5jkosyh%2Fpexels_leonardho_2468339.jpg?rect=564%2C0%2C1450%2C1450&amp;w=155&amp;auto=format%2Ccompress&amp;fmt=avif"
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
                <p className="text-base font-bold text-gray-800 hover:text-blue-700 ">
                  কোথায় যাচ্ছ? ইউএস না ইউকে?
                </p>
                <p className="text-sm text-gray-400">২৩ জুলাই ২০২৫</p>
              </div>

              <img
                src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-23%2F7yg1sne2%2F1755Online01.jpg?rect=237%2C0%2C1118%2C1118&amp;w=155&amp;auto=format%2Ccompress&amp;fmt=avif"
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

export default Left;
