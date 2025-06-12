'use client'
import React from 'react'
import Introduction from './introduction'
import TechStack from './tech-stack'
import Recent from './recent'
import Squares from '@/components/blocks/Backgrounds/Squares/Squares'


const HomePage = () => {
  return (
    <div className='flex flex-col container overflow-hidden  max-w-[1400px] mx-auto justify-center items-center '>
   
      <Introduction />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
  <Squares borderColor="#f5f5f5" direction="diagonal" squareSize={40} speed={0.5} />
</div>
      <TechStack />
      <Recent />
    </div>
  )
}

export default HomePage