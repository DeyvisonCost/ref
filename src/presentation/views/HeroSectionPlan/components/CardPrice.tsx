import * as React from 'react'

type CardPriceProps = {
  price: number
  period: string
  className?: string
  isPerUser?: boolean
}

export const CardPrice = ({ price, period, isPerUser = false, className = '' }: CardPriceProps) => {
  return (
    <div className={`flex items-baseline mt-4 ${className}`}>
      <span
        className={`
        ${
          price === 0
            ? 'text-[32px] leading-[48px] font-[700] tracking-[-0.6%]'
            : 'text-[32px] md:text-[56px] md:leading-[84px] font-semibold md:font-medium'
        } 
        text-white
      `}
      >
        {price === 0 ? 'GRATUITO' : `R$${price.toFixed(2)}`}
      </span>
      <span
        className={`
        ml-1 text-white
        ${isPerUser ? 'text-[16px] leading-[24px]' : 'text-[24px] leading-[36px] tracking-[-0.6%] font-[500]'}
      `}
      >
        {price !== 0 ? period : ''}
      </span>
    </div>
  )
}
