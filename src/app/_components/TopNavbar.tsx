'use client'
import { useState } from 'react'

export function TopNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={'flex flex-row w-full justify-between'}>
      <div className={'text-2xl font-bold p-4'}>TailwindCSS</div>
      <div className={'relative'}>
        <button className={'p-4 lg:hidden'} onClick={toggleMenu}>
          ...
        </button>
        <ul
          className={`flex space-x-4 p-4 lg:hidden bg-viki-blue-900 ${isOpen ? 'flex-col absolute right-0 bottom-0 transform translate-y-full' : 'hidden'}`}
        >
          <li>Slides</li>
          <li>Docs</li>
        </ul>
      </div>
    </div>
  )
}
