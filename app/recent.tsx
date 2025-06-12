import React from 'react'
import ProjectCards from './projectCards'

const Recent = () => {
  return (
    <div className=' mx-auto flex flex-col mb-50'>
        <p className='text-4xl text-center font-bold'>Recent Projects</p>
        <ProjectCards />
      
    </div>
  )
}

export default Recent