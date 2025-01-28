import * as React from 'react'

import { Button } from '@/components/Button'
import { ScrollBanners } from '@/presentation/views/SectionBanner/scroll-banners'

export const Banner = () => {
  const scrollToPlans = () => {
    const planosSection = document.getElementById('planos')
    if (planosSection) {
      planosSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative bg-[#D4E6C8] overflow-hidden md:min-h-[600px]">
      <ScrollBanners />
      <div className="relative px-4 md:pl-32 pt-8 md:pt-24 pb-40 z-20">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center pt-16 md:pt-8">
          <div className="flex flex-col gap-8  justify-center md:items-start md:w-1/2">
            <div className="flex flex-col gap-2 md:gap-4">
              <h2 className="text-[#024632] font-normal md:font-medium text-[24px] md:text-[32px] leading-[24px] md:leading-[40px] tracking-[0.15px] md:tracking-[0.2px]">
                Tudo o que você precisa
              </h2>

              <div className="text-[40px] md:text-[64px] font-semibold md:font-medium text-[#024632] leading-[40px] md:leading-[72px] tracking-[0.25px] md:tracking-[0.6%] w-full flex flex-col md:block">
                <span>para recrutar, </span>
                <span>gerir e evoluir </span>
                <span>seu time</span>
              </div>

              <div className="relative z-10">
                <Button
                  onClick={scrollToPlans}
                  className="relative mt-10 px-12 py-5 bg-[#F84001] text-white rounded-[8px] hover:bg-[#F4511E] transition-colors items-center w-[200px]"
                >
                  <span className="text-[20px] font-semibold leading-[16px] tracking-[0.1px] flex items-center justify-center">
                    Conheça
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
