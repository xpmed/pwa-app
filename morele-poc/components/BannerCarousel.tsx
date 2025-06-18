'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

const banners = [
  '/images/banners/banner.png',
  '/images/banners/banner2.png',
  '/images/banners/banner3.png',
];

export default function BannerCarousel() {
  return (
    <Swiper
      loop
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="aspect-[16/5] w-full overflow-hidden rounded-xl shadow"
    >
      {banners.map((src) => (
        <SwiperSlide key={src}>
          <Image
            src={src}
            alt="baner"
            fill
            className="object-cover"
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
