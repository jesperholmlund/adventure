import React from "react";
import Project from "./Project";
import "../dist/css/ProjectPage.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Projektlista";
  }, []);
  const projectList = [
    {
      name: "Kindle parser",
      gitHub: "link",
      demo: "parser",
      info: "HIghlights från kindle är i formatet csv. Att läsa en sån lista och leta etter något är tidskrävande och jobbigt. Detta projekt läser av csv-filen, skriver ut alla highlights i separata cards och därefter kan man söka efter keywords och filtrera bort cards som inte innehåller nyckelordet. Nyckelord markeras även i själva kortet",
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
      {" "}
      <div className="card">
        <h1 className="card-title" style={{ margin: "auto" }}>
          Projektlista
        </h1>
      </div>
      {projectList.map((p, i) => (
        <Project
          key={i}
          name={p.name}
          gitHub={p.gitHub}
          demo={p.demo}
          info={p.info}
        ></Project>
      ))}
    </motion.div>
  );
};

export default ProjectsPage;
