import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center max-w-[1200px] sticky top-8  mx-auto '>
        <ul className='flex gap-10 font-[500] text-muted-foreground  '>
            <li className='hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300'>Home</li>
            <li className=' hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300'>About</li>
            <li className=' hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300'>Contact</li>
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