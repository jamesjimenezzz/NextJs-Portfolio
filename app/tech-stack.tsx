import React from 'react'
import Marquee from './marquee'
import { ArrowRight } from 'lucide-react'

const TechStack = () => {
  return (
    <div className='mx-auto flex flex-col gap-5 mb-50 container'>
      <div className='flex justify-between items-center'>
      <h1 className='text-4xl font-bold '>Tech Stack</h1>
      <p className='text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 flex items-center gap-2'>See all <ArrowRight className='w-4 h-4' /></p>
      </div>
        <Marquee />
    </div>
  )
}

export default TechStack