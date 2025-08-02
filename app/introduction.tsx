import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";

const introduction = () => {
  return (
    <div className="text-center flex flex-col  h-screen  justify-center ">
      <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
        <h1 className=" hover:bg-black dark:hover:bg-white transition-all duration-500 bg-clip-text text-transparent  bg-gradient-to-r from-primary to-primary/40 md:text-[5rem] sm:text-[4.2rem]  text-[3.7rem] leading-15 sm:leading-none  font-bold ">
          James Jimenez
        </h1>
      </div>
      <div className="flex gap-2 sm:text-xl text-md md:text-2xl mb-5 text-center font-semibold justify-center text-muted-foreground">
        <p>17</p>
        <p>•</p>
        <p>Full Stack Developer</p>
      </div>
      <div className="mb-5 max-w-2xl">
        <p className="md:text-lg lg:text-xl text-md ">
          Crafting digital experiences with cutting-edge technologies.
          Passionate about creating scalable solutions that make a difference.
        </p>
      </div>
      <div className="flex gap-2 flex-col sm:flex-row items-center mx-auto w-1/2  justify-center">
        <Button className=" hover:scale-105 transition-all duration-100 bg-primary text-xs py-3 sm:py-5 flex-1/4  items-center justify-center text-center text-primary-foreground font-bold shadow-xs hover:bg-primary/90 ">
          <Mail className="mr-2" />
          <p className=" sm:block">Get in touch</p>
        </Button>
        <Button
          variant={"outline"}
          className=" cursor-pointer hover:scale-105 transition-all duration-400 font-semibold px-9 border-slate-700  py-3 sm:py-5 flex-1/12
         items-center justify-center text-center"
        >
          <Github className="mr-2" />
          <a
            href="https://github.com/jamesjimenezzz"
            target="_blank"
            className="cursor-pointer text-xs sm:text-sm"
          >
            Github
          </a>
        </Button>
      </div>
    </div>
  );
};

export default introduction;
