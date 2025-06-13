import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


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
   <a href={project.href} target='_blank'>
   <CardContainer  className="inter-var cursor-pointer">
      <CardBody className="bg-gray-100 relative group/card hover:shadow-xl hover:shadow-black dark:hover:shadow-2xl dark:hover:shadow-white/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-center w-full"
        >
         <p className=' dark:text-transparent  dark:from-white dark:to-white/10 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-t  from-black to-white '> {project.title}</p>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 text-center mx-auto w-full dark:text-neutral-300"
        >
          {project.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-sm group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
           
            className="px-4 py-2 flex flex-wrap gap-2 rounded-xl text-sm font-normal dark:text-white"
          >
            {project.tech.map((tech) => (
              <p key={tech} className=' dark:bg-stone-900 dark:text-gray-400 text-stone-600 px-2 py-1 rounded-md bg-stone-200'>{tech}</p>
            ))}
          </CardItem>
        
        </div>
      </CardBody>
    </CardContainer>
   </a>
   </>
  ) 
}

export default Project