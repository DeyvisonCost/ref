import React, { FC } from 'react'

interface IconMinusProps {
  className?: string
}

const IconMinus: FC<IconMinusProps> = ({ className }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0.75 5.25H11.25V6.75H0.75V5.25Z" fill="#868C98" />
    </svg>
  )
}

export default IconMinus
