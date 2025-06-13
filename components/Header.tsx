import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './toggleTheme'

const Header = () => {
  return (
    <header className='flex justify-between items-center max-w-[1200px] sticky top-5  mx-auto border-b border-gray-200 py-3 px-5 z-999 bg-[rgba(243,244,246,0.4)] backdrop-blur-md backdrop-saturate-150 dark:bg-[rgba(243,244,246,0.1)] dark:border-stone-600  rounded-md'>
       <ul>
            <li>
                <p>James</p>
            </li>
        </ul>
        <ul className='flex gap-10 font-[500] text-gray-400 dark:text-stone-400  '>
        
            <li  className='hover:scale-105 dark:hover:text-white  hover:text-slate-600 cursor-pointer transition-all duration-300'>Home</li>
         
       
            <li className=' hover:scale-105 dark:hover:text-white hover:text-slate-600 cursor-pointer transition-all duration-300'>Tech</li>
        
         
            <li className=' hover:scale-105 dark:hover:text-white hover:text-slate-600 cursor-pointer transition-all duration-300'>Projects</li>
         
          
            <li className=' hover:scale-105 dark:hover:text-white hover:text-slate-600 cursor-pointer transition-all duration-300'>Contact</li>
        
        </ul>
        <ul>
            <li>
                <ModeToggle />
            </li>
        </ul>
    </header>
  )
}

export default Header