
import React from 'react'
import {Button} from '@/components/ui/button'
import { Mail } from 'lucide-react';
import { Github } from 'lucide-react';


const introduction = () => {
  return (
    <div className='text-center flex flex-col  h-screen  justify-center '>
       <div className='hover:scale-105 transition-transform duration-300 cursor-pointer'>
        <h1 className=' hover:bg-gradient-to-t transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/40 text-[5rem] font-bold '>James Jimenez</h1>
       </div>
       <div className='flex gap-2 text-2xl mb-5 text-center font-semibold justify-center text-muted-foreground'>
        <p>17</p>
        <p>•</p>
        <p>Full Stack Developer</p>
        <p>•</p>
        <p>Philippines</p>
       </div>
       <div className='mb-5 max-w-2xl'>
        <p className='text-xl '>
        Crafting digital experiences with cutting-edge technologies. Passionate about creating scalable solutions that make a difference.
        </p>
       </div>
       <div className='flex gap-2 justify-center'>
       
        <Button className=' hover:scale-105 transition-transform duration-300 bg-primary w-1/4 py-5  flex  items-center justify-center text-center text-primary-foreground font-bold shadow-xs hover:bg-primary/90 '>
            <Mail className='mr-2' />
            Get in touch
        </Button>
        <Button variant={'outline'} className=' hover:scale-105 transition-transform duration-300 font-semibold px-9 border-slate-700 w-1/4 py-5 flex items-center justify-center text-center'>
            <Github className='mr-2' />
            Github
        </Button>
       </div>
        </div>
  )
}

export default introduction