import React from "react";
import ProjectCards from "./projectCards";

const Recent = () => {
  return (
    <div className=" mx-auto flex flex-col ">
      <p className="text-4xl text-center font-bold">RECENT PROJECTS (4)</p>
      <ProjectCards />
    </div>
  );
};

export default Recent;
