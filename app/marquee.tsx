"use client"

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import tanstack from "@/public/tanstack.png"
import framer from "@/public/framer.png"
import javascript from "@/public/javascript.png"
import react from "@/public/react.png"
import nextjs from "@/public/nextjs.png"
import tailwind from "@/public/tailwindcss.png"
import typescript from "@/public/typescript.png"
import zustand from "@/public/zustand.png"
import nodejs from "@/public/nodejs.png"
import git from "@/public/git.png"
import express from "@/public/express.png"
import supabase from "@/public/supabase.png"
import postgresql from "@/public/postgres.png"
import php from "@/public/phplogo.svg"
import postman from "@/public/postman.png"
import github from "@/public/github.png"

const Marquee = () => {

const upperMarque = [
    { name: "Javascript", logo: javascript },
    { name: "React", logo: react },
    { name: "Next.js", logo: nextjs },
    { name: "Tailwind CSS", logo: tailwind },
    { name: "TypeScript", logo: typescript },
    { name: "Tanstack Query", logo: tanstack },
    { name: "Zustand", logo: zustand },
    {name: "Framer Motion", logo: framer }
    
]

const lowerMarque = [
    { name: "Node.js", logo: nodejs },
    { name: "Express", logo: express },
    { name: "Supabase", logo: supabase },
    { name: "PostgreSQL", logo: postgresql },
    { name: "Git", logo: git },
    { name: "Github", logo: github },
    {name: "PHP", logo: php },
    {name: "Postman", logo: postman },
]
  return (
   <div className='container mx-auto flex flex-col gap-10 '>
    <div className='flex gap-12 '>
    <motion.div initial={{x:0}} animate={{x: "-100%"}} transition={{duration: 30, repeat: Infinity, ease: "linear"}} className=' flex gap-12 flex-shrink-0    '>
    {upperMarque.map((logo, index) => {
        return (
            <div key={index} className='flex items-center cursor-pointer  mx-auto min-w-[120px] gap-2 group hover:scale-105 transition-transform duration-300'>
                <Image
                    src={logo.logo}
                    alt={logo.name}
                    width={48}
                    height={40}
                    className={`sm:w-12 sm:h-10 w-10 h-8  object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${index === 2 ? "dark:invert" : ""}`}
                />
                <span className='sm:text-base text-sm font-[500] dark:text-gray-300 text-gray-600 group-hover:text-primary transition-all duration-300 dark:group-hover:text-primary'>
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
                <Image
                    src={logo.logo}
                    alt={logo.name}
                    width={48}
                    height={40}
                    className={`sm:w-12 sm:h-10 w-10 h-8  object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${index === 2 ? "dark:invert" : ""}`}
                />
                <span className='sm:text-base text-sm font-[500] dark:text-gray-300 text-gray-600 group-hover:text-primary transition-all duration-300 dark:group-hover:text-primary'>
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
                <Image
                    src={logo.logo}
                    alt={logo.name}
                    width={48}
                    height={40}
                    className={`sm:w-12 sm:h-10 w-10 h-8 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${index===5 ? "dark:invert-50" : ""}`}
                />
                <span className={`sm:text-base text-sm font-[500] dark:text-gray-300 text-gray-600 group-hover:text-primary transition-all duration-300 dark:group-hover:text-primary `}>
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
                <Image
                    src={logo.logo}
                    alt={logo.name}
                    width={48}
                    height={40}
                    className={`sm:w-12 sm:h-10 w-10 h-8 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:opacity-100 ${index===5 ? "dark:invert-50" : ""}`}
                />
                <span className={`sm:text-base text-sm font-[500] dark:text-gray-300 text-gray-600 group-hover:text-primary transition-all duration-300 dark:group-hover:text-primary `}>
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