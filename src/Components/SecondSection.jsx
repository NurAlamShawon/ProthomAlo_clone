import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

const SecondSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/Type.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="bg-[#fbe9e780] py-6 my-10">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: swipe slider | Desktop: fixed grid */}
        <div className="xl:hidden">
          <Swiper
            grabCursor={true}
            spaceBetween={15}
            slidesPerView={1.2} 
            centeredSlides={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
                freeMode: true,
              },
            }}
          >
            {news.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative overflow-hidden rounded-lg drop-shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-25 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-start text-white p-4">
                    <p className="text-sm font-medium text-[#ffbf2b] mb-2 hover:underline">
                      {item.category}
                    </p>
                    <h3 className="text-sm font-semibold leading-snug hover:text-[#ffb300]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: 4 column fixed grid */}
        <div className="hidden xl:grid grid-cols-4 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg drop-shadow-lg cursor-grab active:cursor-grabbing"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-25 object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-start text-white p-4">
                <p className="text-sm font-medium text-[#ffbf2b] mb-2 hover:underline">
                  {item.category}
                </p>
                <h3 className="text-sm font-semibold leading-snug hover:text-[#ffb300]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
