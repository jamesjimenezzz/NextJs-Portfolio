import React from "react";
import james from "@/public/james.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col w-full mx-auto mt-30 mb-30">
      <h1 className="font-bold text-4xl text-center">ABOUT</h1>
      <div className="flex flex-col lg:flex-row justify-between gap-10 items-center w-full mt-10">
        <div className="lg:text-xl text-lg max-w-xl uppercase flex flex-col gap-5">
          <p>
            James is currently a 1st year student at the university of
            pangasinan who enjoys building purposeful web apps that solve real
            problems.
          </p>
          <p>
            He&apos;s into full-stack development and is currently exploring the
            intersection of AI and web technologies
          </p>
          <p>
            He enjoys learning new tools, writing clean and maintainable code,
            and turning ideas into polished products. Still figuring things out,
            but always building and having fun along the way.
          </p>
        </div>
        <div className="max-w-sm">
          <Image
            className="w-full object-cover h-full"
            alt="Picture of James Jimenez"
            width={1000}
            height={1000}
            src={james}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
