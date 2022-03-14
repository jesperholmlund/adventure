import React from "react";
import "../dist/css/Main.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.5,
        duration: 2,
        type: "spring",
        bounce: 0.6,
        damping: 7,
        velocity: 2,
      }}
    >
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </motion.main>
  );
};

export default Main;
