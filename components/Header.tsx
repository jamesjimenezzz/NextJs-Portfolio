import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center max-w-[1200px] sticky top-5  mx-auto border-b border-gray-200 py-3 px-5 z-999 bg-[rgba(243,244,246,0.4)] backdrop-blur-md backdrop-saturate-150   rounded-md'>
        <ul className='flex gap-10 font-[500] text-gray-400  '>
          <Link href='/'>
            <li className='hover:scale-105  hover:text-slate-600 cursor-pointer transition-all duration-300'>Home</li>
          </Link>
          <Link href='/about'>
            <li className=' hover:scale-105 hover:text-slate-600 cursor-pointer transition-all duration-300'>About</li>
          </Link>
          <Link href='/projects'>
            <li className=' hover:scale-105 hover:text-slate-600 cursor-pointer transition-all duration-300'>Projects</li>
          </Link>
          <Link href='/contact'>
            <li className=' hover:scale-105 hover:text-slate-600 cursor-pointer transition-all duration-300'>Contact</li>
          </Link>
        </ul>
        <ul>
            <li>
                Icon
            </li>
        </ul>
    </header>
  )
}

export default Header