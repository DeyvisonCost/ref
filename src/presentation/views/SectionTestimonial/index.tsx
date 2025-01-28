import * as React from 'react'

import { ScrollTestimonialCards } from '@/presentation/views/SectionTestimonial/ScrollTestimonialCards'

export function SectionTestimonial() {
  return (
    <>
      <div className="bg-[#F84001] w-full pl-4 py-16 relative overflow-hidden md:h-[621px]">
        <div className="flex flex-col items-center justify-center md:mb-[60px]">
          <h2 className="font-semibold text-3xl text-center text-white">Depoimentos</h2>
          <img src="/img/linha-preta.svg" alt="Setas" className="w-48 h-2 mt-0" />
        </div>

        <div className="mt-8 md:flex items-center justify-center md:pl-36">
          <ScrollTestimonialCards />
        </div>
        <img
          src="/img/Escada.svg"
          alt="Setas"
          className="w-[360px] md:w-[941px] h-44 md:h-[600px] absolute bottom-0 md:-bottom-24 -left-20 md:-left-56"
        />

        <img
          src="/img/carrossel.svg"
          alt="Carrossel"
          className="w-[80px] h-[250px] absolute -bottom-24 left-[160px]  md:-bottom-16  md:left-[700px] z-10"
        />

        <img
          src="/img/braco-parte.svg"
          alt="Braço esquerdo"
          className="hidden md:block w-[300px] h-[250px] absolute -bottom-4 -left-6 z-10 rotate-[200deg]"
        />
        <img
          src="/img/braco-parte.svg"
          alt="Braço direito"
          className="hidden md:block w-[300px] h-[250px] absolute bottom-1 -right-16 z-10 -scale-x-100 rotate-[160deg]"
        />
      </div>

      <div className="relative w-full">
        <img
          src="/img/setas-verde.svg"
          alt="Setas"
          className="w-12 h-11 absolute -top-6 right-10 md:left-40 md:rotate-180 z-50"
        />
      </div>
    </>
  )
}
