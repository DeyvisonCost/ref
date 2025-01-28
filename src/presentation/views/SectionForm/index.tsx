import * as React from 'react'

import { useSectionFormModel } from './sectionForm.model'
import { SectionFormView } from './sectionForm.view'

export const SectionForm = () => {
  const sectionFormModel = useSectionFormModel()

  return <SectionFormView {...sectionFormModel} />
}
