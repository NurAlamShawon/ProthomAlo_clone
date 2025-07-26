import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SixteenSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <hr className="border-3 border-gray-600" />
      <h1 className="text-xl font-bold text-black my-6 flex items-center">অন্যান্য</h1>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1.3}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            freeMode: true,
          },
        }}
        grabCursor={true}
        className="!pb-10"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="border p-4 border-gray-300 rounded-md">
            <h1 className="text-md font-semibold px-3 py-2 border-b border-gray-300 text-gray-900 hover:text-blue-700 ">
              কিশোর আলো
            </h1>
            <div className="overflow-hidden group">
              <img
                src="//media.prothomalo.com/prothomalo-bangla%2F2024-08-27%2Fmd40nx14%2Fzen%20z.%20pexels.png?rect=58%2C0%2C950%2C633&amp;w=255&amp;auto=format%2Ccompress&amp;fmt=avif"
                alt="Kishor Alo"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-3 space-y-3">
              <h2 className="text-[15px] font-bold text-gray-800 leading-5 hover:text-blue-700 ">
                জেন-জির স্মার্টফোনের যে ব্যবহারটা অন্যদেরও অনুসরণ করা উচিত
              </h2>
              <hr className="border border-gray-200 my-4" />
              <p className="text-[14px] leading-4 text-gray-600 hover:text-blue-700 ">
                <span className="text-red-600 text-sm hover:text-blue-700 ">
                  পর্ব ৪
                  <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
                </span>
                দ্য নিউ অ্যাডভেঞ্চার অব ফার্মের মুরগি
              </p>
              <hr className="border border-gray-200 my-4" />
              <p className="text-[14px] leading-4 text-gray-800">আহসান হাবীবের ভৌতিক গল্প ‘পেণ্ডুলি’</p>
              <hr className="border border-gray-200 my-4" />
              <div className="flex justify-center mt-2">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all">
                  আরও
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="border p-4 border-gray-300 rounded-md">
            <h1 className="text-md font-semibold px-3 py-2 border-b hover:text-blue-700  border-gray-300 text-gray-900">
              বিজ্ঞানচিন্তা
            </h1>
            <div className="overflow-hidden group">
              <img
                src="//media.prothomalo.com/prothomalo-bangla%2F2025-07-24%2Ftfxpqs9g%2FG.PNG?rect=0%2C1%2C325%2C217&amp;w=255&amp;auto=format%2Ccompress&amp;fmt=avif"
                alt="Bijnan Chinta"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-3 space-y-3">
              <h2 className="text-[15px] font-bold text-gray-600 hover:text-blue-700  leading-5">
                <span className="text-red-600 text-sm hover:text-blue-700">
                  বিজ্ঞান কল্পগল্প
                  <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
                </span>{" "}
                নীল
              </h2>
              <hr className="border border-gray-200 my-4" />
              <p className="text-[14px] leading-4 text-gray-800 hover:text-blue-700 ">
                স্কিন ব্যাংক চালু হলো বাংলাদেশে, দগ্ধ রোগীদের চিকিৎসায় নতুন দিগন্ত
              </p>
              <hr className="border border-gray-200 my-4" />
              <p className="text-[14px] leading-4 text-gray-800 hover:text-blue-700 ">
                <span className="text-red-600 text-sm hover:text-blue-700 ">
                  কৃত্রিম বুদ্ধিমত্তা
                  <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
                </span>{" "}
                ডিপ লার্নিংয়ের উত্থান এবং প্রভাব
              </p>
              <hr className="border border-gray-200 my-4" />
              <div className="flex justify-center mt-2">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all">
                  আরও
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="border p-4 border-gray-300 rounded-md">
            <h1 className="text-md font-semibold px-3 py-2 border-b hover:text-blue-700  border-gray-300 text-gray-900">
              বন্ধুসভা
            </h1>
            <div className="overflow-hidden group">
              <img
                src="//media.prothomalo.com/prothomalo-bangla%2F2024-10-27%2Fwf375zmb%2FWhatsApp-Image-2024-10-27-at-16.26.02.jpeg?rect=0%2C0%2C1325%2C883&amp;w=255&amp;auto=format%2Ccompress&amp;fmt=avif"
                alt="Bondhushava"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-3 space-y-3">
              <h2 className="text-[15px] font-bold text-gray-800 leading-5 hover:text-blue-700 ">
                <span className="text-red-600 text-sm hover:text-blue-700 ">
                  জুলাইয়ের দিনগুলো
                  <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
                </span>{" "}
                মুহূর্তেই ধোঁয়ায় অন্ধকার হয়ে গেল চারপাশ
              </h2>
              <hr className="border border-gray-200 my-4" />
              <p className="text-[14px] leading-4 text-gray-800 hover:text-blue-700 ">
                <span className="text-red-600 text-sm hover:text-blue-700 ">
                  টেক শো
                  <span className="mx-2 inline-block w-1.5 h-1.5 bg-gray-400 rounded-full align-middle"></span>
                </span>{" "}
                ফেক্ট বনাম ফেক: তথ্যের সত্যতা খোঁজার কৌশল
              </p>
              <hr className="border border-gray-200 my-4" />
              <p className="text-[14px] leading-4 text-gray-800 hover:text-blue-700 ">প্রত্যাশা</p>
              <hr className="border border-gray-200 my-4" />
              <div className="flex justify-center mt-2">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all">
                  আরও
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SixteenSection;
