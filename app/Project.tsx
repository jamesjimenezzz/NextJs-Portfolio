import { PinContainer } from '@/components/3d-pin';
import Image from 'next/image'
import capstone from '@/public/capstone.png'
import { StaticImageData } from 'next/image'

interface ProjectProps {
    title: string;
    description: string;
    image: StaticImageData;
    href: string;
    tech: string[];
}

const Project = ({project}: {project: ProjectProps}) => {
  return (
   <>
   <PinContainer title={project.href} className='h-[31.5rem] w-xl'>
          <div className='text-white gap-5  flex flex-col items-center justify-center'>
           <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/10   font-semibold'>{project.title}</h1>
          
           <Image src={project.image} alt='capstone project' className='object-fill  max-w-lg h-[19.5rem]' />
           <p className='text-sm text-muted-foreground text-center  max-w-lg'>{project.description}</p>
           <div className='flex gap-2'>
            {project.tech.map((tech) => (
                <p key={tech} className='text-sm text-slate-300 bg-stone-900 px-2 py-1 rounded-md'>{tech}</p>
            ))}
           </div>
          </div>
        </PinContainer>
   </>
  ) 
}

export default Project