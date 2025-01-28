import * as React from 'react'

import { useSectionPlanModel } from './section-plan.model'
import { SectionPlanView } from './section-plan.view'

export const SectionPlan = () => {
  const sectionPlanModel = useSectionPlanModel()

  return <SectionPlanView {...sectionPlanModel} />
}
