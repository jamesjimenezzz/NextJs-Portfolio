"use client";
import React, { useEffect, useState } from "react";
import Introduction from "./introduction";
import TechStack from "./tech-stack";
import Recent from "./recent";
import Footer from "./Footer";
import Header from "@/components/Header";
import Chatbox from "@/components/Chatbox";
import { motion } from "motion/react";
import About from "./About";
import Squares from "@/components/blocks/Backgrounds/Squares/Squares";
import { useTheme } from "next-themes";

const HomePage = () => {
  const [mounted, setIsMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const actualTheme = theme === "system" ? resolvedTheme : theme;

  if (!mounted || !actualTheme) return null;

  return (
    <>
      <Header />
      <div className="flex flex-col container overflow-hidden max-w-[1400px] mx-auto justify-center items-center">
        {/* background */}

        <div className="fixed inset-0 -z-10 transition-all duration-400">
          <Squares
            borderColor="#F4F4F4 dark:#141414"
            direction="diagonal"
            squareSize={40}
            speed={0.3}
          />
        </div>

        {/* ===== sections with IDs ===== */}
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Introduction />
        </motion.section>

        <motion.section
          className="container "
          id="tech"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TechStack />
        </motion.section>

        <motion.section
          className=""
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Recent />
        </motion.section>

        <motion.section
          className=""
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.section>

        <Footer />
      </div>

      <Chatbox />
    </>
  );
};

export default HomePage;
