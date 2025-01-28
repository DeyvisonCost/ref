import { useRef } from 'react'

export const useNotScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) {return}

    const scrollAmount = 240 + 16
    const newScrollPosition =
      scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)

    scrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    })
  }

  return { handleScroll, scrollContainerRef }
}
