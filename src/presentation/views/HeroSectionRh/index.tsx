import * as React from 'react'

import { useNotScroll } from '@/hooks/useNotScroll'
import IconArrowLeft from '@/icons/iconArrowLeft'
import IconArrowRight from '@/icons/iconArrowRigth'
import { ScrollRhCards } from '@/presentation/views/HeroSectionRh/ScrollRhCards'

export function HeroSectionRh() {
  const { handleScroll, scrollContainerRef } = useNotScroll()

  return (
    <div className="bg-[#024632] flex flex-col relative">
      <img
        src="/img/lustre1.svg"
        alt="Lustre"
        className="hidden md:block w-[40px] h-auto absolute top-0 right-[170px]"
      />

      <img
        src="/img/sol-mobile.svg"
        alt="Sol decorativo"
        className="w-full md:w-[990px] h-auto md:h-[480px] absolute top-0 left-0 md:-left-[530px]"
      />

      {/* Mobile */}
      <div className="md:hidden mt-24 font-semibold z-10 my-12 mx-auto">
        <span className="block text-white text-[28px] leading-[28px] text-center">Um ecossistema para</span>
        <span className="block text-white text-[28px] leading-[28px] text-center mt-2">integrar por completo</span>
        <span className="block text-white text-[28px] leading-[28px] text-center mt-2">o RH da sua empresa</span>
      </div>

      {/* Desktop */}
      <div className="hidden md:block mt-24 font-semibold z-10 my-12 w-full">
        <span className="block text-white text-[40px] leading-[44px] text-center">
          Um ecossistema para integrar por
        </span>
        <span className="block text-white text-[40px] leading-[44px] text-center">completo o RH da sua empresa</span>
      </div>

      <div className="md:pl-[120px]">
        <ScrollRhCards ref={scrollContainerRef} />
      </div>

      <div className="hidden md:flex justify-center items-center gap-12 absolute -bottom-[60px] right-20">
        <button onClick={() => handleScroll('left')} className="hover:opacity-80 transition-opacity">
          <IconArrowLeft className="w-[24px] h-[24px]" />
        </button>
        <button onClick={() => handleScroll('right')} className="hover:opacity-80 transition-opacity">
          <IconArrowRight className="w-[24px] h-[24px]" />
        </button>
      </div>
    </div>
  )
}
