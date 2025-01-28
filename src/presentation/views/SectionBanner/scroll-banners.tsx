import React from 'react'

import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { banners } from '@/presentation/views/SectionBanner/function/banners'

export const ScrollBanners = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        el: '.pagination-bullets',
        clickable: true,
        renderBullet: (_, className) => {
          return `
      <span class="
      ${className}
      relative
      block h-3
      transition-all duration-300 
      rounded-full 
      bg-[#024632] 
      opacity-100
      [&.swiper-pagination-bullet-active]:w-8
      [&.swiper-pagination-bullet-active]:bg-orange-360
      [&.swiper-pagination-bullet-active]:rounded-md
      [&.swiper-pagination-bullet-active]:after:content-['']
      [&.swiper-pagination-bullet-active]:after:absolute
      [&.swiper-pagination-bullet-active]:after:left-0
      [&.swiper-pagination-bullet-active]:after:top-0
      [&.swiper-pagination-bullet-active]:after:h-full
      [&.swiper-pagination-bullet-active]:after:w-full
      [&.swiper-pagination-bullet-active]:after:bg-orange-360
      [&.swiper-pagination-bullet-active]:after:rounded-md
      [&.swiper-pagination-bullet-active]:after:animate-bullet-progress
      w-3
    "></span>
      `
        },
      }}
      loop={true}
      className="absolute md:top-0 bottom-0 right-0 w-full h-[200px] md:h-full"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <img
            src={banner.src}
            alt={banner.alt}
            className={`
              w-full h-[200px] md:h-full 
              ${
                banner.src.includes('Banner22')
                  ? 'object-cover md:object-contain object-left-top'
                  : 'object-cover md:object-contain object-right'
              }
              scale-110 md:scale-100
            `}
          />
        </SwiperSlide>
      ))}

      <div className="pagination-bullets absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-4"></div>
    </Swiper>
  )
}
