import React from 'react'

const TechStack = () => {

  const frontend = [
    "HTML", 
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion"
  ]

  const backend = [
    "Node.js",
    "Express",
    "MySQL",
    "PostgreSQL",
    "Supabase",
    "PHP",
    
  ]

  const devops = [
    "Vercel"
  ]

  const devtools  = [
    "Git",
    "GitHub",
    "Postman",
    "Tanstack Query",
    "Zustand"
   
  ]


  return (
    <div className='max-w-[1200px]  mt-10   flex flex-col mx-auto max-h-screen'>
     <h1 className='text-4xl font-bold'>Tech Stack</h1>
     <div className='flex flex-col gap-2 mt-5'>
      <h2 className='text-xl font-bold'>Frontend</h2>
      <div className='flex flex-wrap gap-2'>
        {frontend.map((tech) => (
          <div key={tech} className='border text-sm rounded-md py-1.5 px-2.5'>{tech}</div>
        ))}
      </div>
     </div>
     <div className='flex flex-col gap-2 mt-5'>
      <h2 className='text-xl font-bold'>Backend</h2>
      <div className='flex flex-wrap gap-2'>
        {backend.map((tech) => (
          <div key={tech} className='border text-sm rounded-md py-1.5 px-2.5'>{tech}</div>
        ))}
      </div>
     </div>
     <div className='flex flex-col gap-2 mt-5'>
      <h2 className='text-xl font-bold'>DevOps & Cloud</h2>
      <div className='flex flex-wrap gap-2'>
        {devops.map((tech) => (
          <div key={tech} className='border text-sm rounded-md py-1.5 px-2.5'>{tech}</div>
        ))}
      </div>
     </div>
     <div className='flex flex-col gap-2 mt-5'>
      <h2 className='text-xl font-bold'>DevTools</h2>
      <div className='flex flex-wrap gap-2'>
        {devtools.map((tech) => (
          <div key={tech} className='border text-sm rounded-md py-1.5 px-2.5'>{tech}</div>
        ))}
      </div>
     </div>
    </div>
  )
}

export default  TechStack