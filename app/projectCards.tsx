

import React from 'react'
import  capstone  from '@/public/capstone.png'
import Project from './Project'
import quizlet from '@/public/quizlet.png'


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
        image: quizlet,
        href: 'https://github.com/jamesjimenezzz',
        tech: ["React", "Tailwind CSS",  "TypeScript", "Supabase"]
    },
   
    
]                                                                                               


  return (
    <div className='grid xl:grid-cols-2 lg:gap-5 lg:grid-cols-1  gap-10 mt-10'>
        {projects.map((project, index) => {
            return (
                <div key={index} className={`${index === 1 ? 'xl:mt-20 ' : ''}`}>
                    <Project project={project} />
                </div>
            )
        })}

       
    </div>
  )
}

export default projectCards