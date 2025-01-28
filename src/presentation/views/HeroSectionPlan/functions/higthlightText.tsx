import * as React from 'react'

export const highlightText = (text: string, highlightWords: string[]) => {
  let result = text

  highlightWords.forEach((word) => {
    const index = result.toLowerCase().indexOf(word.toLowerCase())
    if (index !== -1) {
      const matchedWord = result.slice(index, index + word.length)

      result =
        result.slice(0, index) +
        `<span class="text-[#F84001] font-bold">${matchedWord}</span>` +
        result.slice(index + word.length)
    }
  })

  return <span dangerouslySetInnerHTML={{ __html: result }} />
}
