import React, { useState } from "react";
import "../dist/css/Main.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { motion } from "framer-motion";

const Main = () => {
  const [btn, setBtn] = useState(true);
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1,
        duration: 2,
      }}
    >
      <About></About>
      <Contact></Contact>
      <Projects></Projects>
    </motion.main>
  );
};

export default Main;
