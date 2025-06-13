import React from 'react'
import Introduction from './introduction'
import TechStack from './tech-stack'
import Recent from './recent'
import Squares from '@/components/blocks/Backgrounds/Squares/Squares'
import Footer from './Footer'
import Header from '@/components/Header'

const HomePage = () => {
  return (
    
    <>
    <Header />
    <div className="flex flex-col container overflow-hidden max-w-[1400px] mx-auto justify-center items-center">
    {/* background */}
    <div className="fixed inset-0 -z-10">
      <Squares
        borderColor="#f2f2f2 dark:#141414"
        direction="diagonal"
        squareSize={40}
        speed={0.3}
      />
    </div>

    

    {/* ===== sections with IDs ===== */}
    <section id="home">
      <Introduction />
    </section>

    <section className='container ' id="tech">
      <TechStack />
    </section>

    <section className='' id="projects">
      <Recent />
    </section>

    <Footer />
  </div>
  </>
  )
  
}

export default HomePage