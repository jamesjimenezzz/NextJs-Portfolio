"use client"

import React from 'react'
import { PinContainer, PinPerspective } from '@/components/3d-pin'
import  capstone  from '@/public/capstone.png'
import Image from 'next/image'
import Project from './Project'
import tasktracker from '@/public/tasktracker.jpg'
import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react"
import { useRef } from "react"

const projectCards = () => {
   


const projects =[


    {
        title: 'Capstone Generator',
        description: 'This project uses AI integration that generates capstone project ideas based on selected filters like course, project type, and difficulty level. ',
        image: capstone,
        href: 'https://github.com/jamesjimenezzz',
        tech: ["Next.js", "Tailwind CSS",  "TypeScript",  "OpenAI API", "Supabase", "OAuth"]
    },
    {
        title: 'Quizlet Clone',
        description: 'The Quizlet Clone is a flashcard-based learning platform that allows users to create, view, and review study sets. ',
        image: capstone,
        href: 'https://github.com/jamesjimenezzz',
        tech: ["React", "Tailwind CSS",  "TypeScript", "Supabase"]
    },
    {
        title: 'TaskTracker',
        description: 'TaskTracker is a productivity tool that helps users manage daily tasks efficiently by setting due dates, editing tasks, and tracking progress. ',
        image: tasktracker,
        href: 'https://github.com/jamesjimenezzz',
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
    
]


  return (
    <div className='grid grid-cols-2 gap-60 mt-30 '>
        {projects.map((project) => {
            return <Project key={project.title} project={project} />
        })}

       
    </div>
  )
}

export default projectCards