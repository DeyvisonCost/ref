import * as React from 'react'

interface Feature {
  text: string
  highlight?: string
  suffix?: string
}

interface CardFeatureProps {
  feature: Feature | string
  className?: string
}

export const CardFeature = ({ feature, className = '' }: CardFeatureProps) => {
  return (
    <div className={`flex items-center gap-2 font-medium text-[16px] ${className}`}>
      <img src="/img/check_circle.svg" alt="" className="w-5 h-5" />
      <span className="text-white text-[16px] leading-[16px] md:text-[20px] md:leading-[20px] md:font-medium">
        {typeof feature === 'string' ? (
          feature
        ) : (
          <>
            {feature.text} {feature.highlight && <span className="text-[#F84001] font-bold">{feature.highlight}</span>}{' '}
            {feature.suffix}
          </>
        )}
      </span>
    </div>
  )
}
