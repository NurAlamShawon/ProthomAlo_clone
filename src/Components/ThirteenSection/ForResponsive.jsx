import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ForResponsive = () => {
   const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/ThirteenResponsive.json")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error("Fetch Error:", err));
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto ">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        grabCursor={true}
        className="mySwiper !pb-10"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="bg-black w-[310px] h-82 overflow-hidden group">
              <a href={video.link} className="relative block">
                <div className="overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-[310px] h-[180px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="red"
                  className="absolute top-3 left-3 size-11"
                >
                  <circle cx="32" cy="32" r="32" fill="red" />
                  <polygon points="26,20 26,44 46,32" fill="white" />
                </svg>
              </a>
              <div className="ml-3 mt-3 space-y-3">
                <p className="xl:text-xl text-base  font-bold text-white hover:text-yellow-400">
                  {video.title}
                </p>
                <p className="text-sm text-gray-400">{video.time}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ForResponsive;