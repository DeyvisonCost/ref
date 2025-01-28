import React, { FC } from 'react'

interface IconAddProps {
  className?: string
}

const IconAdd: FC<IconAddProps> = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.25 5.25V0.75H6.75V5.25H11.25V6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25Z" fill="#868C98" />
    </svg>
  )
}

export default IconAdd
