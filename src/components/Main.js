import "../dist/css/Main.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    document.title = "Hem";
  }, []);
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
