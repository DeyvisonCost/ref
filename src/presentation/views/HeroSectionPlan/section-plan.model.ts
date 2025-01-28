import { useState } from 'react'

import { useNotScroll } from '@/hooks/useNotScroll'
import { plans } from '@/presentation/views/HeroSectionPlan/plans'

export const useSectionPlanModel = () => {
  const { handleScroll, scrollContainerRef } = useNotScroll()

  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')
  const [selectedPlanPrice, setSelectedPlanPrice] = useState('')

  const handlePlanClick = (planName: string) => {
    const selectedPlanData = plans.find((p) => p.name === planName)
    setSelectedPlan(planName)

    if (selectedPlanData) {
      const price = selectedPlanData.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      })
      setSelectedPlanPrice(price)
    }

    setIsSheetOpen(true)
  }
  return {
    handlePlanClick,
    isSheetOpen,
    selectedPlan,
    handleScroll,
    scrollContainerRef,
    setIsSheetOpen,
    selectedPlanPrice,
  }
}
