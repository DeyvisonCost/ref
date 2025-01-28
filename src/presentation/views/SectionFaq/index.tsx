import React from 'react'

import { Accordion } from '@/components/Accordion/Accordion'
import { faqData } from '@/presentation/views/SectionFaq/function/faq'


export function SectionFaq() {
  return (
    <section className="pt-8 pb-[160px] px-4 bg-white relative ">
      <div className="container mx-auto md:w-[1000px]">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-center text-[28px] md:text-[40px] md:leading-[44px] font-bold md:font-semibold relative text-[#005E8B]">
            Faq
          </h2>
          <img src="/img/linha-azul.svg" alt="decoração" className="mx-auto w-[160px] md:w-[200px] md:h-[3px] mt-2" />
        </div>
        {faqData.map((item) => (
          <Accordion key={item.question} title={item.question} description={item.answer} />
        ))}
      </div>

      <img
        src="/img/predio.svg"
        alt="Predio"
        className="absolute bottom-0 left-0 md:-left-40 w-[180px] md:w-[402px] h-[144px] md:h-[307px]"
      />
      <img
        src="/img/persona-guia.svg"
        alt="Persona com guia"
        className="absolute bottom-0 right-0 w-[127px] md:w-[317px] h-[108px] md:h-[270px]"
      />
    </section>
  )
}
