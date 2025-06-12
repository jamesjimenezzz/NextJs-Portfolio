"use client"

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

const Marquee = () => {

const upperMarque = [
    { name: "Javascript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tanstack Query", logo: "https://images.seeklogo.com/logo-png/43/2/react-query-logo-png_seeklogo-435661.png" },
    { name: "Zustand", logo: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" },
    {name: "Framer Motion", logo: "https://images.seeklogo.com/logo-png/44/1/framer-motion-logo-png_seeklogo-446185.png" }
    
]

const lowerMarque = [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Github", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    {name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    {name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
]
  return (
   <div className='container mx-auto flex flex-col gap-10 '>
    <div className='flex gap-12 '>
    <motion.div initial={{x:0}} animate={{x: "-100%"}} transition={{duration: 30, repeat: Infinity, ease: "linear"}} className=' flex gap-12 flex-shrink-0    '>
    {upperMarque.map((logo, index) => {
        return (
            <div key={index} className='flex items-center cursor-pointer  mx-auto min-w-[120px] gap-2 group hover:scale-105 transition-transform duration-300'>
                <Image src={logo.logo} alt ={logo.name} className='w-12  h-10 object-contain grayscale opacity-70 group-hover:opacity-100 transition-all duration-300' />
                <span className='text-base font-[500] text-gray-600 group-hover:text-primary transition-all duration-300'>
                    {logo.name}
                </span>
            </div>
        )
    } )}
    </motion.div>
    <motion.div initial={{x:0}} animate={{x: "-100%"}} transition={{duration: 30, repeat: Infinity, ease: "linear"}} className=' flex gap-12 flex-shrink-0    '>
    {upperMarque.map((logo, index) => {
        return (
            <div key={index} className='flex items-center cursor-pointer  mx-auto min-w-[120px] gap-2 group hover:scale-105 transition-transform duration-300'>
                <Image src={logo.logo} alt ={logo.name} className='w-12  h-10 object-contain grayscale opacity-70 group-hover:opacity-100 transition-all duration-300' />
                <span className='text-base font-[500] text-gray-600 group-hover:text-primary transition-all duration-300'>
                    {logo.name}
                </span>
            </div>
        )
    } )}
    </motion.div>
    </div>
    
      <div className='flex-row-reverse flex  gap-12 '>
    <motion.div initial={{x:0}} animate={{x: "100%"}} transition={{duration: 35, repeat: Infinity, ease: "linear"}} className=' flex gap-12 flex-shrink-0   '>
    {lowerMarque.map((logo, index) => {
        return (
            <div key={index} className='flex items-center mx-auto min-w-[120px] gap-2 group cursor-pointer hover:scale-105 transition-transform duration-300'>
                <Image src={logo.logo} alt ={logo.name} className='w-12  h-10 object-contain grayscale opacity-70 group-hover:opacity-100 transition-all duration-300' />
                <span className='text-base font-[500] text-gray-600 group-hover:text-primary transition-all duration-300'>
                    {logo.name}
                </span>
            </div>
        )
    } )}
    </motion.div>
    <motion.div initial={{x:0}} animate={{x: "100%"}} transition={{duration: 35, repeat: Infinity, ease: "linear"}} className=' flex gap-12 flex-shrink-0   '>
    {lowerMarque.map((logo, index) => {
        return (
            <div key={index} className='flex items-center mx-auto min-w-[120px] gap-2 group cursor-pointer hover:scale-105 transition-transform duration-300'>
                <Image src={logo.logo} alt ={logo.name} className='w-12  h-10 object-contain grayscale opacity-70 group-hover:opacity-100 transition-all duration-300' />
                <span className='text-base font-[500] text-gray-600 group-hover:text-primary transition-all duration-300'>
                    {logo.name}
                </span>
            </div>
        )
    } )}
    </motion.div>
    </div>
   </div>
  )
}

export default Marquee