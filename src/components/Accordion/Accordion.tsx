import React from 'react'

import IconAdd from '@/icons/iconAdd'
import IconMinus from '@/icons/iconMinus'
import { useAccordion } from '@/presentation/views/SectionFaq/useAccordion'

export type AccordionShape = {
  title: string
  description: string
}

export const Accordion = ({ title, description }: AccordionShape) => {
  const { toggle, isOpen } = useAccordion()
  return (
    <div className={'overflow-y-auto p-3 rounded-xl mb-4 ' + (isOpen ? 'bg-gray-100' : 'border bg-white')}>
      <div className="flex justify-between items-center cursor-pointer " onClick={toggle}>
        <p className="text-lg font-medium">{title}</p>
        {isOpen ? <IconMinus className="text-gray-400 w-4 h-4" /> : <IconAdd className="text-gray-400 w-4 h-4" />}
      </div>
      <div
        className={
          (isOpen ? 'max-h-fit ' : 'max-h-0  ') +
          'overflow-hidden transition-all delay-75 ease-in-out duration-500 text-lg font-normal text-gray-500'
        }
      >
        <p className="mt-3 customCss" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  )
}
