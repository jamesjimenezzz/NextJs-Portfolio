"use client"

import { Link } from 'react-scroll'
import React, { useState, useEffect } from 'react'
import { ModeToggle } from './toggleTheme'
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {

const [isOpen, setIsOpen] = useState(false)

useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isOpen]);

const navs = [
  {name: "Home", href:"home"},
  {name: "Tech", href:"tech"},
  {name: "Projects", href:"projects"},
 
]

if(isOpen) {
  return (
    <div className='fixed h-screen z-999  inset-0 bg-gray-100 dark:bg-stone-950'>
    <div className='flex flex-col items-center justify-center h-full  '>
      <Button className='fixed top-10 right-5 text-2xl text-black dark:text-white' variant={"ghost"} onClick={() => setIsOpen(false)}>CLOSE</Button>
     <ul>
      {navs.map((nav) => (
        <li  className='text-black dark:text-gray-200   uppercase font-semibold text-4xl cursor-pointer' key={nav.href} >
         <Link to={nav.href} smooth={true}   duration={500} offset={-100} className=' cursor-pointer transition-all duration-300' activeClass='text-black dark:text-white' onClick={() => setIsOpen(false)}>
         • {nav.name}
         </Link>
        </li>
      ) )}
     </ul>
    </div>
  </div>
  )
}

  return (
    <header className='flex justify-between items-center max-w-[1200px] sticky top-5  mx-auto border-b border-gray-200 py-3 px-5 z-999 bg-[rgba(243,244,246,0.4)] backdrop-blur-md backdrop-saturate-150 dark:bg-[rgba(243,244,246,0.1)] dark:border-stone-600  rounded-md'>
       <ul>
            <li>
                <p>James</p>
            </li>
        </ul>



        {/* desktop nav */}
        <ul className='hidden sm:flex gap-10 font-[500] text-gray-400 dark:text-stone-400  '>
        
           {navs.map((nav, index) => (
            <li key={index} className='hover:scale-105 dark:hover:text-white    hover:text-slate-600 '  >
              <Link to={nav.href} smooth={true}  spy spyThrottle={100}  duration={500} offset={-150} className=' cursor-pointer transition-all duration-300' activeClass='text-black dark:text-white bg-transparent text-shadow-sm   underline-offset-4  underline text-shadow-black/20 dark:text-shadow-white/70 dark:text-shadow-md  '>
              {nav.name}  
              </Link>
            </li>
         
       
           
           ))}
        
        </ul>




        <ul className='flex gap-2 items-center'>
        <li>
               <Button className='sm:hidden' onClick={() => setIsOpen(true)} variant="outline">
                <Menu />
               </Button>
            </li>
            <li>
                <ModeToggle />
            </li>
        </ul>
    </header>
  )
}

export default Header