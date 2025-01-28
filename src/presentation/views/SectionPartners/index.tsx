import React from 'react'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { partners } from '@/presentation/views/SectionPartners/partners'
import 'swiper/css'

export function SectionPartners() {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-center text-[28px] md:text-[40px] md:leading-[44px] font-normal md:font-semibold text-[#005E8B]">
            Parceiros
          </h2>
          <img src="/img/linha-azul.svg" alt="decoração" className="mx-auto w-[160px] md:w-[200px]" />
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={2}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={3000}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
          className="py-4"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-20">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain hover:opacity-80 transition-opacity"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
