import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FourteenSection = () => {
  return (
    <div className="p-4 bg-[#e3f2fd80]">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
            640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
                freeMode: true,
              },
        }}
        grabCursor={true}
        className="mySwiper  xl:w-128 !pb-10 "
      >
        {/* First card */}
        <SwiperSlide>
          <div className="relative overflow-hidden drop-shadow-lg ">
            <img
              src="https://i.postimg.cc/kg31phvH/image.png"
               className="xl:w-64 xl:h-25 h-30 object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-white p-4">
              <p className="text-sm font-medium text-[#ffbf2b] mb-2 hover:underline">
                সকালের খবর
              </p>
              <h3 className="text-sm font-semibold leading-snug hover:text-[#ffb300]">
                সকালেই পড়ুন আলোচিত ৫ খবর
              </h3>
            </div>
          </div>
        </SwiperSlide>

        {/* Second card */}
        <SwiperSlide>
          <div className="relative overflow-hidden drop-shadow-lg">
            <img
              src="https://i.postimg.cc/sftC3mJY/image.png"
                  className="w-64 xl:h-25 h-30 object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-white p-4">
              <p className="text-sm font-medium text-[#ffbf2b] mb-2 hover:underline">
                সকালের খবর
              </p>
              <h3 className="text-sm font-semibold leading-snug hover:text-[#ffb300]">
                সকালেই পড়ুন আলোচিত ৫ খবর
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FourteenSection;
