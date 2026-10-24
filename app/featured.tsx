"use client";

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Featured() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop
    >
      <SwiperSlide>
        <div className="relative">
          <img
            className="aspect-[16/9] w-full saturate-0 transition-all hover:saturate-100"
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;w=1800&amp;q=85"
            alt="Warm, sunlit interior with a view toward an adjoining room"
          />
          <div className="absolute bottom-0 left-0 hidden w-full border-t-1 border-white/20 bg-black/20 p-8 text-white backdrop-blur-[4px] md:block">
            <div className="flex items-center justify-between">
              <h2 className="cormorant-garamond-300 text-[30px] leading-[36px]">
                The borrowed horizon
              </h2>
              <h3 className="jetbrains-mono-400 text-[10px] leading-[15px]">
                KYOTO, 2024
              </h3>
            </div>
            <p className="jetbrains-mono-400 text-[11px] leading-[16.5px]">
              A quiet threshold between inside and out
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            className="aspect-[16/9] w-full saturate-0 transition-all hover:saturate-100"
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;w=1800&amp;q=85"
            alt="Warm, sunlit interior with a view toward an adjoining room"
          />
          <div className="absolute bottom-0 left-0 hidden w-full border-t-1 border-white/20 bg-black/20 p-8 text-white backdrop-blur-[4px] md:block">
            <div className="flex items-center justify-between">
              <h2 className="cormorant-garamond-300 text-[30px] leading-[36px]">
                The borrowed horizon
              </h2>
              <h3 className="jetbrains-mono-400 text-[10px] leading-[15px]">
                KYOTO, 2024
              </h3>
            </div>
            <p className="jetbrains-mono-400 text-[11px] leading-[16.5px]">
              A quiet threshold between inside and out
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}