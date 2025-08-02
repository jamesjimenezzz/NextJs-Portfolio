import React from "react";
import capstone from "@/public/capstone.png";
import Project from "./Project";
import quizlet from "@/public/quizlet.png";
import reviewmydorm from "@/public/reviewmydorm.png";
import behindtheclaim from "@/public/behindtheclaim.png";

const projectCards = () => {
  const projects = [
    {
      title: "Behind the Claim",
      description:
        "An AI-powered fake news verifier inspired by the OpenGov Hackathon 2025. It helps fight misinformation by analyzing text, images, or PDFs using RAG, returning source-based results with no hallucinations.  ",
      image: behindtheclaim,
      href: "https://github.com/jamesjimenezzz",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Python",
        "FastAPI",
        "Langchain",
      ],
    },
    {
      title: "ReviewMyDorm",
      description:
        "A fullstack platform for reviewing PH dorms. It verifies users via school email domains to ensure trusted feedback, and includes an admin dashboard for moderation.",
      image: reviewmydorm,
      href: "https://github.com/jamesjimenezzz",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Cloudinary",
        "Clerk",
      ],
    },
    {
      title: "Capstone Generator",
      description:
        "This project uses AI integration that generates capstone project ideas based on selected filters like course, project type, and difficulty level. ",
      image: capstone,
      href: "https://github.com/jamesjimenezzz",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "OpenAI API",
        "Supabase",
        "OAuth",
      ],
    },
    {
      title: "Quizlet Clone",
      description:
        "The Quizlet Clone is a flashcard-based learning platform that allows users to create, view, and review study sets. ",
      image: quizlet,
      href: "https://github.com/jamesjimenezzz",
      tech: ["React", "Tailwind CSS", "TypeScript", "Supabase"],
    },
  ];

  return (
    <div className="grid xl:grid-cols-2 lg:gap-5 lg:grid-cols-2  gap-15 mt-10">
      {projects.map((project, index) => {
        return (
          <div key={index} className={`${index % 2 ? "xl:mt-20 " : ""}`}>
            <Project project={project} />
          </div>
        );
      })}
    </div>
  );
};

export default projectCards;
