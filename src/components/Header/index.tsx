import React, { FC, useEffect, useState } from 'react'

import IconMenu from '@/icons/iconMenu'
import { getEnv } from '@/utils'

export const Header: FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)

  const handleLogin = () => {
    const url360 = getEnv('VITE_URL_360')
    window.open(`${url360}`, '_blank')
  }

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`sticky top-0 z-30 transition-all duration-300 ${
        showMenu ? 'bg-white' : isScrolled ? 'bg-white/80 backdrop-blur-sm' : 'bg-white'
      }`}
    >
      <header
        className={`py-3.5 px-6 md:px-20 flex justify-between items-center transition-all duration-300 ${
          showMenu ? 'bg-white' : isScrolled ? 'bg-transparent' : 'bg-white'
        }`}
      >
        <img src="img/logo-360.svg" alt="Logo" className="w-32 h-9 sm:w-40 sm:h-10 md:w-40 md:h-10" />
        <div>
          <button onClick={handleLogin} className="hidden md:block bg-[#F84001] text-white px-12 py-2 rounded-[8px]">
            Login
          </button>
          <button className="block md:hidden p-2" onClick={toggleMenu} aria-label="Menu" type="button">
            <IconMenu />
          </button>
        </div>
      </header>

      {showMenu && (
        <div className="text-start lg:hidden absolute bg-white w-full shadow-lg">
          <div className="w-10/12 mx-auto py-2">
            <button onClick={handleLogin} className="w-full bg-[#F84001] text-white py-2 rounded-[8px] mt-8 mb-8">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
