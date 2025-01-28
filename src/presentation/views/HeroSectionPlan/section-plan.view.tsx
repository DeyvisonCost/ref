import React from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import IconArrowLeft from '@/icons/iconArrowLeft'
import IconArrowRight from '@/icons/iconArrowRigth'
import { CardFeature } from '@/presentation/views/HeroSectionPlan/components/CardFeatures'
import { CardPrice } from '@/presentation/views/HeroSectionPlan/components/CardPrice'
import { SheetForm } from '@/presentation/views/HeroSectionPlan/components/SheetForm'
import { plans } from '@/presentation/views/HeroSectionPlan/plans'
import { useSectionPlanModel } from '@/presentation/views/HeroSectionPlan/section-plan.model'

export const SectionPlanView = ({
  handlePlanClick,
  isSheetOpen,
  selectedPlan,
  selectedPlanPrice,
  handleScroll,
  scrollContainerRef,
  setIsSheetOpen,
}: ReturnType<typeof useSectionPlanModel>) => {
  return (
    <div id="planos" className="flex flex-col  gap-6 pt-16 pb-[204px] px-2 md:pl-32 relative">
      <div className="flex justify-center items-center ">
        <img
          src="/img/setas-grafis.svg"
          alt="Setas"
          className="md:hidden w-[320px] h-auto absolute bottom-100 right-40 opacity-30"
        />
        <img
          src="/img/lustre1.svg"
          alt="Lustre"
          className="w-[40px] md:w-[104px] h-auto absolute top-0 right-10 md:right-12 "
        />
        <div>
          <h2 className="text-[28px] md:text-[40px] leading-[28px] md:leading-[44px] font-semibold text-[#024632]">
            Nossos planos
          </h2>
          <img
            src="/img/linha-vermelha.svg"
            alt="Setas"
            className="w-[161px] md:w-[313px] h-[3.5px] md:h-[7px] absolute bottom-100 right-30"
          />
        </div>
      </div>

      <div
        className="flex flex-col md:flex md:flex-row overflow-x-auto gap-6 pb-4 hide-scroll md:mt-16 z-10 pt-2 px-1"
        ref={scrollContainerRef}
      >
        {plans.map((plan) => (
          <Card.Root
            key={plan.id}
            className="h-fit shrink-0 md:w-[382px] max-w-sm bg-green-360 rounded-[16px] p-6 gap-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
          >
            <Card.Header className="mb-6">
              <div className="flex items-center justify-center flex-col gap-4">
                <img src="/img/logo-plan.svg" alt="" className="w-[135px] h-[16px]" />
                <Card.Title className="text-white text-[40px] md:text-[48px] leading-[40px] md:leading-[48px] font-semibold text-center">
                  {plan.name}
                </Card.Title>
              </div>
            </Card.Header>

            <Card.Content className="mb-6 space-y-4">
              {plan.features.map((feature, index) => (
                <CardFeature key={index} feature={feature} />
              ))}
            </Card.Content>

            <Card.Footer>
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <CardPrice price={plan.price} period={plan.period} isPerUser={plan.isPerUser} />
                  <span className="text-[12px] font-medium leading-[18px] text-white">{plan.observation}</span>
                </div>
                <Button
                  className="w-full bg-orange-360 hover:bg-[#F84001]/90 transition-colors rounded-[8px] p-2 mt-6"
                  onClick={() => handlePlanClick(plan.name)}
                >
                  <span className="text-[20px] font-bold text-white">Quero este</span>
                </Button>
              </div>
            </Card.Footer>
          </Card.Root>
        ))}
      </div>

      <div className="hidden md:flex  justify-center items-center gap-4 mt-6 absolute bottom-36 right-64">
        <button
          onClick={() => handleScroll('left')}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-green-360 hover:opacity-80 transition-opacity"
        >
          <IconArrowLeft className="w-[24px] h-[24px] text-white" />
        </button>
        <button
          onClick={() => handleScroll('right')}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-green-360 hover:opacity-80 transition-opacity"
        >
          <IconArrowRight className="w-[24px] h-[24px] text-white" />
        </button>
      </div>

      <div>
        <img
          src="/img/setas-grafis.svg"
          alt="Setas"
          className="w-[320px] md:w-[614px] h-auto absolute bottom-1 md:top-80 right-40 md:left-0 opacity-50"
        />
        <img src="/img/lustre1.svg" alt="Lustre" className="md:hidden w-[44px] h-auto absolute bottom-48 right-10" />
        <img src="/img/sofa.svg" alt="Sofa" className="md:hidden w-[144px] h-[86px] absolute bottom-0 right-0" />
        <img
          src="/img/persona-cadeira.svg"
          alt="Cadeirante"
          className="w-[117px] md:w-[232px] h-[140px] md:h-[304px] absolute bottom-0 left-0 md:left-24"
        />
      </div>

      <SheetForm
        isOpen={isSheetOpen}
        onOpenChange={setIsSheetOpen}
        planName={selectedPlan}
        planPrice={selectedPlanPrice}
      />
    </div>
  )
}
