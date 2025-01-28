import React, { FC } from 'react'

interface IconArrowLeftProps {
  className?: string
}

const IconArrowLeft: FC<IconArrowLeftProps> = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="16" fill="white" />
      <path
        d="M20.3309 9.4593L13.7902 16L20.3309 22.5408C20.3798 22.5896 20.4225 22.6422 20.4591 22.6976C20.7154 23.0858 20.6726 23.6133 20.3309 23.955C19.9404 24.3455 19.3073 24.3455 18.9167 23.955L11.6689 16.7071C11.4813 16.5196 11.376 16.2653 11.376 16C11.376 15.7348 11.4813 15.4805 11.6689 15.2929L18.9167 8.04509C19.3073 7.65457 19.9404 7.65457 20.3309 8.04509C20.7215 8.43561 20.7215 9.06878 20.3309 9.4593Z"
        fill="#F84001"
      />
    </svg>
  )
}

export default IconArrowLeft
