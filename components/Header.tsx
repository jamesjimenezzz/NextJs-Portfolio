import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center max-w-[1200px] sticky top-5  mx-auto border-b border-gray-200 py-3 px-5 z-999 bg-gradient-to-tl from-white to-gray-800 rounded-md'>
        <ul className='flex gap-10 font-[500] text-gray-300  '>
            <li className='hover:scale-105 hover:text-white cursor-pointer transition-all duration-300'>Home</li>
            <li className=' hover:scale-105 hover:text-white cursor-pointer transition-all duration-300'>About</li>
            <li className=' hover:scale-105 hover:text-white cursor-pointer transition-all duration-300'>Projects</li>
            <li className=' hover:scale-105 hover:text-white cursor-pointer transition-all duration-300'>Contact</li>
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