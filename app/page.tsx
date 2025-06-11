import React from 'react'
import Introduction from './introduction'
import TechStack from './tech-stack'
import Recent from './recent'

const HomePage = () => {
  return (
    <div className='flex flex-col container overflow-hidden  max-w-[1400px] mx-auto justify-center items-center '>
      <Introduction />
      <TechStack />
      <Recent />
    </div>
  )
}

export default HomePage