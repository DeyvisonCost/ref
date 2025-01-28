import React, { FC } from 'react'

interface IconMenuProps {
  className?: string
}

const IconMenu: FC<IconMenuProps> = ({ className }) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 71 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.48438 53.5762H62.2122V47.7176H9.48438V53.5762ZM9.48438 38.9296H62.2122V33.0709H9.48438V38.9296ZM9.48438 18.4243V24.283H62.2122V18.4243H9.48438Z"
        fill="#F84001"
      />
    </svg>
  )
}

export default IconMenu
