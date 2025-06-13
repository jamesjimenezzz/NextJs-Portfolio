import React from 'react'
import Marquee from './marquee'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const TechStack = () => {
  return (
    <div className='mx-auto flex flex-col gap-5 mb-50 '>
      <div className='flex justify-between sm:px-5 px-0 items-center '>
      <h1 className='text-4xl font-bold '>Tech Stack</h1>
     <Link href='/tech-stack'>
      <p className='text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 flex items-center gap-2'>See all <ArrowRight className='w-4 h-4' /></p></Link>
      </div>
      <div className=''>
        <Marquee />
    </div>
    </div>
  )
}

export default TechStack