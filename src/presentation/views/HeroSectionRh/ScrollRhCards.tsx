import * as React from 'react'

import { Card } from '@/components/Card'
import { cards } from '@/presentation/views/HeroSectionRh/cards'

export const ScrollRhCards = React.forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="relative overflow-x-auto px-4 hide-scroll">
      <div className="flex gap-4 pt-2 px-1">
        {cards.map((card) => (
          <Card.Root
            key={card.id}
            className="flex-shrink-0 w-[240px] h-[252px] rounded-[24px] border-[4px] border-[#F84001] p-4 bg-[rgba(248,224,197,0.6)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
          >
            <Card.Header className="flex justify-center items-center mb-4">
              {card.icon ? <img src={card.icon} alt="" className="w-[40px] h-[40px] object-contain" /> : card.icon}
            </Card.Header>

            <Card.Content className="flex flex-col items-center gap-4">
              <Card.Title className="text-[18px] font-semibold text-center text-[#FFFFFF]">{card.title}</Card.Title>
              <p className="text-[14px] text-center text-[#FFFFFF] mt-2">{card.description}</p>
            </Card.Content>
          </Card.Root>
        ))}
      </div>
    </div>
  )
})

ScrollRhCards.displayName = 'ScrollRhCards'
