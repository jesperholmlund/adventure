import React from "react";
import Project from "./Project";
import "../dist/css/ProjectPage.css";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const projectList = [
    {
      name: "Kindle parser",
      gitHub: "link",
      demo: "link",
    },
    {
      name: "Hockey app",
      gitHub: "link",
      demo: "link",
    },
    {
      name: "React blog",
      gitHub: "link",
      demo: "link",
    },
  ];

  return (
    <motion.div
      id="project-list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1,
        duration: 2,
      }}
    >
      {projectList.map((p) => (
        <Project name={p.name} gitHub={p.gitHub} demo={p.demo}></Project>
      ))}
    </motion.div>
  );
};

export default ProjectsPage;